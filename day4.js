document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('day4-body');
  if (!el) return;

  el.innerHTML = `
    <div class="accordion-body">

      <div class="day-objective-block">
        <h3>Objective of the day</h3>
        <p>
          Define the complete design specification: the metrics the agent measures, the decision logic it
          applies including how it correlates MES and ERP signals, the time windows and filter rules it uses,
          and the constraints, approval rules, and guardrails it operates within. Every metric, rule, and
          threshold is designed against the to-be process agreed on Day 2, not how decisions are currently
          made. Where the team defaults to current practice during design, the facilitator flags it and refers
          back to the Day 2 agreement. The day's primary output is the Agent Governance and Orchestration
          Register: the structured record of what the agent may do, what it must never do, where human
          approval is required, and what it must always explain and log.
        </p>
      </div>

      <div class="core-day-output">
        <div class="core-day-output-header">
          <span class="core-artifact-label">Core Day Output</span>
          <div class="core-artifact-title">Agent Governance and Orchestration Register</div>
          <p class="artifact-purpose">
            Captures how the agent should behave, what it may recommend, what it may execute, where human
            approval is required, what explanations are needed, and what governance boundaries must be
            enforced. This register is the definitive authority on where automation ends and human judgment
            begins in the Phase 1 design.
          </p>
        </div>
        <div class="core-day-output-grid">
          <div class="core-output-col">
            <span class="core-output-col-label">BA captures manually</span>
            <ul class="ba-capture-list">
              <li>Human override expectations and the organizational conditions that drive them</li>
              <li>Confidence and trust conditions that affect whether recommendations are acted on</li>
              <li>Organizational risk boundaries and how they vary by role, shift, or scenario</li>
              <li>Explainability expectations from the operator and compliance perspectives</li>
              <li>Escalation and approval logic per action type</li>
              <li>What the agent must log, to whom, and why - from an operational accountability standpoint</li>
            </ul>
          </div>
          <div class="core-output-col">
            <span class="core-output-col-label">AI generates later</span>
            <ul class="ai-generated-list">
              <li>Approval matrix and governance table from structured inputs</li>
              <li>Audit requirement summary</li>
              <li>Access-control matrix draft</li>
              <li>Policy summary document</li>
              <li>Draft agent instruction skeleton from the decision logic specification</li>
            </ul>
          </div>
          <div class="core-output-col">
            <span class="core-output-col-label">Feeds the final playbook with</span>
            <ul class="feeds-playbook-list">
              <li>Agent behavior model and orchestration boundaries</li>
              <li>Guardrails and operating limits</li>
              <li>HITL and HOTL rules per recommendation type</li>
              <li>Explainability and audit requirements for compliance</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="sessions">

        <div class="session">
          <div class="session-toggle">
            <div class="session-number">Session 1</div>
            <div class="session-meta">
              <h3>Metric Definition and Baseline</h3>
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
                    <li>List the five to twelve metrics the use case must compute or reference.</li>
                    <li>For each metric: name it, define its unit, set the direction (higher or lower is better), specify the dimensions it can be sliced by, and identify the source columns and system it draws from.</li>
                    <li>Capture the current baseline value for each metric: the actual number from the plant today. This is the reference point for every improvement claim in the build phase and the success criteria agreed on Day 2.</li>
                    <li>Define decompositions where one metric is the product of others. For each sub-metric, define its calculation logic at formula level, not just its name.</li>
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

                <div class="block block-wide">
                  <h4>Participants</h4>
                  <ul>
                    <li>Process or Manufacturing Engineer (leads)</li>
                    <li>Finance Lead (for cost-based metrics)</li>
                    <li>Data Architect</li>
                    <li>Data owners from Day 3</li>
                    <li>Plant Manager (joins for final review and sign-off on baseline values, last 20 minutes)</li>
                  </ul>
                </div>
              </div>

              <div class="ba-journey">
                <div class="ba-journey-col">
                  <span class="ba-journey-label">Before the session</span>
                  <p>Bring the metric list from the Day 2 Use Case Definition section and the data availability section from Day 3. Pre-populate the metric catalogue template with the metrics already named, their source systems from the Day 3 ownership section, and baseline values from the Day 1 performance baseline section; the team confirms, corrects, and adds, rather than building from scratch. Flag any metric where the Day 3 assessment showed an unknown or manageable gap status so the session addresses those explicitly.</p>
                </div>
                <div class="ba-journey-col">
                  <span class="ba-journey-label">During the session</span>
                  <p>Push every metric definition to formula-level precision: not "average downtime" but "sum of UNPLAN_DT_MIN per machine per shift divided by total scheduled minutes, excluding planned maintenance events." For decomposed metrics like OEE, confirm each sub-metric formula matches how the plant actually calculates it, not the textbook definition. When two participants disagree on a baseline value, record both and confirm which is authoritative before the session closes; a disputed baseline is not a baseline.</p>
                </div>
                <div class="ba-journey-col">
                  <span class="ba-journey-label">After the session</span>
                  <p>Complete the <strong>Metric Catalogue</strong> as the primary output of this session: metric name, unit, direction, dimension list, decomposition structure, calculation formula in plain language, source system, source table and column names, time window, current baseline value, target value from Day 2, and named steward. Add a metrics reference section to the Agent Governance and Orchestration Register pointing to the catalogue. The AI Engineer implements metric calculations directly from the formula and source column definitions; the QA team uses baseline values to validate agent output against known plant history; the Data Architect uses source column definitions to design the pipeline data model.</p>
                </div>
              </div>

              <div class="output-box">
                <h4>Contribution to Day Output</h4>
                <p>Primary standalone artifact: <strong>Metric Catalogue</strong> <span class="signoff-tag">Sign-off: Plant Manager on baseline values</span> Five to twelve metrics, each at formula-level precision: name, unit, direction, dimension list, decomposition, calculation formula, source system, source table and column names, time window, current baseline value, target value from Day 2, and named steward.</p>
                <p>Adds to the <strong>Agent Governance and Orchestration Register</strong>: metrics reference section linking each decision rule to its underlying metric definition. Used by: AI Engineer (metric calculations direct from formula and source columns); QA (baseline values for output validation); Data Architect (source column definitions for pipeline data model design).</p>
              </div>
            </div>
          </div>
        </div>

        <div class="session">
          <div class="session-toggle">
            <div class="session-number">Session 2</div>
            <div class="session-meta">
              <h3>Decision Logic and Oversight Design</h3>
              <p class="session-desc">
                Define the rules the agent follows to reach a recommendation, including how it connects
                shop-floor events to ERP signals. Define time windows and filter rules. Classify every
                recommendation type as HITL or HOTL. Agree on what the agent must record and show
                the operator to justify its output.
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
                    <li>Define how the agent correlates MES events (downtime, alarms, scrap) with ERP signals (MRP exceptions, cost variances, inventory mismatches) so it identifies causes, not just symptoms.</li>
                    <li>Define an alert priority framework: severity levels, business impact categories, and how conflicting alerts are ranked when multiple exceptions occur simultaneously.</li>
                    <li>Define the time windows and filter rules the logic depends on: set the exact definition for each so it is applied consistently across all metric calculations and decision rules.</li>
                    <li>Classify every recommendation type as human-in-the-loop (agent recommends, human must approve before any action is taken) or human-on-the-loop (agent acts within defined limits, human monitors and can override). This is a binary design decision with significant build implications.</li>
                    <li>Define audit trail requirements: what is captured per recommendation, who can access the log, and the minimum retention period.</li>
                    <li>Define explainability requirements: what does the agent show the operator to explain how it reached its recommendation?</li>
                    <li>Define the agent capability set: every read operation and every write operation the agent can perform. Write operations require an explicit authorization owner and a HITL or HOTL classification.</li>
                    <li>Run a golden sample validation: use the golden sample from Day 2 to verify that the decision logic and metric definitions as designed today would produce that result. Identify what needs to change if they would not.</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Focus Questions</h4>
                  <ul>
                    <li>What exactly triggers this decision: a time threshold, an event, a metric crossing a limit?</li>
                    <li>When the agent sees an ERP exception such as an MRP shortage or a cost variance, what MES event is it most likely correlated with?</li>
                    <li>How should the agent rank competing alerts? What makes one exception higher priority than another?</li>
                    <li>What time windows does the logic compare against: this shift versus last 30 days, this week versus same week last year?</li>
                    <li>For each recommendation type: must a human approve before action is taken, or does the agent act within limits while a human monitors?</li>
                    <li>What does the operator see when the agent produces a recommendation, and is that enough to act confidently and feel accountable for the outcome?</li>
                    <li>How long must the recommendation log be retained, and who audits it?</li>
                    <li>Does the golden sample from Day 2 pass through today's decision logic as designed? If not, where does it break?</li>
                    <li>Does each decision rule reflect the to-be process the client agreed on Day 2, or is it defaulting to current practice?</li>
                  </ul>
                </div>

                <div class="block block-wide">
                  <h4>Participants</h4>
                  <ul>
                    <li>Plant Manager</li>
                    <li>Production Lead or Line Manager</li>
                    <li>Planning or Scheduling Lead</li>
                    <li>Process Engineer</li>
                    <li>Data Architect</li>
                  </ul>
                </div>
              </div>

              <div class="ba-journey">
                <div class="ba-journey-col">
                  <span class="ba-journey-label">Before the session</span>
                  <p>Review the Metric Catalogue from S1 and the golden sample from Day 2. Prepare the decision logic canvas with the use case trigger and primary role already inserted. Pre-list all recommendation types identified in the Day 2 Use Case Definition section in the HITL/HOTL classification matrix; the team classifies each row, it does not build the list in the session. Load the MES-to-ERP signal gap section from Day 3 as the starting point for the correlation map.</p>
                </div>
                <div class="ba-journey-col">
                  <span class="ba-journey-label">During the session</span>
                  <p>For every decision rule, push beyond "if X then Y" to full specification: the condition, the threshold value, the tolerance, the time window, the filter rules, and any conditions under which the rule does not apply. Capture every HITL/HOTL classification with its stated reason; classifications assumed from general policy rather than this specific use case create control gaps during build. Run the golden sample through the agreed logic before closing; if it fails, resolve the gap in the room and update the specification before leaving.</p>
                </div>
                <div class="ba-journey-col">
                  <span class="ba-journey-label">After the session</span>
                  <p>Complete the <strong>Decision Logic Specification</strong> as a standalone build document (for each rule: trigger condition, input metrics with threshold values and tolerances, time window, filter rules, exception conditions, output recommendation, HITL or HOTL classification with rationale, audit log requirement, and explainability level). Update the Agent Governance and Orchestration Register with: the MES-to-ERP correlation section; alert priority section; time window and filter rule section; HITL and HOTL classification section; audit trail section; and capability inventory section (every read and write operation, with authorization owner and classification for each write). The AI Engineer implements decision rules from the Specification; Compliance uses the HITL/HOTL classifications to design control mechanisms; QA uses the golden sample trace to structure the first test cases.</p>
                </div>
              </div>

              <div class="output-box">
                <h4>Contribution to Day Output</h4>
                <p>Standalone artifact: <strong>Decision Logic Specification</strong> - for each rule: trigger condition, input metrics, threshold values and tolerances, time window, filter rules, exception conditions, output recommendation, HITL or HOTL classification with rationale, audit log requirement, and explainability level. Used by AI Engineer (rule implementation), Compliance (control design), QA (test case structure).</p>
                <p>Adds to the <strong>Agent Governance and Orchestration Register</strong>: MES-to-ERP correlation section; alert priority section (severity tiers and ranking rules); time window and filter rule section; HITL and HOTL classification section (every recommendation type, with stated rationale); audit trail section (what is logged, who accesses it, minimum retention); capability inventory section (all read and write operations with authorization owners).</p>
              </div>
            </div>
          </div>
        </div>

        <div class="session">
          <div class="session-toggle">
            <div class="session-number">Session 3</div>
            <div class="session-meta">
              <h3>Operating Limits and Approval Framework</h3>
              <p class="session-desc">
                Define the hard limits the agent must never exceed, the approval steps for out-of-range
                recommendations, how shop-floor decisions feed back into the ERP, and what the agent
                communicates when it cannot produce a reliable output.
                Draft the executive summary brief for Day 5 review.
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
                    <li>Specify which recommendations can be acted on directly and which require human review, aligned with the HITL and HOTL classification from Session 2.</li>
                    <li>Design the approval workflow and escalation path for out-of-range or low-confidence recommendations: named role, channel, and response time expectation for each.</li>
                    <li>Design the ERP feedback loop: when the agent's recommendation is acted on, what ERP record or planning parameter should be updated, and who approves that update.</li>
                    <li>Define fallback behavior and fallback language: what the agent does and says when data is missing, stale, or confidence falls below threshold. The agent must stop and communicate clearly rather than proceed with a low-confidence output.</li>
                    <li>Define monitoring triggers for production: which signals indicate the agent is underperforming, and what happens when they fire.</li>
                    <li>Draft the executive summary brief: a one-page document capturing what was decided across all four days, the implementation direction, and what the executive is being asked to endorse on Day 5.</li>
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
                    <li>What should the agent say when it has low confidence? Who approves the fallback message text?</li>
                    <li>What signals in production indicate the agent is degrading: override rate above a threshold, data freshness SLA breaches, a pattern of operator complaints?</li>
                    <li>If the agent is suspended due to a quality issue, who is notified and how does the decision revert to manual?</li>
                  </ul>
                </div>

                <div class="block block-wide">
                  <h4>Participants</h4>
                  <ul>
                    <li>Plant Manager</li>
                    <li>Operations Head</li>
                    <li>Maintenance Lead</li>
                    <li>Compliance or EHS Lead (where applicable)</li>
                    <li>IT or OT Lead (for ERP feedback loop and monitoring design)</li>
                  </ul>
                </div>
              </div>

              <div class="ba-journey">
                <div class="ba-journey-col">
                  <span class="ba-journey-label">Before the session</span>
                  <p>Review the Decision Logic Specification and capability inventory section from S2. Pre-list every write operation from the capability inventory as rows in the constraint register template; the team assigns limits to each row, not builds the list. Prepare the executive summary brief template pre-filled with the use case name, selected metrics, and the Day 2 to-be process agreement summary; the session refines and finalizes it, not writes it from scratch.</p>
                </div>
                <div class="ba-journey-col">
                  <span class="ba-journey-label">During the session</span>
                  <p>For every proposed agent action, establish the maximum scope it may act on without human approval: a specific number or condition, not a general policy. Capture the escalation path at named-role level with the channel and expected response time. Draft the executive summary brief with the full team present so the document reflects what was actually agreed across four days rather than a reconstruction of discussions.</p>
                </div>
                <div class="ba-journey-col">
                  <span class="ba-journey-label">After the session</span>
                  <p>Update the Agent Governance and Orchestration Register with: the operating constraint section (each action type with maximum permitted scope, approval threshold, named escalation role and channel, response time expectation, and suspension trigger); the approval workflow section; the ERP feedback loop section (when and how agent decisions update ERP records, with approval chain); the fallback behavior section (conditions that trigger fallback, what the agent does, and the exact language it shows the operator); and the production monitoring trigger section (signals and thresholds for agent quality in production). Complete the <strong>Draft Executive Summary Brief</strong> as a standalone document for Day 5 review. The AI Engineer uses the constraint section to implement the action authorization layer; Risk and Compliance review it for control adequacy before build begins.</p>
                </div>
              </div>

              <div class="output-box">
                <h4>Contribution to Day Output</h4>
                <p>Adds to the <strong>Agent Governance and Orchestration Register</strong>: operating constraint section (each action type with maximum permitted scope, approval threshold, named escalation role, and suspension trigger); approval workflow section; ERP feedback loop section (when and how agent decisions update ERP records); fallback behavior section (conditions, what the agent does, exact language shown to the operator); production monitoring trigger section.</p>
                <p>Standalone artifact: <strong>Draft Executive Summary Brief</strong> - one page: selected use case, key design decisions, Phase 1 scope, client commitments made, and what the executive is being asked to endorse. Prepared with the full team present; reviewed by the IBM Workshop Lead before Day 5 S3. Used by: AI Engineer (constraint section for action authorization layer); Risk and Compliance (control adequacy review); IBM Workshop Lead (executive endorsement presentation on Day 5).</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="end-day">
        <h3>End of Day 4 - Agent Governance and Orchestration Register sections completed</h3>
        <div class="end-day-grid">
          <div class="end-card">Metric catalogue with baseline values, calculation formulas, and named stewards (signed)</div>
          <div class="end-card">Decision logic specification with MES-to-ERP correlation map (build document)</div>
          <div class="end-card">HITL/HOTL classification per recommendation type with stated rationale</div>
          <div class="end-card">Operating constraints, approval workflow, ERP feedback loop, and fallback specification</div>
          <div class="end-card">Draft executive summary brief ready for Day 5 review</div>
        </div>
      </div>

    </div>
  `;
});
