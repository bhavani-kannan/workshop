document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('day2-body');
  if (!el) return;

  el.innerHTML = `
    <div class="accordion-body">

      <div class="day-objective-block">
        <h3>Objective of the day</h3>
        <p>
          The shortlist from Day 1 gets tested against practical criteria. Each decision is scored
          on operational impact, how often it is made, and whether the data needed is likely accessible.
          By end of day, the team agrees on one use case to carry into the design phase.
        </p>
      </div>

      <div class="sessions">

        <div class="session">
          <div class="session-header">
            <div class="session-number">Session 1</div>
            <div>
              <h3>Use Case Scoring</h3>
              <p class="session-desc">
                Score each shortlisted decision against a structured criteria set covering impact,
                frequency, data access, and time to a measurable result.
              </p>
            </div>
          </div>

          <div class="session-grid">
            <div class="block">
              <h4>Objective</h4>
              <ul>
                <li>Work through the shortlist of 5 to 7 decisions from Day 1 systematically.</li>
                <li>Score each against four criteria: operational impact, decision frequency, data accessibility, and time to measurable result.</li>
                <li>Surface which decisions score strongly across all four and which score high on only one or two.</li>
              </ul>
            </div>

            <div class="block">
              <h4>Focus Questions</h4>
              <ul>
                <li>Which decision, when made poorly, causes the most measurable loss in production, cost, or delivery?</li>
                <li>Which decisions happen every shift or multiple times a day?</li>
                <li>Do we have a reasonable view of where the data for each decision currently lives?</li>
                <li>Which of these decisions could show a measurable result within three to six months?</li>
                <li>Is any of these decisions already tracked or reported on by the business?</li>
              </ul>
            </div>

            <div class="block">
              <h4>Participants</h4>
              <ul>
                <li>Plant Manager</li>
                <li>Operations Head</li>
                <li>Planning or Scheduling Lead</li>
                <li>Finance Lead</li>
              </ul>
            </div>

            <div class="block">
              <h4>Accelerators</h4>
              <ul>
                <li>Use case scoring matrix (impact, frequency, data access, time to value).</li>
                <li>Benchmark scores from similar manufacturing sites as calibration reference.</li>
                <li>Pre-filled example scores to anchor the team's scoring judgment.</li>
              </ul>
            </div>
          </div>

          <div class="output-box">
            <h4>Session output</h4>
            <ul>
              <li>Scored use case matrix with rankings across all four criteria.</li>
              <li>Notes on each candidate capturing the team's reasoning.</li>
            </ul>
          </div>
        </div>

        <div class="session">
          <div class="session-header">
            <div class="session-number">Session 2</div>
            <div>
              <h3>Stakeholder Validation</h3>
              <p class="session-desc">
                Present the top two or three scored candidates to a wider group. Surface concerns
                about feasibility, data ownership, and organizational readiness.
              </p>
            </div>
          </div>

          <div class="session-grid">
            <div class="block">
              <h4>Objective</h4>
              <ul>
                <li>Present the top two or three scored candidates and walk through the scoring rationale.</li>
                <li>Open the floor to concerns about data access, political factors, or capability gaps.</li>
                <li>Identify which candidate has a clear owner, a willing team, and real stakeholder appetite.</li>
              </ul>
            </div>

            <div class="block">
              <h4>Focus Questions</h4>
              <ul>
                <li>Does the IT or OT team see any immediate blockers for the top candidates?</li>
                <li>Is there an internal champion who will own this use case through the build phase?</li>
                <li>Are there concerns about data ownership, system access, or organizational approvals?</li>
                <li>Which candidate has the clearest executive support?</li>
                <li>Are there organizational dependencies that make one candidate harder to deliver this quarter?</li>
              </ul>
            </div>

            <div class="block">
              <h4>Participants</h4>
              <ul>
                <li>Plant Manager</li>
                <li>Operations Head</li>
                <li>IT or OT Lead</li>
                <li>Finance Lead</li>
                <li>Supply Chain Lead</li>
              </ul>
            </div>

            <div class="block">
              <h4>Accelerators</h4>
              <ul>
                <li>Candidate summary cards: one page per shortlisted decision.</li>
                <li>Stakeholder alignment checklist.</li>
                <li>Blocker and dependency identification template.</li>
              </ul>
            </div>
          </div>

          <div class="output-box">
            <h4>Session output</h4>
            <ul>
              <li>Validated candidate list with concerns, dependencies, and ownership notes documented per candidate.</li>
            </ul>
          </div>
        </div>

        <div class="session">
          <div class="session-header">
            <div class="session-number">Session 3</div>
            <div>
              <h3>Use Case Selection</h3>
              <p class="session-desc">
                Reach agreement on one use case and define exactly what the AI agent is expected
                to decide, how often, and for whom.
              </p>
            </div>
          </div>

          <div class="session-grid">
            <div class="block">
              <h4>Objective</h4>
              <ul>
                <li>Reach explicit agreement in the room on the selected use case.</li>
                <li>Define the decision scope: what is decided, by whom, how often, and what outcome it optimizes.</li>
                <li>Name the two or three risks the team is accepting by choosing this use case over others.</li>
              </ul>
            </div>

            <div class="block">
              <h4>Focus Questions</h4>
              <ul>
                <li>Is there full agreement in the room on the selected use case?</li>
                <li>Who is the single named owner for this use case from the client side?</li>
                <li>What does success look like at 30 days, 90 days, and 6 months?</li>
                <li>What are we accepting as risks by choosing this one over the alternatives?</li>
                <li>What does the client team need to prepare before Day 3?</li>
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
                <li>Use case definition template (what is decided, trigger, inputs, output, owner).</li>
                <li>Decision framing canvas.</li>
                <li>Risk acceptance log.</li>
              </ul>
            </div>
          </div>

          <div class="output-box">
            <h4>Session output</h4>
            <ul>
              <li>Agreed use case statement with decision scope, named owner, and success criteria.</li>
              <li>Documented risks accepted by the team in selecting this use case.</li>
            </ul>
          </div>
        </div>

      </div>

      <div class="end-day">
        <h3>End of Day 2 outputs</h3>
        <div class="end-day-grid">
          <div class="end-card">Scored use case matrix</div>
          <div class="end-card">Selected use case with rationale</div>
          <div class="end-card">Decision scope definition and named owner</div>
          <div class="end-card">Agreed success criteria and risk log</div>
        </div>
      </div>

    </div>
  `;
});
