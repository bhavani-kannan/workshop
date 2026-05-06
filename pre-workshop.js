document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('pre-workshop-body');
  if (!el) return;

  el.innerHTML = `
    <div class="pre-workshop-body">

      <div class="sessions" style="padding-top: 26px;">

        <div class="session">
          <div class="session-toggle">
            <div class="session-number">Client Artifacts</div>
            <div class="session-meta">
              <h3>Required Client Artifacts</h3>
              <p class="session-desc">
                Documents and data the client gathers from existing systems and provides to IBM.
                IBM uses these to pre-populate accelerators before Day 1 so the workshop starts
                informed, not blank.
              </p>
            </div>
            <span class="session-chevron"></span>
          </div>
          <div class="session-content">
            <div class="session-content-inner">
              <div class="session-grid">
                <div class="block">
                  <h4>What to provide</h4>
                  <ul>
                    <li>Plant performance report for the last 90 days: OEE, unplanned downtime, scrap rate, on-time delivery, and any KPIs the plant already tracks. This becomes the Day 1 baseline.</li>
                    <li>Current system landscape: names of the ERP, MES, CMMS, Historian, and any middleware in use: version numbers where known.</li>
                    <li>Org chart covering the operational decision-making layer: Plant Manager, department leads, and the teams that own production, maintenance, planning, and finance data.</li>
                    <li>Sample reports or dashboards the Plant Manager uses today: shift reports, daily OEE summaries, MRP exception reports, downtime logs.</li>
                    <li>Any existing data dictionary, data catalogue, or systems integration documentation: even partial or outdated versions are useful.</li>
                    <li>Recent MRP exception report or downtime log sample (anonymized if required by information security policy).</li>
                    <li>Documentation for any in-flight AI, analytics, or digital plant initiative: to avoid duplicating scope or creating conflicting outputs.</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Format and deadline</h4>
                  <ul>
                    <li>Any format available: PDF, Excel, Word, or a shared drive link. IBM is not asking for clean or formatted deliverables: raw operational reports are preferable to polished summaries.</li>
                    <li>Deadline: 7 business days before Day 1.</li>
                    <li>Send to: IBM Workshop Lead (named in the workshop charter).</li>
                    <li>If any item is unavailable, note what exists in its place and why the original is not available. IBM will advise on whether a substitute is sufficient.</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Why this matters</h4>
                  <ul>
                    <li>The Day 1 baseline metrics snapshot accelerator requires real current values. Without them, the team spends the first session of Day 1 compiling numbers that could have arrived the week before.</li>
                    <li>The Day 3 system inventory is pre-populated from the system landscape document. Without it, Session 3 of Day 3 starts from a blank template.</li>
                    <li>The scenario cards used in Day 5 are built from the downtime log and MRP exception report. Without actual plant history, scenarios are generic and produce less reliable test results.</li>
                    <li>IBM reviewing existing analytics initiatives prevents the workshop from proposing use cases that are already in flight or have already failed.</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Accountable for collection</h4>
                  <ul>
                    <li>Workshop Coordinator or Executive Assistant (scheduling and consolidation)</li>
                    <li>Plant Manager (performance report)</li>
                    <li>IT or OT Lead (system landscape)</li>
                    <li>Finance Lead (MRP exception report)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="session">
          <div class="session-toggle">
            <div class="session-number">Pre-Work Templates</div>
            <div class="session-meta">
              <h3>Mandatory Pre-Work Templates</h3>
              <p class="session-desc">
                Structured templates IBM sends to specific client team members 10 business days
                before Day 1. Completed templates are returned to IBM by the deadline and used to
                pre-populate the workshop accelerators: so sessions begin with 80% of the structure
                filled in and the team validates rather than builds from scratch.
              </p>
            </div>
            <span class="session-chevron"></span>
          </div>
          <div class="session-content">
            <div class="session-content-inner">
              <div class="session-grid">
                <div class="block">
                  <h4>Templates and owners</h4>
                  <ul>
                    <li><strong>Baseline Metrics Snapshot</strong>: current values for OEE, unplanned downtime rate, scrap rate, on-time delivery, and any plant-specific KPIs tracked today. Owner: Plant Manager or Process Engineer. Used in: Day 1 S2 and Day 4 S1.</li>
                    <li><strong>Plant Vocabulary Register</strong>: abbreviations, local codes, system-specific terms, and any terminology that varies by shift, line, or plant. Owner: Plant Manager or Production Supervisor. Used in: Day 1 S2 and throughout Days 4 and 5.</li>
                    <li><strong>System Inventory</strong>: system name, vendor, version, deployment model (cloud, on-premise, hybrid), primary IT contact, and known integration documentation links. Owner: IT or OT Lead. Used in: Day 3 S3.</li>
                    <li><strong>Stakeholder Availability Matrix</strong>: which named individuals are available for which sessions on each of the five days. Owner: Workshop Coordinator. Used to: flag scheduling conflicts before Day 1, not on Day 1.</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Completion expectations</h4>
                  <ul>
                    <li>Deadline: 5 business days before Day 1.</li>
                    <li>Each template is designed to take no more than 30 minutes to complete. IBM sends an example of a completed template alongside the blank version.</li>
                    <li>Partial completion is acceptable if clearly flagged. A template that is 60% complete and returned on time is more useful than a complete template returned the night before Day 1.</li>
                    <li>IBM will send a completion reminder 2 business days before the deadline. If a template is not received by the deadline, it is escalated to the readiness gate assessment: not chased informally.</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>What IBM does with the completed templates</h4>
                  <ul>
                    <li>Baseline Metrics Snapshot: inserted into the Day 4 metric catalogue template and the Day 2 success criteria canvas as the reference starting point.</li>
                    <li>Plant Vocabulary Register: reviewed and any ambiguous or conflicting terms flagged back to the client before Day 1.</li>
                    <li>System Inventory: used to pre-populate the Day 3 domain map and the Day 3 data connectivity template. Any system IBM cannot identify from the submission is flagged before Day 3.</li>
                    <li>Stakeholder Availability Matrix: used to assign the right individuals to the right sessions and identify gaps requiring a substitute before the workshop starts.</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>If templates are not returned</h4>
                  <ul>
                    <li>Missing Baseline Metrics Snapshot: Day 1 S2 and Day 4 S1 will need to capture this in session: adding 30 to 45 minutes to each. This is avoidable.</li>
                    <li>Missing Plant Vocabulary Register: the risk of the agent design using incorrect or ambiguous terminology is carried into the build phase undetected.</li>
                    <li>Missing System Inventory: Day 3 S3 cannot proceed as designed. The session reverts to building the inventory from scratch, which takes the full session and leaves no time for connectivity assessment.</li>
                    <li>Missing Stakeholder Availability Matrix: scheduling conflicts surface during the workshop, not before it: disrupting session structure and risking incomplete outputs on affected days.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="session">
          <div class="session-toggle">
            <div class="session-number">Stakeholder Prep</div>
            <div class="session-meta">
              <h3>Stakeholder Preparation Expectations</h3>
              <p class="session-desc">
                What each key stakeholder should review or prepare before arriving on Day 1.
                IBM sends a one-page briefing pack to all participants 3 business days in advance.
                This section defines what that briefing expects of each role.
              </p>
            </div>
            <span class="session-chevron"></span>
          </div>
          <div class="session-content">
            <div class="session-content-inner">
              <div class="session-grid">
                <div class="block">
                  <h4>Executive team</h4>
                  <ul>
                    <li>Review the workshop charter draft sent by IBM. Come prepared to confirm, adjust, or reject the scope: not to hear it for the first time in the room.</li>
                    <li>Articulate the top three operational priorities in concrete terms: specific performance problems with measurable impact, not strategic statements. "We lose approximately 12% OEE on Line 3 every Monday morning and no one agrees on why" is useful. "We need to improve operational efficiency" is not.</li>
                    <li>If there are organizational tensions, investment decisions, or restructuring programs that will affect the workshop scope, brief the IBM Workshop Lead before Day 1, not during the executive session.</li>
                    <li>Time commitment for pre-work: 30 minutes.</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Plant Manager and operational leads</h4>
                  <ul>
                    <li>Review the process flow reference document sent by IBM. Be ready to walk the actual order-to-dispatch flow including where it diverges from the documented version: the divergences are the most important part of Day 1 S2.</li>
                    <li>Come with a rough list of the five operational questions that take the longest to answer or are most often wrong. These do not need to be formatted; written notes or verbal recall is sufficient.</li>
                    <li>Finance Lead: pull the last 30 days of MRP exception messages or cost variance report. Bring it to Day 1, or be ready to describe the types and frequency from memory.</li>
                    <li>Planning Lead: know the current MRP exception volume and the top three exception types the team sees every week.</li>
                    <li>Time commitment for pre-work: 30 to 45 minutes per role.</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>IT and OT Lead</h4>
                  <ul>
                    <li>Complete and return the System Inventory template before the deadline.</li>
                    <li>Confirm before Day 1 whether IBM consultants can access the MES and ERP systems on site or remotely: and flag any OT network isolation, air-gap, VPN requirement, or security clearance that applies. This must be resolved before Day 3, not discovered during it.</li>
                    <li>Identify the existing integration middleware in use (for example MuleSoft, Azure Integration Services, SAP Integration Suite) and be ready to describe what it currently connects and what it does not.</li>
                    <li>If there is a known data sensitivity, GDPR, or data residency constraint affecting any system in scope, brief the IBM team before Day 3, not during the session.</li>
                    <li>Time commitment for pre-work: 45 to 60 minutes.</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>All participants</h4>
                  <ul>
                    <li>Read the workshop overview document sent by IBM 5 business days before Day 1. Understand which sessions require your presence so you can protect the correct time slots.</li>
                    <li>The workshop runs sessions back-to-back with short breaks. Checking email or taking calls during sessions disrupts the flow and forces the group to re-establish context. Participants should treat their scheduled sessions as protected time.</li>
                    <li>If a named participant cannot attend a session, they must identify a substitute with equivalent knowledge before the workshop starts: not on the morning of the session.</li>
                    <li>Time commitment for pre-work: 15 minutes to read the briefing pack and confirm availability.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="session">
          <div class="session-toggle">
            <div class="session-number">Facilitator Prep</div>
            <div class="session-meta">
              <h3>Facilitator Preparation</h3>
              <p class="session-desc">
                What the IBM team does once client artifacts and pre-work templates are received.
                The goal is to arrive on Day 1 with accelerators pre-populated, scenario cards drafted,
                and no session starting from a blank page.
              </p>
            </div>
            <span class="session-chevron"></span>
          </div>
          <div class="session-content">
            <div class="session-content-inner">
              <div class="session-grid">
                <div class="block">
                  <h4>Content preparation</h4>
                  <ul>
                    <li>Review all client artifacts and completed pre-work templates. Identify gaps, ambiguities, and anything that requires clarification before Day 1. Send a single consolidated clarification request: not multiple separate messages: to the client workshop coordinator at least 3 business days before Day 1.</li>
                    <li>Pre-populate the Day 1 decision inventory template with an initial list of 8 to 10 candidate decisions derived from the client's performance report and MRP exception sample. The team extends and corrects the list in session rather than building it from nothing.</li>
                    <li>Pre-populate the Day 3 domain map with the system inventory information received. Flag any system IBM cannot identify and confirm the query or API method before Day 3.</li>
                    <li>Insert the baseline metric values from the Baseline Metrics Snapshot into the Day 4 metric catalogue template. Flag any metric in the reference library that appears to be tracked differently at this client versus the standard definition.</li>
                    <li>Draft 4 to 5 scenario cards for Day 5 using the client's downtime log and MRP exception sample. Each card should use real or realistic data values from the client's own plant history.</li>
                    <li>Insert the golden sample prompt into the Day 2 use case definition canvas based on what is known about the client's top priority use case from the pre-work review.</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Logistics and access</h4>
                  <ul>
                    <li>Confirm site access for all IBM team members: visitor passes, security clearance, parking, and building access for each day.</li>
                    <li>Confirm room setup: whiteboard or flip chart, screen and projector or display, Wi-Fi or wired internet, printing capability for last-minute accelerator updates.</li>
                    <li>Confirm OT network access plan with the client IT or OT Lead: especially whether IBM can connect to MES or historian systems from the workshop room or only from a designated access point.</li>
                    <li>Confirm NDA and data sharing agreements are signed before client data is reviewed in pre-work preparation.</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Stakeholder briefing pack</h4>
                  <ul>
                    <li>Prepare and send the participant briefing pack 3 business days before Day 1. Contents: workshop overview, session schedule with named participants per session, what to prepare per role (from the Stakeholder Preparation section), and IBM team introductions.</li>
                    <li>Send the workshop charter draft to the executive team at the same time. The charter should reflect what IBM understood from the pre-work review: not a generic template.</li>
                    <li>Send the process flow reference document to the Plant Manager and operational leads for review before Day 1.</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Internal IBM team alignment</h4>
                  <ul>
                    <li>Run a 60-minute internal alignment session with all IBM team members 2 business days before Day 1. Cover: client context, known organizational tensions from the pre-work review, session ownership assignments, escalation path if a session runs over, and the go or no-go readiness gate status.</li>
                    <li>Confirm who leads each session and who takes notes. The same person should not do both.</li>
                    <li>Agree on the facilitation protocol for executive sessions: one IBM lead speaks; others observe and take notes unless invited to contribute.</li>
                    <li>Review the readiness gate checklist. If any go criterion is not met, decide whether to proceed, postpone specific days, or reschedule the full workshop before communicating to the client.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="readiness-gate">
        <div class="readiness-gate-heading">
          <h3>Workshop Readiness Gate</h3>
          <span class="readiness-gate-badge">Go / No-Go</span>
        </div>
        <div class="readiness-gate-grid">
          <div class="readiness-gate-col">
            <h4>Go criteria: all must be confirmed</h4>
            <ul>
              <li>Baseline Metrics Snapshot received with values populated.</li>
              <li>Plant Vocabulary Register received.</li>
              <li>System Inventory received with at least system names and versions confirmed.</li>
              <li>Stakeholder Availability Matrix received with no unresolved session gaps.</li>
              <li>Site access confirmed for all IBM team members.</li>
              <li>NDA and data sharing agreements signed.</li>
              <li>OT network access plan confirmed with IT or OT Lead.</li>
            </ul>
          </div>
          <div class="readiness-gate-col">
            <h4>Pre-workshop phase outputs</h4>
            <ul>
              <li>All workshop accelerators pre-populated by the IBM team and confirmed ready before the Day 1 internal alignment session.</li>
              <li>Participant briefing pack sent to all confirmed attendees.</li>
              <li>Workshop charter draft sent to executive team for Day 1 review.</li>
              <li>Scenario card drafts completed from client plant history.</li>
              <li>Readiness gate assessment completed: confirmed go, or revised start date with specific conditions that must be met before rescheduling.</li>
            </ul>
          </div>
        </div>
        <p class="readiness-gate-warning">
          When every criterion is confirmed, sessions begin with context rather than open questions and every output is immediately usable.
          Should any criterion remain open 3 business days before Day 1, IBM will work with the workshop coordinator to agree a revised start date and the specific steps needed before proceeding.
          Resolving gaps before the workshop starts is always faster and less costly than discovering them on Day 1.
        </p>
      </div>

      <div class="pre-workshop-outputs">
        <h3>Pre-workshop phase outputs</h3>
        <div class="pre-workshop-outputs-grid">
          <div class="pre-output-card">Baseline metrics snapshot with current plant KPI values</div>
          <div class="pre-output-card">Plant vocabulary register with confirmed terms and codes</div>
          <div class="pre-output-card">System inventory with versions and integration methods</div>
          <div class="pre-output-card">Pre-populated accelerators ready for Day 1</div>
        </div>
      </div>

    </div>
  `;
});
