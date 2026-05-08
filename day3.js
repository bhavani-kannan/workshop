document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('day3-body');
  if (!el) return;

  el.innerHTML = `
    <div class="accordion-body">

      <div class="day-objective-block">
        <h3>Objective of the day</h3>
        <p>
          Determine whether the operational behavior identified on Days 1 and 2 can actually be observed
          through systems, signals, data, documents, or human inputs. Map the data landscape before any
          design begins. Surface shadow systems and informal tools operators depend on that formal systems
          do not capture. Identify where system-of-record data diverges from operational truth, and confirm
          the data access commitments the build team depends on. The day's primary output is the Operational
          Signal and Data Readiness Register: the structured record of which signals can support the agent,
          which require remediation, and which are currently unavailable.
        </p>
      </div>

      <div class="core-day-output">
        <div class="core-day-output-header">
          <span class="core-artifact-label">Core Day Output</span>
          <div class="core-artifact-title">Operational Signal and Data Readiness Register</div>
          <p class="artifact-purpose">
            Captures whether the operational behavior identified in Days 1 and 2 can be observed through
            systems, signals, data, documents, or human inputs. Covers shadow systems, data trust realities,
            and the gap between what systems report and what operators know to be true.
          </p>
        </div>
        <div class="core-day-output-grid">
          <div class="core-output-col">
            <span class="core-output-col-label">BA captures manually</span>
            <ul class="ba-capture-list">
              <li>Weak signals operators use before systems react</li>
              <li>Hidden or shadow systems: Excel trackers, whiteboards, shift books, WhatsApp, email, local databases</li>
              <li>Operational meaning of signals, not just where data exists</li>
              <li>Which systems people actually trust versus which they bypass or correct</li>
              <li>Gaps between system-of-record data and operational truth</li>
              <li>Which signals are usable now, which require remediation, and which are unavailable</li>
            </ul>
          </div>
          <div class="core-output-col">
            <span class="core-output-col-label">AI generates later</span>
            <ul class="ai-generated-list">
              <li>System inventory and data ownership list</li>
              <li>Source-to-target mapping and lineage diagram draft</li>
              <li>API catalog draft</li>
              <li>Basic data dictionary draft from schemas</li>
            </ul>
          </div>
          <div class="core-output-col">
            <span class="core-output-col-label">Feeds the final playbook with</span>
            <ul class="feeds-playbook-list">
              <li>Signal model and data readiness assessment</li>
              <li>System trust analysis and shadow-system dependencies</li>
              <li>Integration and data remediation backlog</li>
              <li>Data commitment as binding build dependency</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="sessions">

        <div class="session">
          <div class="session-toggle">
            <div class="session-number">Session 1</div>
            <div class="session-meta">
              <h3>Data Ownership and Flow Mapping</h3>
              <p class="session-desc">
                Identify who owns each data source relevant to the selected use case, map how
                production data flows between the shop floor and the ERP, and pinpoint where it
                arrives late, incomplete, or misaligned.
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
                    <li>Identify the data sources relevant to the selected use case and the business area each covers: production data from the MES, shift and calendar data from the plant scheduler, maintenance records from the CMMS, workforce data from the HCM system, and financial data from the ERP.</li>
                    <li>For each data source, confirm the system it lives in, who the business owner is by name (not role), and who is accountable for data quality and access.</li>
                    <li>Map the connections between systems: which data sources must be combined to answer the use case questions, and what shared reference links them.</li>
                    <li>Identify the MES-to-ERP data flow: what production execution data should reach the ERP, what typically arrives late or incomplete, and what is never transmitted at all.</li>
                    <li>Surface shadow systems and informal tools: Excel trackers, whiteboards, shift books, local databases, or messaging tools that operators use to track what formal systems do not.</li>
                    <li>Flag master data misalignment: BOMs that do not reflect current routing, unit-of-measure discrepancies, reason codes that vary by shift or plant.</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Focus Questions</h4>
                  <ul>
                    <li>What data sources does this plant rely on and what does each one cover?</li>
                    <li>Who is the business owner of each data source? Who is accountable for data quality?</li>
                    <li>How does production execution data reach the ERP? What is the lag, and what is routinely missing or incorrect?</li>
                    <li>Are BOMs, routings, or unit-of-measure definitions consistent across the MES and ERP? Where do they diverge?</li>
                    <li>What tracking tools does your team use that are not part of the official system? An Excel sheet, a whiteboard, a group chat, a shift notebook?</li>
                    <li>Which system do you check first when something goes wrong, and why that one rather than the official source?</li>
                    <li>Are there data sources where ownership is unclear or contested across functions?</li>
                  </ul>
                </div>

                <div class="block block-wide">
                  <h4>Participants</h4>
                  <ul>
                    <li>Chief Data Officer or Data Lead</li>
                    <li>IT or OT Lead</li>
                    <li>Plant Systems Owner</li>
                    <li>Finance Systems Lead (for cost data)</li>
                    <li>Manufacturing Engineering Lead (for MES and reason code ownership)</li>
                  </ul>
                </div>
              </div>

              <div class="ba-journey">
                <div class="ba-journey-col">
                  <span class="ba-journey-label">Before the session</span>
                  <p>Pull the data sources named in the Day 2 Use Case Definition section and pre-draw the MES-to-ERP flow skeleton using the System Inventory from pre-work. Cross-reference with the Day 1 exception pattern log to identify which MES-to-ERP gaps are already documented; these are confirmed starting points, not items to discover again. Bring named data owners from the pre-work artifacts to confirm in session rather than identify for the first time.</p>
                </div>
                <div class="ba-journey-col">
                  <span class="ba-journey-label">During the session</span>
                  <p>For each data source, confirm the named owner in the room as a person's name, not a role title. When the MES-to-ERP flow is traced, push for specific examples: "which MES event creates this ERP exception?" not a general description. Ask directly about shadow systems and informal tools; participants often do not volunteer these without a specific prompt. Flag master data misalignment with a concrete example where possible. Do not move past any data source without confirming whether it is in scope and who owns it.</p>
                </div>
                <div class="ba-journey-col">
                  <span class="ba-journey-label">After the session</span>
                  <p>Update the Operational Signal and Data Readiness Register with: the source and ownership section (each data source with system name, named business owner, named quality steward, in-scope flag, and access status); the system linkage section (specific connections between systems and the matching reference fields); the MES-to-ERP signal gap section (what production data arrives late, incomplete, or is never transmitted, with master data misalignment examples); and the shadow system section (each informal tool or workaround with its owner and what it tracks that the formal system does not). The Data Architect uses the ownership section to plan integration architecture; the IT/OT Lead uses it to initiate access requests; the AI Engineer uses the signal gap section to scope causal correlation logic.</p>
                </div>
              </div>

              <div class="output-box">
                <h4>Contribution to Day Output</h4>
                <p>Adds to the <strong>Operational Signal and Data Readiness Register</strong>: source and ownership section (each data source with named owner and quality steward, in-scope flag, access status); system linkage section (connections between systems and matching reference fields); MES-to-ERP signal gap section (late, incomplete, or missing data flows with master data misalignment examples); shadow system section (informal tools, trackers, and workarounds operators rely on that formal systems do not capture).</p>
                <p>Used by: Data Architect (integration architecture); IT/OT Lead (access requests); AI Engineer (MES-to-ERP correlation scope); Change Management Lead (shadow system dependencies as adoption risk indicators).</p>
              </div>
            </div>
          </div>
        </div>

        <div class="session">
          <div class="session-toggle">
            <div class="session-number">Session 2</div>
            <div class="session-meta">
              <h3>Data Availability and Gap Assessment</h3>
              <p class="session-desc">
                Assess what data is available in each system in scope, how clean it is, and how records
                from different systems connect. Classify every gap by its impact on the use case and
                agree on who resolves it and by when.
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
                    <li>For each system in scope, identify the shared reference data (resources, reason codes, shift patterns, products) and the records that hold day-to-day operational history.</li>
                    <li>Map the key connections: which records link within a system and which require a matching reference to join data across systems.</li>
                    <li>For each data set, confirm whether it can be accessed by query or extract, how far back the history goes, and what quality or completeness issues are known.</li>
                    <li>Probe data trust directly: which data sources do operators trust and act on, and which do they ignore, correct, or supplement with shadow systems?</li>
                    <li>Flag where ERP batch processing means data arrives too late or at too high a level of summary to support the real-time or shift-level decisions the use case requires.</li>
                    <li>Classify each gap: blocking (prevents delivery), manageable (reduces quality), or deferrable (low impact on the selected use case).</li>
                    <li>Agree on the resolution approach for each blocking gap: integration work, data clean-up, master data correction, proxy data, or manual input. Assign an owner and timeline to each.</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Focus Questions</h4>
                  <ul>
                    <li>What are the key records in each system: work orders, shift records, maintenance events, cost centers?</li>
                    <li>Can each data set be accessed by API or direct query, or does it require a manual extract?</li>
                    <li>How far back does the history go for each data set? Is that sufficient for the time windows agreed on Day 2?</li>
                    <li>When you need to know what is really happening on the floor right now, which system do you open first? Which one do you distrust?</li>
                    <li>Where does the ERP receive data in daily or weekly batches that should arrive in near-real time from the MES?</li>
                    <li>Are there known quality issues: missing values, inconsistent reason codes, duplicate records, or units that vary by plant?</li>
                    <li>Which gaps would prevent the agent from answering the use case questions at all?</li>
                    <li>Can any blocking gaps be filled with proxy data or derived calculations as a short-term measure?</li>
                  </ul>
                </div>

                <div class="block block-wide">
                  <h4>Participants</h4>
                  <ul>
                    <li>Data or Systems Architect (leads)</li>
                    <li>IT or OT Lead</li>
                    <li>Plant Systems Owner</li>
                    <li>Data owners from Session 1</li>
                    <li>Plant Manager (joins for gap classification and resolution plan, final 45 minutes)</li>
                    <li>Finance Lead (joins for gaps requiring investment, final 45 minutes)</li>
                  </ul>
                </div>
              </div>

              <div class="ba-journey">
                <div class="ba-journey-col">
                  <span class="ba-journey-label">Before the session</span>
                  <p>Pre-populate the availability assessment template using the metric list from the Day 2 Use Case Definition section as rows and the data sources from S1 as columns. Pre-score what is already known from the Day 1 system notes and pre-work submissions; the team confirms and corrects, not builds from scratch. Identify which metrics have unknown data dependency flags from Day 2 S1 so the session prioritizes those first.</p>
                </div>
                <div class="ba-journey-col">
                  <span class="ba-journey-label">During the session</span>
                  <p>For each metric, trace from the metric definition back to the source column; confirm it exists, confirm it is populated at the required granularity, confirm quality level with a specific example rather than an assertion. Ask directly which systems operators trust and which they do not; these trust realities determine whether the agent's data inputs will be acted on or questioned. Push for a verified confirmation date on anything listed as likely or unknown; an estimate is not a commitment. For every blocking gap, agree on the resolution approach and named owner before moving to the next gap.</p>
                </div>
                <div class="ba-journey-col">
                  <span class="ba-journey-label">After the session</span>
                  <p>Update the Operational Signal and Data Readiness Register with: the signal availability section (each metric mapped to source, system, access method, history depth, quality rating, and granularity level); the data trust section (which systems operators trust and which they bypass, with specific examples of where official data is corrected or ignored); the batch-vs-real-time gap section (data sets where ERP batch timing prevents decision logic from working at required frequency); and the gap classification section (each gap with type, resolution approach, named owner, and estimated resolution date). The Data Engineer uses the availability section to scope pipeline work; the AI Lead uses the gap section to define Phase 1 scope boundaries.</p>
                </div>
              </div>

              <div class="output-box">
                <h4>Contribution to Day Output</h4>
                <p>Adds to the <strong>Operational Signal and Data Readiness Register</strong>: signal availability section (each metric mapped to source, access method, history depth, quality rating); data trust section (which systems operators rely on vs bypass, with specific examples); batch-vs-real-time gap section (data sets where ERP timing prevents the decision logic from working at required frequency); gap classification section (each gap with resolution approach, named owner, and resolution date).</p>
                <p>The data trust section is particularly critical: it is not derivable from a system catalog. Used by: Data Engineer (pipeline scope); AI Lead (Phase 1 scope boundaries based on gap classification); Project Manager (gap register as dependency input to implementation roadmap).</p>
              </div>
            </div>
          </div>
        </div>

        <div class="session">
          <div class="session-toggle">
            <div class="session-number">Session 3</div>
            <div class="session-meta">
              <h3>Data Access Confirmation and Commitment</h3>
              <p class="session-desc">
                Confirm the exact systems and versions in scope, how the build team will connect to each,
                and what data volumes and freshness levels to expect. Classify sensitivity constraints.
                Produce a written commitment from the client on what data they will deliver,
                in what form, and by when.
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
                    <li>Capture the exact system names and versions in scope: ERP (for example SAP S/4HANA 2023, SAP ECC 6.0, Oracle JDE), MES (Siemens Opcenter, Rockwell FactoryTalk, AVEVA, SAP ME), CMMS, Historian. Integration approach depends entirely on which system and which version.</li>
                    <li>Confirm or test connectivity: can the build team access the system, or does OT network isolation, air-gapping, VPN requirement, or security clearance prevent it? Identify the access path and who approves it.</li>
                    <li>Establish data volume expectations: how many work order records per day, MES events per shift, maintenance tickets per month. This drives pipeline architecture decisions.</li>
                    <li>Agree on data freshness requirements for each data source: real-time, near-real-time, hourly batch, daily batch. Formalize these as agreed service levels, not preferences.</li>
                    <li>Classify data sensitivity: production cost data, employee attendance, shift performance, and machine-level data may carry GDPR, data residency, union agreement, or internal security classification constraints.</li>
                    <li>Agree and document the data commitment at the system and data set level: what the client commits to provide access to, the agreed format, the agreed freshness, and the confirmed date by which access will be available.</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Focus Questions</h4>
                  <ul>
                    <li>What is the exact name and version of each system in scope? Is the MES on-premise, cloud, or hybrid?</li>
                    <li>Can the build team connect to the MES today, or is there an OT network boundary that requires a separate access project?</li>
                    <li>What is the integration method available for each system: REST API, SAP BAPI or OData, JDBC direct query, file extract, or existing middleware?</li>
                    <li>How many records per day does each key data source generate? What is the peak load during a shift changeover or machine alarm event?</li>
                    <li>What is the freshness requirement for each data source, and what is actually achievable given current system architecture?</li>
                    <li>Does any data in scope carry GDPR, data residency, export control, union agreement, or internal security classification requirements?</li>
                    <li>By what date can the build team have confirmed, tested access to each data source?</li>
                  </ul>
                </div>

                <div class="block block-wide">
                  <h4>Participants</h4>
                  <ul>
                    <li>IT or OT Lead (leads)</li>
                    <li>Data or Systems Architect</li>
                    <li>Plant Systems Owner</li>
                    <li>Compliance or Security Lead (for sensitivity classification)</li>
                    <li>IBM Technical Lead</li>
                  </ul>
                </div>
              </div>

              <div class="ba-journey">
                <div class="ba-journey-col">
                  <span class="ba-journey-label">Before the session</span>
                  <p>Compile all access requirements identified in S1 and S2 into the data commitment template rows, pre-filling system names, formats, and freshness requirements from what was agreed earlier in the day. Identify which data sources still have unconfirmed access status from the S1 ownership section so the session resolves those specifically rather than walking every line from scratch.</p>
                </div>
                <div class="ba-journey-col">
                  <span class="ba-journey-label">During the session</span>
                  <p>Walk every line of the commitment document with the named owner present. Do not leave the room until each line is either confirmed with a specific date or escalated to a named resolution owner with an agreed date; "we will sort it out" is not a commitment. If a data source owner is not in the room, agree before the session closes who must sign off and how that confirmation will be captured before Day 4 begins.</p>
                </div>
                <div class="ba-journey-col">
                  <span class="ba-journey-label">After the session</span>
                  <p>Update the Operational Signal and Data Readiness Register with: the system and version section (confirmed names, deployment models, and integration methods); the connectivity section (each system classified as accessible, accessible by a specific date, or blocked with a named resolution path); the freshness service level section (agreed latency per data source based on what the architecture can actually deliver, not aspirational targets); and the data sensitivity section (classification per data source and the specific constraint it triggers). Complete the <strong>Data Commitment Document</strong> as a standalone signed artifact. The Data Engineer and Data Architect use the commitment document as the authority for pipeline scope; it is referenced in the Phase 1 implementation plan as a binding client dependency.</p>
                </div>
              </div>

              <div class="output-box">
                <h4>Contribution to Day Output</h4>
                <p>Adds to the <strong>Operational Signal and Data Readiness Register</strong>: system and version section (confirmed names, deployment models, integration methods); connectivity section (accessible, accessible by date, or blocked with named resolution path); freshness service level section (agreed latency per source based on actual architecture capability); data sensitivity section (classification and specific constraint per source).</p>
                <p>Standalone artifact: <strong>Data Commitment Document</strong> <span class="signoff-tag">Sign-off: IT/OT Lead + Data Owners</span> What the client delivers, in what format, via what method, accessible by what date. Used by the Data Engineer and Data Architect as the authority for pipeline scope; referenced in the Phase 1 implementation roadmap as a binding client dependency.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="end-day">
        <h3>End of Day 3 - Operational Signal and Data Readiness Register sections completed</h3>
        <div class="end-day-grid">
          <div class="end-card">Source ownership, system linkage, and MES-to-ERP signal gaps with named owners</div>
          <div class="end-card">Shadow systems and informal tools operators rely on</div>
          <div class="end-card">Data trust analysis: which systems operators trust vs bypass</div>
          <div class="end-card">Signal availability, batch-vs-real-time gaps, and gap classification with resolution owners</div>
          <div class="end-card">System and version inventory, connectivity assessment, freshness service levels</div>
          <div class="end-card">Data commitment document signed by IT/OT Lead and each data owner</div>
        </div>
      </div>

    </div>
  `;
});
