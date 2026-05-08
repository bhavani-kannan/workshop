document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('day1-body');
  if (!el) return;

  el.innerHTML = `
    <div class="accordion-body">

      <div class="day-objective-block">
        <h3>Objective of the day</h3>
        <p>
          Open with the executive team to set the charter and capture strategic priorities.
          Work through operations to understand how the plant actually runs: who makes which decisions,
          where the process breaks down, what the current performance baseline looks like, and where
          experienced operators deviate from documented thresholds in ways that have never been written down.
          Close by presenting findings back to executives for alignment before Day 2 begins.
          The day's primary output is the Operational Context Register: the structured record of operational
          reality that grounds every design decision made on Days 2 through 5.
        </p>
      </div>

      <div class="core-day-output">
        <div class="core-day-output-header">
          <span class="core-artifact-label">Core Day Output</span>
          <div class="core-artifact-title">Operational Context Register</div>
          <p class="artifact-purpose">
            Captures how operations actually work today: current-state disruption handling, escalation
            behavior, tacit knowledge, system trust issues, documented vs actual process gaps, and
            operational pain. This is not a transcript summary. It is a structured record of what the
            BA observed, verified, and classified across the three sessions.
          </p>
        </div>
        <div class="core-day-output-grid">
          <div class="core-output-col">
            <span class="core-output-col-label">BA captures manually</span>
            <ul class="ba-capture-list">
              <li>Tacit operational behaviors and operator deviations from documented thresholds</li>
              <li>Hidden coordination patterns between shifts, roles, and plants</li>
              <li>Which systems operators trust and which they bypass or correct</li>
              <li>Documented vs actual behavior gaps with specific examples</li>
              <li>Current-state operational divergence by shift, role, line, or plant</li>
              <li>Agentizability classifications for each tacit knowledge instance</li>
            </ul>
          </div>
          <div class="core-output-col">
            <span class="core-output-col-label">AI generates later</span>
            <ul class="ai-generated-list">
              <li>Stakeholder register and participant list</li>
              <li>Glossary and vocabulary normalization</li>
              <li>Meeting summaries and session notes</li>
              <li>Basic escalation flow diagram</li>
              <li>Role inventory from transcript</li>
            </ul>
          </div>
          <div class="core-output-col">
            <span class="core-output-col-label">Feeds the final playbook with</span>
            <ul class="feeds-playbook-list">
              <li>Operational reality and current-state failure modes</li>
              <li>Tacit knowledge register as the Phase 1 automation boundary baseline</li>
              <li>Process deviation evidence for the Day 2 to-be design</li>
              <li>Organizational context for the Day 2 agentizability check</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="sessions">

        <div class="session">
          <div class="session-toggle">
            <div class="session-number">Session 1</div>
            <div class="session-meta">
              <h3>Executive Alignment and Charter</h3>
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
                    <li>Clarify what success looks like: which decisions, if made better or faster, would move the numbers.</li>
                    <li>Agree on the workshop charter: scope, what is out of bounds, how outputs will be used, and who has authority to act on recommendations.</li>
                    <li>Surface organizational context that operational teams may not share: ongoing programs, cross-functional tensions, investment decisions already in flight.</li>
                    <li>Agree on how executives will stay informed across the five days so the Day 5 endorsement is not a surprise in either direction.</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Focus Questions</h4>
                  <ul>
                    <li>What are the top three operational problems that affect your numbers most right now?</li>
                    <li>Where do decisions get made too slowly, or with too little reliable data?</li>
                    <li>Which functions are not working well together, and how does that show up in plant performance?</li>
                    <li>What would a successful outcome from this workshop allow you to do differently in six months?</li>
                    <li>Are there investment decisions, restructuring programs, or system upgrades already in flight that affect what is in scope?</li>
                    <li>Are there decisions on your priority list that would face organizational resistance regardless of the technical case?</li>
                  </ul>
                </div>

                <div class="block block-wide">
                  <h4>Participants</h4>
                  <ul>
                    <li>CEO, COO, CFO, or CPO (client executive team)</li>
                    <li>IBM Consulting Workshop Lead</li>
                  </ul>
                </div>
              </div>

              <div class="ba-journey">
                <div class="ba-journey-col">
                  <span class="ba-journey-label">Before the session</span>
                  <p>Review the workshop charter draft prepared from pre-work submissions and map each executive's known priorities against the proposed scope. Identify where the group is likely to converge quickly and where gaps or conflicts remain. Confirm which executives are in the room and their authority areas so the BA routes questions and pushback correctly.</p>
                </div>
                <div class="ba-journey-col">
                  <span class="ba-journey-label">During the session</span>
                  <p>Keep the session converging toward a signed charter, not an open strategy discussion. Capture verbatim executive statements about what success looks like in six months; these become the Day 2 success criteria anchors and cannot be paraphrased without losing precision. When an executive raises a constraint or organizational tension, log it with their exact words. Push for explicit confirmation of every charter field before the session closes; a charter with open fields is not a charter.</p>
                </div>
                <div class="ba-journey-col">
                  <span class="ba-journey-label">After the session</span>
                  <p>Update the Operational Context Register with: the executive priorities section (verbatim statements on operational priorities, organizational tensions, and in-flight programs that constrain scope) and the workshop scope and authority section (agreed boundaries, decision-making authority, executive check-in schedule). Complete the <strong>Workshop Charter</strong> as a standalone signed document. The IBM AI Lead uses the priorities section before Day 2 S1 to calibrate the use case scoring matrix; the IBM Workshop Lead uses the charter throughout all five days as the project authority document.</p>
                </div>
              </div>

              <div class="output-box">
                <h4>Contribution to Day Output</h4>
                <p>Adds to the <strong>Operational Context Register</strong>: executive priorities section (verbatim statements on top operational concerns, organizational tensions, and in-flight programs that bound the scope); workshop scope and authority section (agreed boundaries, decision-making authority, executive check-in schedule).</p>
                <p>Standalone artifact: <strong>Workshop Charter</strong> <span class="signoff-tag">Sign-off: Executive Sponsor</span> Project authority document for the engagement. Used by the IBM Workshop Lead to resolve scope disputes; used by the client team during build to confirm what was agreed on Day 1.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="session">
          <div class="session-toggle">
            <div class="session-number">Session 2</div>
            <div class="session-meta">
              <h3>Operational Assessment and Role Mapping</h3>
              <p class="session-desc">
                Walk through how the plant actually runs with the operational team. Identify who makes
                what decisions, what their hardest daily questions are, what the performance baseline
                looks like, where MES and ERP exceptions are handled locally but never learned from,
                and where experienced operators deviate from documented thresholds in ways
                that no system currently captures.
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
                    <li>Capture current performance baseline: actual OEE, unplanned downtime rate, scrap rate, on-time delivery, and any KPIs the plant already tracks.</li>
                    <li>Capture plant-specific vocabulary, local abbreviations, and terms that vary by shift or line.</li>
                    <li>Surface MES exception patterns: alarms consistently ignored or overridden, how downtime reasons are logged, whether scrap and rework are captured accurately and on time.</li>
                    <li>Surface ERP symptom patterns: repeated MRP shortage messages, inventory figures that do not match physical reality, cost variances resolved manually at month-end.</li>
                    <li>Identify where shop-floor fixes stay local and never feed back into planning, routing, or ERP logic.</li>
                    <li>For each shortlisted decision, document the current process in structured terms: the steps as they actually happen, where they structurally fail, and what that failure costs the plant.</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Focus Questions</h4>
                  <ul>
                    <li>What is the hardest question you face at the start of your shift, and how long does it take to answer it today?</li>
                    <li>What is your current OEE? What does a good shift look like versus a bad one, in numbers?</li>
                    <li>What abbreviations, local terms, or codes does your team use daily that an outsider would not know?</li>
                    <li>How are MES alarms handled on the line? Which ones are routinely silenced or overridden, and why?</li>
                    <li>When downtime occurs, how is the reason code selected? How often does the logged reason reflect what actually happened?</li>
                    <li>When a shop-floor exception is resolved, does that resolution reach the ERP? What gets lost in translation?</li>
                    <li>Which ERP messages does the planning team see every week and has learned to ignore?</li>
                    <li>Where is tribal knowledge the only reliable source, with no standard root cause and no documented resolution?</li>
                  </ul>
                </div>

                <div class="block block-wide">
                  <h4>Participants</h4>
                  <ul>
                    <li>Plant Manager</li>
                    <li>Maintenance Supervisor</li>
                    <li>Production Supervisor or Line Manager</li>
                    <li>Planning or Scheduling Lead</li>
                    <li>Supply Chain or Order Fulfillment Lead</li>
                  </ul>
                </div>

                <div class="block block-tacit">
                  <h4>Tacit Knowledge Sweep</h4>
                  <ul>
                    <li>Alongside the standard session objectives, the BA runs a tacit knowledge sweep throughout this session. The sweep identifies where experienced operators deviate from documented thresholds or process steps based on pattern recognition that has never been formalized.</li>
                    <li>For every deviation, capture three fields: what the tacit knowledge is (the specific judgment or override), what happens when it is absent (the operational consequence), and an initial agentizability classification: capturable (the logic can be elicited and formalized), deferred (possible but requires more investigation), or structurally human (the judgment depends on sensory or contextual inputs that cannot be digitized in Phase 1).</li>
                    <li>Look specifically for: thresholds that are documented but routinely overridden by experienced operators; decisions made correctly by one person that no one else can explain; and process steps that depend on physical observation, sound, or smell rather than data.</li>
                    <li>Classify and log each instance. Structurally human items feed into the change management plan as process standardization requirements; deferred items enter the Transformation Backlog for future phases.</li>
                  </ul>
                </div>
              </div>

              <div class="ba-journey">
                <div class="ba-journey-col">
                  <span class="ba-journey-label">Before the session</span>
                  <p>Review the completed Baseline Metrics Snapshot and Plant Vocabulary Register from pre-work. Load the manufacturing process reference flow with any annotations the Plant Manager provided. Prepare the tacit knowledge capture template alongside the standard role profile template; both are filled in parallel during this session, not sequentially.</p>
                </div>
                <div class="ba-journey-col">
                  <span class="ba-journey-label">During the session</span>
                  <p>Walk the actual order-to-dispatch flow, pressing for specific numbers at every step rather than estimates. Ask to see a real MES alarm log or MRP exception report on screen rather than accepting a verbal description. Run the tacit knowledge sweep continuously: every time a participant says "it depends" or "you just know," that is a signal; stop, classify it, and log it before moving on. Capture plant vocabulary verbatim with the exact local spelling or code, not a normalized interpretation.</p>
                </div>
                <div class="ba-journey-col">
                  <span class="ba-journey-label">After the session</span>
                  <p>Update the Operational Context Register with: the operational flow section (order-to-dispatch with friction points and manual interventions marked at step level); role profile section (five critical questions, current answer time, decision types owned per key role); performance baseline section (actual plant numbers for OEE, downtime, scrap, and on-time delivery); plant vocabulary section (abbreviations, local terms, reason codes, and shift-specific terminology); MES and ERP exception pattern section (alarm types ignored, downtime reason inaccuracies, recurring MRP exception types); decision inventory section (15 to 25 decisions with owner, trigger, data dependency, and outcome); tacit knowledge section (each instance with holder, consequence if absent, and initial agentizability classification). The Data Architect uses role profiles to scope data access per persona; the AI Engineer uses the vocabulary section; the AI Lead uses the tacit knowledge section before Day 2 to prepare the agentizability check.</p>
                </div>
              </div>

              <div class="output-box">
                <h4>Contribution to Day Output</h4>
                <p>Adds to the <strong>Operational Context Register</strong>: operational flow with friction points; role profiles with critical questions and current answer times; performance baseline (actual plant numbers); plant vocabulary; MES and ERP exception patterns; decision inventory (15 to 25 decisions); tacit knowledge register v1 with agentizability classifications.</p>
                <p>These sections capture what AI cannot reliably reconstruct from a transcript: which alarms are ignored, which systems are trusted or bypassed, where experienced judgment overrides documented thresholds, and knowledge that lives only in experienced heads. Used by: Data Architect (role profiles), AI Engineer (vocabulary), AI Lead and Process Consultant (tacit knowledge, exception patterns, failure modes).</p>
              </div>
            </div>
          </div>
        </div>

        <div class="session">
          <div class="session-toggle">
            <div class="session-number">Session 3</div>
            <div class="session-meta">
              <h3>Decision Prioritization and Leadership Debrief</h3>
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
                    <li>Flag decisions where organizational silos, absent ownership, or weak MES-to-ERP feedback loops are the structural cause of the problem, not missing technology.</li>
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

                <div class="block block-wide">
                  <h4>Participants</h4>
                  <ul>
                    <li>Prioritization: Plant Manager, Finance Lead, Planning Lead, Maintenance Lead</li>
                    <li>Executive debrief (30 min): CEO, COO, or CFO plus IBM Workshop Lead</li>
                  </ul>
                </div>
              </div>

              <div class="ba-journey">
                <div class="ba-journey-col">
                  <span class="ba-journey-label">Before the session</span>
                  <p>Synthesize the decision inventory from Session 2 into the prioritization matrix with preliminary scores based on the operational walkthrough observations. Draft the one-page executive brief with the top five to seven decisions, scoring rationale, and Day 2 scope proposal; the brief enters the room as a draft, not a blank template, so executive time is spent reacting and refining rather than building.</p>
                </div>
                <div class="ba-journey-col">
                  <span class="ba-journey-label">During the session</span>
                  <p>Facilitate scoring without allowing any one participant to dominate the matrix. Silo-ownership flags and feedback loop failure flags are as diagnostically important as numeric scores; capture them explicitly in the matrix rather than in notes. In the 30-minute executive debrief, listen for any strategic context that changes the ranking and capture it verbatim before the session closes. Any adjustment the executives make to the shortlist must be recorded with their stated reason.</p>
                </div>
                <div class="ba-journey-col">
                  <span class="ba-journey-label">After the session</span>
                  <p>Update the Operational Context Register with: the decision scoring section (15 to 25 decisions scored on impact, frequency, urgency, and data dependency, with silo-ownership and feedback loop failure flags and executive debrief notes); the priority shortlist section (five to seven high-impact decisions confirmed by executives); and the as-is failure mode analysis section (current process steps, structural failure causes, and estimated cost per failure event per shortlisted decision, prepared from the day's work to support the Day 2 to-be recommendation). The AI Lead and Process Consultant use the failure mode analysis to prepare the to-be process recommendation before Day 2 S2 begins.</p>
                </div>
              </div>

              <div class="output-box">
                <h4>Contribution to Day Output</h4>
                <p>Adds to the <strong>Operational Context Register</strong>: decision scoring and silo-ownership analysis (with flags and executive debrief notes); priority shortlist (five to seven decisions with executive confirmation); as-is failure mode analysis per shortlisted decision (current process steps, structural failure causes, estimated cost per failure event).</p>
                <p>The failure mode analysis is not a recap of complaints. It is a structured diagnostic that the Day 2 to-be process recommendation is built on. Used by: AI Lead and Process Consultant (failure mode analysis as diagnostic anchor for Day 2 S2); IBM Workshop Lead (shortlist to focus Day 2 scoring).</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="end-day">
        <h3>End of Day 1 - Operational Context Register sections completed</h3>
        <div class="end-day-grid">
          <div class="end-card">Workshop charter agreed and signed by executive sponsor</div>
          <div class="end-card">Executive priorities, organizational tensions, and scope boundaries</div>
          <div class="end-card">Operational flow, role profiles, and performance baseline (actual plant numbers)</div>
          <div class="end-card">Plant vocabulary, MES/ERP exception patterns, and decision inventory</div>
          <div class="end-card">Tacit knowledge register v1 with agentizability classifications</div>
          <div class="end-card">Priority shortlist and as-is failure mode analysis per shortlisted decision</div>
        </div>
      </div>

    </div>
  `;
});
