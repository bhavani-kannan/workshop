document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('day4-body');
  if (!el) return;

  el.innerHTML = `
    <div class="accordion-body">

      <div class="day-objective-block">
        <h3>Objective of the day</h3>
        <p>
          Define the complete design specification: the metrics the agent measures, each grounded in the
          current performance baseline; the decision logic it applies including how it correlates MES and
          ERP signals; the concepts and filter rules it uses; and the constraints, approval rules, and
          guardrails it operates within. Everything agreed today goes directly into the build brief.
          The executive summary brief for Day 5 endorsement is drafted at the end of this day.
        </p>
      </div>

      <div class="sessions">

        <div class="session">
          <div class="session-toggle">
            <div class="session-number">Session 1</div>
            <div class="session-meta">
              <h3>Metric Catalogue</h3>
              <p class="session-desc">
                Define the metrics the use case depends on: what each measures, how it decomposes,
                what it is derived from, what the current baseline value is, and who is accountable
                for its definition and quality.
              </p>
            </div>
            <span class="session-chevron"></span>
          </div>
          <div class="session-content">
            <div class="session-content-inner">
              <div class="session-grid">
                <div class="block">
                  <h4>Objective</h4>
                  <ul>
                    <li>List the 5 to 12 metrics the use case must compute or reference.</li>
                    <li>For each metric: name it, define its unit, set the direction (higher or lower is better), specify the dimensions it can be sliced by, and identify the source columns and system it draws from.</li>
                    <li>Capture the current baseline value for each metric: the actual number from the plant today. This is the reference point for every improvement claim in the build phase and the success criteria agreed on Day 2.</li>
                    <li>Define decompositions where one metric is the product of others: for example, OEE equals availability multiplied by performance multiplied by quality. For each sub-metric, define its calculation logic in plain language, not just its name.</li>
                    <li>Assign a steward to each metric and confirm who resolves disputes about its definition.</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Focus Questions</h4>
                  <ul>
                    <li>What are the metrics this use case must be able to compute or display?</li>
                    <li>For each metric: what is its unit, and is higher or lower the right direction?</li>
                    <li>What is the current value of this metric at your plant right now? What does a good week look like versus a bad week, in numbers?</li>
                    <li>Which dimensions must each metric support: by plant, line, machine, shift, product?</li>
                    <li>Does any metric decompose into sub-metrics? For each sub-metric, how is it actually calculated from raw source data?</li>
                    <li>Which source system and which specific table or data feed does each metric derive from?</li>
                    <li>Who is accountable for the definition and quality of each metric? Who gets called when two teams report different numbers?</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Participants</h4>
                  <ul>
                    <li>Process or Manufacturing Engineer (leads)</li>
                    <li>Finance Lead (for cost-based metrics)</li>
                    <li>Data Architect</li>
                    <li>Domain stewards from Day 3</li>
                    <li>Plant Manager (joins for final review and sign-off on baseline values: last 20 minutes)</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Accelerators</h4>
                  <ul>
                    <li>Metric catalogue template: pre-populated with the reference metric library (OEE, availability, performance, quality, downtime minutes, cost per unit, throughput, scrap rate, on-time delivery). The team confirms which apply, adds plant-specific metrics, and fills in current baseline values: sent as pre-work so values arrive before the session.</li>
                    <li>Calculation logic reference: plain-language derivation formulas for the most common manufacturing metrics, including OEE decomposition, MTBF, MTTR, and scrap rate. Used to validate how the client calculates each metric rather than assuming industry-standard formulas are in use.</li>
                    <li>Decomposition diagram: a visual metric tree showing how compound metrics break into sub-metrics and which source fields feed each node.</li>
                  </ul>
                </div>
              </div>

              <div class="output-box">
                <h4>Session output</h4>
                <ul>
                  <li>Metric catalogue: 5 to 12 metrics, each with name, unit, direction, dimensions, time windows, decomposition, calculation logic in plain language, source system and columns, current baseline value, and assigned steward.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="session">
          <div class="session-toggle">
            <div class="session-number">Session 2</div>
            <div class="session-meta">
              <h3>Defining Decision Rules and Human Oversight</h3>
              <p class="session-desc">
                Define the rules the agent follows to reach a recommendation, including how it connects
                shop-floor events to ERP signals. Define the time windows and filter rules the logic depends on.
                Classify every recommendation type as requiring human approval before action or human oversight
                after the fact, and agree what the agent must record and show the operator to justify its output.
              </p>
            </div>
            <span class="session-chevron"></span>
          </div>
          <div class="session-content">
            <div class="session-content-inner">
              <div class="session-grid">
                <div class="block">
                  <h4>Objective</h4>
                  <ul>
                    <li>Map the decision logic: what triggers the agent, what metrics and data it reads, what rules it applies, what thresholds it uses, and what recommendation it produces.</li>
                    <li>Define how the agent correlates MES events (downtime, alarms, scrap) with ERP signals (MRP exceptions, cost variances, inventory mismatches) so it sees causes, not just symptoms.</li>
                    <li>Define an alert priority framework: severity levels, business impact categories, and how conflicting alerts are ranked when multiple exceptions occur simultaneously.</li>
                    <li>Define the time windows and filter rules the logic depends on: today, this shift, this week, last 30 days; unplanned events only, night shift only, high-priority orders only. Set the exact definition for each so it is applied consistently across all metric calculations and decision rules.</li>
                    <li>Classify every recommendation type as human-in-the-loop (agent recommends, human must approve before any action is taken) or human-on-the-loop (agent acts within defined limits, human monitors and can override). This is a binary design decision with significant build implications.</li>
                    <li>Define audit trail requirements: every agent recommendation that leads to an action must be logged. Agree on what is captured, who can access the log, and the minimum retention period.</li>
                    <li>Define explainability requirements: what does the agent show the operator to explain how it reached its recommendation? A full reasoning trace, a summary of the top contributing factors, or a confidence score only?</li>
                    <li>Define the agent capability set: every operation the agent can perform as part of its reasoning. Separate read operations (query MES downtime events, retrieve ERP MRP exceptions, calculate OEE, fetch SOP document) from write operations (send alert, update ERP reason code, trigger ERP rescheduling). Write operations require an explicit authorization owner and an HITL or HOTL classification from earlier in this session.</li>
                    <li>Run a golden sample validation: use the golden sample agreed on Day 2 to verify that the decision logic and metric definitions, as designed today, would produce that result. If they would not, identify what needs to change.</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Focus Questions</h4>
                  <ul>
                    <li>What exactly triggers this decision: a time threshold, an event, a metric crossing a limit?</li>
                    <li>When the agent sees an ERP exception such as an MRP shortage or a cost variance, what MES event is it most likely correlated with?</li>
                    <li>How should the agent rank competing alerts? What makes one exception higher priority than another?</li>
                    <li>What time windows does the logic compare against: this shift vs. last 30 days, this week vs. same week last year?</li>
                    <li>What filter rules matter: only unplanned events, only high-priority orders, only night shift?</li>
                    <li>For each recommendation type: must a human approve before action is taken, or does the agent act within limits while a human monitors?</li>
                    <li>What does the operator see when the agent produces a recommendation: and is that enough for them to understand why, act confidently, and feel responsible for the outcome?</li>
                    <li>How long must the recommendation log be retained, and who audits it?</li>
                    <li>Does the golden sample from Day 2 pass through today's decision logic as designed? If not, where does it break?</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Participants</h4>
                  <ul>
                    <li>Plant Manager</li>
                    <li>Production Lead or Line Manager</li>
                    <li>Planning or Scheduling Lead</li>
                    <li>Process Engineer</li>
                    <li>Data Architect</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Accelerators</h4>
                  <ul>
                    <li>Decision logic canvas: trigger, inputs, rules, thresholds, and output recommendation: pre-structured with the use case name and golden sample already inserted.</li>
                    <li>MES-to-ERP correlation reference: common pairs of shop-floor events and the ERP symptoms they cause: pre-populated so the team validates and extends, not builds from scratch.</li>
                    <li>Alert priority framework template: severity tiers (critical, high, medium, low), business impact categories, and alert ranking rules when multiple exceptions occur simultaneously.</li>
                    <li>Time window and filter rule template: name, type (time window or operational filter), exact filter logic in plain language, and the source columns it applies to.</li>
                    <li>HITL and HOTL classification matrix: a two-column table with every recommendation type in the left column. The team marks each row as human-in-the-loop or human-on-the-loop and records the rationale.</li>
                    <li>Golden sample trace template: a structured walkthrough that applies the agreed decision logic step by step to the Day 2 golden sample to verify it produces the expected output.</li>
                  </ul>
                </div>
              </div>

              <div class="output-box">
                <h4>Session output</h4>
                <ul>
                  <li>Decision logic diagram: trigger, input metrics, evaluation rules, thresholds, and output recommendation.</li>
                  <li>MES-to-ERP correlation map: which shop-floor events the agent watches for, and which ERP signals they explain.</li>
                  <li>Alert priority framework: severity tiers, business impact ranking, and alert ranking rules.</li>
                  <li>Time windows and filter rules: each named, with exact filter logic and the source columns it applies to.</li>
                  <li>HITL and HOTL classification: every recommendation type classified, with rationale recorded.</li>
                  <li>Audit trail specification: what is logged, who can access it, and retention period.</li>
                  <li>Explainability specification: what the agent shows the operator and at what level of detail.</li>
                  <li>Agent capability inventory: every read and write operation the agent can perform, with authorization owner and HITL or HOTL classification for each write. This is the build team's reference for what the agent can access and what it can action.</li>
                  <li>Golden sample trace result: confirmed pass, or a gap log with what needs to change in the logic.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="session">
          <div class="session-toggle">
            <div class="session-number">Session 3</div>
            <div class="session-meta">
              <h3>Setting Operating Limits and Approval Rules</h3>
              <p class="session-desc">
                Define the hard limits the agent must never exceed, the approval steps for out-of-range
                recommendations, how shop-floor decisions feed back into the ERP, and what the agent
                communicates when it cannot produce a reliable output.
                Draft the executive summary brief ready for Day 5.
              </p>
            </div>
            <span class="session-chevron"></span>
          </div>
          <div class="session-content">
            <div class="session-content-inner">
              <div class="session-grid">
                <div class="block">
                  <h4>Objective</h4>
                  <ul>
                    <li>Define hard limits the agent must never exceed: safety thresholds, regulatory requirements, contract terms, union agreement constraints.</li>
                    <li>Specify which recommendations can be acted on directly and which require human review: aligned with the HITL and HOTL classification from Session 2.</li>
                    <li>Design the approval workflow and escalation path for out-of-range or low-confidence recommendations.</li>
                    <li>Design the ERP feedback loop: when the agent's recommendation is acted on, what ERP record or planning parameter should be updated, and who approves that update.</li>
                    <li>Define fallback behavior and fallback language: what the agent does and what it says to the operator when data is missing, stale, or confidence falls below threshold. The agent must stop and tell the operator rather than proceed with a low-confidence output.</li>
                    <li>Define monitoring triggers for production: which signals indicate the agent is underperforming, and what happens when they fire: human review, alert to IT, or automatic suspension of agent actions.</li>
                    <li>Draft the executive summary brief: a one-page document capturing what was decided across all four days, the implementation direction, and what the executive is being asked to endorse on Day 5. Better drafted with the full team present than assembled ad hoc on Day 5 morning.</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Focus Questions</h4>
                  <ul>
                    <li>Which recommendations can the plant team act on immediately without additional approval?</li>
                    <li>What hard limits must the agent never exceed: safety thresholds, regulatory requirements, contractual terms?</li>
                    <li>Who approves a recommendation that falls outside the normal operating range?</li>
                    <li>How does the approval process change during planned shutdowns, emergencies, or shift handover?</li>
                    <li>When a decision is made on the shop floor, should the agent prompt an ERP update: routing change, BOM correction, reason code reclassification? Who approves that update?</li>
                    <li>What should the agent say when it has low confidence? "I do not have enough reliable data to make a recommendation right now": or something more specific? Who approves the fallback message text?</li>
                    <li>What signals in production indicate the agent is degrading: recommendation override rate above a threshold, user complaints, data freshness SLA breaches?</li>
                    <li>If the agent is suspended due to a quality issue, who is notified and how does the decision revert to manual?</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Participants</h4>
                  <ul>
                    <li>Plant Manager</li>
                    <li>Operations Head</li>
                    <li>Maintenance Lead</li>
                    <li>Compliance or EHS Lead (where applicable)</li>
                    <li>IT or OT Lead (for ERP feedback loop and monitoring design)</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Accelerators</h4>
                  <ul>
                    <li>Decision authority matrix template: recommendation type, HITL or HOTL classification, normal operating range, out-of-range approver, emergency approver.</li>
                    <li>ERP feedback loop design guide: a reference mapping of agent recommendation types to the ERP records they may trigger, with the approval chain for each.</li>
                    <li>Fallback language library: example agent messages for common low-confidence scenarios: missing data, stale data, conflicting signals. The team selects and adapts rather than writes from scratch.</li>
                    <li>Monitoring trigger reference: common signals that indicate agent degradation in manufacturing deployments, with suggested thresholds and response actions.</li>
                    <li>Executive summary brief template: pre-structured one-pager with sections for selected use case, design decisions, implementation direction, client commitments, and what is being asked of the executive sponsor.</li>
                  </ul>
                </div>
              </div>

              <div class="output-box">
                <h4>Session output</h4>
                <ul>
                  <li>Constraint register: hard limits, soft limits, and override conditions.</li>
                  <li>Approval workflow diagram: who approves what, at what threshold, through what channel, in what timeframe.</li>
                  <li>ERP feedback loop definition: when and how agent decisions update downstream ERP records or planning parameters.</li>
                  <li>Fallback behavior specification: conditions that trigger fallback, what the agent does, and the exact language it shows the operator.</li>
                  <li>Production monitoring trigger list: signals, thresholds, and response actions for agent quality in production.</li>
                  <li>Draft executive summary brief: ready for review and refinement on Day 5 morning, not assembled under time pressure before the endorsement session.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="end-day">
        <h3>End of Day 4 outputs</h3>
        <div class="end-day-grid">
          <div class="end-card">Metric catalogue with baseline values, calculation logic, and stewards</div>
          <div class="end-card">Decision logic with MES-to-ERP correlation map and alert priority framework</div>
          <div class="end-card">Time windows, filter rules, and HITL/HOTL classification per recommendation type</div>
          <div class="end-card">Constraint register, approval workflow, ERP feedback loop, and fallback specification</div>
          <div class="end-card">Draft executive summary brief ready for Day 5</div>
        </div>
      </div>

    </div>
  `;
});
