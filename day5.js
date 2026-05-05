document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('day5-body');
  if (!el) return;

  el.innerHTML = `
    <div class="accordion-body">

      <div class="day-objective-block">
        <h3>Objective of the day</h3>
        <p>
          The design specification from Day 4 is tested against real plant scenarios before any code is written.
          Where the logic fails or produces the wrong recommendation, the team refines it on the spot.
          The day closes with a formal sign-off on all workshop artefacts and an agreed implementation roadmap.
        </p>
      </div>

      <div class="sessions">

        <div class="session">
          <div class="session-header">
            <div class="session-number">Session 1</div>
            <div>
              <h3>Scenario Walkthrough</h3>
              <p class="session-desc">
                Run the decision logic and metric definitions through four to five real plant scenarios.
                Capture where the design produces the right answer and where it falls short.
              </p>
            </div>
          </div>

          <div class="session-grid">
            <div class="block">
              <h4>Objective</h4>
              <ul>
                <li>Select four to five scenarios from actual plant history: a standard operating day, a machine breakdown, a material shortage, an urgent order conflict, and a multi-line capacity crunch.</li>
                <li>Walk the metric calculations and decision logic through each scenario step by step using real or realistic data values.</li>
                <li>Compare the agent output to what an experienced operator would actually decide or report.</li>
              </ul>
            </div>

            <div class="block">
              <h4>Focus Questions</h4>
              <ul>
                <li>Does the logic produce the right recommendation on a normal operating day?</li>
                <li>What does the agent recommend when a machine breaks down mid-shift with open orders at risk?</li>
                <li>How does it handle a material shortage where inventory data is only partially visible?</li>
                <li>What recommendation does it produce when a high-priority order conflicts with a planned maintenance window?</li>
                <li>Do the metric values and time window concepts produce the expected numbers in each scenario?</li>
              </ul>
            </div>

            <div class="block">
              <h4>Participants</h4>
              <ul>
                <li>Plant Manager</li>
                <li>Production Supervisor or Line Manager</li>
                <li>Planning Lead</li>
                <li>Maintenance Lead</li>
              </ul>
            </div>

            <div class="block">
              <h4>Accelerators</h4>
              <ul>
                <li>Scenario cards: one per scenario, with realistic data values and plant context.</li>
                <li>Decision output capture template (expected output, logic output, gap rating: pass, partial, or fail).</li>
                <li>Metric traceability sheet linking each metric to its source columns and concepts.</li>
              </ul>
            </div>
          </div>

          <div class="output-box">
            <h4>Session output</h4>
            <ul>
              <li>Walkthrough results per scenario: recommendation produced, expected recommendation, and pass, partial, or fail rating.</li>
            </ul>
          </div>
        </div>

        <div class="session">
          <div class="session-header">
            <div class="session-number">Session 2</div>
            <div>
              <h3>Gap Resolution and Confidence Rating</h3>
              <p class="session-desc">
                Review walkthrough results, identify what needs to be refined, and agree on an
                overall confidence rating before the build phase begins.
              </p>
            </div>
          </div>

          <div class="session-grid">
            <div class="block">
              <h4>Objective</h4>
              <ul>
                <li>Work through each scenario that produced a partial or failed result.</li>
                <li>Classify the root cause: a gap in the decision logic, a metric definition gap, a missing concept, a data gap, or an incorrect assumption.</li>
                <li>Refine the logic, metric, or concept on the spot where possible. Log items that require additional design work.</li>
                <li>Assign an overall confidence rating to the full design specification.</li>
              </ul>
            </div>

            <div class="block">
              <h4>Focus Questions</h4>
              <ul>
                <li>Which scenarios produced an unexpected or incorrect recommendation?</li>
                <li>Is each failure caused by a logic gap, a metric definition issue, a concept mismatch, or a data gap?</li>
                <li>Which gaps can be resolved today and which need additional design work before build?</li>
                <li>Are there high-risk scenarios that have not yet been tested?</li>
                <li>What is the team's confidence that this design will perform reliably on the plant floor?</li>
              </ul>
            </div>

            <div class="block">
              <h4>Participants</h4>
              <ul>
                <li>Plant Manager</li>
                <li>IT or OT Lead</li>
                <li>Planning Lead</li>
                <li>Process Engineer</li>
                <li>Data Architect</li>
              </ul>
            </div>

            <div class="block">
              <h4>Accelerators</h4>
              <ul>
                <li>Gap resolution matrix (gap type, resolution approach, owner, timeline).</li>
                <li>Confidence rating framework by scenario and overall.</li>
                <li>Logic and metric refinement log.</li>
              </ul>
            </div>
          </div>

          <div class="output-box">
            <h4>Session output</h4>
            <ul>
              <li>Refined decision logic and updated metric catalogue with documented changes.</li>
              <li>Gap resolution plan: each open item with owner and estimated resolution date.</li>
              <li>Overall confidence rating: high, medium, or conditional.</li>
            </ul>
          </div>
        </div>

        <div class="session">
          <div class="session-header">
            <div class="session-number">Session 3</div>
            <div>
              <h3>Implementation Planning and Sign-off</h3>
              <p class="session-desc">
                Agree on what gets built, in what sequence, and who is responsible. Formally confirm
                each workshop artefact, document open issues, and set the build phase start date.
              </p>
            </div>
          </div>

          <div class="session-grid">
            <div class="block">
              <h4>Objective</h4>
              <ul>
                <li>Define the minimum viable scope for Phase 1: what gets built first and what gets deferred.</li>
                <li>Map the dependencies between IBM deliverables and client deliverables: data access, approvals, team availability.</li>
                <li>Walk through the workshop artefact list and confirm each one is approved by the accountable stakeholder.</li>
                <li>Document open issues with owners and resolution dates. Agree on the build phase start date.</li>
              </ul>
            </div>

            <div class="block">
              <h4>Focus Questions</h4>
              <ul>
                <li>What is the minimum viable scope for the first build phase?</li>
                <li>Which data products and system integrations must be in place before build starts?</li>
                <li>What does the client team need to deliver before the IBM team can proceed?</li>
                <li>Is each workshop artefact confirmed as approved by the right person?</li>
                <li>What open issues remain, who owns them, and by when must they be resolved?</li>
                <li>What date does the build phase start?</li>
              </ul>
            </div>

            <div class="block">
              <h4>Participants</h4>
              <ul>
                <li>Executive Sponsor</li>
                <li>Plant Manager</li>
                <li>Operations Head</li>
                <li>IT or OT Lead</li>
                <li>Finance Lead</li>
              </ul>
            </div>

            <div class="block">
              <h4>Accelerators</h4>
              <ul>
                <li>Implementation planning template.</li>
                <li>Dependency map (IBM deliverables vs. client deliverables).</li>
                <li>Workshop artefact sign-off checklist (artefact, confirmed by, date).</li>
                <li>Open issues register with owner and resolution date fields.</li>
              </ul>
            </div>
          </div>

          <div class="output-box">
            <h4>Session output</h4>
            <ul>
              <li>Implementation roadmap with Phase 1 scope, build sequence, client dependencies, success metrics, and risk log.</li>
              <li>Signed-off artefact register: each workshop artefact confirmed by its accountable stakeholder.</li>
              <li>Open issues log with owner, resolution date, and impact if unresolved.</li>
              <li>Agreed build phase start date and first milestone definition.</li>
            </ul>
          </div>
        </div>

      </div>

      <div class="end-day">
        <h3>End of Day 5 outputs</h3>
        <div class="end-day-grid">
          <div class="end-card">Validated scenarios with confidence rating</div>
          <div class="end-card">Refined design specification (logic, metrics, concepts)</div>
          <div class="end-card">Implementation roadmap with Phase 1 milestones</div>
          <div class="end-card">Signed-off artefact register and open issues log</div>
        </div>
      </div>

    </div>
  `;
});
