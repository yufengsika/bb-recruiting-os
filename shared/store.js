const STORE_KEY = "bb-recruiting-os-v2";
const BACKUP_KEY = "bb-recruiting-os-v1-backup";
const listeners = new Set();

const applicationCatalog = {
  "ubs-gb": { company: "UBS", division: "UGB · Global Banking", role: "2027 Summer Internship (UGB)", location: "Hong Kong", channel: "UBS Careers", logo: "assets/ubs.png" },
  "ubs-ttp-gb": { company: "UBS", division: "TTP · Global Banking", role: "2026 UBS Tomorrow's Talent Program", location: "Hong Kong", channel: "UBS Careers", logo: "assets/ubs.png" },
  "ubs-am": { company: "UBS", division: "Asset Management", role: "2027 Summer Internship", location: "Hong Kong", channel: "UBS Careers", logo: "assets/ubs.png" },
  "jpm-am": { company: "JPMorgan", division: "Asset Management", role: "2027 Summer Internship", location: "Hong Kong", channel: "Oracle Careers", logo: "assets/jpmorgan.png" },
  "jpm-mkts": { company: "JPMorgan", division: "CIB Markets", role: "2027 Summer Analyst", location: "Hong Kong", channel: "Oracle Careers", logo: "assets/jpmorgan.png" },
  "jpm-gib": { company: "JPMorgan", division: "Global Investment Banking", role: "2027 Summer Analyst", location: "Hong Kong", channel: "Oracle Careers", logo: "assets/jpmorgan.png" },
  "bofa-gib": { company: "Bank of America", division: "Global Investment Banking", role: "2027 Summer Analyst", location: "Hong Kong", channel: "BofA Campus Careers", logo: "assets/bofa.png" },
  "jefferies-ib": { company: "Jefferies", division: "Investment Banking", role: "2027 Summer Analyst Program", location: "Hong Kong", channel: "Jefferies Careers", logo: "assets/jefferies.png" },
  "hsbc-investment-banking-internship": { company: "HSBC", division: "Investment Banking", role: "Investment Banking - Internship", location: "Hong Kong", channel: "HSBC Careers", logo: "assets/hsbc.svg" },
  "ms-ib": { company: "Morgan Stanley", division: "Investment Banking", role: "2027 Investment Banking Industrial Placement / Summer Analyst Program", location: "Hong Kong / Singapore / Seoul", channel: "Morgan Stanley Careers", logo: "assets/morgan-stanley.svg" },
  "gs-hk": { company: "Goldman Sachs", division: "Investment Banking", role: "2027 Summer Analyst", location: "Hong Kong", channel: "Goldman Sachs Careers", logo: "assets/goldman-sachs.svg" },
  "citi-markets-st-2027-hk": { company: "Citi", division: "Markets", role: "2027 Markets Summer Analyst", location: "Hong Kong", channel: "Citi Careers", logo: "assets/citi.svg" },
  "barclays-investment-banking-summer-internship": { company: "Barclays", division: "Investment Banking", role: "2027 Investment Banking Summer Internship", location: "Hong Kong", channel: "Barclays Careers", logo: "assets/barclays.svg" },
  "bofa-4757966": { company: "Bank of America", division: "Programme not stated", role: "Application received · 4757966", location: "Hong Kong", channel: "BofA Campus Careers", logo: "assets/bofa.png" }
};

const statusGroups = {
  applied: ["Applied", "Questionnaire Pending", "Questionnaire Completed", "OT Awaiting Invite", "OT Pending", "OT Completed", "OT Expired", "VI Pending", "VI Completed", "Interview Pending", "First Round Completed", "Confirmed"],
  completed: ["OT Completed", "VI Completed", "First Round Completed", "Confirmed"],
  wishlist: ["Wishlist", "Researching", "Ready to Apply"]
};

const defaultAnswers = {
  "CL0010::bank:Jefferies": {
    questionId: "CL0010",
    scope: "bank:Jefferies",
    status: "ready",
    source: "Jefferies question bank QB1622 / QB1635; DCF workshop transcript",
    answer: `The three core methodologies are trading comparables, precedent transactions and DCF. Trading comparables apply the market multiples of similar listed companies and therefore reflect current minority-market pricing. Precedent transactions use multiples paid in comparable acquisitions and are often higher because they may include a control premium and expected synergies, although the result depends heavily on transaction timing and comparability. DCF is intrinsic: it values the company's own forecast free cash flow and is less directly tied to current market pricing, but it is highly sensitive to operating assumptions, WACC and terminal value.

I would not assume a fixed ranking. Precedents often give the highest range and trading comps a lower range, but a DCF can be above or below both depending on the forecast and terminal assumptions. I would triangulate the methods and explain the drivers of any gap rather than average them mechanically.`
  },
  "CL0223::bank:Jefferies": {
    questionId: "CL0223",
    scope: "bank:Jefferies",
    status: "ready",
    source: "Jefferies question bank QB1626; DCF workshop transcript",
    answer: `I would normally use unlevered free cash flow because it is capital-structure neutral. I would calculate it as EBIT after tax, plus D&A, less capex and the increase in net working capital. Since that cash flow is available to both debt and equity holders, I would discount it at WACC to arrive at enterprise value. I would then bridge from enterprise value to equity value by adding cash and other non-operating assets and subtracting debt and other debt-like claims.

The two standard terminal-value methods are the perpetuity-growth method and the exit-multiple method. Under perpetuity growth, terminal value is next year's free cash flow divided by WACC minus the long-term growth rate. Under the exit-multiple method, I apply a selected trading multiple, usually EV/EBITDA, to the terminal-year metric. I would use one as the primary method and the other as a cross-check.

If I used levered free cash flow instead, I would discount it at the cost of equity and arrive directly at equity value.`
  },
  "CL0572::bank:Jefferies": {
    questionId: "CL0572",
    scope: "bank:Jefferies",
    status: "ready",
    source: "Jefferies question bank QB1619; DBS LF logistics IPO pitch materials",
    answer: `Yes. At DBS Asia Capital, I supported the valuation workstream for a potential Hong Kong capital-markets client in the supply-chain sector. I first analysed the historical income statement, balance sheet and cash flow statement, then built a five-year operating forecast. The base case assumed low-single-digit revenue growth and gradual EBIT-margin recovery, which I used to project taxes, D&A, capital expenditure and working capital and derive unlevered free cash flow.

I discounted those cash flows at a WACC of approximately 9.8% and calculated terminal value using a 2% perpetual-growth rate. I also built bear and bull cases around customer conversion, margin progression and cash conversion, and cross-checked the result against a 7.0 times exit EV-to-EBITDA multiple and trading comparables. The main judgement was translating the company’s supply-chain network and technology-enabled efficiency story into assumptions that public investors could underwrite without treating it as a software business. My role was to build and review the analysis and make the valuation logic presentation-ready; senior bankers retained ownership of the final client recommendation and valuation range.`
  },
  "CL1255::general": {
    questionId: "CL1255",
    scope: "general",
    status: "ready",
    source: "Personal investing answer",
    answer: `My personal account is fairly simple. I hold full Nasdaq 100 exposure as my base position: before each distribution, I am effectively 100% invested in the index.

Instead of QQQ, I use QDTE, which sells 0DTE covered calls on the index each day. It gives up the intraday upside in exchange for option premium income, but the cap resets daily, so it can still capture overnight gaps. Since inception, with distributions reinvested, QDTE has trailed QQQ by roughly one percentage point annualised in my backtest. I view that as a measurable cost for the cash flow.

That cash flow, roughly 5% a month, is my entire speculation budget. I use it for options around earnings and major events, and I follow three rules. First, I never touch principal: speculation is funded only by distributions, so the maximum monthly loss is mechanically capped and even a total wipeout cannot affect the base. Second, because the base requires no discretionary decisions, I have removed the temptation to chase rallies or panic-sell. Whatever the market does, my core action stays the same. Third, any profit from the speculative side goes back into QDTE. That increases the base, next month's distributions and therefore the future budget.

I would describe it as a barbell-style discipline. The safe end is not risk-free because it is still Nasdaq 100 exposure, but the two ends have completely different jobs: one produces cash flow without discretionary decisions, and the other takes strictly sized, high-risk bets with no middle ground.

This structure came from a difficult lesson. I used to trade leveraged Korean single-stock products, and deleveraging hurt me financially and mentally. It forced me to ask whether I could explain where my gains came from. If I could not, I could not explain my losses either; I was essentially hoping the market stayed on my side. This approach is not delta-one, but I know where each dollar of cash flow comes from and where it goes. At this stage of my life, that discipline matters more to me than finding a cleverer strategy.`
  }
};

function clone(value) { return JSON.parse(JSON.stringify(value)); }
function uid(prefix) { return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`; }
function safeJson(key) { try { return JSON.parse(localStorage.getItem(key) || "null"); } catch { return null; } }
function enrichApplication(item) {
  const base = applicationCatalog[item.id] || {};
  return { id: item.id, status: "Wishlist", applied: "", ref: "", url: "", ...base, ...item };
}
function mergeById(items) {
  const merged = new Map();
  for (const item of items || []) {
    if (!item?.id) continue;
    merged.set(item.id, { ...(merged.get(item.id) || {}), ...item });
  }
  return [...merged.values()];
}
function loadPrep() {
  const prep = window.BB_PREP_DATA || { sharedExperiences: {}, resumes: [], todos: [] };
  const experiences = Object.values(prep.sharedExperiences || {}).map(experience => ({
    ...clone(experience),
    id: experience.id || `experience-${String(experience.company || "").toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    status: "active",
    projects: (experience.projects || []).map((project, projectIndex) => ({
      ...project,
      id: project.id || `${experience.id}-project-${projectIndex + 1}`,
      bullets: (project.bullets || []).map((bullet, bulletIndex) => ({
        ...bullet,
        id: bullet.id || `${experience.id}-bullet-${projectIndex + 1}-${bulletIndex + 1}`,
        storyId: bullet.storyId || `${experience.id}-story-${projectIndex + 1}-${bulletIndex + 1}`
      }))
    })),
    followups: (experience.followups || []).map((followup, index) => ({ ...followup, id: followup.id || `${experience.id}-followup-${index + 1}` }))
  }));
  const resumes = (prep.resumes || []).map(resume => ({
    id: resume.id,
    title: resume.title,
    subtitle: resume.subtitle,
    short: resume.short,
    file: resume.file,
    updated: resume.updated,
    experienceIds: (resume.experiences || []).map(experience => experience.id)
  }));
  const todos = (prep.todos || []).map(todo => ({ ...todo, id: todo.id || uid("todo"), sourceType: "preparation" }));
  return { resumes, experiences, todos };
}
function loadAnswers() {
  const old = safeJson("ibd-prep-bank.answers.v1") || {};
  const seeded = clone(defaultAnswers);
  for (const entry of window.BB_UBS_VI?.entries || []) {
    const questionId = entry.canonicalId || entry.id;
    seeded[`${questionId}::programme:UBS IBD`] = { questionId, scope: "programme:UBS IBD", answer: entry.answer || "", status: "draft", source: entry.sourceTitle || entry.sourceCell };
  }
  for (const [key, value] of Object.entries(old)) {
    const questionId = value.questionId || key;
    seeded[`${questionId}::${value.scope || "general"}`] = { questionId, scope: value.scope || "general", answer: value.answer || "", notes: value.notes || "", status: value.status || "draft", updatedAt: value.updatedAt };
  }
  return seeded;
}
function normalizeState() {
  const sync = window.BB_SYNC_DATA || { version: 0, checkedAt: "", summary: "", applications: [], assessments: [], calendarTasks: [] };
  const old = safeJson("bb-recruiting-os-v1");
  if (old && !safeJson(BACKUP_KEY)) localStorage.setItem(BACKUP_KEY, JSON.stringify({ backedUpAt: new Date().toISOString(), state: old }));
  const prep = loadPrep();
  const oldApplications = old?.applications || [];
  const userApplications = oldApplications.filter(application => application.updatedByUser);
  const mergedApps = mergeById([
    ...Object.keys(applicationCatalog).map(id => ({ id })),
    ...oldApplications,
    ...(sync.applications || []),
    ...userApplications
  ]).map(enrichApplication);
  const assessmentById = new Map();
  for (const assessment of [...(old?.assessments || []), ...(sync.assessments || [])]) {
    if (!assessment?.id) continue;
    assessmentById.set(assessment.id, { ...assessmentById.get(assessment.id), ...clone(assessment) });
  }
  const assessments = [...assessmentById.values()].map(assessment => ({
    ...assessment,
    applicationId: assessment.applicationId || assessment.appId,
    status: assessment.status || "Not Started",
    completionSource: assessment.completionSource || (assessment.status === "Confirmed" ? "email" : undefined)
  }));
  const taskById = new Map();
  for (const task of [...(old?.calendarTasks || []), ...(sync.calendarTasks || [])]) if (task?.id) taskById.set(task.id, { ...taskById.get(task.id), ...clone(task) });
  for (const assessment of assessments) {
    if (!assessment.applicationId) continue;
    const existing = [...taskById.values()].find(task => task.assessmentId === assessment.id);
    if (!existing) taskById.set(`task-${assessment.id}`, { id: `task-${assessment.id}`, date: (assessment.deadline || assessment.received || "").slice(0, 10), time: "待安排", title: `完成 ${assessment.type} · ${assessment.platform || "assessment"}`, shortTitle: `${assessment.type} · ${assessment.platform || "assessment"}`, category: assessment.type, assessmentId: assessment.id, sourceType: "assessment", sourceId: assessment.id, done: assessment.status === "Confirmed" });
  }
  const oldManual = old?.manualState || {};
  const answerState = loadAnswers();
  return {
    schemaVersion: 2,
    sync: { version: sync.version || 0, checkedAt: sync.checkedAt || "", correctedAt: sync.correctedAt || "", summary: sync.summary || "" },
    applications: mergedApps,
    assessments,
    tasks: [...taskById.values()].map(task => ({ ...task, sourceType: task.sourceType || (task.assessmentId ? "assessment" : "manual"), sourceId: task.sourceId || task.assessmentId, done: Boolean(task.done) })),
    resumes: prep.resumes,
    experiences: prep.experiences,
    todos: prep.todos,
    answers: answerState,
    questions: (window.BB_QUESTION_BANK?.clusters || []).map(question => ({ id: question.id, question: question.question, category: question.category, banks: question.banks || [], divisions: question.divisions || [], occurrences: question.occurrences || 1, variants: question.variants || [] })),
    manualState: oldManual,
    updatedAt: new Date().toISOString(),
    migrations: { oldBackupCreated: Boolean(old), generatedStableIds: true }
  };
}

let state = null;
function save() { localStorage.setItem(STORE_KEY, JSON.stringify(state)); }
function notify(action) { for (const listener of listeners) listener(clone(state), action); }
function load() {
  const existing = safeJson(STORE_KEY);
  state = existing?.schemaVersion === 2 ? existing : normalizeState();
  let changed = !existing;
  state.migrations = state.migrations || {};
  if (!state.migrations.personalInvestmentAnswerV1) {
    state.answers["CL1255::general"] = clone(defaultAnswers["CL1255::general"]);
    state.migrations.personalInvestmentAnswerV1 = true;
    changed = true;
  }
  if (!state.migrations.jefferiesDcfAnswersV1) {
    for (const [key, answer] of Object.entries(defaultAnswers)) {
      if (answer.scope === "bank:Jefferies" && !state.answers[key]) state.answers[key] = clone(answer);
    }
    state.migrations.jefferiesDcfAnswersV1 = true;
    changed = true;
  }
  if (!state.migrations.jefferiesDcfModellingAnswerV2) {
    state.answers["CL0572::bank:Jefferies"] = clone(defaultAnswers["CL0572::bank:Jefferies"]);
    state.migrations.jefferiesDcfModellingAnswerV2 = true;
    changed = true;
  }
  if (!state.migrations.liFungDcfInterviewPackV1) {
    const prep = loadPrep();
    const sourceExperience = prep.experiences.find(item => item.id === "dbs");
    const currentExperience = state.experiences.find(item => item.id === "dbs");
    const sourceFollowup = sourceExperience?.followups.find(item => item.q === "Walk me through the DCF and key sensitivities.");
    const currentFollowup = currentExperience?.followups.find(item => item.q === "Walk me through the DCF and key sensitivities.");
    if (sourceFollowup && currentFollowup) Object.assign(currentFollowup, clone(sourceFollowup));
    const sourceTodo = prep.todos.find(item => item.id === "dcf");
    const currentTodo = state.todos.find(item => item.id === "dcf");
    if (sourceTodo && currentTodo) Object.assign(currentTodo, clone(sourceTodo));
    state.migrations.liFungDcfInterviewPackV1 = true;
    changed = true;
  }
  if (!state.migrations.dbsProjectSplitV1) {
    const prep = loadPrep();
    const sourceExperience = prep.experiences.find(item => item.id === "dbs");
    const currentExperience = state.experiences.find(item => item.id === "dbs");
    if (sourceExperience && currentExperience) {
      currentExperience.projects = clone(sourceExperience.projects || []);
      currentExperience.followups = [];
    }
    const sourceTodo = prep.todos.find(item => item.id === "dcf");
    const currentTodo = state.todos.find(item => item.id === "dcf");
    if (sourceTodo && currentTodo) Object.assign(currentTodo, clone(sourceTodo));
    state.migrations.dbsProjectSplitV1 = true;
    changed = true;
  }
  const currentSync = window.BB_SYNC_DATA || { version: 0 };
  if (Number(currentSync.version || 0) > Number(state.sync?.version || 0)) {
    mergeSync(currentSync);
    changed = true;
  }
  if (changed) save();
  return state;
}
function mergeSync(payload) {
  if (!payload || Number(payload.version || 0) < Number(state.sync.version || 0)) return;
  const manualApps = new Set(state.applications.filter(app => app.updatedByUser).map(app => app.id));
  for (const patch of payload.applications || []) {
    const current = state.applications.find(app => app.id === patch.id);
    if (!current) state.applications.push(enrichApplication(patch));
    else if (!manualApps.has(patch.id)) Object.assign(current, patch);
  }
  for (const patch of payload.assessments || []) {
    const current = state.assessments.find(assessment => assessment.id === patch.id);
    if (!current) state.assessments.push({ ...patch, applicationId: patch.applicationId || patch.appId });
    else if (!current.updatedByUser) Object.assign(current, patch);
  }
  for (const patch of payload.calendarTasks || []) {
    const current = state.tasks.find(task => task.id === patch.id);
    if (!current) state.tasks.push({ ...patch, sourceType: patch.sourceType || (patch.assessmentId ? "assessment" : "manual") });
    else if (!current.updatedByUser) Object.assign(current, patch);
  }
  state.sync = { version: payload.version, checkedAt: payload.checkedAt, correctedAt: payload.correctedAt || "", summary: payload.summary };
}
function dispatch(action) {
  if (!action?.type) return;
  if (action.type === "sync.reconciled") mergeSync(action.payload || window.BB_SYNC_DATA);
  if (action.type === "application.statusChanged") {
    const app = state.applications.find(item => item.id === action.applicationId);
    if (app) { app.status = action.status; app.updatedByUser = true; app.applied ||= new Date().toISOString().slice(0, 10); }
  }
  if (action.type === "assessment.completed") {
    const assessment = state.assessments.find(item => item.id === action.assessmentId);
    if (assessment) {
      assessment.status = "Confirmed";
      assessment.completionSource = action.source || "user";
      assessment.updatedByUser = true;
      const app = state.applications.find(item => item.id === (assessment.applicationId || assessment.appId));
      if (app) { app.status = assessment.type === "VI" ? "VI Completed" : assessment.type === "OT" ? "OT Completed" : app.status; app.updatedByUser = true; }
      state.tasks.filter(task => task.assessmentId === assessment.id).forEach(task => { task.done = true; task.updatedByUser = true; });
    }
  }
  if (action.type === "task.completed") {
    const task = state.tasks.find(item => item.id === action.taskId);
    if (task) { task.done = action.done ?? !task.done; task.updatedByUser = true; }
  }
  if (action.type === "task.created") {
    const task = action.task;
    if (task?.id && task.title && task.date && !state.tasks.some(item => item.id === task.id)) {
      state.tasks.push({
        ...clone(task),
        sourceType: "manual",
        sourceId: task.sourceId || task.id,
        done: Boolean(task.done),
        updatedByUser: true,
        createdAt: new Date().toISOString()
      });
    }
  }
  if (action.type === "task.created") {
    const task = action.task;
    if (task?.id && task.title && task.date && !state.tasks.some(item => item.id === task.id)) {
      state.tasks.push({
        ...clone(task),
        sourceType: "manual",
        sourceId: task.sourceId || task.id,
        done: Boolean(task.done),
        updatedByUser: true,
        createdAt: new Date().toISOString()
      });
    }
  }
  if (action.type === "answer.saved") {
    const key = `${action.questionId}::${action.scope || "general"}`;
    state.answers[key] = { ...(state.answers[key] || {}), questionId: action.questionId, scope: action.scope || "general", answer: action.answer || "", notes: action.notes || state.answers[key]?.notes || "", status: action.status || state.answers[key]?.status || "draft", updatedAt: new Date().toISOString() };
  }
  if (action.type === "story.statusChanged") {
    const experience = state.experiences.find(item => item.id === action.experienceId);
    if (experience) experience.status = action.status;
  }
  if (action.type === "todo.completed") {
    const todo = state.todos.find(item => item.id === action.todoId);
    if (todo) todo.done = action.done ?? !todo.done;
  }
  state.updatedAt = new Date().toISOString();
  save();
  notify(action);
}
function select(selector) { return typeof selector === "function" ? selector(state) : undefined; }
function subscribe(listener) { listeners.add(listener); return () => listeners.delete(listener); }

load();
window.BBStore = { getSnapshot: () => clone(state), subscribe, select, dispatch, reload: load, statusGroups, applicationCatalog };
