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
          in production — not just at launch. Close the day with stakeholder sign-offs on each deliverable
          by the accountable domain owner, and executive endorsement of the implementation roadmap.
        </p>
      </div>

      <div class="sessions">

        <div class="session">
          <div class="session-toggle">
            <div class="session-number">Session 1</div>
            <div class="session-meta">
              <h3>Scenario Walkthrough and Gap Resolution</h3>
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
                    <li>Resolve gaps on the spot where possible — refine the logic, metric, concept, or alert priority framework in the room. Log items that require additional design work with an owner and resolution date.</li>
                    <li>Assign an overall confidence rating to the full design specification: high, medium, or conditional — with the specific conditions stated.</li>
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
                    <li>Does the alert priority framework correctly rank competing alerts when two exceptions occur simultaneously?</li>
                    <li>For each failed result: is the failure caused by a logic gap, a metric issue, a missing concept, a data quality problem, or a broken MES-to-ERP link?</li>
                    <li>Which gaps can be resolved today and which need additional design work before build begins?</li>
                    <li>What is the team's honest confidence that this design will perform reliably on the plant floor at launch?</li>
                  </ul>
                </div>

                <div class="block">
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

                <div class="block">
                  <h4>Accelerators</h4>
                  <ul>
                    <li>Scenario cards: one per scenario, with realistic data values and plant context — prepared by IBM using plant history provided during Days 1 to 3. The team validates the scenario setup before walking the logic through it.</li>
                    <li>Decision output capture template: expected output, logic output, gap rating (pass, partial, or fail) — structured for rapid completion during the walkthrough, not after.</li>
                    <li>Metric traceability sheet: each metric linked to its source columns, concepts, and time window filter rules — so when a number looks wrong, the cause can be traced in under two minutes.</li>
                    <li>MES-to-ERP correlation test cases: drawn from known historical exception pairs captured in Day 1. Pre-mapped so the walkthrough tests known events rather than inventing hypotheticals.</li>
                    <li>Gap resolution matrix: gap type, resolution approach, owner, and resolution date — updated in real time during the session.</li>
                    <li>Confidence rating framework: criteria for high, medium, and conditional ratings, including the minimum threshold of scenario pass rate required for each classification.</li>
                  </ul>
                </div>
              </div>

              <div class="output-box">
                <h4>Session output</h4>
                <ul>
                  <li>Walkthrough results per scenario: recommendation produced, expected recommendation, and pass, partial, or fail rating.</li>
                  <li>MES-to-ERP correlation test results: which causal links the agent identified correctly and which it missed.</li>
                  <li>Refined decision logic, metric catalogue, and concepts catalogue with all changes documented.</li>
                  <li>Gap resolution plan: each open item with owner and estimated resolution date.</li>
                  <li>Overall confidence rating: high, medium, or conditional — with specific conditions stated for conditional ratings.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="session">
          <div class="session-toggle">
            <div class="session-number">Session 2</div>
            <div class="session-meta">
              <h3>Agent Evaluation and Production Monitoring Framework</h3>
              <p class="session-desc">
                Define how agent quality is measured and managed after launch. Agree on what good performance
                looks like in production, how human overrides feed back into improvement, what triggers
                a model review, and who owns agent governance on the client side.
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
                    <li>Define the production evaluation framework: the metrics and signals that indicate whether the agent is performing as designed after launch, not just on Day 1.</li>
                    <li>Agree on what good performance looks like in production: recommendation acceptance rate, override rate, operator-reported usefulness, and alignment with the Day 2 golden sample and success criteria.</li>
                    <li>Design the feedback capture mechanism: when a human overrides the agent recommendation, where is that override captured, who reviews it, and how does it feed back into logic or threshold refinement? Without this, the agent cannot improve and cannot learn from the plant floor.</li>
                    <li>Define the threshold that triggers a model review: override rate above a set percentage, a data freshness SLA breach sustained for more than a defined period, or a pattern of operator complaints. Agree who initiates the review and what the review process looks like.</li>
                    <li>Designate the agent governance owner on the client side: the person accountable for monitoring agent performance, reviewing override logs, coordinating with IBM on refinements, and deciding when the agent should be suspended.</li>
                    <li>Define the knowledge base governance plan for any reference documents (SOPs, maintenance procedures, quality standards) that the agent retrieves as context. Who maintains these, how often are they reviewed, and who approves additions?</li>
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
                    <li>If the data freshness SLA from Day 3 is breached for more than 24 hours, what happens to agent recommendations — do they continue, show a warning, or stop?</li>
                    <li>Who is the agent governance owner on the client side, and what is their authority to suspend agent actions?</li>
                    <li>Which reference documents does the agent use as context? Who owns them, and how will they be kept current?</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Participants</h4>
                  <ul>
                    <li>Data Architect</li>
                    <li>IT or OT Lead</li>
                    <li>Plant Manager</li>
                    <li>Adoption Champion (designated on Day 2)</li>
                    <li>IBM AI Lead</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Accelerators</h4>
                  <ul>
                    <li>Production monitoring dashboard template: pre-listed signals (recommendation acceptance rate, override rate, data freshness status, operator satisfaction score) with blank threshold and alert owner fields.</li>
                    <li>Override feedback capture design guide: a reference showing three common feedback loop patterns — inline override capture, daily summary log, and manual review queue — with a recommendation on which suits the plant's existing workflow.</li>
                    <li>Model review trigger reference: industry examples of override rate thresholds and data quality triggers that have been used to initiate model reviews in comparable manufacturing AI deployments.</li>
                    <li>Agent governance role description: responsibilities, time commitment, escalation path, and the authority boundaries for the client-side governance owner.</li>
                    <li>Knowledge base governance template: document name, owner, review frequency, approved by, and the process for adding or removing content from the agent's context.</li>
                  </ul>
                </div>
              </div>

              <div class="output-box">
                <h4>Session output</h4>
                <ul>
                  <li>Production monitoring plan: signals, thresholds, owners, and alert channels for ongoing agent quality.</li>
                  <li>Feedback capture specification: how human overrides are captured, reviewed, and fed back into agent refinement.</li>
                  <li>Model review trigger agreement: the conditions that initiate a review, the review process, and who decides when agent actions should be suspended.</li>
                  <li>Named agent governance owner with defined authority and responsibilities.</li>
                  <li>Knowledge base governance plan: document inventory, ownership, review cadence, and addition or removal process.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="session">
          <div class="session-toggle">
            <div class="session-number">Session 3</div>
            <div class="session-meta">
              <h3>Implementation Planning and Stakeholder Sign-off</h3>
              <p class="session-desc">
                Agree on what gets built and in what sequence. Obtain sign-off on each deliverable
                from the accountable domain owner. Confirm the change management plan.
                Secure executive endorsement of the implementation roadmap.
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
                    <li>Map dependencies between IBM deliverables and client deliverables: data access confirmed in the Day 3 data contract, master data corrections, system integrations, team availability.</li>
                    <li>Confirm the change management plan: training schedule, rollout sequence, communication approach, and how the Day 2 adoption champion escalates issues during the build and rollout phases.</li>
                    <li>Walk through the deliverable register and obtain sign-off from each accountable stakeholder: domain stewards confirm the domain map, metric stewards confirm the catalogue, Plant Manager confirms decision logic and constraints.</li>
                    <li>Present the executive summary brief — drafted at the end of Day 4 — to the executive sponsor. This is not a technical review. It is confirmation that the direction, scope, and client commitments are supported at the top.</li>
                    <li>Document all open issues with owners and resolution dates. Agree on the build phase start date.</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Focus Questions</h4>
                  <ul>
                    <li>What is the minimum viable scope for the first build phase — what must work on day one to demonstrate value to the plant floor?</li>
                    <li>Which data products, master data corrections, and system integrations from the Day 3 data contract must be in place before build starts?</li>
                    <li>What does the client team need to deliver before the IBM team can proceed, and what is the agreed date for each item?</li>
                    <li>Is each domain steward and accountable stakeholder ready to confirm their deliverable today?</li>
                    <li>What open issues remain, who owns them, and what is the latest date they must be resolved without affecting the build start?</li>
                    <li>Is the change management plan realistic given team capacity during the build phase?</li>
                    <li>Does the executive sponsor endorse the implementation direction, client commitments, and resourcing plan?</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Participants</h4>
                  <ul>
                    <li>Deliverable sign-off: domain stewards, metric owners, Plant Manager, IT or OT Lead, Adoption Champion</li>
                    <li>Executive endorsement: Executive Sponsor (CEO, COO, or equivalent)</li>
                    <li>IBM Workshop Lead</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Accelerators</h4>
                  <ul>
                    <li>Deliverable sign-off register: deliverable name, accountable stakeholder, confirmation status, and date — pre-populated with every named output from Days 1 through 5. The team signs, not assembles.</li>
                    <li>Implementation planning template: Phase 1 scope, build sequence, client dependency list pulled from the Day 3 data contract, success metrics, and risk log.</li>
                    <li>Dependency map: IBM deliverables vs. client deliverables — side by side with the agreed dates from the data contract.</li>
                    <li>Change management plan template: training schedule, rollout sequence, communication approach, and adoption champion responsibilities.</li>
                    <li>Open issues register: issue description, owner, resolution date, and impact on build start if unresolved.</li>
                    <li>Executive summary brief: drafted on Day 4, reviewed on Day 5 morning, presented in this session. One page. No technical detail that was not in the Day 1 charter.</li>
                  </ul>
                </div>
              </div>

              <div class="output-box">
                <h4>Session output</h4>
                <ul>
                  <li>Implementation roadmap: Phase 1 scope, build sequence, client dependencies with agreed dates, success metrics, and risk log.</li>
                  <li>Deliverable sign-off register: each deliverable confirmed by its accountable domain owner or steward.</li>
                  <li>Change management plan: training schedule, rollout sequence, communication approach, and champion responsibilities.</li>
                  <li>Open issues log: owner, resolution date, and build-phase impact for each open item.</li>
                  <li>Executive endorsement of the implementation direction, client commitments, and resourcing plan.</li>
                  <li>Agreed build phase start date and first milestone definition.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="end-day">
        <h3>End of Day 5 outputs</h3>
        <div class="end-day-grid">
          <div class="end-card">Validated scenarios with confidence rating and refined design specification</div>
          <div class="end-card">Production monitoring plan and feedback capture specification</div>
          <div class="end-card">Implementation roadmap with Phase 1 milestones and change management plan</div>
          <div class="end-card">Deliverable sign-offs and executive endorsement</div>
        </div>
      </div>

    </div>
  `;
});
