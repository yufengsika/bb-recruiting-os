export function escapeHtml(value = "") { return String(value).replace(/[&<>'"]/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character])); }
export function formatDate(value, fallback = "未设定") { if (!value) return fallback; const date = new Date(value.length === 10 ? `${value}T12:00:00+08:00` : value); if (Number.isNaN(date.getTime())) return value; return new Intl.DateTimeFormat("zh-Hans-HK", { month: "short", day: "numeric", timeZone: "Asia/Hong_Kong" }).format(date); }
export function formatDateTime(value, fallback = "未设定") { if (!value) return fallback; const date = new Date(value.length === 10 ? `${value}T12:00:00+08:00` : value); if (Number.isNaN(date.getTime())) return value; return new Intl.DateTimeFormat("zh-Hans-HK", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit", timeZone: "Asia/Hong_Kong" }).format(date); }
export function statusClass(status = "") { if (/completed|confirmed|submitted|first round/i.test(status)) return "done"; if (/expired|overdue|rejected|withdrawn/i.test(status)) return "danger"; if (/pending|awaiting|not started|questionnaire/i.test(status)) return "pending"; if (/wishlist|research/i.test(status)) return "wishlist"; return "applied"; }
export const APPLICATION_STAGES = ["待投", "已申请", "OT", "VI", "一面后", "结果", "已关闭"];
export function applicationStage(status = "") {
  if (/wishlist|research|ready to apply/i.test(status)) return "待投";
  if (/expired|withdrawn|cancelled|canceled/i.test(status)) return "已关闭";
  if (/offer|accepted|rejected/i.test(status)) return "结果";
  if (/interview|first round/i.test(status)) return "一面后";
  if (/\bvi\b|video interview/i.test(status)) return "VI";
  if (/questionnaire|\boa\b|\bot\b|assessment|awaiting/i.test(status)) return "OT";
  return "已申请";
}
export function logoUrl(app) { return app?.logo ? new URL(app.logo.replace(/^\.\//, ""), window.BB_ROOT || document.baseURI).href : ""; }
export function groupBy(items, key) { return items.reduce((map, item) => { const value = typeof key === "function" ? key(item) : item[key]; (map[value] ||= []).push(item); return map; }, {}); }
export function flattenBullets(experience) { return (experience?.projects || []).flatMap(project => (project.bullets || []).map(bullet => ({ ...bullet, projectName: project.name }))); }
export function currentHongKongDate() { return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Hong_Kong" }).format(new Date()); }
export function button(label, attrs = "", variant = "secondary") { return `<button class="button ${variant}" ${attrs}>${label}</button>`; }
