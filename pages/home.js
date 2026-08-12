import { escapeHtml, formatDate, formatDateTime, statusClass, groupBy, button } from "../shared/utils.js";

let outlet;
let onClick;
function render() {
  const state = window.BBStore.getSnapshot();
  const active = state.applications.filter(app => !/wishlist|research|ready to apply/i.test(app.status));
  const pending = state.assessments.filter(item => !["Confirmed", "Completed", "Submitted", "Expired"].includes(item.status));
  const companies = new Set(active.map(app => app.company)).size;
  const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Hong_Kong" }).format(new Date());
  const tasks = state.tasks.filter(task => !task.done && !task.closed).sort((a, b) => `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`));
  const grouped = groupBy(active, app => {
    if (/wishlist|research/i.test(app.status)) return "待投";
    if (/expired|rejected|withdrawn/i.test(app.status)) return "结果";
    if (/questionnaire|ot pending|awaiting/i.test(app.status)) return "OT";
    if (/vi pending/i.test(app.status)) return "VI";
    if (/interview|first round/i.test(app.status)) return "一面后";
    if (/completed|confirmed/i.test(app.status)) return "结果";
    return "已申请";
  });
  const stages = ["待投", "已申请", "OT", "VI", "一面后", "结果"];
  outlet.innerHTML = `
    <div class="page-intro"><div><h2>今天要推进什么</h2><p>申请、测评、日历和准备素材从同一份状态读取。</p></div><div class="small muted">Data updated ${escapeHtml(formatDateTime(state.sync.correctedAt || state.sync.checkedAt))}</div></div>
    <div class="v2-grid">
      <div class="metric-card span-3"><div class="label">已申请岗位</div><div class="value">${active.length}</div><div class="note">${companies} 家公司 · programme 分开计算</div></div>
      <div class="metric-card span-3"><div class="label">未完成 OT / VI</div><div class="value">${pending.length}</div><div class="note">邀请不等于完成</div></div>
      <div class="metric-card span-3"><div class="label">未来 7 天任务</div><div class="value">${tasks.filter(task => task.date && task.date <= new Date(Date.now() + 7 * 86400000).toISOString().slice(0, 10)).length}</div><div class="note">官方 deadline 与建议日期分开</div></div>
      <div class="metric-card span-3"><div class="label">素材经历</div><div class="value">${state.experiences.length}</div><div class="note">${state.todos.filter(todo => !todo.done).length} 个准备待办</div></div>
      <section class="v2-card span-12"><div class="v2-card-head"><div><h3>申请分流</h3><span class="small muted">按岗位当前阶段，不会把 UBS UGB / TTP / AM 混在一起</span></div><a class="link-button" data-route="applications" href="${window.BBRouteUrl("applications")}">查看申请追踪 →</a></div><div class="v2-card-body"><div class="stage-strip">${stages.map(stage => `<div class="stage"><h4>${stage}<span class="stage-count">${(grouped[stage] || []).length}</span></h4><div class="stage-items">${(grouped[stage] || []).slice(0, 4).map(app => `<span>${escapeHtml(app.company)} · ${escapeHtml(app.division || app.role)}</span>`).join("") || `<em class="muted small">暂无</em>`}</div></div>`).join("")}</div></div></section>
      <section class="v2-card span-7"><div class="v2-card-head"><div><h3>今天与接下来几天</h3><span class="small muted">${today} HKT · 点击勾选手动任务</span></div><a class="link-button" data-route="calendar" href="${window.BBRouteUrl("calendar")}">打开日历 →</a></div><div class="record-list">${tasks.slice(0, 8).map(task => `<div class="record-row"><div><strong>${escapeHtml(task.title)}</strong><div class="meta">${formatDate(task.date)} ${escapeHtml(task.time || "")} · ${escapeHtml(task.note || task.category || "")}</div></div><div class="actions"><span class="status-badge ${task.category === "OT" || task.category === "VI" ? "pending" : "applied"}">${escapeHtml(task.category || "Task")}</span><button class="icon-button task-toggle" data-task="${escapeHtml(task.id)}" title="标记任务完成">○</button></div></div>`).join("") || `<div class="empty"><strong>没有未完成任务</strong>今天可以复习一个故事或一道题。</div>`}</div></section>
      <section class="v2-card span-5"><div class="v2-card-head"><div><h3>同步状态</h3><span class="small muted">自动同步只更新招聘信息，不覆盖手动准备</span></div></div><div class="v2-card-body"><div class="timeline"><div class="timeline-item"><div class="timeline-date">最近更新</div><div><div class="timeline-title">${escapeHtml(formatDateTime(state.sync.correctedAt || state.sync.checkedAt))}</div><div class="timeline-note">${escapeHtml(state.sync.summary || "没有同步摘要")}</div></div></div><div class="timeline-item"><div class="timeline-date">下一步</div><div><div class="timeline-title">先处理 ${pending[0] ? escapeHtml(pending[0].type) : "准备素材"}</div><div class="timeline-note">${pending[0] ? `${escapeHtml(pending[0].platform || "assessment")} · ${escapeHtml(pending[0].original || "以邮件原文为准")}` : "从 Resume / Interview 进入具体内容。"}</div></div></div></div></div></section>
    </div>`;
}
export function mount(target) { outlet = target; render(); onClick = event => { const task = event.target.closest("[data-task]"); if (task) window.BBStore.dispatch({ type: "task.completed", taskId: task.dataset.task, done: true }); }; outlet.addEventListener("click", onClick); }
export function unmount() { outlet?.removeEventListener("click", onClick); outlet = null; onClick = null; }
