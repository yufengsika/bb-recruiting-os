# CSOP Capital Markets - Resume Points and Interview Walk-Throughs

This folder organizes the four resume points by workstream. Each walk-through is designed for a 75-90 second interview answer and keeps the ownership level consistent with the resume verbs: `Maintained`, `Partnered`, `Analyzed`, and `Supported`.

## Point 1 - Daily ETF Monitoring

**Resume bullet**

Maintained daily monitors for flagship and peer ETFs; analyzed net creations/redemptions, creation limits, Southbound Stock Connect holdings and closing-auction liquidity to assess fund flows, Mainland demand and institutional execution.

**Walk me through (180 words)**

One of my recurring responsibilities was maintaining a daily ETF monitoring framework across CSOP flagship products and comparable funds. I consolidated AUM, shares outstanding, net creations and redemptions, turnover, purchase and redemption caps, Southbound holdings, and closing-auction activity. The objective was not simply to report rankings. I used changes in shares and quotas to infer primary-market demand and arbitrage capacity, while Southbound holdings helped distinguish Mainland investor demand from general secondary-market turnover. Closing-auction liquidity was relevant because large creations or redemptions can ultimately require hedging or basket execution near the close. I also monitored premium-related suspensions and QDII subscription restrictions because a constrained creation channel can weaken arbitrage and widen premiums. I checked fund-company notices and PCFs against market-data feeds, flagged unusual movements, and summarized the implications for the Capital Markets and product teams. The work gave the team a consistent view of where flows were coming from, whether execution conditions were deteriorating, and whether product growth reflected genuine end-investor demand or temporary market frictions. Because it was time-sensitive, I had to balance accuracy with a fixed daily delivery schedule.

**中文口述版**

我的一项日常职责是维护公司旗舰ETF及同类产品的每日监测框架。我会整合产品规模、流通份额、净申购赎回、成交额、申赎上限、南向通持仓以及尾盘集合竞价的交易情况。这个工作的重点并不是简单更新产品排名，而是通过份额和额度变化判断一级市场需求及套利空间，通过南向持仓区分内地投资者需求和普通二级市场成交。尾盘流动性也很重要，因为较大规模的申赎最终可能涉及临近收盘时的对冲或篮子交易。我还会跟踪QDII申购限制、溢价风险提示和临时停牌，因为申购渠道受限时，套利机制可能减弱并导致溢价扩大。我会交叉核对基金公司公告、PCF和市场数据，识别异常变化，再向Capital Markets和产品团队总结可能的影响。最终，这套监测帮助团队判断资金来自哪里、市场执行条件是否恶化，以及产品规模增长究竟来自真实投资者需求，还是暂时性的市场摩擦。由于每天都有固定交付时间，这项工作也要求我同时保证准确性和时效性。

## Point 2 - AI Hardware and Korea Roadshow

**Resume bullet**

Partnered with the Investment Team to prepare institutional roadshow materials on AI hardware and Korea's memory cycle; synthesized sell-side research, expert interviews, fund flows and ETF product insights into client-ready market color.

**Walk me through (184 words)**

Another workstream was institutional roadshow support on AI hardware and Korea's memory cycle. I worked with the Investment Team rather than producing a standalone marketing document. Their role was to frame the investment thesis, while I helped translate it into a client-ready narrative and connect it with the product perspective. I synthesized sell-side research, fund-flow data, and expert-call insights to explain why AI bottlenecks were shifting from GPUs toward HBM, advanced packaging, and power infrastructure, and why Korea was positioned to benefit. I also evaluated the counterarguments, including concentrated index performance, foreign outflows, retail leverage, policy changes, and cyclical supply risk. The output was a structured deck that moved from global AI capex, to Korean macro conditions and market flows, and then to Samsung, SK Hynix, and adjacent suppliers. My value add was making the content usable for institutional conversations: reconciling conflicting data points, sharpening the investment logic, and providing market color that the client-facing team could use in follow-up discussions. It also required rapid iteration because comments from the investment, product, and distribution teams had to be incorporated without diluting the core thesis.

**中文口述版**

我的另一项工作是支持Investment Team准备AI硬件和韩国存储周期的机构客户路演。这不是由我独立制作一份营销材料，而是投资团队负责搭建核心投资观点，我负责把研究观点转化为客户能够理解和讨论的叙事，并补充产品和资金流视角。我综合了卖方研究、基金资金流以及专家访谈，解释AI产业链的瓶颈为什么正在从GPU逐步延伸到HBM、先进封装和电力基础设施，以及韩国市场为什么能够从中受益。同时，我也分析了反方因素，包括指数表现过度集中、外资流出、散户杠杆、监管变化和存储行业的周期性供给风险。最终的材料从全球AI资本开支出发，进一步分析韩国宏观环境和市场资金流，再落到三星、SK海力士及相关供应链公司。我的主要价值在于把分散甚至相互冲突的信息整理成适合机构客户交流的逻辑，强化投资主线，并向客户团队提供可以用于后续沟通的market color。这个过程也需要快速迭代，在吸收投资、产品和分销团队意见的同时，保持核心观点的一致性。

## Point 3 - Cross-Border Leveraged Product Market Impact

**Resume bullet**

Analyzed the impact of cross-border leveraged products on underlying equities by reconstructing daily rebalancing mechanics and combining product NAV/AUM with intraday trading data; tested whether closing hedging flows amplified underlying equity volatility.

**Walk me through (185 words)**

I also conducted a market-structure study on how cross-border daily leveraged products could affect their underlying equities. I used CSOP's 2x SK Hynix product as a case study, but the broader question was whether the daily leverage reset creates predictable closing flow that can amplify moves in the underlying market. I reconstructed the rebalance formula from the prospectus, using prior-day AUM, product leverage, the underlying return, and estimated closing exposure to calculate the notional adjustment required each day. I then compared the rebalance amount with SK Hynix's last-hour turnover and price movement. To avoid attributing every volatile close to ETF activity, I built a treatment-and-control design comparing large-move days with normal days and extended the initial single-day calculation to a 30-day sample. The analysis identified when potential counterparty hedging could be material relative to available liquidity, while also making clear that correlation was not proof of causality because company news and market-wide momentum could affect the close. The project helped the team evaluate market-impact risk, understand the interaction between product rebalancing and underlying-market liquidity, and determine whether product scale or trading patterns warranted closer monitoring.

**中文口述版**

我还做过一项关于跨境日内杠杆产品如何影响底层正股的市场结构研究。我以公司两倍做多SK海力士的产品作为案例，但更广泛的问题是：每日杠杆重置是否会产生可以预期的尾盘资金流，并进一步放大正股的价格波动。我首先根据产品招股书重构再平衡公式，结合前一日AUM、产品杠杆倍数、正股当日回报和收盘时的估算敞口，计算每天需要调整的名义本金。然后，我把再平衡金额与SK海力士最后一小时的成交额和价格变化进行比较。为了避免把所有尾盘波动都归因于产品交易，我设置了处理组和对照组，对比正股大幅波动日与普通交易日，并将最初的单日计算扩展到30个交易日。研究能够识别潜在交易对手对冲相对于市场流动性可能较为显著的情形，但我也明确指出，相关性并不等于因果关系，因为公司新闻和整体市场动量同样会影响尾盘表现。这项研究帮助团队理解产品再平衡与底层市场流动性的互动，并判断产品规模或交易模式是否需要更密切的风险监测。

## Point 4 - Active ETF Product Strategy

**Resume bullet**

Supported active ETF product strategy by translating Mainland regulations and U.S. market precedents into design recommendations; assessed scalable strategies, transparency constraints, target investors and adviser-led distribution to inform product positioning.

**Walk me through (199 words)**

My fourth workstream supported strategy for potential active ETF products. The purpose was not simply to compare the Mainland and U.S. markets; it was to identify what overseas market development implied for product design under Mainland constraints. I first mapped Shanghai Stock Exchange requirements covering manager eligibility, portfolio concentration, liquidity, naming, and daily PCF disclosure. I then studied the U.S. market's evolution from transparent active ETFs to semi-transparent structures and mutual-fund conversions, together with the asset-class mix, leading products, and holder composition. The most important insight was that a successful active ETF is not defined only by portfolio alpha. Its scalability also depends on strategy capacity, transparency, tradability, fee economics, and distribution fit. U.S. data showed the importance of adviser-led ownership, suggesting that investor education and channel strategy should be considered early rather than after launch. I translated the findings into questions for the product, investment, and distribution teams: which strategies can tolerate daily disclosure, which investors value intraday liquidity, how the proposition differs from index-enhancement funds and traditional mutual funds, and what operational workstreams would be required for launch. This gave the team a decision framework for product positioning rather than a descriptive market overview.

**中文口述版**

我的第四项工作是支持潜在主动ETF的产品策略研究。这个项目的目的不是为了简单比较内地和美国市场，而是研究海外市场的发展经验对于内地监管框架下的产品设计有什么启示。我首先梳理了上交所对管理人资质、基金经理要求、持仓集中度、流动性、产品命名和每日PCF披露等方面的规定。随后，我研究了美国主动ETF从全透明产品发展到半透明结构和共同基金转型ETF的过程，并分析了产品类别、头部产品、资金流和持有人结构。我得到的核心结论是，主动ETF能否成功并不只取决于投资策略能否创造alpha，还取决于策略容量、透明度、可交易性、费率以及分销渠道是否匹配。美国市场中投资顾问占据较高持有比例，也说明投资者教育和渠道策略应该在产品设计阶段就被考虑。我进一步把研究结论转化成产品、投资和分销团队需要回答的问题，例如哪些策略能够接受每日披露、哪些客户真正重视日内流动性、产品与指增基金及传统主动基金有何差异，以及发行前需要完成哪些运营准备。最终交付的不是一份描述性市场比较，而是一套支持产品定位和内部决策的分析框架。

## Interview Positioning

- Lead with Point 1 when interviewing for a core ETF Capital Markets role.
- Use Point 3 to demonstrate technical depth and market-structure thinking.
- Use Point 2 to demonstrate cross-team collaboration and institutional communication.
- Use Point 4 to demonstrate commercial judgment and the ability to turn research into product decisions.
- Do not claim that the leveraged-product study proved causality; describe it as testing market impact and identifying conditions under which rebalancing could be material.
