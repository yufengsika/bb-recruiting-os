import "./store.js";

const root = new URL("../", import.meta.url);
window.BB_ROOT = root;
window.BBRouteUrl = (key, params) => routeUrl(key, params);
const routes = {
  home: { path: "/", label: "今日", eyebrow: "DAILY CONTROL", module: "home.js", icon: "▦" },
  applications: { path: "/applications/", label: "申请追踪", eyebrow: "PIPELINE", module: "applications.js", icon: "▣" },
  assessments: { path: "/assessments/", label: "OT / VI", eyebrow: "ASSESSMENTS", module: "assessments.js", icon: "✓" },
  calendar: { path: "/calendar/", label: "日历", eyebrow: "CALENDAR", module: "calendar.js", icon: "□" },
  resume: { path: "/prep/resume/", label: "简历素材", eyebrow: "RESUME & EXPERIENCE", module: "resume.js", icon: "▤" },
  interview: { path: "/prep/interview/", label: "面试准备", eyebrow: "INTERVIEW WORKSPACE", module: "interview.js", icon: "◇" },
  bank: { path: "/prep/bank/", label: "Bank Playbook", eyebrow: "FIRM-SPECIFIC PREP", module: "bank.js", icon: "⌂" }
};
const navGroups = [
  { label: "CONTROL CENTER", keys: ["home", "applications", "assessments", "calendar"] },
  { label: "PREPARATION", keys: ["resume", "interview", "bank"] }
];
let currentModule = null;
let currentRoute = "home";
let navigationToken = 0;

function routeForPath(path) {
  const normalized = path.length > 1 && !path.endsWith("/") ? `${path}/` : path;
  return Object.entries(routes).find(([, route]) => route.path === normalized)?.[0] || "home";
}
function routeUrl(key, params) {
  const url = new URL(routes[key].path.replace(/^\//, ""), root);
  if (params) {
    const entries = params instanceof URLSearchParams ? params.entries() : Object.entries(params);
    for (const [name, value] of entries) if (value != null && value !== "") url.searchParams.set(name, value);
  }
  return url.href;
}
function rootPathFromUrl(url) { return new URL(url).pathname.replace(new URL(root).pathname, "/"); }
function currentKey() {
  const bodyRoute = document.body.dataset.page;
  return bodyRoute && routes[bodyRoute] ? bodyRoute : routeForPath(rootPathFromUrl(location.href));
}
function renderNav(activeKey) {
  const nav = document.getElementById("main-nav");
  if (!nav || nav.dataset.ready === "true") return;
  nav.innerHTML = navGroups.map(group => `<div class="nav-divider">${group.label}</div>${group.keys.map(key => {
    const route = routes[key];
    return `<a class="nav-button ${activeKey === key ? "active" : ""}" href="${routeUrl(key)}" data-route="${key}"><span class="nav-icon">${route.icon}</span><span>${route.label}</span>${key === "assessments" ? `<span class="count" id="assessment-count"></span>` : ""}</a>`;
  }).join("")}`).join("");
  nav.dataset.ready = "true";
}
function updateNav(activeKey) {
  document.querySelectorAll("#main-nav [data-route]").forEach(link => link.classList.toggle("active", link.dataset.route === activeKey));
  const count = document.getElementById("assessment-count");
  if (count) count.textContent = String(window.BBStore.select(state => state.assessments.filter(item => !["Confirmed", "Completed", "Submitted", "Expired"].includes(item.status)).length));
}
function updateChrome(key) {
  const route = routes[key];
  document.title = `${route.label} · BB Recruiting OS`;
  const title = document.getElementById("page-title");
  const eyebrow = document.getElementById("page-eyebrow");
  if (title) title.textContent = route.label;
  if (eyebrow) eyebrow.textContent = route.eyebrow;
  document.body.dataset.page = key;
  updateNav(key);
}
async function loadModule(key) {
  const moduleUrl = new URL(`../pages/${routes[key].module}`, import.meta.url).href;
  return import(`${moduleUrl}?v=20260812-1`);
}
async function mountRoute(key, html, options = {}) {
  const token = ++navigationToken;
  const outlet = document.getElementById("page-content");
  if (!outlet) return;
  if (currentModule?.unmount) currentModule.unmount();
  currentModule = null;
  if (html != null) outlet.innerHTML = html;
  if (options.push) history.pushState({ route: key }, "", options.target || routeUrl(key));
  updateChrome(key);
  const module = await loadModule(key);
  if (token !== navigationToken) return;
  currentModule = module;
  module.mount?.(outlet, { route: key, store: window.BBStore, navigate: navigateTo });
  window.scrollTo(0, 0);
}
async function navigateTo(key, options = {}) {
  if (!routes[key]) return;
  const target = options.target ? new URL(options.target, location.href).href : routeUrl(key, options.params);
  if (new URL(target).href === location.href) return mountRoute(key, null);
  try {
    const response = await fetch(target, { headers: { "X-BB-Partial": "1" } });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const html = await response.text();
    const documentHtml = new DOMParser().parseFromString(html, "text/html");
    const incoming = documentHtml.querySelector("#page-content");
    if (!incoming) throw new Error("Target page has no outlet");
    await mountRoute(key, incoming.innerHTML, { push: options.push !== false, target });
  } catch (error) {
    window.location.href = target;
  }
}
function exportStore() {
  const blob = new Blob([JSON.stringify(window.BBStore.getSnapshot(), null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `bb-recruiting-os-v2-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(link.href);
}
function bindShell() {
  document.addEventListener("click", event => {
    const link = event.target.closest("a[data-route]");
    if (!link || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.target === "_blank") return;
    event.preventDefault();
    navigateTo(link.dataset.route, { push: true, target: link.href });
  });
  document.getElementById("open-sidebar")?.addEventListener("click", () => document.body.classList.add("sidebar-open"));
  document.getElementById("close-sidebar")?.addEventListener("click", () => document.body.classList.remove("sidebar-open"));
  document.getElementById("export-store")?.addEventListener("click", exportStore);
  document.getElementById("global-search")?.addEventListener("input", event => window.dispatchEvent(new CustomEvent("bb:search", { detail: event.target.value })));
  document.getElementById("add-record")?.addEventListener("click", () => window.dispatchEvent(new CustomEvent("bb:add-record")));
  window.addEventListener("popstate", () => {
    const key = routeForPath(rootPathFromUrl(location.href));
    navigateTo(key, { push: false, target: location.href });
  });
}
async function boot() {
  const key = currentKey();
  renderNav(key);
  bindShell();
  window.BBStore.dispatch({ type: "sync.reconciled", payload: window.BB_SYNC_DATA });
  window.BBStore.subscribe(() => {
    updateNav(currentKey());
    if (currentModule) {
      currentModule.unmount?.();
      currentModule.mount?.(document.getElementById("page-content"), { route: currentKey(), store: window.BBStore, navigate: navigateTo });
    }
  });
  await mountRoute(key, null, { push: false });
}
boot();
