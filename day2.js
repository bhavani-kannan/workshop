document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('day2-body');
  if (!el) return;

  el.innerHTML = `
    <div class="accordion-body">

      <div class="day-objective-block">
        <h3>Objective of the day</h3>
        <p>
          The shortlist from Day 1 is tested against practical criteria and narrowed to one use case.
          That use case is then formally defined: what questions it answers, what dimensions it cuts across,
          what time windows it covers, and what a good outcome looks like.
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
              <h3>Use Case Selection and Definition</h3>
              <p class="session-desc">
                Agree on one use case, name the persona it serves, and formally define it: what questions
                it answers, what dimensions it cuts across, what time windows it covers, and what a good outcome looks like.
              </p>
            </div>
          </div>

          <div class="session-grid">
            <div class="block">
              <h4>Objective</h4>
              <ul>
                <li>Reach explicit agreement on the selected use case.</li>
                <li>Define which persona it primarily serves and what three to five specific questions it answers.</li>
                <li>Specify the dimensions it must support: by plant, by line, by machine, by shift, by product family.</li>
                <li>Specify the time windows it must cover: today, this shift, this week, last 30 days, last quarter.</li>
                <li>Define what a good outcome looks like: the answer format, the decision it enables, and the success metric.</li>
              </ul>
            </div>

            <div class="block">
              <h4>Focus Questions</h4>
              <ul>
                <li>Is there full agreement in the room on the selected use case?</li>
                <li>Which persona does this use case serve first, and what specific questions does it answer for them?</li>
                <li>At what level does the answer need to be available: plant, area, line, machine, shift?</li>
                <li>What time windows matter most: real time, daily, weekly, or trend-based?</li>
                <li>What does a good answer look like? A number, a ranked list, a recommendation, or a comparison?</li>
                <li>What does success look like at 30 days, 90 days, and 6 months?</li>
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
                <li>Use case definition canvas (persona, questions answered, dimensions, time windows, outcome format).</li>
                <li>Dimension and window reference list for manufacturing use cases.</li>
                <li>Risk acceptance log.</li>
                <li>Example use case definitions from comparable manufacturing sites.</li>
              </ul>
            </div>
          </div>

          <div class="output-box">
            <h4>Session output</h4>
            <ul>
              <li>Selected use case with named owner and primary persona.</li>
              <li>Defined question list (3 to 5 specific questions the use case answers).</li>
              <li>Dimension list: the grouping levels the answer must support.</li>
              <li>Time window list: the look-back and look-forward periods the answer must cover.</li>
              <li>Agreed outcome format and success criteria.</li>
            </ul>
          </div>
        </div>

      </div>

      <div class="end-day">
        <h3>End of Day 2 outputs</h3>
        <div class="end-day-grid">
          <div class="end-card">Scored use case matrix</div>
          <div class="end-card">Selected use case with named owner and persona</div>
          <div class="end-card">Use case definition: questions, dimensions, time windows</div>
          <div class="end-card">Agreed success criteria and accepted risk log</div>
        </div>
      </div>

    </div>
  `;
});
