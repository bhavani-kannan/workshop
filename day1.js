document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('day1-body');
  if (!el) return;

  el.innerHTML = `
    <div class="accordion-body">

      <div class="day-objective-block">
        <h3>Objective of the day</h3>
        <p>
          Open with the executive team to set the charter and capture strategic priorities.
          Then work through operations to understand how the plant actually runs, who makes which decisions,
          where the process breaks down, and what the current performance baseline looks like.
          Close the day by presenting findings back to executives for alignment before Day 2 begins.
        </p>
      </div>

      <div class="sessions">

        <div class="session">
          <div class="session-toggle">
            <div class="session-number">Session 1</div>
            <div class="session-meta">
              <h3>Executive Alignment</h3>
              <p class="session-desc">
                Open the workshop with the client's executive team. Establish the charter, capture
                strategic priorities, and surface organizational context that will shape everything that follows.
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
                    <li>Understand the top three to five operational concerns at the executive level and what drives them.</li>
                    <li>Clarify what success looks like from their perspective: which decisions, if made better or faster, would move the numbers.</li>
                    <li>Agree on the workshop charter: scope, what is out of bounds, how outputs will be used, and who has authority to act on recommendations.</li>
                    <li>Surface organizational context that operational teams may not share: ongoing programs, cross-functional tensions, investment decisions already in flight.</li>
                    <li>Agree on how executives will stay informed between Day 1 and Day 5, so the Day 5 endorsement is not a surprise in either direction.</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Focus Questions</h4>
                  <ul>
                    <li>What are the top three operational problems that affect your numbers most right now?</li>
                    <li>Where do you feel decisions are being made too slowly, or with too little reliable data?</li>
                    <li>Which functions are not working well together, and how does that show up in plant performance?</li>
                    <li>What would a successful outcome from this workshop allow you to do differently in six months?</li>
                    <li>Are there investment decisions, restructuring programs, or system upgrades already in flight that affect what is in scope?</li>
                    <li>Are there decisions on your priority list that would face organizational resistance regardless of the technical case?</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Participants</h4>
                  <ul>
                    <li>CEO, COO, CFO, or CPO (client executive team)</li>
                    <li>IBM Consulting Workshop Lead</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Accelerators</h4>
                  <ul>
                    <li>Executive briefing card: what this workshop produces, what it does not, and what is needed from the leadership team.</li>
                    <li>Strategic priority capture template: pre-populated with common manufacturing priorities to anchor the discussion and halve the time to consensus.</li>
                    <li>Workshop charter template: scope, constraints, timeline, decision-making authority, and executive check-in schedule.</li>
                  </ul>
                </div>
              </div>

              <div class="output-box">
                <h4>Session output</h4>
                <ul>
                  <li>Signed workshop charter with agreed scope, constraints, and executive check-in schedule.</li>
                  <li>Top three to five executive priority areas captured with context.</li>
                  <li>Organizational constraints and cross-functional tensions documented for the workshop team.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="session">
          <div class="session-toggle">
            <div class="session-number">Session 2</div>
            <div class="session-meta">
              <h3>Operational Walkthrough and Role Discovery</h3>
              <p class="session-desc">
                Walk through how the plant actually runs with the operational team. Identify who makes
                what decisions, what their hardest daily questions are, what the current performance baseline
                looks like, and where MES and ERP exceptions are handled locally but never learned from.
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
                    <li>Walk the order-to-production-to-dispatch flow as it actually runs, not as the process diagram shows.</li>
                    <li>For each key role, capture the five questions they struggle most to answer and how long it currently takes.</li>
                    <li>Capture current performance baseline: actual OEE, unplanned downtime rate, scrap rate, on-time delivery, and any other KPIs the plant already tracks. The agent needs a reference point before it can define what "better" means.</li>
                    <li>Capture plant-specific vocabulary, local abbreviations, and terms that vary by shift or line. Any system that does not speak the plant's language will be ignored on the floor.</li>
                    <li>Surface MES exception patterns: which alarms are consistently ignored or overridden, how downtime reasons are logged, whether scrap and rework are captured accurately and on time.</li>
                    <li>Surface ERP symptom patterns: repeated MRP shortage messages, inventory figures that do not match physical reality, cost variances that finance resolves manually at month-end.</li>
                    <li>Identify where shop-floor fixes stay local and never feed back into planning, routing, or ERP logic.</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Focus Questions</h4>
                  <ul>
                    <li>What is the hardest question you face at the start of your shift, and how long does it take to answer it today?</li>
                    <li>What is your current OEE? What does a good shift look like versus a bad one, in numbers?</li>
                    <li>What abbreviations, local terms, or codes does your team use daily that an outsider would not know? For example: what does "PM" mean on your floor: planned maintenance, or plant manager?</li>
                    <li>How are MES alarms handled on the line? Which ones are routinely silenced or overridden, and why?</li>
                    <li>When downtime occurs, how is the reason code selected? How often does the logged reason reflect what actually happened?</li>
                    <li>When a shop-floor exception is resolved, does that resolution reach the ERP? What gets lost in translation?</li>
                    <li>Which ERP messages does the planning team see every week and has learned to ignore?</li>
                    <li>Where is tribal knowledge the only reliable source: no standard root cause, no documented resolution?</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Participants</h4>
                  <ul>
                    <li>Plant Manager</li>
                    <li>Maintenance Supervisor</li>
                    <li>Production Supervisor or Line Manager</li>
                    <li>Planning or Scheduling Lead</li>
                    <li>Supply Chain or Order Fulfillment Lead</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Accelerators</h4>
                  <ul>
                    <li>Manufacturing process reference flow (order to dispatch): pre-drawn skeleton that the team annotates, not builds from scratch.</li>
                    <li>Baseline metrics snapshot template: pre-listed KPIs with blank fields for current values, sent as pre-work so numbers are ready before the session starts.</li>
                    <li>Plant vocabulary capture template: abbreviations, local codes, system-specific terms, and role-specific language. Distributed as pre-work; validated in session.</li>
                    <li>MES exception reference: common alarm types, downtime reason code structures, scrap and rework logging conventions.</li>
                    <li>ERP exception reference: MRP exception categories, inventory mismatch types, cost variance patterns in SAP.</li>
                    <li>Role profile template: role, five critical operational questions, current answer time per question, decision types owned.</li>
                    <li>Scenario cards: machine breakdown, delayed order, material shortage, capacity crunch: used to probe exception handling.</li>
                  </ul>
                </div>
              </div>

              <div class="output-box">
                <h4>Session output</h4>
                <ul>
                  <li>Operational flow map with friction points and manual interventions marked.</li>
                  <li>Three to five role profiles: role, five critical operational questions, current answer time, and decision types owned.</li>
                  <li>Current performance baseline: actual values for OEE, downtime, scrap rate, and other tracked KPIs. This is the reference point for all improvement claims.</li>
                  <li>Plant vocabulary register: abbreviations, local terms, and codes the agent must understand correctly.</li>
                  <li>MES exception patterns: alarms ignored, downtime reasons inaccurate, scrap logged late, local fixes not fed upstream.</li>
                  <li>ERP symptom patterns: repeated MRP messages, inventory mismatches, unexplained cost variances.</li>
                  <li>Initial decision inventory: 15 to 25 decisions, each with owner, trigger, data dependency, and outcome.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="session">
          <div class="session-toggle">
            <div class="session-number">Session 3</div>
            <div class="session-meta">
              <h3>Decision Prioritization and Executive Debrief</h3>
              <p class="session-desc">
                Score and narrow the decision inventory to a shortlist. Then bring executives back for
                a focused 30-minute brief: findings, shortlist, and the scope heading into Day 2.
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
                    <li>Group similar decisions, remove duplicates, and score by impact, frequency, and data dependency.</li>
                    <li>Flag decisions where organizational silos, absent ownership, or weak MES-to-ERP feedback loops are the structural cause of the problem: not missing technology.</li>
                    <li>Prepare a one-page executive brief: the shortlist, the scoring rationale, and the proposed Day 2 scope.</li>
                    <li>Brief executives in a 30-minute standing debrief. Get their reaction and surface any strategic context that changes the ranking before Day 2 begins.</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Focus Questions</h4>
                  <ul>
                    <li>Which decisions cause the most production delays or financial losses?</li>
                    <li>Which decisions are effectively owned by no one because they cross functional boundaries?</li>
                    <li>Where does poor MES data quality or delayed ERP data make good decision-making structurally impossible?</li>
                    <li>For the executive debrief: does this shortlist reflect your priorities, or are there gaps?</li>
                    <li>Are there decisions on this list that would face organizational resistance regardless of the technical case?</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Participants</h4>
                  <ul>
                    <li>Prioritization: Plant Manager, Finance Lead, Planning Lead, Maintenance Lead</li>
                    <li>Executive debrief (30 min): CEO, COO, or CFO plus IBM Workshop Lead</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Accelerators</h4>
                  <ul>
                    <li>Prioritization matrix (impact, frequency, urgency, data dependency): pre-scored examples as calibration anchors.</li>
                    <li>Benchmark reference: high-impact decisions from comparable manufacturing sites, with typical scores.</li>
                    <li>Executive debrief template: one-page summary with shortlist, scoring rationale, Day 2 scope proposal, and one open question for executive input.</li>
                  </ul>
                </div>
              </div>

              <div class="output-box">
                <h4>Session output</h4>
                <ul>
                  <li>Shortlist of 5 to 7 high-impact decisions, scored and ranked.</li>
                  <li>Flags for decisions where silo ownership or feedback loop failures are the structural cause.</li>
                  <li>Executive debrief notes: leadership reactions, added context, any priority adjustments.</li>
                  <li>Agreed Day 2 scope with executive alignment confirmed.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="end-day">
        <h3>End of Day 1 outputs</h3>
        <div class="end-day-grid">
          <div class="end-card">Workshop charter agreed with executive team</div>
          <div class="end-card">Role profiles with critical operational questions and current answer times</div>
          <div class="end-card">Current performance baseline and plant vocabulary register</div>
          <div class="end-card">Decision inventory with MES and ERP exception patterns</div>
          <div class="end-card">Priority shortlist with executive alignment confirmed</div>
        </div>
      </div>

    </div>
  `;
});
