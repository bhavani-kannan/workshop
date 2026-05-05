document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('day5-body');
  if (!el) return;

  el.innerHTML = `
    <div class="accordion-body">

      <div class="day-objective-block">
        <h3>Objective of the day</h3>
        <p>
          The decision logic from Day 4 is tested against real plant scenarios before any code is written.
          Where the logic fails or produces the wrong recommendation, the team refines it on the spot.
          The day closes with an agreed implementation roadmap and a clear definition of what gets built first.
        </p>
      </div>

      <div class="sessions">

        <div class="session">
          <div class="session-header">
            <div class="session-number">Session 1</div>
            <div>
              <h3>Scenario Walkthrough</h3>
              <p class="session-desc">
                Run the decision logic through four to five real plant scenarios. Capture where it
                produces the right recommendation and where it falls short.
              </p>
            </div>
          </div>

          <div class="session-grid">
            <div class="block">
              <h4>Objective</h4>
              <ul>
                <li>Select four to five scenarios from actual plant history: a standard day, a machine breakdown, a material shortage, an urgent order conflict, and a multi-line capacity crunch.</li>
                <li>Walk the logic through each scenario step by step using real or realistic data values.</li>
                <li>Compare the logic output to what an experienced operator would actually decide.</li>
              </ul>
            </div>

            <div class="block">
              <h4>Focus Questions</h4>
              <ul>
                <li>Does the logic produce the right recommendation on a normal operating day?</li>
                <li>What does the agent recommend when a machine breaks down mid-shift with open orders at risk?</li>
                <li>How does it handle a material shortage where inventory data is only partially visible?</li>
                <li>What recommendation does it produce when a high-priority order conflicts with a planned maintenance window?</li>
                <li>Does the logic perform consistently across different product lines, machine groups, or shift patterns?</li>
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
                <li>Decision output capture template (expected output, logic output, gap rating).</li>
                <li>Facilitation guide for structured walkthrough sessions.</li>
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
                <li>Classify the root cause: a gap in the logic, a data gap, a missing constraint, or an incorrect assumption.</li>
                <li>Refine the logic on the spot where possible. Log items that require additional design work.</li>
                <li>Assign an overall confidence rating to the decision logic.</li>
              </ul>
            </div>

            <div class="block">
              <h4>Focus Questions</h4>
              <ul>
                <li>Which scenarios produced an unexpected or incorrect recommendation?</li>
                <li>Is each failure caused by a logic gap, a data gap, a missing constraint, or an edge case?</li>
                <li>Which gaps can be resolved today and which need additional design work before build?</li>
                <li>What is the team's confidence that this logic will perform reliably on the plant floor?</li>
                <li>Are there high-risk scenarios that have not yet been tested?</li>
              </ul>
            </div>

            <div class="block">
              <h4>Participants</h4>
              <ul>
                <li>Plant Manager</li>
                <li>IT or OT Lead</li>
                <li>Planning Lead</li>
                <li>Process Engineer</li>
              </ul>
            </div>

            <div class="block">
              <h4>Accelerators</h4>
              <ul>
                <li>Gap resolution matrix (gap type, resolution approach, owner, timeline).</li>
                <li>Confidence rating framework by scenario and overall.</li>
                <li>Logic refinement log.</li>
              </ul>
            </div>
          </div>

          <div class="output-box">
            <h4>Session output</h4>
            <ul>
              <li>Refined decision logic with documented gaps and resolution plan.</li>
              <li>Overall confidence rating: high, medium, or conditional.</li>
            </ul>
          </div>
        </div>

        <div class="session">
          <div class="session-header">
            <div class="session-number">Session 3</div>
            <div>
              <h3>Implementation Planning</h3>
              <p class="session-desc">
                Agree on what gets built, in what sequence, who is responsible, and what defines
                a successful first delivery.
              </p>
            </div>
          </div>

          <div class="session-grid">
            <div class="block">
              <h4>Objective</h4>
              <ul>
                <li>Define the minimum viable scope for Phase 1: what gets built first and what gets deferred.</li>
                <li>Map the dependencies between IBM deliverables and client deliverables: data access, approvals, team availability.</li>
                <li>Define the first milestone and agree on what success looks like when it is reached.</li>
                <li>Agree on the two or three risks most likely to affect delivery.</li>
              </ul>
            </div>

            <div class="block">
              <h4>Focus Questions</h4>
              <ul>
                <li>What is the minimum viable scope for the first build phase?</li>
                <li>Which data products and system integrations must be in place before build starts?</li>
                <li>What does the client team need to deliver before the IBM team can proceed?</li>
                <li>What does a successful first milestone look like, and how is it measured?</li>
                <li>What are the top two or three risks to the delivery timeline?</li>
              </ul>
            </div>

            <div class="block">
              <h4>Participants</h4>
              <ul>
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
                <li>Milestone definition guide.</li>
                <li>Risk register starter.</li>
              </ul>
            </div>
          </div>

          <div class="output-box">
            <h4>Session output</h4>
            <ul>
              <li>Implementation roadmap with Phase 1 scope, build sequence, client dependencies, milestone definition, success metrics, and risk log.</li>
            </ul>
          </div>
        </div>

      </div>

      <div class="end-day">
        <h3>End of Day 5 outputs</h3>
        <div class="end-day-grid">
          <div class="end-card">Validated scenarios with confidence rating</div>
          <div class="end-card">Refined decision logic with gap resolutions</div>
          <div class="end-card">Implementation roadmap with Phase 1 milestones</div>
          <div class="end-card">Agreed definition of done and success metrics</div>
        </div>
      </div>

    </div>
  `;
});
