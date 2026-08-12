# BB Recruiting OS

这是申请准备项目的可运行版本。网站代码位于项目根目录，打开 `index.html` 可以查看首页；需要本地服务时，在项目根目录运行：

```bash
node dev-server.mjs
```

然后访问 <http://127.0.0.1:4175/>。站点包含申请跟踪、测评、日历、题库、简历和面试准备模块，DBS 与 CSOP 的项目故事已经写入 `prep-data.js`。

## GitHub Pages

站点使用真实的多页面目录，不使用 hash 路由：

```text
/                         首页
/applications/            申请追踪
/assessments/             OT / VI
/calendar/                日历
/prep/resume/             简历素材
/prep/interview/          面试准备
/prep/bank/               Bank Playbook
```

推送到 `main` 后，`.github/workflows/pages.yml` 会自动部署整棵站点目录。仓库包含申请状态、Outlook 同步记录、简历素材和项目附件，建议使用 GitHub 私有仓库；GitHub Pages 对私有仓库的可见性和发布能力取决于账户方案。

## 项目结构

- `index.html`、`pages/`、`shared/`、`data/`、`assets/`：招聘申请网站本体。
- `appendices/dbs/`：DBS 项目底稿，按 LF 物流 IPO、GJ 硅基 AI execution、A 香港零售 syndicate、A1/市场更新等项目分组。
- `appendices/csop/four-projects/`：CSOP 四条主线及其原始附件和项目说明。
- `appendices/csop/other-deliverables/`：CSOP 市场更新、双语简历表述、中文项目稿和 QDII/REITs 额度表。
- `appendices/csop/2802-covered-call/`：2802 Covered Call ETF 尽调报告、图表、数据和官方/竞品 PDF 资料包。
- `appendices/csop/product-matrix/`：CSOP 香港 63 产品矩阵及样例文件。
- `appendices/question-bank/`：题库原始工作簿和网站使用的导出版本。
- `appendices/interview-guide/`：DBS LF 与 CSOP 结构化面试指南。
- `appendices/research/DBS_CSOP_history_inventory.md`：历史内容盘点、项目边界和当前缺口记录。

附件目录保留底稿和正式交付物；临时渲染目录、操作系统元数据和检查日志没有迁入。
