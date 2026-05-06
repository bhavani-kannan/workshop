document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('day3-body');
  if (!el) return;

  el.innerHTML = `
    <div class="accordion-body">

      <div class="day-objective-block">
        <h3>Objective of the day</h3>
        <p>
          Map the data landscape before any design begins. Identify who owns each data source,
          understand how production data flows between the shop floor systems and the ERP and where
          it breaks down, assess what is accessible and how complete it is, surface and prioritize
          the gaps that must be addressed, and confirm the systems, connection methods, data volumes,
          and delivery commitments the build team depends on.
        </p>
      </div>

      <div class="sessions">

        <div class="session">
          <div class="session-toggle">
            <div class="session-number">Session 1</div>
            <div class="session-meta">
              <h3>Mapping Data Ownership and System Flows</h3>
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
                    <li>Identify the data sources relevant to the selected use case and the business area each covers: production data from the MES, shift and calendar data from the plant scheduler, maintenance records from the CMMS, workforce data from the HCM system, and financial data from the ERP. Add quality and inventory data where relevant to the use case.</li>
                    <li>For each data source, confirm the system it lives in, who the business owner is, and who is accountable for data quality and access.</li>
                    <li>Map the connections between systems: which data sources must be combined to answer the use case questions, and what shared reference links them.</li>
                    <li>Identify the MES-to-ERP data flow: what production execution data should reach the ERP, what typically arrives late or incomplete, and what is never transmitted at all.</li>
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
                    <li>How are downtime reason codes structured? Are they consistent across shifts, lines, and plants, or does each supervisor interpret them differently?</li>
                    <li>Which data sources need to be combined for the use case? For example: which work orders ran on which resource during which shift, or which downtime event links to which cost posting?</li>
                    <li>Are there data sources where ownership is unclear or contested across functions?</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Participants</h4>
                  <ul>
                    <li>Chief Data Officer or Data Lead</li>
                    <li>IT or OT Lead</li>
                    <li>Plant Systems Owner</li>
                    <li>Finance Systems Lead (for cost data)</li>
                    <li>Manufacturing Engineering Lead (for MES and reason code ownership)</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Accelerators</h4>
                  <ul>
                    <li>Data ownership template: pre-listed manufacturing data sources (production, shift calendar, maintenance, workforce, finance, quality, inventory) with blank owner, steward, and system fields. The team confirms and adjusts rather than builds from scratch.</li>
                    <li>MES-to-ERP data flow reference: which production data should travel between systems, common lag and loss points, and typical master data misalignment patterns.</li>
                    <li>System linkage reference: common ways to connect records across systems: work order to resource, downtime event to cost posting, attendance to shift. Includes the matching field that bridges them.</li>
                    <li>Master data alignment checklist: BOMs, routings, units of measure, reason code taxonomy: a yes/no assessment completed before the session to focus discussion on known problem areas.</li>
                  </ul>
                </div>
              </div>

              <div class="output-box">
                <h4>Session output</h4>
                <ul>
                  <li>Data ownership map: data source name, system, owner, steward, in-scope flag, and notes.</li>
                  <li>System linkage list: the specific connections between systems that the use case depends on.</li>
                  <li>MES-to-ERP flow gaps: what arrives late, what is missing, what master data is misaligned.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="session">
          <div class="session-toggle">
            <div class="session-number">Session 2</div>
            <div class="session-meta">
              <h3>Data Availability Assessment and Gap Prioritization</h3>
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
                    <li>Flag where ERP batch processing means data arrives too late or at too high a level of summary to support the real-time or shift-level decisions the use case requires.</li>
                    <li>Classify each gap identified: blocking (prevents delivery), manageable (reduces quality), or deferrable (low impact on the selected use case).</li>
                    <li>Agree on the resolution approach for each blocking gap: integration work, data clean-up, master data correction, proxy data, or manual input. Assign an owner and timeline to each.</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Focus Questions</h4>
                  <ul>
                    <li>What are the key records in each system: work orders, shift records, maintenance events, employee records, cost centers?</li>
                    <li>Which records are shared across systems and used to connect data between them?</li>
                    <li>Can each data set be accessed by API or direct query, or does it require a manual extract?</li>
                    <li>How far back does the history go for each data set? Is that sufficient for the time windows agreed on Day 2?</li>
                    <li>Where does the ERP receive data in daily or weekly batches that should arrive in near-real time from the MES?</li>
                    <li>Are there known quality issues: missing values, inconsistent reason codes, duplicate records, or units that vary by plant?</li>
                    <li>Which gaps would prevent the agent from answering the use case questions at all?</li>
                    <li>Can any blocking gaps be filled with proxy data or derived calculations as a short-term measure?</li>
                    <li>Are there gaps that require master data corrections, system integration work, or capital investment?</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Participants</h4>
                  <ul>
                    <li>Data or Systems Architect (leads)</li>
                    <li>IT or OT Lead</li>
                    <li>Plant Systems Owner</li>
                    <li>Domain stewards from Session 1</li>
                    <li>Plant Manager (joins for gap classification and resolution plan: final 45 minutes)</li>
                    <li>Finance Lead (joins for gaps requiring investment: final 45 minutes)</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Accelerators</h4>
                  <ul>
                    <li>Data inventory template: data set name, system, whether shared across systems or specific to one, key fields, access method, history depth, known quality issues. Pre-listed with common manufacturing data sets so the team confirms and adjusts.</li>
                    <li>Data access and quality scorecard: a one-page rating per data set (ready, accessible with preparation, or not accessible) completed by IT/OT before the session based on Day 1 system notes.</li>
                    <li>Gap priority matrix: a pre-structured table with gap type, blocking or manageable or deferrable classification, resolution approach options, and owner and timeline fields.</li>
                    <li>Proxy data reference: common proxy approaches for manufacturing gaps: for example, using shift calendar data when attendance records are incomplete.</li>
                  </ul>
                </div>
              </div>

              <div class="output-box">
                <h4>Session output</h4>
                <ul>
                  <li>Data inventory per system: shared reference data, system-specific records, and the matching fields used to connect data across systems.</li>
                  <li>Access and quality rating per data set: ready, accessible with preparation, or not accessible.</li>
                  <li>Batch vs. real-time gap flags: data sets where ERP timing prevents the decision logic from working.</li>
                  <li>Gap register: gap description, affected data set or system, priority classification, resolution approach, owner, and estimated timeline.</li>
                  <li>Data readiness recommendation: ready to proceed, conditional, or not yet ready.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="session">
          <div class="session-toggle">
            <div class="session-number">Session 3</div>
            <div class="session-meta">
              <h3>Confirming System Access and Data Commitments</h3>
              <p class="session-desc">
                Confirm the exact systems and versions in scope, how IBM will connect to each, and
                what data volumes and freshness levels to expect. Classify any sensitivity constraints.
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
                    <li>Confirm or test connectivity: can the IBM team access the system, or does OT network isolation, air-gapping, VPN requirement, or security clearance prevent it? Identify the access path and who approves it.</li>
                    <li>Establish data volume expectations: how many work order records per day, MES events per shift, maintenance tickets per month. This drives pipeline architecture.</li>
                    <li>Agree on data freshness requirements for each data source: real-time, near-real-time (seconds to minutes), hourly batch, daily batch. Formalize these as agreed service levels rather than preferences.</li>
                    <li>Classify data sensitivity: production cost data, employee attendance, shift performance, and machine-level data may carry GDPR, data residency, union agreement, or internal security classification constraints.</li>
                    <li>Agree and document the data commitment at the system and data set level: the specific systems and data sets the client commits to provide access to, the agreed format, the agreed freshness, and the confirmed date by which access will be available to the build team. Column-level specifics are added after Day 4 when metric source columns are defined. The commitment is updated at that point, not replaced.</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Focus Questions</h4>
                  <ul>
                    <li>What is the exact name and version of each system in scope? Is the MES on-premise, cloud, or hybrid?</li>
                    <li>Can the IBM team connect to the MES today, or is there an OT network boundary that requires a separate access project?</li>
                    <li>What is the integration method available for each system: REST API, SAP BAPI or OData, JDBC direct query, file extract, or existing middleware such as MuleSoft or Azure Integration Services?</li>
                    <li>How many records per day does each key data source generate? What is the peak load during a shift changeover or a machine alarm event?</li>
                    <li>What is the freshness requirement for each data source, and what is actually achievable given current system architecture?</li>
                    <li>Does any data in scope carry GDPR, data residency, export control, union agreement, or internal security classification requirements?</li>
                    <li>Where will the agent infrastructure run: cloud, on-premise, or hybrid? Who owns that infrastructure and who governs it?</li>
                    <li>By what date can the build team have confirmed, tested access to each data source?</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Participants</h4>
                  <ul>
                    <li>IT or OT Lead (leads)</li>
                    <li>Data or Systems Architect</li>
                    <li>Plant Systems Owner</li>
                    <li>Compliance or Security Lead (for sensitivity classification)</li>
                    <li>IBM Technical Lead</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Accelerators</h4>
                  <ul>
                    <li>System inventory template: pre-sent as pre-work to IT/OT one day before. Fields: system name, vendor, version, deployment model, primary integration method, known API or extract documentation link. Session validates the completed template, not builds it.</li>
                    <li>Connectivity test checklist: a step-by-step verification that IBM can reach each system: connection string, authentication method, test query or ping, and the result. Run during the session where possible.</li>
                    <li>Data volume estimation guide: a reference table of typical record volumes for common manufacturing systems, used to sanity-check the client's estimates.</li>
                    <li>Data sensitivity classification guide: a decision tree that maps data type to sensitivity category and the constraint it triggers: GDPR, data residency, union, or internal security.</li>
                    <li>Data commitment template: data set name, system, format, freshness service level, sensitivity classification, client owner, confirmed access date, and IBM acceptance criteria. Signed by both parties at end of session.</li>
                  </ul>
                </div>
              </div>

              <div class="output-box">
                <h4>Session output</h4>
                <ul>
                  <li>System inventory: confirmed names, versions, deployment models, and integration methods for every in-scope source.</li>
                  <li>Connectivity assessment: confirmed accessible, accessible with preparation by a specific date, or blocked with a named resolution path.</li>
                  <li>Data volume estimates per data source and peak load conditions.</li>
                  <li>Freshness service levels: agreed and documented per data source: not aspirational, but what the current architecture can deliver.</li>
                  <li>Data sensitivity register: classification per data source and the constraint it triggers.</li>
                  <li>Signed data commitment: what the client delivers, in what format, confirmed accessible by what date.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="end-day">
        <h3>End of Day 3 outputs</h3>
        <div class="end-day-grid">
          <div class="end-card">Data ownership map with system owners, stewards, and MES-to-ERP flow gaps</div>
          <div class="end-card">Data availability assessment with access ratings and gap register</div>
          <div class="end-card">Data readiness recommendation: ready, conditional, or not yet ready</div>
          <div class="end-card">System inventory with confirmed integration methods</div>
          <div class="end-card">Signed data commitment with freshness service levels and access dates</div>
        </div>
      </div>

    </div>
  `;
});
