import { currentHongKongDate, escapeHtml } from "./utils.js";

const resultLimit = 14;
let activeResult = 0;

function ensureStylesheet() {
  if (document.querySelector("link[data-command-styles]")) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = new URL("./commands.css", import.meta.url).href;
  link.dataset.commandStyles = "true";
  document.head.append(link);
}

function searchableText(...values) {
  return values.flat(Infinity).filter(Boolean).join(" ").toLowerCase();
}

function searchRecords(state, rawQuery) {
  const query = rawQuery.trim().toLowerCase();
  if (!query) return [];
  const results = [];
  const add = (record, haystack) => {
    const text = searchableText(haystack);
    const index = text.indexOf(query);
    if (index < 0) return;
    results.push({ ...record, score: index + (text.startsWith(query) ? -20 : 0) });
  };

  for (const application of state.applications || []) {
    add({
      type: "申请",
      title: `${application.company} · ${application.role || application.division || "Programme"}`,
      meta: `${application.division || "Programme 未标明"} · ${application.status || "状态未记录"}`,
      route: "applications",
      params: { application: application.id }
    }, [application.company, application.role, application.division, application.location, application.status, application.ref]);
  }

  for (const task of state.tasks || []) {
    add({
      type: "任务",
      title: task.title || "未命名任务",
      meta: `${task.date || "未设日期"} · ${task.done ? "已完成" : task.closed ? "已结束" : "未完成"}`,
      route: "calendar",
      params: { date: task.date }
    }, [task.title, task.shortTitle, task.note, task.category, task.date]);
  }

  for (const question of state.questions || []) {
    add({
      type: "题目",
      title: question.question,
      meta: `${question.category || "未分类"} · ${(question.banks || []).slice(0, 3).join(" · ") || "通用"}`,
      route: "interview",
      params: { question: question.id }
    }, [question.question, question.category, question.banks, question.divisions, (question.variants || []).map(item => item.question)]);
  }

  for (const experience of state.experiences || []) {
    const bulletText = (experience.projects || []).flatMap(project => [project.name, ...(project.bullets || []).flatMap(bullet => [bullet.text, bullet.en, bullet.zh])]);
    add({
      type: "经历",
      title: `${experience.company} · ${experience.role}`,
      meta: `${(experience.projects || []).length} 个项目 · ${(experience.followups || []).length} 个 follow-up`,
      route: "resume",
      params: { experience: experience.id }
    }, [experience.company, experience.role, experience.date, bulletText]);
  }

  return results.sort((a, b) => a.score - b.score || a.type.localeCompare(b.type) || a.title.localeCompare(b.title)).slice(0, resultLimit);
}

function renderResults(panel, results, query) {
  activeResult = 0;
  panel.innerHTML = results.length
    ? `<div class="command-results-head"><strong>搜索结果</strong><span>${results.length} 项</span></div>${results.map((result, index) => `<button class="command-result ${index === 0 ? "active" : ""}" type="button" data-command-result="${index}"><span class="command-result-type">${escapeHtml(result.type)}</span><span><strong>${escapeHtml(result.title)}</strong><small>${escapeHtml(result.meta)}</small></span><span class="command-result-arrow">›</span></button>`).join("")}`
    : `<div class="command-empty"><strong>没有找到“${escapeHtml(query)}”</strong><span>可搜索公司、programme、任务、题目、经历或 bullet。</span></div>`;
}

function setActiveResult(panel, nextIndex) {
  const buttons = [...panel.querySelectorAll("[data-command-result]")];
  if (!buttons.length) return;
  activeResult = (nextIndex + buttons.length) % buttons.length;
  buttons.forEach((button, index) => button.classList.toggle("active", index === activeResult));
  buttons[activeResult].scrollIntoView({ block: "nearest" });
}

function showToast(toast, message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("show"), 2400);
}

export function setupCommandCenter({ navigate }) {
  const input = document.getElementById("global-search");
  const addButton = document.getElementById("add-record");
  if (!input || !addButton || input.dataset.commandReady === "true") return;

  ensureStylesheet();
  input.dataset.commandReady = "true";
  input.setAttribute("autocomplete", "off");
  input.setAttribute("aria-expanded", "false");
  input.setAttribute("aria-controls", "global-search-results");

  const panel = document.createElement("div");
  panel.id = "global-search-results";
  panel.className = "command-panel";
  panel.setAttribute("role", "listbox");
  panel.hidden = true;
  document.body.append(panel);

  const dialog = document.createElement("dialog");
  dialog.id = "manual-task-dialog";
  dialog.innerHTML = `<form id="manual-task-form"><div class="dialog-header"><div><h2>新增手动任务</h2><p>只写入本地 Task，不会创建申请或修改 Outlook 同步记录。</p></div><button class="icon-button" type="button" data-close-task title="关闭">×</button></div><div class="form-grid"><label class="span-2">任务名称<input name="title" required maxlength="120" placeholder="例如：整理 Jefferies Why Bank"></label><label>日期<input name="date" type="date" required value="${currentHongKongDate()}"></label><label>时间<input name="time" type="time"></label><label>分类<select name="category"><option value="Task">普通任务</option><option value="Interview">面试</option><option value="Resume">简历</option><option value="Project">项目</option><option value="Application">申请</option><option value="Behavioural">行为面</option></select></label><label>状态<select name="done"><option value="false">未完成</option><option value="true">已完成</option></select></label><label class="span-2">备注<textarea name="note" maxlength="400" placeholder="来源、下一步或需要确认的内容"></textarea></label></div><div class="dialog-actions"><button class="button secondary" type="button" data-close-task>取消</button><button class="button primary" type="submit">加入日历</button></div></form>`;
  document.body.append(dialog);

  const toast = document.createElement("div");
  toast.id = "toast";
  toast.setAttribute("role", "status");
  toast.setAttribute("aria-live", "polite");
  document.body.append(toast);

  let results = [];
  const closeSearch = () => {
    panel.hidden = true;
    input.setAttribute("aria-expanded", "false");
  };
  const openResult = index => {
    const result = results[index];
    if (!result) return;
    input.value = "";
    closeSearch();
    navigate(result.route, { params: result.params });
  };
  const updateResults = () => {
    const query = input.value.trim();
    if (!query) { closeSearch(); return; }
    results = searchRecords(window.BBStore.getSnapshot(), query);
    renderResults(panel, results, query);
    const anchor = input.closest(".search-field")?.getBoundingClientRect();
    if (anchor) {
      const width = Math.min(520, window.innerWidth - 24);
      panel.style.width = `${width}px`;
      panel.style.left = `${Math.max(12, Math.min(anchor.left, window.innerWidth - width - 12))}px`;
      panel.style.top = `${anchor.bottom + 8}px`;
    }
    panel.hidden = false;
    input.setAttribute("aria-expanded", "true");
  };

  input.addEventListener("input", updateResults);
  input.addEventListener("focus", updateResults);
  input.addEventListener("keydown", event => {
    if (event.key === "ArrowDown") { event.preventDefault(); setActiveResult(panel, activeResult + 1); }
    if (event.key === "ArrowUp") { event.preventDefault(); setActiveResult(panel, activeResult - 1); }
    if (event.key === "Enter" && !panel.hidden) { event.preventDefault(); openResult(activeResult); }
    if (event.key === "Escape") closeSearch();
  });
  window.addEventListener("resize", () => { if (!panel.hidden) updateResults(); });
  panel.addEventListener("mousemove", event => {
    const button = event.target.closest("[data-command-result]");
    if (button) setActiveResult(panel, Number(button.dataset.commandResult));
  });
  panel.addEventListener("click", event => {
    const button = event.target.closest("[data-command-result]");
    if (button) openResult(Number(button.dataset.commandResult));
  });
  document.addEventListener("click", event => {
    if (event.target !== input && !event.target.closest(".search-field") && !event.target.closest(".command-panel")) closeSearch();
  });

  addButton.addEventListener("click", () => {
    closeSearch();
    dialog.querySelector("form").reset();
    dialog.querySelector("[name=date]").value = currentHongKongDate();
    dialog.showModal();
    dialog.querySelector("[name=title]").focus();
  });
  dialog.addEventListener("click", event => {
    if (event.target.matches("[data-close-task]")) dialog.close();
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener("submit", event => {
    event.preventDefault();
    const taskForm = event.target;
    const form = new FormData(taskForm);
    const id = `manual-task-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    const task = {
      id,
      sourceType: "manual",
      sourceId: id,
      title: String(form.get("title") || "").trim(),
      shortTitle: String(form.get("title") || "").trim(),
      date: String(form.get("date") || ""),
      time: String(form.get("time") || "") || "待安排",
      category: String(form.get("category") || "Task"),
      note: String(form.get("note") || "").trim(),
      done: form.get("done") === "true"
    };
    if (!task.title || !task.date) return;
    window.BBStore.dispatch({ type: "task.created", task });
    taskForm.reset();
    dialog.close();
    showToast(toast, `已加入 ${task.date} 的日历`);
    navigate("calendar", { params: { date: task.date } });
  });
}
