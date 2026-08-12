import { escapeHtml, formatDate, statusClass, logoUrl } from "../shared/utils.js";

let outlet;
let onClick;
let onChange;
let onInput;
let filter = "";
let query = "";
let selectedApplication = "";
function applicationFromUrl(state) {
  const requested = new URL(location.href).searchParams.get("application");
  return state.applications.some(item => item.id === requested) ? requested : "";
}
function clearApplicationSelection() {
  selectedApplication = "";
  const url = new URL(location.href);
  url.searchParams.delete("application");
  history.replaceState({ ...history.state, route: "applications" }, "", url);
}
function stageFor(app) {
  if (/wishlist|research/i.test(app.status)) return "待投";
  if (/expired|rejected|withdrawn/i.test(app.status)) return "结果";
  if (/questionnaire|ot pending|awaiting/i.test(app.status)) return "OT";
  if (/vi pending/i.test(app.status)) return "VI";
  if (/interview|first round/i.test(app.status)) return "一面后";
  if (/completed|confirmed/i.test(app.status)) return "结果";
  return "已申请";
}
function render() {
  const state = window.BBStore.getSnapshot();
  const normalizedQuery = query.trim().toLowerCase();
  const rows = state.applications.filter(app => (!selectedApplication || app.id === selectedApplication) && (!filter || app.status === filter) && (!normalizedQuery || `${app.company} ${app.role || ""} ${app.division || ""} ${app.location || ""} ${app.ref || ""}`.toLowerCase().includes(normalizedQuery)));
  const stages = ["待投", "已申请", "OT", "VI", "一面后", "结果"];
  const groups = Object.fromEntries(stages.map(stage => [stage, rows.filter(app => stageFor(app) === stage)]));
  const companies = new Set(state.applications.filter(app => !/wishlist|research/i.test(app.status)).map(app => app.company)).size;
  outlet.innerHTML = `<div class="page-intro"><div><h2>申请追踪</h2><p>${companies} 家公司，${state.applications.filter(app => !/wishlist|research/i.test(app.status)).length} 个独立 programme。每一行都是一个申请 ID。</p></div><div class="small muted">${state.applications.length} records</div></div>
    <div class="toolbar"><div class="filters"><select id="application-filter"><option value="">全部状态</option>${[...new Set(state.applications.map(app => app.status))].map(status => `<option ${filter === status ? "selected" : ""}>${escapeHtml(status)}</option>`).join("")}</select><input id="application-search" placeholder="公司 / programme" value="${escapeHtml(query)}">${selectedApplication ? `<button class="button secondary" data-clear-application>清除定位</button>` : ""}</div><span class="small muted">同步版本 ${escapeHtml(String(state.sync.version || "-"))}</span></div>
    <section class="v2-card"><div class="v2-card-head"><div><h3>申请分流图</h3><span class="small muted">点击具体岗位可从状态下拉更新；分流只读取 Application 状态</span></div></div><div class="v2-card-body"><div class="stage-strip">${stages.map(stage => `<div class="stage"><h4>${stage}<span class="stage-count">${groups[stage].length}</span></h4><div class="stage-items">${groups[stage].slice(0, 8).map(app => `<span>${escapeHtml(app.company)} · ${escapeHtml(app.division || app.role)}</span>`).join("") || `<em class="muted small">暂无</em>`}</div></div>`).join("")}</div></div></section>
    <section class="v2-card" style="margin-top:16px"><div class="v2-card-head"><h3>全部 programme</h3><span class="small muted">Logo、公司、岗位和当前阶段</span></div><div class="record-list">${rows.map(app => `<div class="record-row"><div class="record-main">${logoUrl(app) ? `<img class="logo" src="${logoUrl(app)}" alt="">` : `<span class="logo"></span>`}<div><strong>${escapeHtml(app.company)} · ${escapeHtml(app.role || app.division || "Programme")}</strong><div class="meta">${escapeHtml(app.division || "Programme 未标明")} · ${escapeHtml(app.location || "Hong Kong")} · ${escapeHtml(app.channel || "来源未记录")} ${app.ref ? `· ref ${escapeHtml(app.ref)}` : ""}</div></div></div><div class="actions"><span class="status-badge ${statusClass(app.status)}">${escapeHtml(app.status)}</span><select class="status-select status-${statusClass(app.status)}" data-status-app="${escapeHtml(app.id)}" aria-label="更新 ${escapeHtml(app.company)} 状态"><option ${app.status === "Wishlist" ? "selected" : ""}>Wishlist</option><option ${app.status === "Applied" ? "selected" : ""}>Applied</option><option ${app.status === "OT Pending" ? "selected" : ""}>OT Pending</option><option ${app.status === "OT Completed" ? "selected" : ""}>OT Completed</option><option ${app.status === "OT Expired" ? "selected" : ""}>OT Expired</option><option ${app.status === "VI Pending" ? "selected" : ""}>VI Pending</option><option ${app.status === "VI Completed" ? "selected" : ""}>VI Completed</option><option ${app.status === "First Round Completed" ? "selected" : ""}>First Round Completed</option><option ${app.status === "Rejected" ? "selected" : ""}>Rejected</option></select></div></div>`).join("") || `<div class="empty"><strong>没有符合条件的 programme</strong>调整筛选条件即可。</div>`}</div></section>`;
}
export function mount(target) {
  outlet = target; selectedApplication = applicationFromUrl(window.BBStore.getSnapshot()); if (selectedApplication) { filter = ""; query = ""; } render();
  onChange = event => { if (event.target.id === "application-filter") { if (selectedApplication) clearApplicationSelection(); filter = event.target.value; render(); } if (event.target.matches("[data-status-app]")) window.BBStore.dispatch({ type: "application.statusChanged", applicationId: event.target.dataset.statusApp, status: event.target.value }); };
  onClick = event => { if (event.target.closest("[data-clear-application]")) { clearApplicationSelection(); render(); } };
  onInput = event => { if (event.target.id === "application-search") { if (selectedApplication) clearApplicationSelection(); query = event.target.value; render(); document.getElementById("application-search")?.focus(); } };
  outlet.addEventListener("click", onClick); outlet.addEventListener("change", onChange); outlet.addEventListener("input", onInput);
}
export function unmount() { outlet?.removeEventListener("click", onClick); outlet?.removeEventListener("change", onChange); outlet?.removeEventListener("input", onInput); outlet = null; onClick = null; onChange = null; onInput = null; }
