# DCF 完整复习指南与 Jefferies 面试答案

来源：`DCF小班课（2小时）` 转录稿。本文按投行建模与面试口径重组，并修正转录中的术语错误。课程以 Apple 为示例；公式和回答适用于一般非金融企业。

## 一、先用 30 秒讲清楚 DCF

DCF 是一种 intrinsic valuation method：预测公司在显性预测期内能够产生的自由现金流，用与现金流口径一致的折现率折现，再加入终值，得到企业价值或股权价值。

最常见的是 unlevered DCF：

1. 预测收入、利润率、税率、D&A、Capex 和营运资金；
2. 计算 UFCF；
3. 用 WACC 折现显性期 UFCF 和 terminal value，得到 enterprise value；
4. 完成 EV-to-equity bridge，再除以 fully diluted shares outstanding，得到 implied share price；
5. 用 WACC / terminal growth 或 WACC / exit multiple 做 sensitivity，并与 trading comps、precedent transactions 交叉验证。

核心原则：现金流、折现率和估值口径必须匹配。

| 现金流 | 折现率 | 直接得到 |
|---|---|---|
| UFCF / FCFF | WACC | Enterprise Value |
| LFCF / FCFE | Cost of Equity | Equity Value |

## 二、完整建模流程

### 1. 确定估值日期、历史期和预测期

- 使用最新年度报告和最新季度报告，将最近十二个月或当年预测更新至估值日。
- 明确 valuation date、fiscal year-end、share price date、tax rate 和 projection period。
- 显性预测期通常为 5–10 年，要长到公司进入相对稳定状态；周期性、早期或高增长公司可能需要更长时间。
- 如果估值日不在财年末，使用 stub period。第一期折现指数可近似为：

  `Stub = (first projected fiscal year-end - valuation date) / 365`

- 年末折现假设现金流在年末收到；mid-year convention 假设现金流全年均匀产生，通常把折现指数提前 0.5 年。两种方法不能混用。

### 2. 建立经营预测

先理解业务驱动因素，再落到财务报表。不要只把历史增长率机械外推。

**收入**

- 能拆则按产品、客户、地区、价格 × 数量或其他经营 KPI 做 bottom-up build；
- 用市场规模、份额、历史增长、公司指引和同业表现做 top-down sanity check；
- 成熟期增长应逐步回落至可持续水平。

**利润率**

- 预测 EBITDA 或 EBIT margin，说明规模效应、产品组合、定价、投入和竞争的影响；
- 一次性、非经营性项目要标准化，不能进入可持续经营利润。

**税率**

- 估值使用正常化的 marginal 或可持续 cash tax rate；
- 全球公司可参考历史 effective rate、业务地区和已知税制变化，但不能盲目沿用异常年份。

**D&A 与 Capex**

- 简化模型可把 Capex 作为收入的百分比，D&A 与历史固定资产或 Capex 建立关系；
- 详细模型应建立 PP&E / D&A schedule，区分 maintenance 和 growth Capex；
- 终值期必须保证 Capex、D&A 和增长假设相互一致。永续增长不可能长期依赖 `Capex < D&A`。

**营运资金**

Operating NWC 通常定义为：

`Operating Current Assets excluding Cash - Operating Current Liabilities excluding Debt`

常见项目包括应收、存货、其他明确的经营流动资产，应付、递延收入和其他明确的经营流动负债。现金、短期投资、短期借款和其他融资项目通常排除。

- `NWC 增加`：占用现金，在 FCF 中扣除；
- `NWC 减少`：释放现金，在 FCF 中加回；
- 不清楚的 “other” 项目要查附注，不能仅凭名称纳入。

可用 DSO、DIO、DPO 或收入百分比进行预测。

### 3. 计算自由现金流

**UFCF / FCFF**

`UFCF = EBIT × (1 - Tax Rate) + D&A - Capex - Change in NWC`

它是支付债权人和股东之前的现金流，因此不扣利息，也不加入净借款，适合用 WACC 折现并得到 EV。

**LFCF / FCFE**

`LFCF = Net Income + D&A - Capex - Change in NWC + Net Borrowing`

它是支付利息和债务变动后留给普通股股东的现金流，用 cost of equity 折现并直接得到 equity value。

面试和投行模型通常优先使用 UFCF，因为它独立于资本结构，更便于比较公司和分析交易。但银行等以债务作为经营投入的金融机构，或资本结构能够可靠预测的情形，可能更适合 FCFE、dividend discount 或其他行业方法。

### 4. 计算 WACC

`WACC = E / (D + E) × Cost of Equity + D / (D + E) × Pre-tax Cost of Debt × (1 - Tax Rate)`

权重必须使用 market values，而不是资产负债表中的 book value。

**Cost of Equity**

CAPM 的基本形式：

`Cost of Equity = Risk-free Rate + Levered Beta × Equity Risk Premium`

必要时加入 country risk premium。风险自由利率、ERP、现金流币种和长期增长率应保持币种一致。

**Beta**

上市公司可参考可靠数据库，但仍应检查测算期、频率和异常值。私人公司通常从可比公司推导：

`Unlevered Beta = Levered Beta / [1 + (1 - T) × D / E]`

对可比公司的 unlevered beta 取中位数，再按目标公司的目标资本结构 relever：

`Relevered Beta = Unlevered Beta × [1 + (1 - T) × D / E]`

私人公司没有可观察的 market equity value，因此可以使用可比公司的目标或行业资本结构。不能用 book equity 冒充 market equity。

**Cost of Debt**

优先使用公司债券 YTM、信用评级对应的利差，或无评级公司的 synthetic rating。`Interest Expense / Average Debt` 只能作为历史粗略代理；它受旧债票息、债务平均余额和会计分类影响，不一定代表当前 marginal cost of debt。WACC 中要使用税后债务成本。

### 5. 计算 Terminal Value

终值通常占 DCF 的大部分，因此假设必须可辩护，并用两种方法交叉检查。

**Perpetuity Growth / Gordon Growth**

`TV at Year n = UFCF in Year n+1 / (WACC - g)`

其中：

`UFCF in Year n+1 = UFCF in Year n × (1 + g)`

要求 `WACC > g`。长期增长率应反映公司成熟后的名义增长，通常不应长期高于其主要经营地区、现金流币种对应经济体的名义 GDP 增长。跨国公司应看收入和经营活动的地域，而不只是注册地。

**Exit Multiple**

`TV at Year n = Terminal-year Metric × Selected Exit Multiple`

最常用是 EV / EBITDA，也可按行业使用 EV / EBIT、EV / Revenue 等。倍数应来自可比公司和当前周期，并确保 terminal-year metric 与倍数口径一致。

**两种方法的交叉检查**

- 用 perpetuity growth 得到 TV 后，反推 implied exit multiple；
- 用 exit multiple 得到 TV 后，反推 implied perpetual growth rate；
- 若反推结果明显不符合成熟公司的增长、利润率或同业倍数，应重新审视假设，而不是为了贴近股价强行改数。

### 6. 折现并得到 Enterprise Value

对每年 UFCF 和 TV 使用相应折现指数：

`PV of UFCF_t = UFCF_t / (1 + WACC)^t`

`EV = Sum of PV of Explicit-period UFCF + PV of Terminal Value`

检查 terminal value 占 EV 的比例。如果比例过高，不一定意味着模型错误，但说明结果对远期假设高度敏感，应扩大显性期、加强交叉验证或明确风险。

### 7. EV-to-Equity Bridge

常见框架：

`Equity Value = EV`

`+ Cash and Cash Equivalents`

`+ Non-operating Investments / Associates / Other Non-operating Assets`

`- Debt and Debt-like Items`

`- Preferred Stock`

`- Non-controlling Interests`

`- Unfunded Pensions and Other Claims`

具体调整必须与 EBITDA / FCF 口径一致。例如 EBITDA 是否包含租赁费用，会影响 lease liabilities 和相关指标的处理；不能机械套桥接公式或重复计算。

上市公司最后计算：

`Implied Share Price = Equity Value / Fully Diluted Shares Outstanding`

稀释股数应考虑期权、RSU、可转债等潜在稀释，并使用适当的 treasury stock method 或 if-converted method。

### 8. Sensitivity、情景和输出

至少做两张二维敏感性表：

- WACC × Perpetual Growth Rate；
- WACC × Exit Multiple。

再用 bear / base / bull 情景测试收入增长、利润率、Capex 和 NWC，而不只是 terminal assumptions。最终输出应是 valuation range，不是一个伪精确的单点。

用 football field 将 DCF、trading comps、precedent transactions 和其他适用方法放在同一估值区间中，并标注当前股价、52 周区间或交易价格作为参考。

## 三、面试官常见深挖

### 为什么 UFCF 用 WACC 折现？

UFCF 在利息和净借款之前，属于债权人和股东共同的现金流；WACC 同时反映两类资本提供者的要求回报。因此折现后得到 EV。LFCF 已经扣除债务相关现金流，只属于股东，所以用 cost of equity 折现并得到 equity value。

### WACC 上升 1%，估值为什么下降？

所有未来现金流的现值下降，而且 Gordon Growth 的分母 `WACC - g` 变大，terminal value 同时下降。长期资产、高增长公司和终值占比较高的公司通常更敏感。

### g 上升为什么估值上升？

它既提高下一期 FCF，又缩小 `WACC - g` 的分母，因此提高 TV。但 g 越接近 WACC，模型越不稳定，所以 g 必须保持可持续并进行 sensitivity。

### 两家公司增长相同，为什么估值倍数不同？

增长只是一个因素。利润率、资本效率、现金转化、收入质量、风险、资本强度、竞争优势和 WACC 都会影响一个单位增长能产生多少可分配现金流，因此倍数可以不同。

### DCF 何时不适用或可靠性较低？

- 现金流长期为负且无法可靠预测；
- 周期性业务正处于异常高点或低点；
- 金融机构的债务属于经营投入，EV 与 UFCF 难以定义；
- 资源公司储量有限，可能更适合 NAV；
- 初创公司经营模式仍在变化，终值主导全部结果。

此时不是简单放弃估值，而是使用更适合的行业方法、情景分析和相对估值，并明确不确定性。

## 四、Jefferies Question Bank 答案

### Q1. DCF – what CF are you using (UFCF or LFCF)? What are the two ways to find the terminal value? What discount rate is used?

**Interview-ready answer**

I would normally use unlevered free cash flow because it is capital-structure neutral. I would calculate it as EBIT after tax, plus D&A, less capex and the increase in net working capital. Since that cash flow is available to both debt and equity holders, I would discount it at WACC to arrive at enterprise value. I would then bridge from enterprise value to equity value by adding cash and other non-operating assets and subtracting debt and other debt-like claims.

The two standard terminal-value methods are the perpetuity-growth method and the exit-multiple method. Under perpetuity growth, terminal value is next year's free cash flow divided by WACC minus the long-term growth rate. Under the exit-multiple method, I apply a selected trading multiple, usually EV/EBITDA, to the terminal-year metric. I would use one as the primary method and the other as a cross-check.

If I used levered free cash flow instead, I would discount it at the cost of equity and arrive directly at equity value.

### Q2. What are the main valuation methodologies, and how would their values differ?

**Interview-ready answer**

The three core methodologies are trading comparables, precedent transactions and DCF. Trading comparables apply the market multiples of similar listed companies and therefore reflect current minority-market pricing. Precedent transactions use multiples paid in comparable acquisitions and are often higher because they may include a control premium and expected synergies, although the result depends heavily on transaction timing and comparability. DCF is intrinsic: it values the company's own forecast free cash flow and is less directly tied to current market pricing, but it is highly sensitive to operating assumptions, WACC and terminal value.

I would not assume a fixed ranking. Precedents often give the highest range and trading comps a lower range, but a DCF can be above or below both depending on the forecast and terminal assumptions. I would triangulate the methods and explain the drivers of any gap rather than average them mechanically.

### Q3. Did you do any modelling?

**Interview-ready answer using the DBS logistics pitch**

Yes. At DBS Asia Capital, I supported a DCF for a potential Hong Kong IPO in the logistics sector. I projected revenue, EBIT, taxes, D&A, capex and working capital to derive unlevered free cash flow. The working model used a base WACC of roughly 9.8% and a 2% terminal growth rate, with bear and bull cases around revenue growth, margin progression and working-capital needs. I also cross-checked the perpetuity-growth result against an exit EV/EBITDA approach and trading comparables. My role was to build and review the analysis and make the assumptions internally consistent; senior bankers owned the final valuation range and client recommendation.

## 五、最后检查清单

- [ ] Cash flow 与 discount rate 是否匹配？
- [ ] WACC 权重是否使用 market value？
- [ ] Beta 是否正确 unlever / relever？
- [ ] Cost of debt 是否反映当前 marginal borrowing cost？
- [ ] 税率、币种、risk-free rate、ERP 和 g 是否一致？
- [ ] NWC 是否只包含经营项目，且变化方向正确？
- [ ] 终值年的增长、利润率、Capex 和 D&A 是否可持续？
- [ ] `WACC > g` 是否成立？
- [ ] EV-to-equity bridge 是否完整且没有 double count？
- [ ] 稀释股数是否正确？
- [ ] 两种 TV 方法是否互相交叉检查？
- [ ] 是否呈现 sensitivity 和 valuation range，而不是单点？
