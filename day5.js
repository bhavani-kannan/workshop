document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('day5-body');
  if (!el) return;

  el.innerHTML = `
    <div class="accordion-body">

      <div class="day-objective-block">
        <h3>Objective of the day</h3>
        <p>
          Test the full design specification against real plant scenarios before any code is written.
          Resolve gaps on the spot where possible. Define how agent quality will be measured and managed
          in production after launch. Close the day with stakeholder sign-offs on each deliverable
          by the accountable domain owner, and executive endorsement of the implementation roadmap.
          Finalize the tacit knowledge backlog as the unambiguous record of Phase 1 scope boundaries.
          The day's primary output is the Validation and Transformation Readiness Register: the structured
          record of what was validated, where confidence was confirmed or conditional, and what moves
          into the transformation backlog.
        </p>
      </div>

      <div class="core-day-output">
        <div class="core-day-output-header">
          <span class="core-artifact-label">Core Day Output</span>
          <div class="core-artifact-title">Validation and Transformation Readiness Register</div>
          <p class="artifact-purpose">
            Captures whether the proposed agent behavior survives real operational scenarios, where
            participants trust or reject the logic, which gaps remain unresolved, and what must move
            into change management or future backlog. This is the final intelligence object before build begins.
          </p>
        </div>
        <div class="core-day-output-grid">
          <div class="core-output-col">
            <span class="core-output-col-label">BA captures manually</span>
            <ul class="ba-capture-list">
              <li>Human trust reactions during scenario walkthroughs: where participants accept or reject the agent's logic</li>
              <li>Non-agentizable areas confirmed by stakeholders during validation</li>
              <li>Change management risks observed in the room</li>
              <li>As-is defaulting behavior during validation: each instance logged with role and decision step</li>
              <li>Remaining blockers to implementation with named owners and resolution dates</li>
              <li>Readiness confidence and the specific conditions attached to it</li>
            </ul>
          </div>
          <div class="core-output-col">
            <span class="core-output-col-label">AI generates later</span>
            <ul class="ai-generated-list">
              <li>Validation summary from scenario records</li>
              <li>Rollout plan draft from roadmap inputs</li>
              <li>Risk summary document</li>
              <li>Adoption dashboard and training recommendation draft</li>
              <li>QA test case draft from scenario results</li>
            </ul>
          </div>
          <div class="core-output-col">
            <span class="core-output-col-label">Feeds the final playbook with</span>
            <ul class="feeds-playbook-list">
              <li>Scenario validation evidence and overall readiness rating</li>
              <li>Adoption risks derived from observed behavior, not assumed</li>
              <li>Transformation backlog: deferred items, non-agentizable decisions, future-phase candidates</li>
              <li>Final build/no-build confidence with conditions stated</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="sessions">

        <div class="session">
          <div class="session-toggle">
            <div class="session-number">Session 1</div>
            <div class="session-meta">
              <h3>Scenario Validation and Gap Resolution</h3>
              <p class="session-desc">
                Run the decision logic and metric definitions through four to five real plant scenarios.
                Where the design produces the wrong answer or fails to correlate the MES cause with the
                ERP symptom, identify the root cause and resolve it on the spot.
                Assign an overall confidence rating to the design specification.
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
                    <li>Select four to five scenarios from actual plant history: a standard operating day, a machine breakdown, a material shortage, an urgent order conflict, and a multi-line capacity crunch.</li>
                    <li>Walk the metric calculations and decision logic through each scenario step by step using real or realistic data values.</li>
                    <li>Test the MES-to-ERP correlation: does the agent correctly identify the shop-floor cause behind the ERP symptom in each scenario?</li>
                    <li>Compare the agent output to what an experienced operator would actually decide or report. Use the golden sample from Day 2 as the reference benchmark for the normal operating scenario.</li>
                    <li>For each scenario that produces a partial or failed result, classify the root cause immediately: a gap in the decision logic, a metric definition gap, a missing concept, a data gap, a broken MES-to-ERP correlation, or a wrong assumption.</li>
                    <li>Resolve gaps on the spot where possible. Log items that require additional design work with an owner and resolution date.</li>
                    <li>Assign an overall confidence rating to the full design specification: high, medium, or conditional, with the specific conditions stated.</li>
                    <li>Observe whether participants reason from the agreed to-be process or default to current as-is behavior during the walkthrough. Log every instance with the participant role and the specific decision step where the default occurred; this is an adoption plan input, not a design failure.</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Focus Questions</h4>
                  <ul>
                    <li>Does the logic produce the right recommendation on a normal operating day? Does it match the golden sample?</li>
                    <li>What does the agent recommend when a machine breaks down mid-shift with open orders at risk?</li>
                    <li>When the ERP shows an MRP shortage, does the agent correctly trace it to the MES event that caused it?</li>
                    <li>How does the agent handle a material shortage where inventory data in the ERP does not match the physical floor count?</li>
                    <li>Do the metric values and time window filter rules produce the expected numbers in each scenario?</li>
                    <li>For each failed result: is the failure caused by a logic gap, a metric issue, a missing concept, a data quality problem, or a broken MES-to-ERP link?</li>
                    <li>Which gaps can be resolved today and which need additional design work before build begins?</li>
                    <li>During the walkthrough, did participants make decisions based on the to-be process or based on current habits? Where they defaulted to as-is, what does that tell us about what the adoption plan needs to address before go-live?</li>
                    <li>What is the team's honest confidence that this design will perform reliably on the plant floor at launch?</li>
                  </ul>
                </div>

                <div class="block block-wide">
                  <h4>Participants</h4>
                  <ul>
                    <li>Plant Manager</li>
                    <li>Production Supervisor or Line Manager</li>
                    <li>Planning Lead</li>
                    <li>Maintenance Lead</li>
                    <li>IT or OT Lead (joins for gap resolution)</li>
                    <li>Process Engineer (joins for gap resolution)</li>
                    <li>Data Architect (joins for gap resolution)</li>
                  </ul>
                </div>
              </div>

              <div class="ba-journey">
                <div class="ba-journey-col">
                  <span class="ba-journey-label">Before the session</span>
                  <p>Prepare four to five scenario cards from plant history using the Metric Catalogue and Decision Logic Specification as the evaluation framework. Pre-map the MES-to-ERP correlation test cases from the exception pairs logged on Day 1; these test known historical events rather than hypotheticals. Confirm the golden sample from Day 2 is available as the benchmark for the normal operating scenario, and load the metric traceability sheet so any wrong number can be traced to its source column quickly.</p>
                </div>
                <div class="ba-journey-col">
                  <span class="ba-journey-label">During the session</span>
                  <p>Run each scenario step by step and classify every partial or failed result before moving to the next; do not defer gap analysis to a consolidation step after the session. Track behavioral observations separately from design gaps: every instance where a participant defaults to as-is reasoning gets logged with the participant role, the specific step, and the to-be equivalent. For every gap resolved in the room, update the Specification document before the session closes; the updated document is the output, not the marked-up draft.</p>
                </div>
                <div class="ba-journey-col">
                  <span class="ba-journey-label">After the session</span>
                  <p>Update the Validation and Transformation Readiness Register with: the scenario results section (each scenario with recommendation produced, expected recommendation, pass/partial/fail rating, and gap root cause); the behavioral observation section (each instance of as-is defaulting with participant role and decision step); the gap resolution section (open items with root cause, resolution approach, named owner, and resolution date); and the overall confidence rating section (high, medium, or conditional, with specific conditions stated). Update the Decision Logic Specification, Metric Catalogue, and Agent Governance and Orchestration Register with all session changes; the updated versions are the definitive design authority. Used by: AI Lead (confidence assessment), QA (test suite design), Change Management Lead (behavioral observation log for training content).</p>
                </div>
              </div>

              <div class="output-box">
                <h4>Contribution to Day Output</h4>
                <p>Adds to the <strong>Validation and Transformation Readiness Register</strong>: scenario results section (each scenario with pass/partial/fail rating and gap root cause); behavioral observation section (as-is defaulting instances with role and step); gap resolution section (open items with owners and resolution dates); overall confidence rating (high, medium, or conditional, with conditions stated).</p>
                <p>Also updates the Decision Logic Specification, Metric Catalogue, and Agent Governance and Orchestration Register with all changes agreed in the room; those updated versions replace the Day 4 originals as the definitive build documents. Used by: AI Engineer (updated specifications as design authority); QA (scenario results as first test suite input); Change Management Lead (behavioral observations as targeted training input).</p>
              </div>
            </div>
          </div>
        </div>

        <div class="session">
          <div class="session-toggle">
            <div class="session-number">Session 2</div>
            <div class="session-meta">
              <h3>Production Monitoring and Governance</h3>
              <p class="session-desc">
                Agree on what good agent performance looks like in production, how human overrides feed
                back into improvement, what triggers a performance review, and who on the client
                side owns ongoing governance.
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
                    <li>Agree on the metrics and signals that confirm the agent is performing as designed in the months after launch, not just on the day it goes live.</li>
                    <li>Agree on what good performance looks like: recommendation acceptance rate, override rate, operator-reported usefulness, and alignment with the Day 2 golden sample and success criteria.</li>
                    <li>Design the feedback capture mechanism: when a human overrides the agent recommendation, where is that override captured, who reviews it, and how does it feed back into logic or threshold refinement? Without this mechanism, the agent cannot improve after launch.</li>
                    <li>Define the threshold that triggers a model review: override rate above a set percentage, a data freshness service level breach sustained beyond a defined period, or a pattern of operator complaints. Agree who initiates the review and what the review process looks like.</li>
                    <li>Designate the agent governance owner on the client side: the person accountable for monitoring agent performance, reviewing override logs, coordinating on refinements, and deciding when the agent should be suspended.</li>
                    <li>Define the knowledge base governance plan for any reference documents the agent retrieves as context: who maintains them, how often reviewed, who approves additions.</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Focus Questions</h4>
                  <ul>
                    <li>How do we know the agent is performing well six months after launch? What numbers do we look at?</li>
                    <li>What recommendation acceptance rate would indicate the agent is trusted? What rate would indicate a problem?</li>
                    <li>When an operator overrides the agent recommendation, where does that go today? Where should it go after launch?</li>
                    <li>Who on the client team reviews override logs and decides whether a pattern indicates a logic error or a data problem?</li>
                    <li>What is the threshold at which the agent should be reviewed: 20% override rate, 30%, something else? Who decides?</li>
                    <li>If the data freshness service level from Day 3 is breached for more than 24 hours, what happens to agent recommendations: do they continue, show a warning, or stop?</li>
                    <li>Who is the agent governance owner on the client side, and what is their authority to suspend agent actions?</li>
                    <li>Which reference documents does the agent use as context? Who owns them, and how will they be kept current?</li>
                  </ul>
                </div>

                <div class="block block-wide">
                  <h4>Participants</h4>
                  <ul>
                    <li>Data Architect</li>
                    <li>IT or OT Lead</li>
                    <li>Plant Manager</li>
                    <li>Adoption Champion (designated on Day 2)</li>
                    <li>IBM AI Lead</li>
                  </ul>
                </div>
              </div>

              <div class="ba-journey">
                <div class="ba-journey-col">
                  <span class="ba-journey-label">Before the session</span>
                  <p>Pre-populate the production monitoring template using the Day 2 success criteria as the initial threshold anchors and the production monitoring trigger section from Day 4 as the signal inventory. Prepare the governance charter template with the agent name, use case, and Day 3 freshness service levels already inserted; the session assigns owners and thresholds, not builds structure.</p>
                </div>
                <div class="ba-journey-col">
                  <span class="ba-journey-label">During the session</span>
                  <p>Push for a named governance owner before the session closes: a person, not a role title. For every monitoring threshold agreed, document who reviews the alert, through what channel, and what the escalation chain looks like; general statements like "IT is notified" are not sufficient. Knowledge base governance must name specific documents and their individual review owners, not apply a general policy.</p>
                </div>
                <div class="ba-journey-col">
                  <span class="ba-journey-label">After the session</span>
                  <p>Complete the <strong>Production Monitoring Plan</strong> as a standalone operations document: each monitoring signal with threshold, alert channel, named reviewer, escalation path, and consequence when threshold is breached. Complete the <strong>Agent Governance Charter</strong> as a standalone signed document: named governance owner, authority to suspend agent actions, override log review cadence, model review trigger conditions, review process, and knowledge base document inventory with owners and review frequency. Update the Validation and Transformation Readiness Register with the governance and monitoring configuration sections. Used by: Operations team (monitoring plan for dashboard configuration); IBM AI Lead (governance charter to frame post-launch support terms); client governance owner (their operating brief from day one).</p>
                </div>
              </div>

              <div class="output-box">
                <h4>Contribution to Day Output</h4>
                <p>Standalone artifacts: <strong>Production Monitoring Plan</strong> - each signal with threshold, alert channel, named reviewer, escalation path, and breach consequence; used by Operations to configure production dashboards and alert routing after launch. <strong>Agent Governance Charter</strong> <span class="signoff-tag">Sign-off: Named Governance Owner</span> Named governance owner, authority to suspend, override log review cadence, model review process, and knowledge base inventory; used by the governance owner as their operating brief from day one.</p>
                <p>Adds to the <strong>Validation and Transformation Readiness Register</strong>: governance configuration section (named governance owner, authority boundaries, review cadence) and monitoring signal section (thresholds and escalation paths). Used by: IBM AI Lead (post-launch support scope); IBM Delivery Lead (governance charter to structure client-side ownership after launch).</p>
              </div>
            </div>
          </div>
        </div>

        <div class="session">
          <div class="session-toggle">
            <div class="session-number">Session 3</div>
            <div class="session-meta">
              <h3>Implementation Planning and Sign-Off</h3>
              <p class="session-desc">
                Agree on what gets built and in what sequence. Finalize the tacit knowledge backlog.
                Obtain sign-off on each deliverable from the accountable domain owner.
                Confirm the change management plan. Secure executive endorsement of the implementation roadmap.
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
                    <li>Define Phase 1 scope: what gets built first, what gets deferred, and what the first deliverable milestone looks like.</li>
                    <li>Map dependencies between build team deliverables and client deliverables: data access confirmed in the Day 3 data commitment, master data corrections, system integrations, team availability.</li>
                    <li>Finalize the tacit knowledge backlog: review every entry in the Tacit Knowledge section of the Operational Context Register and confirm its final classification. Resolved means standardized into a rule or threshold now in the design specification. Deferred means logged as a future-phase item with an owner and target date. Out of scope means excluded from Phase 1 with the stated reason. This backlog is the record of what the agent cannot do in Phase 1 and why; it is a scoping document, not a gap list.</li>
                    <li>Confirm the change management plan: training schedule, rollout sequence, communication approach, and how the Day 2 adoption champion escalates issues during build and rollout.</li>
                    <li>Walk through the deliverable register and obtain sign-off from each accountable stakeholder: data owners confirm the ownership section, metric stewards confirm the catalogue, Plant Manager confirms decision logic and constraints.</li>
                    <li>Present the executive summary brief (drafted at the end of Day 4) to the executive sponsor. This confirms that the direction, scope, and client commitments are endorsed at the top.</li>
                    <li>Document all open issues with owners and resolution dates. Agree on the build phase start date.</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Focus Questions</h4>
                  <ul>
                    <li>What is the minimum viable scope for the first build phase: what must work on day one to demonstrate value to the plant floor?</li>
                    <li>Which data products, master data corrections, and system integrations must be in place before build starts?</li>
                    <li>What does the client team need to deliver before the build team can proceed, and what is the agreed date for each item?</li>
                    <li>For each tacit knowledge entry classified as deferred: what is the target phase and the owner responsible for moving it forward?</li>
                    <li>For entries classified as out of scope: does the Phase 1 design explicitly handle those decision points as human steps, and is that reflected in the HITL/HOTL classification?</li>
                    <li>Is each domain steward and accountable stakeholder ready to confirm their deliverable today?</li>
                    <li>What open issues remain, who owns them, and what is the latest date they must be resolved without affecting the build start?</li>
                    <li>Does the executive sponsor endorse the implementation direction, client commitments, and resourcing plan?</li>
                  </ul>
                </div>

                <div class="block block-wide">
                  <h4>Participants</h4>
                  <ul>
                    <li>Deliverable sign-off: data owners, metric stewards, Plant Manager, IT or OT Lead, Adoption Champion</li>
                    <li>Executive endorsement: Executive Sponsor (CEO, COO, or equivalent)</li>
                    <li>IBM Workshop Lead</li>
                  </ul>
                </div>
              </div>

              <div class="ba-journey">
                <div class="ba-journey-col">
                  <span class="ba-journey-label">Before the session</span>
                  <p>Compile the Deliverable Sign-Off Register with every named workshop output pre-listed and the accountable stakeholder already named against each entry; the session is a signing exercise, not an assembly exercise. Pre-fill the implementation planning template with client dependencies from the Day 3 Data Commitment Document. Consolidate the tacit knowledge entries from the Operational Context Register into final backlog format: one row per entry, with the Day 2 agentizability boundary decision carried forward and the final Day 5 classification to be confirmed in session.</p>
                </div>
                <div class="ba-journey-col">
                  <span class="ba-journey-label">During the session</span>
                  <p>Walk every deliverable register line; each accountable stakeholder confirms their deliverable before the executive presentation begins. Do not abbreviate this step. Review the tacit knowledge backlog systematically before the executive enters the room: deferred items need an owner and target date confirmed; out-of-scope items need confirmation that the corresponding HITL classification in the design specification reflects them correctly. Present the executive summary brief without reading from it; the purpose is endorsement, not explanation.</p>
                </div>
                <div class="ba-journey-col">
                  <span class="ba-journey-label">After the session</span>
                  <p>Complete the <strong>Implementation Roadmap</strong> (Phase 1 scope, build sequence, client dependencies with dates from the Day 3 Data Commitment, success metrics tied to the Day 2 baseline, and risk log) and the <strong>Deliverable Sign-Off Register</strong> (every workshop output confirmed with stakeholder name and date). Update the Validation and Transformation Readiness Register with: the final tacit knowledge backlog section (each entry classified as resolved, deferred with owner and date, or out of scope with confirmed HITL step); the change management plan section (training schedule, rollout sequence, adoption champion responsibilities); and the open issues section (each item with owner, resolution date, and impact on build start if unresolved). The Project Manager uses the roadmap and issues log to structure the build phase; the IBM Delivery Lead uses the sign-off register as the contractual baseline for Phase 1 scope.</p>
                </div>
              </div>

              <div class="output-box">
                <h4>Contribution to Day Output</h4>
                <p>Standalone artifacts: <strong>Implementation Roadmap</strong> - Phase 1 scope, build sequence, client dependencies with dates, success metrics, build start date, first milestone, and risk log; used by Project Manager and IBM Delivery Lead throughout build. <strong>Deliverable Sign-Off Register</strong> <span class="signoff-tag">Sign-off: All accountable stakeholders</span> Every workshop output confirmed with stakeholder name and date; used by IBM Delivery Lead as the contractual baseline for Phase 1 scope.</p>
                <p>Adds to the <strong>Validation and Transformation Readiness Register</strong>: final tacit knowledge backlog section (each entry: resolved, deferred with owner and date, or out of scope with confirmed HITL step); change management plan section (training schedule, rollout sequence, adoption champion escalation path); and open issues section (each item with owner, resolution date, and build-start impact). Used by: AI Engineer and Change Management Lead (tacit knowledge backlog to understand Phase 1 scope boundaries); Project Manager (open issues log for pre-build tracking).</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="end-day">
        <h3>End of Day 5 - Validation and Transformation Readiness Register sections completed</h3>
        <div class="end-day-grid">
          <div class="end-card">Scenario validation results with confidence rating and updated design specifications</div>
          <div class="end-card">Behavioral observations: where participants defaulted to as-is reasoning</div>
          <div class="end-card">Production monitoring plan and agent governance charter (signed)</div>
          <div class="end-card">Implementation roadmap with Phase 1 milestones and client dependencies</div>
          <div class="end-card">Tacit knowledge backlog (final): resolved, deferred, and out-of-scope classifications</div>
          <div class="end-card">Deliverable sign-offs and executive endorsement of the implementation direction</div>
        </div>
      </div>

    </div>
  `;
});
