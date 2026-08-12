const sharedExperiences = {
  csop: {
    id: "csop",
    company: "CSOP Asset Management",
    role: "Capital Market Intern · Hong Kong",
    date: "Jun 2026 - Present",
    source: "CV_Jayson_2027 Summer.pdf",
    projects: [
      {
        name: "ETF Capital Markets",
        bullets: [
          {
            text: "Partnered with the Investment Team to prepare institutional roadshow materials on AI hardware and Korea's memory cycle; synthesized sell-side research, expert interviews, fund flows and ETF product insights into client-ready market color.",
            en: "Another workstream was institutional roadshow support on AI hardware and Korea's memory cycle. I worked with the Investment Team rather than producing a standalone marketing document. Their role was to frame the investment thesis, while I helped translate it into a client-ready narrative and connect it with the product perspective. I synthesized sell-side research, fund-flow data, and expert-call insights to explain why AI bottlenecks were shifting from GPUs toward HBM, advanced packaging, and power infrastructure, and why Korea was positioned to benefit. I also evaluated the counterarguments, including concentrated index performance, foreign outflows, retail leverage, policy changes, and cyclical supply risk. The output was a structured deck that moved from global AI capex, to Korean macro conditions and market flows, and then to Samsung, SK Hynix, and adjacent suppliers. My value add was making the content usable for institutional conversations: reconciling conflicting data points, sharpening the investment logic, and providing market color that the client-facing team could use in follow-up discussions. It also required rapid iteration because comments from the investment, product, and distribution teams had to be incorporated without diluting the core thesis.",
            zh: "我的另一项工作是支持 Investment Team 准备 AI 硬件和韩国存储周期的机构客户路演。这不是由我独立制作一份营销材料，而是投资团队负责搭建核心投资观点，我负责把研究观点转化为客户能够理解和讨论的叙事，并补充产品和资金流视角。我综合了卖方研究、基金资金流以及专家访谈，解释 AI 产业链的瓶颈为什么正在从 GPU 逐步延伸到 HBM、先进封装和电力基础设施，以及韩国市场为什么能够从中受益。同时，我也分析了反方因素，包括指数表现过度集中、外资流出、散户杠杆、监管变化和存储行业的周期性供给风险。最终的材料从全球 AI 资本开支出发，进一步分析韩国宏观环境和市场资金流，再落到三星、SK 海力士及相关供应链公司。我的主要价值在于把分散甚至相互冲突的信息整理成适合机构客户交流的逻辑，强化投资主线，并向客户团队提供可以用于后续沟通的 market color。"
          },
          {
            text: "Analyzed the impact of cross-border leveraged products on underlying equities by reconstructing daily rebalancing mechanics and combining product NAV/AUM with intraday trading data; tested whether closing hedging flows amplified underlying equity volatility.",
            en: "I conducted a market-structure study on how cross-border daily leveraged products could affect their underlying equities. I used CSOP's 2x SK Hynix product as a case study, but the broader question was whether the daily leverage reset creates predictable closing flow that can amplify moves in the underlying market. I reconstructed the rebalance formula from the prospectus, using prior-day AUM, product leverage, the underlying return, and estimated closing exposure to calculate the notional adjustment required each day. I then compared the rebalance amount with SK Hynix's last-hour turnover and price movement. To avoid attributing every volatile close to ETF activity, I built a treatment-and-control design comparing large-move days with normal days and extended the initial single-day calculation to a 30-day sample. The analysis identified when potential counterparty hedging could be material relative to available liquidity, while also making clear that correlation was not proof of causality. The project helped the team evaluate market-impact risk and determine whether product scale or trading patterns warranted closer monitoring.",
            zh: "我做过一项关于跨境日内杠杆产品如何影响底层正股的市场结构研究。我以公司两倍做多 SK 海力士的产品作为案例，但更广泛的问题是：每日杠杆重置是否会产生可以预期的尾盘资金流，并进一步放大正股的价格波动。我首先根据产品招股书重构再平衡公式，结合前一日 AUM、产品杠杆倍数、正股当日回报和收盘时的估算敞口，计算每天需要调整的名义本金。然后，我把再平衡金额与 SK 海力士最后一小时的成交额和价格变化进行比较。为了避免把所有尾盘波动都归因于产品交易，我设置了处理组和对照组，对比正股大幅波动日与普通交易日，并将最初的单日计算扩展到 30 个交易日。研究能够识别潜在交易对手对冲相对于市场流动性可能较为显著的情形，但我也明确指出，相关性并不等于因果关系。这项研究帮助团队判断产品规模或交易模式是否需要更密切的风险监测。"
          },
          {
            text: "Supported active ETF product strategy by translating Mainland regulations and U.S. market precedents into design recommendations; assessed scalable strategies, transparency constraints, target investors and adviser-led distribution to inform product positioning.",
            en: "My fourth workstream supported strategy for potential active ETF products. The purpose was not simply to compare the Mainland and U.S. markets; it was to identify what overseas market development implied for product design under Mainland constraints. I mapped Shanghai Stock Exchange requirements covering manager eligibility, portfolio concentration, liquidity, naming, and daily PCF disclosure. I then studied the U.S. market's evolution from transparent active ETFs to semi-transparent structures and mutual-fund conversions, together with the asset-class mix, leading products, and holder composition. The core conclusion was that a successful active ETF is not defined only by portfolio alpha. Its scalability also depends on strategy capacity, transparency, tradability, fee economics, and distribution fit. U.S. data showed the importance of adviser-led ownership, suggesting that investor education and channel strategy should be considered early rather than after launch. I translated the findings into questions for the product, investment, and distribution teams and produced a decision framework for product positioning rather than a descriptive market overview.",
            zh: "我的第四项工作是支持潜在主动 ETF 的产品策略研究。项目目的不是简单比较内地和美国市场，而是研究海外市场的发展经验对于内地监管框架下的产品设计有什么启示。我首先梳理了上交所对管理人资质、持仓集中度、流动性、产品命名和每日 PCF 披露等方面的规定。随后，我研究了美国主动 ETF 从全透明产品发展到半透明结构和共同基金转型 ETF 的过程，并分析了产品类别、头部产品、资金流和持有人结构。核心结论是，主动 ETF 能否成功不只取决于投资策略能否创造 alpha，还取决于策略容量、透明度、可交易性、费率以及分销渠道是否匹配。美国市场中投资顾问占据较高持有比例，也说明投资者教育和渠道策略应该在产品设计阶段就被考虑。最终交付的不是一份描述性市场比较，而是一套支持产品定位和内部决策的分析框架。"
          },
          {
            text: "Maintained daily monitors for flagship and peer ETFs; analyzed net creations/redemptions, creation limits, Southbound Stock Connect holdings and closing-auction liquidity to assess fund flows, Mainland demand and institutional execution.",
            en: "One of my recurring responsibilities was maintaining a daily ETF monitoring framework across CSOP flagship products and comparable funds. I consolidated AUM, shares outstanding, net creations and redemptions, turnover, purchase and redemption caps, Southbound holdings, and closing-auction activity. The objective was not simply to report rankings. I used changes in shares and quotas to infer primary-market demand and arbitrage capacity, while Southbound holdings helped distinguish Mainland investor demand from general secondary-market turnover. Closing-auction liquidity was relevant because large creations or redemptions can ultimately require hedging or basket execution near the close. I also monitored premium-related suspensions and QDII subscription restrictions because a constrained creation channel can weaken arbitrage and widen premiums. I checked fund-company notices and PCFs against market-data feeds, flagged unusual movements, and summarized the implications for the Capital Markets and product teams. The work gave the team a consistent view of where flows were coming from, whether execution conditions were deteriorating, and whether product growth reflected genuine end-investor demand or temporary market frictions.",
            zh: "我的一项日常职责是维护公司旗舰 ETF 及同类产品的每日监测框架。我会整合产品规模、流通份额、净申购赎回、成交额、申赎上限、南向通持仓以及尾盘集合竞价的交易情况。重点不是简单更新产品排名，而是通过份额和额度变化判断一级市场需求及套利空间，通过南向持仓区分内地投资者需求和普通二级市场成交。尾盘流动性也很重要，因为较大规模的申赎最终可能涉及临近收盘时的对冲或篮子交易。我还会跟踪 QDII 申购限制、溢价风险提示和临时停牌，因为申购渠道受限时，套利机制可能减弱并导致溢价扩大。我会交叉核对基金公司公告、PCF 和市场数据，识别异常变化，再向 Capital Markets 和产品团队总结可能的影响。这套监测帮助团队判断资金来自哪里、市场执行条件是否恶化，以及产品规模增长究竟来自真实投资者需求还是暂时性的市场摩擦。"
          }
        ]
      }
    ],
    followups: [
      {
        q: "How did you derive the leveraged-product rebalance formula?",
        en: "Let prior-day NAV be N, target leverage be two, and the underlying return be r. Opening exposure is 2N. After the move, NAV becomes N + 2Nr, so target closing exposure is 2N + 4Nr. Existing exposure has moved to 2N + 2Nr. The required notional adjustment is therefore 2Nr. This explains the pro-cyclical direction, but I treated any resulting stock hedge as a plausible transmission channel rather than an observed trade.",
        zh: "设前一日 NAV 为 N、目标杠杆为 2、正股回报为 r。开盘敞口是 2N，波动后 NAV 变为 N + 2Nr，因此收盘目标敞口是 2N + 4Nr；原有敞口则变为 2N + 2Nr，两者差额即 2Nr。这个公式说明再平衡方向具有顺周期性，但我只把交易对手的正股对冲视为潜在传导渠道，而不是直接观察到的交易。"
      },
      {
        q: "What was the most important result of the market-impact study?",
        en: "The key result was the gap between mechanical size and observed price evidence. Extreme-move days produced an average estimated impact ratio of about 127%, versus 16% on quiet days, yet direction matched the closing move only about half the time. The broader sensitivity test had an R-squared near 0.005. My conclusion was that potential hedge flow could be material relative to visible liquidity, but the sample did not prove causal or directional price impact.",
        zh: "最重要的结果是机械上的资金规模与实际价格证据之间存在明显差距。极端波动日估算 impact ratio 平均约 127%，普通日约 16%，但再平衡方向与尾盘价格方向只有约一半时间一致，扩展测试的 R² 约为 0.005。因此我的结论是潜在对冲量相对可见流动性可能很大，但样本并不能证明因果或稳定的方向性影响。"
      },
      {
        q: "Why could you not claim causality?",
        en: "Extreme returns often coincide with company news, sector momentum and market-wide moves. I estimated the swap-notional adjustment but did not observe how counterparties actually hedged; they could pre-hedge, internalize flow or use derivatives. The sample and execution-window proxy were also limited. The control group reduced storytelling risk, but it did not create a clean natural experiment.",
        zh: "极端波动通常同时伴随公司新闻、行业动量或市场整体走势。我估算的是 swap 名义本金调整，并没有观察到交易对手实际如何对冲；银行可能提前对冲、内部净额处理或使用衍生品。样本量和执行窗口也有限。对照组能减少用单一事件讲故事的风险，但不能形成干净的自然实验。"
      },
      {
        q: "Which Mainland constraints mattered most for active ETFs?",
        en: "I grouped them into eligibility, portfolio construction and disclosure. The most important design constraint was full transparency: a daily creation and redemption basket and intraday IOPV improve arbitrage, but can expose positions and trading intent. That makes strategy selection critical. Broad, liquid, moderate-turnover portfolios are more compatible than concentrated small-cap or event-driven books.",
        zh: "我把限制分为管理人资格、组合构建和信息披露三类。最关键的是全透明要求：每日申赎篮子和盘中 IOPV 有利于套利和交易，但也可能暴露持仓及交易意图。因此透明度不能只当作合规事项，而要成为策略筛选条件。广泛、流动性好且换手适中的组合，比集中小盘或事件驱动策略更适合。"
      },
      {
        q: "Who is the target investor for an active ETF?",
        en: "U.S. holder analysis showed investment advisers represented roughly 74% of leading products on a scale-weighted basis. I treated that as a distribution lesson, not a forecast for China. Advisers value products that fit model portfolios and can be rebalanced efficiently; institutions care about capacity and execution; retail investors need a simple reason to pay for active management. The implication was to design channel strategy and investor education alongside the product.",
        zh: "美国头部产品持有人分析显示，按规模加权后投资顾问约占 74%。我把它视为分销启示，而不是对中国市场的直接预测。顾问重视产品能否进入模型组合并高效再平衡；机构更关注容量和执行；零售投资者需要清楚理解为什么要为主动管理付费。因此渠道策略和投资者教育必须与产品设计同步推进。"
      },
      {
        q: "What exactly did you own on the active ETF workstream?",
        en: "My role was strategy support, not product ownership. I mapped the Mainland rules, researched U.S. precedents, analyzed product mix and holder composition, and converted the findings into design questions. I did not choose the final manager, secure approvals or run a launch. My recommendation was a staged screen covering transparency tolerance, capacity, investor benefit, seed demand, market-making readiness, fee economics and channel ownership.",
        zh: "我的职责是策略支持，不是产品 owner。我梳理内地规则、研究美国先例、分析产品结构和持有人构成，再把结论转化成设计问题。我没有选择最终基金经理、取得审批或主导发行。我的建议是一套分阶段筛选框架，覆盖透明度承受能力、策略容量、投资者价值、种子资金、做市准备、费率经济性和渠道归属。"
      }
    ]
  },

  dbs: {
    id: "dbs",
    company: "DBS Asia Capital Limited",
    role: "Investment Banking Intern · Hong Kong",
    date: "Jan 2026 - Jun 2026",
    source: "Xicheng Lu_Resume.pdf / CV_Jayson_2027 Summer.pdf",
    projects: [
      {
        name: "LF · Origination - Potential Logistics IPO Opportunity",
        bullets: [
          {
            text: "Prepared pitchbooks in collaboration with the Corporate Banking team, including equity story refinement, comparable company benchmarking, and DCF-based valuation analysis for target corporate clients.",
            en: "At DBS Asia Capital, I supported an origination pitch for a potential Hong Kong IPO in the logistics sector, working with the Corporate Banking team. The objective was to convert the client's operating profile into an investable equity story and an evidence-based valuation range. I organized the narrative around three questions: why the market was attractive, why the company was differentiated, and how the financial profile could support public-market valuation. The themes included its pan-Asian footprint, exposure to e-commerce and ASEAN growth, technology-enabled supply-chain capabilities, strategic shareholder support, and improving operating efficiency. I refreshed the comparable-company analysis across regional logistics operators and selected global peers, separating business models rather than relying on one broad peer set. I also built and reviewed a DCF with bear, base and bull cases, using revenue growth, EBIT-margin progression, working-capital needs, WACC and terminal growth as the main sensitivities, and cross-checked the result with exit and trading multiples. My contribution was connecting company fundamentals, valuation and investor appetite into a coherent financing proposition.",
            zh: "在 DBS Asia Capital，我支持了一个潜在物流企业港股 IPO 的 origination pitch，并与 Corporate Banking 团队协作。项目目标是把公司的经营情况转化成可投资的 equity story 和有依据的估值区间。我围绕三个问题组织叙事：市场为什么有吸引力、公司为什么差异化、财务表现如何支撑公开市场估值。核心包括泛亚洲网络、电商与东南亚增长、科技驱动的供应链能力、战略股东支持和经营效率改善。我更新了区域物流公司与部分全球公司的可比分析，按商业模式拆分 peer set，而不是使用一个宽泛的同业组；同时建立并复核 bear、base、bull 三种情景的 DCF，重点测试收入增长、EBIT 利润率、营运资金、WACC 和永续增长率，并用退出倍数和交易倍数交叉验证。我的贡献是把公司基本面、估值和投资者偏好连接成一套完整的融资逻辑。"
          },
          {
            text: "Supported investor targeting by working with the Private Banking team to identify upstream / downstream strategic investors.",
            en: "Investor targeting made the pitch more specific. A generalist public-markets investor would focus on earnings growth, margin progression, valuation and free cash flow, while a strategic investor could care more about network synergies, geographic entry, technology, customer access or value-chain integration. Working with the Private Banking team helped us identify family offices, entrepreneurs and strategic counterparties who could understand the business beyond a generic logistics label. I supported the mapping and analysis; relationship ownership remained with the relevant bankers.",
            zh: "投资者筛选让 pitch 更具体。普通二级市场投资者主要关注盈利增长、利润率、估值和自由现金流，而战略投资者可能更在意网络协同、区域进入、技术、客户资源或产业链整合。与 Private Banking 团队合作，让我们能够识别真正理解公司产业联系的家族办公室、企业家和战略交易对手。我负责投资者 mapping 和分析，客户关系仍由相关 banker 负责。"
          },
          {
            text: "Maintained firmwide HKEX A1 filing tracker to analyze sponsor coverage, sector trends, and PE/VC participation to support origination.",
            en: "I maintained a firmwide tracker of HKEX A1 filings and standardized fields such as applicant, sector, sponsor, filing date and PE/VC participation. The value was not the tracker itself but the origination view it created: where sponsor activity was concentrating, which sectors were building a pipeline, and where financial-sponsor involvement could signal future financing needs. I used the tracker to support sector updates and prioritization discussions rather than treating every filing as an actionable lead.",
            zh: "我维护了一套覆盖全公司的港交所 A1 递表 tracker，并统一整理申请人、行业、保荐人、递表日期和 PE/VC 参与等字段。价值不在于表格本身，而在于它形成的 origination 视角：保荐人业务集中在哪里、哪些行业正在形成 pipeline、财务投资者参与是否可能带来后续融资需求。我用它支持行业更新和优先级讨论，而不是把每个递表项目都当成可执行线索。"
          }
        ]
      },
      {
        name: "GJ · Execution - Leading AI Solution Company",
        bullets: [
          {
            text: "Participated in FDD and post-A1 model refresh by incorporating the latest accountant report into the Profit Financial Forecast model, reconciling variances versus prior forecasts, validating key assumptions, and drafting management discussion question lists.",
            en: "On the GJ execution, I supported the post-A1 profit forecast model refresh after the latest accountant's report became available. I mapped the updated historical figures into the working model, reconciled changes against the previous forecast, and traced differences back to revenue mix, project timing, gross margin, operating expenses and working-capital assumptions. The objective was not simply to replace numbers; it was to identify where the forecast logic no longer reconciled with the latest audited base and where management input was required. I summarized the main bridges and drafted a discussion list for management, separating formula or mapping issues from genuine business-assumption questions. The next deep dive is to articulate the forecast build more precisely: bottom-up revenue verification by project and key account, then top-down sanity checks using customer concentration, NDR, project pipeline and business-line KPIs.",
            zh: "在 GJ 的 execution 项目中，最新会计师报告出来后，我参与了 post-A1 profit forecast model 的更新。我把更新后的历史数据映射进工作模型，与上一版预测逐项核对，并把差异追溯到收入结构、项目确认节奏、毛利率、经营费用和营运资金假设。这个工作并不是简单替换数字，而是识别最新审计基数与预测逻辑之间哪些地方不再一致、哪些问题需要管理层进一步解释。我把主要 forecast bridge 汇总出来，并起草 management discussion question list，区分公式或映射错误与真正的业务假设问题。下一步需要进一步拆清预测模型：先按项目和 key account 做 bottom-up revenue verification，再用客户集中度、NDR、项目 pipeline 和各业务线 KPI 做 top-down sanity check。"
          },
          {
            text: "Supported customer DD scoping and revenue verification based on the company's updated revenue/client sheet; analyzed key customer revenue contribution, concentration, and YoY trends by business line as preparation for refile materials.",
            en: "I used the updated revenue and client sheet to support customer due-diligence scoping and revenue verification. I segmented customers by business line and period, calculated contribution and year-on-year movement, and highlighted which accounts drove changes in concentration. The key judgment was that the business should not be presented like a subscription SaaS model. Key-account solutions were project-based, so NDR reflected spending by the same customer cohort rather than contractual ARR retention. I therefore looked at NDR together with project size, repeat purchases, signed or proposed contracts and changes in key-account mix. Customer A was both important validation and a concentration risk, so the work also supported decisions on which customers required interviews or further documentary evidence before the refile.",
            zh: "我基于更新后的 revenue/client sheet 支持客户尽调范围和收入核验。我按业务线和期间划分客户，计算收入贡献及同比变化，并识别哪些客户推动了集中度变化。关键判断是不能把这项业务讲成订阅型 SaaS：key-account solution 以项目制为主，因此 NDR 反映的是同一客户群体的项目支出变化，而不是合同型 ARR 留存。我会把 NDR 与项目金额、复购、已签或拟签合同及 key-account mix 的变化结合分析。Customer A 既是商业验证，也是集中度风险，因此这些分析也支持判断哪些客户需要访谈或进一步文件证据，以准备 refile 材料。"
          },
          {
            text: "Assisted in drafting HKEX and SFC response materials, coordinating with company management to address questions on operating sustainability and assumption reasonableness through analyzing signed/proposed contracts, working capital turnover and CCC.",
            en: "I assisted with HKEX and SFC response materials on business sustainability and the reasonableness of forecast assumptions. The company had strong revenue growth but remained loss-making with negative operating cash flow, so the response needed to bridge accounting performance, project economics and cash conversion rather than rely on a high-level AI growth narrative. I analyzed signed and proposed contracts, project timing, receivables and working-capital turnover, and the cash conversion cycle to test whether management's assumptions were supported by observable evidence. I then helped organize management questions and cross-check that the response language was consistent with the prospectus and model. My role was analytical and drafting support; senior bankers, counsel and management owned the final regulatory position.",
            zh: "我协助准备 HKEX 和 SFC 关于经营可持续性及预测假设合理性的回复材料。公司收入增长较快，但仍处于亏损且经营现金流为负，因此回复不能只依赖 AI 行业高增长叙事，而要把会计表现、项目经济性和现金转化连接起来。我分析了已签和拟签合同、项目确认节奏、应收账款、营运资金周转和 CCC，检验管理层假设是否有可观察证据支持；随后协助整理管理层问题，并核对回复表述与招股书和模型是否一致。我的职责是分析和起草支持，最终监管立场由 senior bankers、律师和管理层负责。"
          }
        ]
      },
      {
        name: "A · Syndicate - Hong Kong Local Retail Group",
        bullets: [
          {
            text: "Supported pre-IPO investor education and meeting preparation for an upcoming listing candidate; organized investor meetings, summarized key investor concerns and feedback, and helped the company refine market positioning and equity story.",
            en: "I supported pre-IPO investor education and meeting preparation for a Hong Kong retail listing candidate. I organized meeting logistics and materials, captured recurring investor questions, and summarized feedback for the deal team. The useful part was translating scattered comments into themes the company could act on, including positioning, growth visibility, consumer demand and valuation framing. I supported the process and synthesis rather than leading investor meetings or determining final messaging.",
            zh: "我支持了一家香港零售上市候选人的 pre-IPO investor education 和会议准备，负责整理会议安排与材料、记录投资者反复提出的问题，并向 deal team 汇总反馈。工作的重点是把分散的评论归纳成公司能够回应的主题，包括市场定位、增长可见性、消费需求和估值表达。我负责流程和信息整理，不负责主导投资者会议或决定最终信息。"
          }
        ]
      }
    ],
    followups: [
      {
        q: "What exactly did you do on the logistics IPO pitch?",
        en: "I supported three linked workstreams: refining the equity story, refreshing the peer set and DCF, and mapping strategic or value-chain investors with the Private Banking team. I did not lead the client meeting or set the final valuation range. My role was to make the analysis internally consistent and presentation-ready for senior bankers.",
        zh: "我支持了三个相互连接的工作流：完善 equity story、更新 peer set 和 DCF，以及与 Private Banking 团队筛选战略或产业链投资者。我没有主导客户会议，也没有决定最终估值区间；我的职责是让分析在内部保持一致并达到可展示状态。"
      },
      {
        q: "How did you select comparable companies?",
        en: "I separated closer regional logistics operators from broader international companies and compared geography, asset intensity, service mix, margins, growth and scale. I focused on medians because the set contained outliers, and tested whether growth, margin quality, concentration and execution risk justified a premium or discount. Comps anchored market expectations rather than producing one mechanical answer.",
        zh: "我把区域内更接近的物流运营商与大型国际公司分开，比较地域、资产强度、业务组合、利润率、增长和规模。由于 peer set 存在离群值，我更重视中位数，并检验增长、利润质量、集中度和执行风险是否支持溢价或折价。可比公司分析用于锚定市场预期，而不是机械地产生一个答案。"
      },
      {
        q: "Walk me through the DCF and key sensitivities.",
        en: "I projected revenue, EBIT, taxes, D&A, capex and working capital to derive unlevered free cash flow. The working model used roughly 9.8% WACC and 2% terminal growth, with bear and bull cases around operating assumptions. I cross-checked perpetuity growth with an exit EV/EBITDA approach. Margin realization and terminal assumptions were the largest sensitivities, so I presented a range and triangulated it with trading multiples.",
        zh: "我预测收入、EBIT、税项、折旧摊销、资本开支和营运资金，得到 UFCF。工作模型使用约 9.8% WACC 和 2% 永续增长率，并对经营假设设置 bear/base/bull 情景；同时用退出 EV/EBITDA 交叉验证永续增长法。利润率兑现和终值假设最敏感，因此应该呈现估值区间，并与交易倍数互相验证。"
      },
      {
        q: "Why does GJ qualify under Rule 8.05(3)?",
        en: "GJ applies under the Main Board market capitalisation / revenue test. It was loss-making and had negative operating cash flow during the track-record period, so it did not rely on the profit or cash-flow tests. Its 2025 revenue was RMB788.8 million, above the HK$500 million threshold after conversion, and expected market capitalisation at listing exceeded HK$4 billion.",
        zh: "GJ 走主板 Rule 8.05(3) 市值/收入测试。公司在往绩期仍亏损且经营现金流为负，因此不依赖利润或现金流测试。2025 年收入为人民币 7.888 亿元，折算后高于 5 亿港元门槛，预期上市市值也超过 40 亿港元。"
      },
      {
        q: "How should you interpret the decline in NDR?",
        en: "NDR fell from 254.4% to 115.6% and then 82.2%, but it should not be read as SaaS ARR retention because key-account solutions were project-based. I would reconcile the decline with product migration, customer mix, project timing, repeat purchases and contract evidence. A figure below 100% is still a sustainability concern, but the right question is whether new and repeat project economics support the forecast.",
        zh: "NDR 从 254.4% 降到 115.6% 再到 82.2%，但不能把它直接当成 SaaS ARR 留存，因为 key-account solution 是项目制。需要结合产品迁移、客户结构、项目确认节奏、复购和合同证据解释。低于 100% 仍然是可持续性问题，但真正要检验的是新增与复购项目的经济性是否支撑预测。"
      },
      {
        q: "Why was Customer A both validation and risk?",
        en: "Customer A demonstrated that a large sophisticated buyer would deploy the solution, but its revenue contribution also created concentration, renewal and receivables risks. I would test contract structure, project-by-project economics, historical collection, pipeline visibility and the plan to diversify. Concentration does not automatically prevent listing, but it requires clear evidence and disclosure.",
        zh: "Customer A 证明大型成熟客户愿意部署产品，是商业验证；但其收入贡献也带来集中度、续约和应收账款风险。我会检查合同结构、逐项目经济性、历史回款、pipeline 可见性和客户多元化计划。集中度不必然阻止上市，但必须有充分证据和披露。"
      },
      {
        q: "How did you assess negative operating cash flow?",
        en: "I separated accounting loss from cash conversion and looked at project fulfilment costs, cloud services, employee costs, receivables, working-capital turnover and CCC. Strong revenue growth did not by itself answer the sustainability question. The response needed to show how signed or proposed contracts, collection assumptions and funding resources supported working-capital sufficiency.",
        zh: "我把会计亏损与现金转化分开分析，重点看项目履约成本、云服务、员工成本、应收账款、营运资金周转和 CCC。收入高增长本身不能回答可持续性问题；回复需要用已签或拟签合同、回款假设和资金资源证明营运资金充足。"
      },
      {
        q: "What was your ownership on the regulatory responses?",
        en: "I supported analysis, cross-checking and drafting. I reviewed the model and client data, traced evidence for assumptions, organized management questions and checked consistency across the response, prospectus and forecast. I did not own the final legal or regulatory conclusion; that remained with senior bankers, counsel and management.",
        zh: "我负责分析、交叉核对和起草支持：复核模型和客户数据、为假设追溯证据、整理管理层问题，并检查回复、招股书和预测之间的一致性。最终法律或监管结论由 senior bankers、律师和管理层负责。"
      }
    ]
  },

  gaorong: {
    id: "gaorong",
    company: "Gaorong Capital",
    role: "Investment Intern · Shenzhen",
    date: "Nov 2025 - Dec 2025",
    source: "Xicheng Lu_Resume.pdf",
    projects: [{ name: "Resume bullets", bullets: [
      { text: "Independently sourced and mapped leading U.S. and China investment opportunities across frontier AI themes, focusing on embodied intelligence, world models and AI4S; drafted Investment Committee materials to support internal investment discussions." },
      { text: "Assessed liquidity options for China-related portfolio assets, including secondary transactions, spin-off structures and IPO pathways; mapped potential buyers and strategic counterparties to support exit planning." },
      { text: "Leveraged alternative data and hands-on product testing to validate growth trajectory, and conducted expert interviews to assess workflow integration and user retention metrics for follow-on investment decisions." }
    ]}],
    followups: []
  },

  za: {
    id: "za",
    company: "ZA Bank",
    role: "Alternative Investment Intern · Hong Kong",
    date: "Jun 2025 - Aug 2025",
    source: "Xicheng Lu_Resume.pdf",
    projects: [{ name: "Resume bullets", bullets: [
      { text: "Conducted technical and commercial due diligence to validate the addressable replacement market across high-performance computing and semiconductor applications." },
      { text: "Benchmarked the company's solution against alternative thermal management technologies and assessed supply chain readiness to support evaluation of the target technology route." },
      { text: "Supported investment analysis for an AI Fintech Agent Company's Investment Committee, performing TAM sizing, trading comparables, and precedent M&A analysis to model multi-scenario exit potentials and valuation sensitivities." },
      { text: "Executed comprehensive commercial and financial due diligence, and synthesized customer insights and financial analysis to assess scalability, product-market fit, and key investment risks." }
    ]}],
    followups: []
  }
};

const resumeData = [
  {
    id: "markets",
    short: "Markets / AM / ETF",
    title: "Markets / Asset Management / ETF",
    subtitle: "CSOP 在前，保留 DBS execution 与 ZA 投资经历",
    file: "file:///Users/jasonlu/申请2027/CV_Jayson_2027%20Summer.pdf",
    updated: "22 Jul 2026",
    experiences: [sharedExperiences.csop, sharedExperiences.dbs, sharedExperiences.za]
  },
  {
    id: "ibd",
    short: "IBD / Private Markets",
    title: "Investment Banking / Private Markets",
    subtitle: "DBS 在前，保留 Gaorong 与 ZA 投资经历",
    file: "file:///Users/jasonlu/申请2027/Xicheng%20Lu_Resume.pdf",
    updated: "7 Jul 2026",
    experiences: [sharedExperiences.dbs, sharedExperiences.gaorong, sharedExperiences.za]
  }
];

const todoData = [
  {
    id: "behavioral",
    order: 1,
    title: "建立行为面故事库",
    area: "Behavioral",
    status: "明天一起过",
    finding: "已找到可用素材，但没有找到定稿的 difficulty / teamwork / resilience 成套回答。",
    scope: "先用 DBS 与 CSOP 各选高质量案例，覆盖 difficulty、teamwork、resilience，并补 conflict、failure/setback、leadership；同时整理 Why IBD 和 Weakness。",
    sources: [
      "CSOP：固定时点的每日监测、跨团队路演快速迭代、杠杆产品研究的证据边界",
      "DBS：Corporate Banking / Private Banking 协作、管理层与律师/会计师协调、监管回复",
      "个人：hockey 与 trombone 的 discipline / teamwork，只作为补充，不替代实习案例"
    ],
    next: "逐题选唯一主故事，写 STAR 主答案及 3-5 个项目特定追问；单独完成 Why IBD 和 Weakness 的中英文版本。"
  },
  {
    id: "mna",
    order: 2,
    title: "整理 UBS M&A Case",
    area: "UBS / M&A Case",
    status: "等你 guide",
    finding: "对应 UBS DriveCraft Solutions Superday M&A case，与讯兔项目无关。先登记待办，暂不整理正文。",
    scope: "明天按你的口径重新过收购建议、报价与控制权溢价、SOTP / DCF、Amazon 协同、董事会替代方案和交易条款。",
    sources: [
      "UBS GB Internship Superday Case Study - DriveCraft Solutions_vF_clean.pdf",
      "DriveCraft_Amazon_Takeover_Case.pptx"
    ],
    next: "等你 guide 后再决定如何进入 UBS 数据库；现在不继续改内容。"
  },
  {
    id: "ubs-bank",
    order: 3,
    title: "建立 UBS Bank Database",
    area: "Bank-specific",
    status: "已有 VI 底稿",
    finding: "UBS 上次 VI 与 mentor 脚本已找到；另有中英文面试稿、DriveCraft M&A Superday case 和 XiaBuxiaBu case。",
    scope: "形成可重复使用的 UBS 页面：Why UBS、Why GB/IBD、Tell me about yourself、市场观点、stock pitch、VI 题库、Superday case、已面进度和复盘。",
    sources: [
      "UBS_Interview_Answer_Scripts_V2.md",
      "UBS_面试回答稿_中文版.md",
      "DriveCraft_Amazon_Takeover_Case.pptx",
      "Xiabuxiabu_Case_Study_Preparation.md"
    ],
    next: "把上次真实 VI 题目与最终作答逐题登记，标注可沿用、需更新和 bank-specific 部分。"
  },
  {
    id: "za-deep-dive",
    order: 4,
    title: "ZA Bank 经历逐条对稿",
    area: "Resume / Investment",
    status: "明天一起过",
    finding: "最新版 IBD 简历有 4 条 ZA bullet，其中讯兔 IC/FDD 与半导体热管理项目已有较多原始素材。",
    scope: "分开半导体 thermal management 与 AI Fintech Agent 两个项目，逐条确认本人工作、模型、FDD 指标、投资结论和 follow-up。",
    sources: [
      "Xicheng Lu_Resume.pdf 中 ZA Bank 的 4 条 bullet",
      "讯兔 Project Alpha 已整理稿",
      "本地 ZA / 中信资本项目文件"
    ],
    next: "你按项目纠正 ownership 和关键数字，再生成每条双语故事，Follow-up 集中放在 ZA 经历底部。"
  },
  {
    id: "gaorong-deep-dive",
    order: 5,
    title: "Gaorong Capital 经历逐条对稿",
    area: "Resume / VC",
    status: "明天一起过",
    finding: "最新版 IBD 简历有 3 条 Gaorong bullet，目前 Demo 仅展示 PDF 原文，尚未迁移项目故事。",
    scope: "覆盖 frontier AI sourcing、portfolio liquidity / secondary / spin-off / IPO pathways，以及 alternative data、产品测试和 expert interviews。",
    sources: [
      "Xicheng Lu_Resume.pdf 中 Gaorong Capital 的 3 条 bullet",
      "历史 Gaorong 项目文件与对话，待明天按具体公司逐项确认"
    ],
    next: "你确定哪些公司和判断可以讲，我再写双语 150-200 词故事与项目特定追问。"
  },
  {
    id: "lbo",
    order: 6,
    title: "整理 LBO",
    area: "Technical / Modeling",
    status: "待讨论",
    finding: "暂不展开正文，先作为独立技术待办登记。",
    scope: "过一遍 LBO 模型结构、融资来源与用途、债务偿还、退出假设、MOIC / IRR 和核心敏感性。",
    sources: [
      "待下一次讨论时确认使用哪一套 case 或模型"
    ],
    next: "由你确定 case 和面试深度后再整理。"
  },
  {
    id: "dcf",
    order: 7,
    title: "整理 DCF",
    area: "Technical / Valuation",
    status: "待讨论",
    finding: "暂不展开正文，先作为独立估值待办登记。",
    scope: "系统整理 UFCF、WACC、terminal value、EV-to-equity bridge、敏感性分析及常见追问。",
    sources: [
      "现有 DBS LF 物流项目 DCF 与 UBS case 材料，具体使用范围待确认"
    ],
    next: "由你确定先用哪个项目过模型和面试表达。"
  }
];

window.BB_PREP_DATA = { sharedExperiences, resumes: resumeData, todos: todoData };
