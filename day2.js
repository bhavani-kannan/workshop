document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('day2-body');
  if (!el) return;

  el.innerHTML = `
    <div class="accordion-body">

      <div class="day-objective-block">
        <h3>Objective of the day</h3>
        <p>
          The shortlist from Day 1 is scored and narrowed to one use case. Before the use case is
          defined in detail, the team works through a structured assessment of how the selected decision
          is currently made and where it structurally fails, then agrees on the optimized process the
          agent should be built on. The client confirms which process changes they commit to before build
          begins and which tacit knowledge gaps the agent design must account for. The use case is then
          fully defined against the agreed optimized process: questions, dimensions, time windows, success
          criteria, and golden sample. The goal is not to automate what exists today but to improve the
          decision process first and build the agent on that better foundation. The day's primary output
          is the Decision Intelligence Register: the structured record of what decision was selected,
          how it should be made, who makes it, and where automation begins and ends.
        </p>
      </div>

      <div class="core-day-output">
        <div class="core-day-output-header">
          <span class="core-artifact-label">Core Day Output</span>
          <div class="core-artifact-title">Decision Intelligence Register</div>
          <p class="artifact-purpose">
            Captures the selected decision, decision ownership, automation feasibility, human-only judgment
            boundaries, advisory design, to-be process design, and the standardization requirements that
            must be met before build begins. This is the definitive record of what the agent is and is not
            authorized to do in Phase 1, and why.
          </p>
        </div>
        <div class="core-day-output-grid">
          <div class="core-output-col">
            <span class="core-output-col-label">BA captures manually</span>
            <ul class="ba-capture-list">
              <li>Which operational decisions truly matter and why</li>
              <li>Which decisions can be automated, which should remain advisory, and which must stay human-only</li>
              <li>Automation resistance and the organizational reasons it exists</li>
              <li>Tacit decision heuristics per role that cannot be inferred from data alone</li>
              <li>Standardization gaps that must be resolved before automation is viable</li>
              <li>Client commitments to process changes, and which were rejected with stated reasons</li>
            </ul>
          </div>
          <div class="core-output-col">
            <span class="core-output-col-label">AI generates later</span>
            <ul class="ai-generated-list">
              <li>Decision tables and approval matrices</li>
              <li>Decision trees and workflow summaries</li>
              <li>Role mapping diagrams from transcript</li>
              <li>Use case scoring summaries</li>
            </ul>
          </div>
          <div class="core-output-col">
            <span class="core-output-col-label">Feeds the final playbook with</span>
            <ul class="feeds-playbook-list">
              <li>Decision model and Phase 1 automation boundary</li>
              <li>Advisory vs autonomous logic definitions</li>
              <li>Future-state process commitments and change requirements</li>
              <li>Backlog for deferred or non-agentizable decisions</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="sessions">

        <div class="session">
          <div class="session-toggle">
            <div class="session-number">Session 1</div>
            <div class="session-meta">
              <h3>Use Case Scoring and Ranking</h3>
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
                    <li>Work through the shortlist of five to seven decisions from Day 1 systematically.</li>
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
                    <li>Is any of these decisions already tracked or reported by the business? If so, the data is closer than it looks.</li>
                  </ul>
                </div>

                <div class="block block-wide">
                  <h4>Participants</h4>
                  <ul>
                    <li>Operations Head (leads)</li>
                    <li>Planning or Scheduling Lead</li>
                    <li>Finance Lead</li>
                    <li>IBM Workshop Lead</li>
                  </ul>
                </div>
              </div>

              <div class="ba-journey">
                <div class="ba-journey-col">
                  <span class="ba-journey-label">Before the session</span>
                  <p>Pre-populate the scoring matrix with the Day 1 shortlist and IBM benchmark scores from comparable manufacturing sites as calibration anchors. Confirm data dependency status per candidate with the IBM Technical Lead based on the Day 1 system notes; this prevents the team from scoring candidates as data-ready when the Day 1 assessment says otherwise.</p>
                </div>
                <div class="ba-journey-col">
                  <span class="ba-journey-label">During the session</span>
                  <p>Keep the team scoring, not debating. When a criterion is contested, note the disagreement and force a number; contested scores get surfaced in S2, not resolved in S1. Flag data dependency status for each candidate as confirmed, likely, or unknown while scoring; do not defer this to a consolidation step. Record the rationale for any score that diverges significantly from the IBM benchmark to avoid the score appearing arbitrary to others reviewing the matrix later.</p>
                </div>
                <div class="ba-journey-col">
                  <span class="ba-journey-label">After the session</span>
                  <p>Update the Decision Intelligence Register with the candidate scoring section: all shortlisted decisions scored across the four criteria, with data dependency classification (confirmed, likely, or unknown) per candidate and IBM benchmark comparison. The IBM AI Lead uses this section to prepare candidate summary cards before S2; the Data Architect reviews the data dependency flags to advise on which candidates carry a pre-build data risk that could delay Phase 1.</p>
                </div>
              </div>

              <div class="output-box">
                <h4>Contribution to Day Output</h4>
                <p>Adds to the <strong>Decision Intelligence Register</strong>: candidate scoring section (all shortlisted decisions scored on impact, frequency, data accessibility, and time-to-result; data dependency classification per candidate; IBM benchmark comparison; and contested score rationale).</p>
                <p>Used by: IBM AI Lead (candidate summary cards before S2); Data Architect (data dependency flags to identify which candidates need pre-build data work before Day 3).</p>
              </div>
            </div>
          </div>
        </div>

        <div class="session">
          <div class="session-toggle">
            <div class="session-number">Session 2</div>
            <div class="session-meta">
              <h3>Use Case Selection and Definition</h3>
              <p class="session-desc">
                Present the top candidates, surface concerns, and select one use case. Walk through a
                structured failure mode assessment of how the decision is currently made. Agree on the
                optimized process and which process changes the client commits to. Run the agentizability
                check on the tacit knowledge entries from Day 1. Define the use case fully against the
                agreed optimized process.
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
                    <li>Present the as-is decision process assessment synthesized from Day 1: the current decision steps, where they structurally fail, and what that failure costs. This is a documented failure mode analysis per candidate, prepared in advance, not a recap of complaints.</li>
                    <li>Present the to-be recommendation: how this decision should be made in an AI-assisted operation, what changes in the human steps, where manual steps are eliminated, where approval authority shifts.</li>
                    <li>Run the agentizability check: review the Day 1 Tacit Knowledge Register entries that apply to the selected use case. For each entry, agree on whether the tacit knowledge will be standardized into a rule before build, deferred to a future phase, or treated as a permanent human step. This defines the Phase 1 agentizability boundary.</li>
                    <li>The group agrees on the to-be process: which recommended changes the client commits to making before build begins, which are deferred, and which are rejected. Rejected changes are documented with the reason and the risk they carry.</li>
                    <li>Every element of the use case definition that follows is written against the agreed to-be process, not the current one.</li>
                    <li>Define the selected use case fully: which role it primarily serves, the three to five specific questions it answers, the dimensions it must support, and the time windows it must cover.</li>
                    <li>Define success criteria: the answer format, the decision it enables, and what improvement over baseline looks like at 30, 90, and 180 days.</li>
                    <li>Capture a golden sample: one example of what a perfect agent response looks like for this use case. This becomes the evaluation benchmark for everything built in the months ahead.</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Focus Questions</h4>
                  <ul>
                    <li>Does the IT or OT team see any immediate blockers for the top candidates?</li>
                    <li>Is there an internal champion who will own this use case through the build phase?</li>
                    <li>What is structurally broken about how this decision is made today, not the symptoms, but the root cause?</li>
                    <li>If this decision process were redesigned knowing an AI agent would support it, what would change in the human steps?</li>
                    <li>Which proposed process changes does the client team own, and can they be in place before build begins?</li>
                    <li>Is the team willing to commit to the process changes the optimized design requires? If not, what does automating the current broken process actually deliver?</li>
                    <li>Looking at the tacit knowledge entries from Day 1 that apply to this use case: which can be standardized into a rule before build, and which represent judgment that depends on sensory or contextual input no system can currently capture?</li>
                    <li>Which role does this use case serve first, and what specific question should it answer within the first 30 seconds of use?</li>
                    <li>What time windows matter most: real time, daily, weekly, or trend-based?</li>
                    <li>Can someone in the room describe a perfect agent response, right now, in one or two sentences?</li>
                  </ul>
                </div>

                <div class="block block-wide">
                  <h4>Participants</h4>
                  <ul>
                    <li>Plant Manager</li>
                    <li>Operations Head</li>
                    <li>IT or OT Lead</li>
                    <li>Finance Lead</li>
                    <li>Supply Chain Lead</li>
                  </ul>
                </div>
              </div>

              <div class="ba-journey">
                <div class="ba-journey-col">
                  <span class="ba-journey-label">Before the session</span>
                  <p>Confirm the as-is failure mode assessment and to-be process recommendation are finalized for the top two or three candidates from the Day 1 work; these are presented in the session, not built there. Extract the relevant entries from the Day 1 Tacit Knowledge Register for each candidate so the agentizability check can run without searching through the full document mid-session.</p>
                </div>
                <div class="ba-journey-col">
                  <span class="ba-journey-label">During the session</span>
                  <p>Present the as-is analysis; do not facilitate an open diagnosis discussion, the diagnosis is already complete. When the group defines the to-be process, document every commitment and every rejection with its stated reason; ambiguous commitments create scope disputes during build. Run the agentizability check systematically; every tacit knowledge entry must receive a classification before the use case definition begins. Do not let the golden sample be vague; the room must agree on every field before the session closes.</p>
                </div>
                <div class="ba-journey-col">
                  <span class="ba-journey-label">After the session</span>
                  <p>Update the Decision Intelligence Register with: the use case definition section (primary role, question list, dimension list, time windows, success criteria at 30/90/180 days vs baseline); the to-be process section (each step documented, changes from as-is marked, client commitments with timelines, rejected changes with stated reasons and risk implications); and the agentizability boundary section (each tacit knowledge entry with final Phase 1 classification). Complete the <strong>Golden Sample</strong> and the <strong>To-Be Process Agreement</strong> as standalone artifacts. The AI Lead uses the definition section as the Phase 1 specification baseline; the QA team uses the golden sample as the primary evaluation benchmark throughout testing.</p>
                </div>
              </div>

              <div class="output-box">
                <h4>Contribution to Day Output</h4>
                <p>Adds to the <strong>Decision Intelligence Register</strong>: use case definition section (primary role, question list, dimensions, time windows, success criteria); to-be process section (each step, changes from as-is, client commitments and rejections with stated reasons); agentizability boundary section (each tacit knowledge entry with final Phase 1 classification and agreed handling).</p>
                <p>Standalone artifacts: <strong>Golden Sample</strong> - one fully described example of a perfect agent response, agreed field by field in the room; used by QA as the primary evaluation benchmark throughout testing. <strong>To-Be Process Agreement</strong> <span class="signoff-tag">Sign-off: Operations Head + Plant Manager</span> Optimized decision flow with client commitments; used by the Change Management Lead to scope training requirements and by the AI Lead as the process baseline.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="session">
          <div class="session-toggle">
            <div class="session-number">Session 3</div>
            <div class="session-meta">
              <h3>Interface and Adoption Design</h3>
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
                    <li>Define the recommendation output schema: what fields every agent response must contain. At minimum: the recommendation itself, the confidence level, the top two or three contributing factors the operator can verify, a reference to the source data, and whether approval is required. Agree on field names, order, and which are always visible versus expandable. This schema is what the build team implements.</li>
                    <li>Identify who uses this output daily, in what context, and how much time they have to act on it.</li>
                    <li>Identify what would make an experienced operator trust the agent recommendation versus ignore or override it, and design those trust signals in from the start.</li>
                    <li>Assess change impact: how different is this from how decisions are made today, who is most affected, and what resistance is realistic.</li>
                    <li>Designate an internal champion: the person on the client side who will drive adoption, gather feedback from the floor, and escalate issues during build and rollout.</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Focus Questions</h4>
                  <ul>
                    <li>Where does the operator need to see this recommendation: on the line, at their desk, in the shift handover meeting, or on a mobile device?</li>
                    <li>What systems does this operator already use every shift? Is there an existing interface the recommendation should appear in rather than a new one?</li>
                    <li>What would make an experienced operator say "I trust this" the first time they see it? What would make them dismiss it?</li>
                    <li>If the agent gets it wrong once, what is the recovery plan? How does trust get rebuilt?</li>
                    <li>How different is this from how the decision is made today? Who loses visibility, authority, or control, and how is that managed?</li>
                    <li>Who on the client team is willing to champion this on the floor, gather honest feedback, and escalate problems during rollout?</li>
                    <li>What training or orientation do frontline operators need before they interact with the agent for the first time?</li>
                  </ul>
                </div>

                <div class="block block-wide">
                  <h4>Participants</h4>
                  <ul>
                    <li>Production Supervisor or Line Manager (primary agent user)</li>
                    <li>Plant Manager</li>
                    <li>IT or OT Lead</li>
                    <li>Operations Head</li>
                  </ul>
                </div>
              </div>

              <div class="ba-journey">
                <div class="ba-journey-col">
                  <span class="ba-journey-label">Before the session</span>
                  <p>Review output format reference examples and select the two or three most likely candidates for this operator type and context; the session validates a shortlist, not an open menu. Pre-fill the change impact template with the selected use case, primary role, and the to-be process changes agreed in S2 so the impact assessment focuses on delta, not discovery.</p>
                </div>
                <div class="ba-journey-col">
                  <span class="ba-journey-label">During the session</span>
                  <p>Get the primary user, the Production Supervisor or Line Manager, to describe the exact physical location and time pressure under which they will consume this output. Push the recommendation output schema to exact field names and order before the session closes; "it shows the key factors" is not a schema. Confirm the internal champion by name, not by role, and agree the feedback cadence and escalation path with them in the room.</p>
                </div>
                <div class="ba-journey-col">
                  <span class="ba-journey-label">After the session</span>
                  <p>Update the Decision Intelligence Register with: the interface design section (output format, delivery channel, system integration point, physical context of use); recommendation schema section (every field named, ordered, and labeled as always-visible or expandable, agreed field by field with the primary user); trust signal design section; change impact section (affected roles, authority changes, resistance likelihood, and mitigation approach); adoption champion section (named individual, responsibilities, and feedback cadence); and training requirements section. The Front-End or UX developer implements the schema directly; the Change Management Lead uses the change impact and training sections to design the operator onboarding program.</p>
                </div>
              </div>

              <div class="output-box">
                <h4>Contribution to Day Output</h4>
                <p>Adds to the <strong>Decision Intelligence Register</strong>: interface design section (output format, delivery channel, integration point, physical context of use); recommendation schema (every field named, ordered, and agreed with the primary user); trust signal design; change impact section (affected roles, authority changes, resistance likelihood); adoption champion section (named individual, responsibilities, feedback cadence); training requirements section.</p>
                <p>The recommendation schema is the contract between business design and the build team. Used by: Front-End or UX developer (schema implementation); AI Engineer (agent response structure); Change Management Lead (change impact and training scope); IBM Delivery Lead (adoption champion as the client-side engagement point during build).</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="end-day">
        <h3>End of Day 2 - Decision Intelligence Register sections completed</h3>
        <div class="end-day-grid">
          <div class="end-card">Candidate scoring with data dependency classification per use case</div>
          <div class="end-card">Selected use case: questions, dimensions, time windows, success criteria</div>
          <div class="end-card">Golden sample - one fully described perfect agent response</div>
          <div class="end-card">To-be process agreement with client commitments (signed)</div>
          <div class="end-card">Agentizability boundary decisions per tacit knowledge entry</div>
          <div class="end-card">Interface design, recommendation schema, change impact, and adoption champion</div>
        </div>
      </div>

    </div>
  `;
});
