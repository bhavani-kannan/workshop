document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('day2-body');
  if (!el) return;

  el.innerHTML = `
    <div class="accordion-body">

      <div class="day-objective-block">
        <h3>Objective of the day</h3>
        <p>
          The shortlist from Day 1 is scored and narrowed to one use case. Before that use case is
          defined in detail, IBM presents a structured assessment of how the decision is currently made
          and where it structurally fails, then recommends the optimized process the agent should be
          built on. The client agrees on what changes in how people work before the agent is introduced.
          The use case is then fully defined against the agreed optimized process: questions, dimensions,
          time windows, success criteria, and golden sample. The goal is not to agentize what exists
          today but to optimize the decision process first and then build the agent on that improved foundation.
          A one-page progress note goes to the executive team at end of day.
        </p>
      </div>

      <div class="sessions">

        <div class="session">
          <div class="session-toggle">
            <div class="session-number">Session 1</div>
            <div class="session-meta">
              <h3>Scoring the Shortlisted Decisions</h3>
              <p class="session-desc">
                Score each shortlisted decision against a structured criteria set covering impact,
                frequency, data access, and time to a measurable result.
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
                    <li>Work through the shortlist of 5 to 7 decisions from Day 1 systematically.</li>
                    <li>Score each against four criteria: operational impact, decision frequency, data accessibility, and time to measurable result.</li>
                    <li>Surface which decisions score strongly across all four and which score high on only one or two.</li>
                    <li>Flag candidates where the data dependency is clear and accessible today versus candidates that require significant data preparation before anything can be built.</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Focus Questions</h4>
                  <ul>
                    <li>Which decision, when made poorly, causes the most measurable loss in production, cost, or delivery?</li>
                    <li>Which decisions happen every shift or multiple times a day?</li>
                    <li>Do we have a reasonable view of where the data for each decision currently lives and how clean it is?</li>
                    <li>Which of these decisions could show a measurable result within three to six months?</li>
                    <li>Is any of these decisions already tracked or reported on by the business? If so, the data is closer than it looks.</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Participants</h4>
                  <ul>
                    <li>Operations Head (leads)</li>
                    <li>Planning or Scheduling Lead</li>
                    <li>Finance Lead</li>
                    <li>IBM Workshop Lead</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Accelerators</h4>
                  <ul>
                    <li>Use case scoring matrix: pre-populated with the Day 1 shortlist. Participants score, not build, the matrix. Benchmark scores from similar manufacturing sites are included as calibration anchors so the team does not start from zero.</li>
                    <li>Data dependency quick-check: a column in the scoring matrix that flags whether data is confirmed available, likely available, or unknown: pulled from Day 1 ERP and MES exception notes.</li>
                  </ul>
                </div>
              </div>

              <div class="output-box">
                <h4>Session output</h4>
                <ul>
                  <li>Scored use case matrix with rankings across all four criteria.</li>
                  <li>Top two or three candidates identified for validation in Session 2.</li>
                  <li>Data dependency flags per candidate: confirmed, likely, or unknown.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="session">
          <div class="session-toggle">
            <div class="session-number">Session 2</div>
            <div class="session-meta">
              <h3>Selecting the Priority Use Case and Defining It Fully</h3>
              <p class="session-desc">
                Present the top candidates, surface concerns, and select one use case. Before defining
                it in detail, IBM presents how the decision is currently made and where it structurally
                fails, then recommends the optimized process. The group agrees on what changes in the
                human steps — not just what the agent does. The use case is then defined against the
                agreed optimized process, not the current one.
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
                    <li>Present the top two or three scored candidates and walk through the scoring rationale. Open the floor to concerns about data access, political factors, or capability gaps.</li>
                    <li>Identify which candidate has a clear owner, a willing team, and real stakeholder appetite. Reach explicit agreement on one use case.</li>
                    <li>IBM presents the as-is decision process assessment synthesized from Day 1: the current decision steps, where they structurally fail, and what that failure costs. This is not a recap of complaints — it is a documented failure mode analysis per candidate, prepared before the session.</li>
                    <li>IBM presents the to-be recommendation: how this decision should be made in an AI-assisted operation. What changes in the human steps. Where manual steps are eliminated. Where approval authority shifts. Where data that was ignored becomes the primary input. Benchmarked against comparable plant deployments where available.</li>
                    <li>The group agrees on the to-be process: which recommended changes the client commits to making before build begins, which are deferred, and which are rejected. Rejected changes are documented with the reason and the risk they carry into the build. The agent will not compensate for a process problem the client chose not to fix.</li>
                    <li>Every element of the use case definition that follows is written against the agreed to-be process — not the current one. If the team drifts back to defining the use case around current behavior, the facilitator redirects.</li>
                    <li>Define the selected use case fully: which role it primarily serves, and what three to five specific questions it answers for them.</li>
                    <li>Specify the dimensions it must support: by plant, by line, by machine, by shift, by product family.</li>
                    <li>Specify the time windows it must cover: today, this shift, this week, last 30 days, last quarter.</li>
                    <li>Define success criteria: the answer format, the decision it enables, and what improvement over baseline looks like at 30, 90, and 180 days.</li>
                    <li>Capture a golden sample: one example of what a perfect agent response looks like for this use case. This becomes the evaluation benchmark for everything built in the months ahead.</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Focus Questions</h4>
                  <ul>
                    <li>Does the IT or OT team see any immediate blockers for the top candidates?</li>
                    <li>Is there an internal champion who will own this use case through the build phase?</li>
                    <li>Are there concerns about data ownership, system access, or organizational approvals that would slow delivery?</li>
                    <li>Which candidate has the clearest executive support from the Day 1 charter?</li>
                    <li>What is structurally broken about how this decision is made today — not the symptoms, but the root cause of why it fails repeatedly?</li>
                    <li>If this decision process were redesigned knowing an AI agent would support it, what would change in the human steps — not just what the agent does?</li>
                    <li>Which of the proposed process changes does the client team own, and can they be in place before build begins?</li>
                    <li>Is the team willing to commit to the process changes the optimized design requires, or is the goal to automate the current process as-is? If the latter, the team should understand what that limits.</li>
                    <li>Which role does this use case serve first: and what specific question should it answer within the first 30 seconds of use?</li>
                    <li>At what level does the answer need to be available: plant, area, line, machine, shift?</li>
                    <li>What time windows matter most: real time, daily, weekly, or trend-based?</li>
                    <li>What does a good answer look like: a number, a ranked list, a recommendation, or a comparison against baseline?</li>
                    <li>Can someone in the room describe a perfect agent response, right now, in one or two sentences? If not, what is missing before they can?</li>
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
                    <li>Candidate summary cards: one page per shortlisted use case with scoring summary, known blockers, and data dependency status: prepared from Session 1 output.</li>
                    <li>Use case definition canvas: persona, questions answered, dimensions, time windows, and outcome format. Pre-structured so the team fills blanks, not designs structure.</li>
                    <li>Golden sample capture template: a structured prompt that guides the team to articulate a complete example agent response: including trigger, data used, recommendation produced, and what action it enables.</li>
                    <li>Success criteria template: 30-day, 90-day, and 180-day improvement targets over the Day 1 baseline.</li>
                    <li>As-is decision process summary: IBM-prepared one-page failure mode assessment per shortlisted candidate, synthesized from Day 1. Shows current decision steps, where they fail, structural causes, and cost estimate. Brought by IBM into the session — not built in the room.</li>
                    <li>To-be process recommendation: IBM-prepared recommended optimized decision process per top candidate. Shows what changes in the human steps, what the agent enables, and what the client must commit to before build begins. Benchmarked against comparable plant deployments where available.</li>
                  </ul>
                </div>
              </div>

              <div class="output-box">
                <h4>Session output</h4>
                <ul>
                  <li>Selected use case with named owner and primary role served.</li>
                  <li>Defined question list: 3 to 5 specific questions the use case answers.</li>
                  <li>Dimension list: the grouping levels the answer must support.</li>
                  <li>Time window list: the look-back and look-forward periods the answer must cover.</li>
                  <li>Agreed success criteria with baseline comparison at 30, 90, and 180 days.</li>
                  <li>Golden sample: one fully described example of a perfect agent response, agreed by the room.</li>
                  <li>Agreed to-be decision process: the optimized decision flow the use case will be built on, with each step documented, changes from as-is explicitly called out, and the specific process commitments the client makes before build begins. Signed by Operations Head and Plant Manager.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="session">
          <div class="session-toggle">
            <div class="session-number">Session 3</div>
            <div class="session-meta">
              <h3>Designing How Recommendations Reach the Operator</h3>
              <p class="session-desc">
                Agree on how the agent recommendation reaches the operator: what it looks like,
                what makes an experienced operator trust it enough to act on it, and who on the
                client side will lead adoption on the floor.
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
                    <li>Define the output format for the agent recommendation: alert, dashboard panel, shift report, chat interface, or integrated into an existing system the operator already uses.</li>
                    <li>Define the recommendation output schema: what fields every agent response must contain. At minimum: the recommendation itself, the confidence level, the top two or three contributing factors the operator can verify, a reference to the source data, and whether approval is required. Agree the field names, order, and which are always visible versus expandable. This schema is what the build team implements.</li>
                    <li>Identify who uses this output daily, in what context, and how much time they have to act on it.</li>
                    <li>Identify what would make an experienced operator trust the agent recommendation versus ignore or override it: and design those trust signals in from the start.</li>
                    <li>Assess change impact: how different is this from how decisions are made today, who is most affected, and what resistance is realistic.</li>
                    <li>Designate an internal champion: the person on the client side who will drive adoption, gather feedback from the floor, and escalate issues during the build and rollout phases.</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Focus Questions</h4>
                  <ul>
                    <li>Where does the operator need to see this recommendation: on the line, at their desk, in the shift handover meeting, or on a mobile device?</li>
                    <li>What systems does this operator already use every shift? Is there an existing interface the recommendation should appear in rather than a new one?</li>
                    <li>What would make an experienced operator say "I trust this" the first time they see it? What would make them dismiss it?</li>
                    <li>If the agent gets it wrong once, what is the recovery plan: how does trust get rebuilt?</li>
                    <li>How different is this from how the decision is made today? Who loses visibility, authority, or control: and how is that managed?</li>
                    <li>Who on the client team is willing to champion this on the floor, gather honest feedback, and escalate problems during rollout?</li>
                    <li>What training or orientation do frontline operators need before they interact with the agent for the first time?</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Participants</h4>
                  <ul>
                    <li>Production Supervisor or Line Manager (the primary agent user)</li>
                    <li>Plant Manager</li>
                    <li>IT or OT Lead</li>
                    <li>Operations Head</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Accelerators</h4>
                  <ul>
                    <li>Output format reference: examples of alert, dashboard widget, shift report entry, and chat interface: with descriptions of which format suits which context and user type.</li>
                    <li>Trust signal checklist: what elements in a recommendation build operator trust: source transparency, confidence indicator, override option, explainability level, and comparison to baseline.</li>
                    <li>Change impact assessment template: decision type, current approach, changed approach, affected roles, resistance likelihood, and mitigation approach.</li>
                    <li>Champion role definition: responsibilities, time commitment per week, escalation path, and feedback loop to the IBM team during build and rollout.</li>
                  </ul>
                </div>
              </div>

              <div class="output-box">
                <h4>Session output</h4>
                <ul>
                  <li>Interface specification: output format, delivery channel, and system integration point.</li>
                  <li>Recommendation output schema: named fields, their order, and which are always visible versus expandable. This is the contract between the business design and the build team.</li>
                  <li>Trust signal design: what the agent must show: and how: for operators to act on its recommendations.</li>
                  <li>Change impact summary: affected roles, resistance risk, and mitigation approach.</li>
                  <li>Named internal champion with agreed responsibilities and feedback cadence.</li>
                  <li>Training requirements summary: who needs orientation, what they need to understand, and when.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="end-day">
        <h3>End of Day 2 outputs</h3>
        <div class="end-day-grid">
          <div class="end-card">Scored use case matrix with top candidates</div>
          <div class="end-card">Selected use case: questions, dimensions, time windows, success criteria</div>
          <div class="end-card">Golden sample: one fully described perfect agent response</div>
          <div class="end-card">Interface specification and trust signal design</div>
          <div class="end-card">Change impact summary and named adoption champion</div>
          <div class="end-card">Agreed to-be decision process with client process commitments before build</div>
        </div>
      </div>

    </div>
  `;

  // End-of-day executive progress note reminder (non-intrusive note appended to body)
});
