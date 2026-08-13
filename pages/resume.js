import { escapeHtml, flattenBullets } from "../shared/utils.js";

let outlet;
let onClick;
let selectedResume = "ibd";
let selectedExperience = "dbs";
let selectedProject = "lf-origination";
let language = "both";
function experienceFromUrl(state) {
  const requested = new URL(location.href).searchParams.get("experience");
  return state.experiences.some(item => item.id === requested) ? requested : "";
}
function updateExperienceUrl() {
  const url = new URL(location.href);
  url.searchParams.set("experience", selectedExperience);
  history.replaceState({ ...history.state, route: "resume", experience: selectedExperience }, "", url);
}

function renderStory(bullet) {
  return `<article class="bullet-block"><div class="small muted">BULLET</div><div class="bullet-text">${escapeHtml(bullet.text || bullet.en || "")}</div>${language !== "zh" && bullet.en ? `<div class="story-block"><strong>English story</strong><p>${escapeHtml(bullet.en)}</p></div>` : ""}${language !== "en" && bullet.zh ? `<div class="story-block" style="border-color:var(--green);background:var(--green-soft)"><strong>中文故事</strong><p>${escapeHtml(bullet.zh)}</p></div>` : ""}</article>`;
}

function renderFollowup(followup) {
  return `<div class="followup"><strong>${escapeHtml(followup.q || "Follow-up")}</strong>${language !== "zh" && followup.en ? `<p>${escapeHtml(followup.en)}</p>` : ""}${language !== "en" && followup.zh ? `<p>${escapeHtml(followup.zh)}</p>` : ""}</div>`;
}

function renderProject(project) {
  const followups = project.followups || [];
  const walkthrough = followups.find(item => /^Walk me through the project\.?$/i.test(item.q || ""));
  const deepFollowups = followups.filter(item => item !== walkthrough);
  return `<section class="resume-project"><div class="project-section-head"><div><h4>${escapeHtml(project.name || "Project")}</h4><span class="small muted">${(project.bullets || []).length} bullets · ${followups.length} follow-ups</span></div></div>${walkthrough ? `<section class="project-walkthrough"><h4>Project walk-through</h4>${renderFollowup(walkthrough)}</section>` : ""}<section><h4>${walkthrough ? "Project bullets" : "Project story"}</h4>${(project.bullets || []).map(renderStory).join("") || `<div class="empty">这个项目还没有 bullet。</div>`}</section>${deepFollowups.length ? `<section><h4>${walkthrough ? "Project follow-up" : "Project follow-up"}</h4><div class="followup-grid">${deepFollowups.map(renderFollowup).join("")}</div></section>` : `<section><h4>Follow-up</h4><div class="empty">暂无项目特定 Follow-up。</div></section>`}</section>`;
}

function renderProjects(experience) {
  const projects = experience.projects || [];
  if (!projects.length) return `<div class="empty">这段经历还没有项目内容。</div>`;
  if (experience.id !== "dbs") return projects.map(renderProject).join("");
  if (!projects.some(item => item.id === selectedProject)) selectedProject = projects[0].id;
  const project = projects.find(item => item.id === selectedProject) || projects[0];
  return `<div class="project-tabs" role="tablist" aria-label="DBS projects">${projects.map(item => `<button class="project-tab ${item.id === project.id ? "active" : ""}" data-project="${escapeHtml(item.id)}" role="tab" aria-selected="${item.id === project.id}"><strong>${escapeHtml(item.name.split(" - ")[0])}</strong><span>${(item.bullets || []).length} bullets · ${(item.followups || []).length} follow-ups</span></button>`).join("")}</div>${renderProject(project)}`;
}

function renderExperienceFollowups(experience) {
  if (experience.id === "dbs" || !(experience.followups || []).length) return "";
  return `<section><h4>整段经历集中 Follow-up</h4><div class="followup-grid">${experience.followups.map(renderFollowup).join("")}</div></section>`;
}

function render() {
  const state = window.BBStore.getSnapshot();
  const resume = state.resumes.find(item => item.id === selectedResume) || state.resumes[0];
  const allowed = resume?.experienceIds || state.experiences.map(item => item.id);
  if (!allowed.includes(selectedExperience)) selectedExperience = allowed[0];
  const experience = state.experiences.find(item => item.id === selectedExperience) || state.experiences[0];
  const todo = state.todos.filter(item => !item.done);
  const rail = allowed.map(id => state.experiences.find(item => item.id === id)).filter(Boolean).map(item => {
    const bullets = flattenBullets(item).length;
    const projects = item.projects?.length || 0;
    const followups = item.id === "dbs" ? item.projects?.reduce((sum, project) => sum + (project.followups || []).length, 0) : (item.followups || []).length;
    return `<button class="rail-button ${item.id === selectedExperience ? "active" : ""}" data-experience="${escapeHtml(item.id)}"><strong>${escapeHtml(item.company)}</strong><span>${escapeHtml(item.role)}</span><span>${projects ? `${projects} projects · ` : ""}${bullets} bullets · ${followups} follow-ups</span></button>`;
  }).join("");
  outlet.innerHTML = `<div class="page-intro"><div><h2>简历素材</h2><p>按经历和项目复习；DBS 的 LF、GJ、A 分开显示。</p></div><div class="segmented"><button class="${selectedResume === "ibd" ? "active" : ""}" data-resume="ibd">IBD / Private Markets</button><button class="${selectedResume === "markets" ? "active" : ""}" data-resume="markets">Markets / AM</button></div></div><section class="v2-card"><div class="v2-card-head"><div><h3>${escapeHtml(resume?.title || "Resume")}</h3><span class="small muted">${escapeHtml(resume?.file || "PDF 未连接")} · updated ${escapeHtml(resume?.updated || "-")}</span></div><div class="segmented"><button class="${language === "both" ? "active" : ""}" data-language="both">中英</button><button class="${language === "en" ? "active" : ""}" data-language="en">English</button><button class="${language === "zh" ? "active" : ""}" data-language="zh">中文</button></div></div><div class="split-layout"><aside class="split-rail">${rail}</aside><main class="detail-pane"><div class="page-intro" style="margin-bottom:8px"><div><h3>${escapeHtml(experience.company)}</h3><p>${escapeHtml(experience.role)} · ${escapeHtml(experience.date)}</p></div><span class="status-badge applied">source: ${escapeHtml(experience.source || "文件")}</span></div>${renderProjects(experience)}${renderExperienceFollowups(experience)}<section><h4>相关 Behavioural 使用情况</h4><div class="gap-list"><div class="gap-item">这段经历可以复用到 teamwork、difficulty、resilience、ownership 和 why IBD。</div><div class="gap-item">行为面正式答案统一从 Interview 页面关联，不在这里复制第二份答案。</div></div></section></main></div></section><section class="v2-card" style="margin-top:16px"><div class="v2-card-head"><div><h3>真实待办</h3><span class="small muted">未确认的 ZA / Gaorong / M&A / PFM / LBO 只保留待办，不自动补写内容</span></div><span class="small muted">${todo.length} 项</span></div><div class="v2-card-body">${todo.map(item => `<label class="checkline ${item.done ? "done" : ""}"><input type="checkbox" data-todo="${escapeHtml(item.id)}" ${item.done ? "checked" : ""}><span><strong>${escapeHtml(item.title || item.name || item.scope || "准备事项")}</strong><br><span class="small muted">${escapeHtml(item.scope || item.next || item.finding || "待讨论")}</span></span></label>`).join("") || `<div class="empty">所有待办已处理。</div>`}</div></section>`;
}

export function mount(target) {
  outlet = target;
  const state = window.BBStore.getSnapshot();
  const requestedExperience = experienceFromUrl(state);
  if (requestedExperience) {
    selectedExperience = requestedExperience;
    selectedResume = state.resumes.find(resume => resume.experienceIds?.includes(requestedExperience))?.id || selectedResume;
  }
  render();
  onClick = event => {
    const resume = event.target.closest("[data-resume]");
    if (resume) { selectedResume = resume.dataset.resume; render(); return; }
    const experience = event.target.closest("[data-experience]");
    if (experience) { selectedExperience = experience.dataset.experience; selectedProject = "lf-origination"; updateExperienceUrl(); render(); return; }
    const project = event.target.closest("[data-project]");
    if (project) { selectedProject = project.dataset.project; render(); return; }
    const languageButton = event.target.closest("[data-language]");
    if (languageButton) { language = languageButton.dataset.language; render(); return; }
    const todo = event.target.closest("[data-todo]");
    if (todo) window.BBStore.dispatch({ type: "todo.completed", todoId: todo.dataset.todo, done: event.target.checked });
  };
  outlet.addEventListener("click", onClick);
}

export function unmount() { outlet?.removeEventListener("click", onClick); outlet = null; onClick = null; }
