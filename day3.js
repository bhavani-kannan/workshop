document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('day3-body');
  if (!el) return;

  el.innerHTML = `
    <div class="accordion-body">

      <div class="day-objective-block">
        <h3>Objective of the day</h3>
        <p>
          Map the data landscape before any design begins. Identify the business domains that hold the data,
          understand how it flows between MES and ERP and where it degrades, sketch the key entities,
          surface and prioritize access and quality gaps, and then — critically — confirm the specific systems,
          connectivity methods, data volumes, and data contract that will govern what the build team receives and when.
        </p>
      </div>

      <div class="sessions">

        <div class="session">
          <div class="session-toggle">
            <div class="session-number">Session 1</div>
            <div class="session-meta">
              <h3>Domain Map</h3>
              <p class="session-desc">
                Name the data domains relevant to the selected use case, assign a business owner
                and data steward to each, map where the domains intersect, and identify where data
                degrades or gets lost as it moves between the shop floor and the ERP.
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
                    <li>Name the relevant domains: production (MES), calendar and shift (plant scheduler), maintenance (CMMS), workforce (HCM), and finance (ERP FI). Add quality and inventory where relevant to the selected use case.</li>
                    <li>For each domain, identify the primary system, the business owner, and the data steward accountable for quality and access.</li>
                    <li>Map cross-domain relationships: which domain pairs must be joined to answer the use case questions, and what entity links them.</li>
                    <li>Identify the MES-to-ERP data flow: what execution data should reach the ERP, what typically arrives late or incomplete, and what is never transmitted at all.</li>
                    <li>Flag master data misalignment: BOMs that do not reflect current routing, unit-of-measure discrepancies, reason codes that vary by shift or plant.</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Focus Questions</h4>
                  <ul>
                    <li>What are the named data domains in this plant and what does each one cover?</li>
                    <li>Who is the business owner of each domain? Who is accountable for data quality?</li>
                    <li>How does MES execution data reach the ERP? What is the lag, and what is routinely missing or incorrect?</li>
                    <li>Are BOMs, routings, or unit-of-measure definitions consistent across the MES and ERP? Where do they diverge?</li>
                    <li>How are downtime reason codes structured? Are they consistent across shifts, lines, and plants — or does each supervisor interpret them differently?</li>
                    <li>Where do two domains need to be joined? For example: which work orders ran on which resource during which shift, or which downtime event links to which cost posting?</li>
                    <li>Are there domains where data exists but system ownership is unclear or contested across functions?</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Participants</h4>
                  <ul>
                    <li>Chief Data Officer or Data Lead</li>
                    <li>IT or OT Lead</li>
                    <li>Plant Systems Owner</li>
                    <li>Finance Systems Lead (for cost domain)</li>
                    <li>Manufacturing Engineering Lead (for MES and reason code ownership)</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Accelerators</h4>
                  <ul>
                    <li>Domain map template: pre-listed manufacturing domains (production, calendar, maintenance, workforce, finance, quality, inventory) with blank owner, steward, and system fields. The team confirms and adjusts rather than builds from scratch.</li>
                    <li>MES-to-ERP data flow reference: which data should travel between systems, common lag and loss points, and typical master data misalignment patterns.</li>
                    <li>Cross-domain join reference: workorder-to-resource, downtime-to-cost, attendance-to-shift — common join patterns with the entity that bridges them.</li>
                    <li>Master data alignment checklist: BOMs, routings, UOMs, reason code taxonomy — a yes/no assessment completed before the session to focus discussion on known problem areas.</li>
                  </ul>
                </div>
              </div>

              <div class="output-box">
                <h4>Session output</h4>
                <ul>
                  <li>Domain map: domain name, system, owner, steward, in-scope flag, and notes per domain.</li>
                  <li>Cross-domain join list: the specific entity joins the use case depends on.</li>
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
              <h3>Entity Sketch and Gap Prioritization</h3>
              <p class="session-desc">
                Sketch the key entities in each in-scope domain, assess what is accessible and how clean it is,
                identify the links needed across domain boundaries, then classify every gap and agree on
                the resolution plan and owners before the design phase begins.
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
                    <li>For each in-scope domain, name the shared reference entities (Resource, ReasonCode, ShiftPattern, Product) and the domain-specific entities that hold operational records.</li>
                    <li>Sketch the key relationships: which entities link within a domain and which require a cross-domain join key.</li>
                    <li>Assess access and quality per entity: can it be queried programmatically, how complete is the history, and are there known quality issues.</li>
                    <li>Flag entities where batch-oriented ERP processes mean data arrives too late or at too coarse a grain to support the decision logic.</li>
                    <li>Classify each gap identified: blocking (prevents delivery), manageable (reduces quality), or deferrable (low impact on the selected use case).</li>
                    <li>Agree on the resolution approach for each blocking gap: integration work, data clean-up, master data correction, proxy data, or manual input. Assign an owner and timeline to each.</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Focus Questions</h4>
                  <ul>
                    <li>What are the core entities in each domain: WorkOrder, ShiftInstance, MaintenanceEvent, Employee, CostCenter?</li>
                    <li>Which entities are shared across domains and serve as the join keys?</li>
                    <li>Can each entity be accessed via API or direct query, or does it require a manual extract?</li>
                    <li>How far back does the history go for each entity? Is that sufficient for the use case time windows agreed on Day 2?</li>
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
                    <li>Plant Manager (joins for gap classification and resolution plan — final 45 minutes)</li>
                    <li>Finance Lead (joins for gaps requiring investment — final 45 minutes)</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Accelerators</h4>
                  <ul>
                    <li>Entity sketch template: entity name, domain, shared or domain-specific, key attributes, access method, history depth, known quality issues — pre-listed with common manufacturing entities so the team confirms and adjusts.</li>
                    <li>Data access and quality scorecard: a one-page rating per entity (ready, accessible with preparation, or not accessible) completed by IT/OT before the session based on Day 1 system notes.</li>
                    <li>Gap priority matrix: a pre-structured table with gap type, blocking or manageable or deferrable classification, resolution approach options, and owner and timeline fields.</li>
                    <li>Proxy data reference: common proxy approaches for manufacturing gaps — for example, using shift calendar data when attendance records are incomplete.</li>
                  </ul>
                </div>
              </div>

              <div class="output-box">
                <h4>Session output</h4>
                <ul>
                  <li>Entity sketch per domain: shared reference entities, domain-specific entities, and the cross-domain join keys.</li>
                  <li>Access and quality rating per entity: ready, accessible with preparation, or not accessible.</li>
                  <li>Batch vs. real-time gap flags: entities where ERP timing prevents the decision logic from working.</li>
                  <li>Gap register: gap description, affected entity or domain, priority classification, resolution approach, owner, and estimated timeline.</li>
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
              <h3>Data Connectivity and Contract</h3>
              <p class="session-desc">
                Confirm the actual systems, versions, and connection methods. Establish data volume
                and freshness expectations. Classify data sensitivity. Agree and document the data
                contract: what the client team commits to deliver, in what format, and by when —
                so the build team does not start on assumptions.
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
                    <li>Agree on data freshness requirements for each entity: real-time, near-real-time (seconds to minutes), hourly batch, daily batch. Formalize these as SLAs rather than preferences.</li>
                    <li>Classify data sensitivity: production cost data, employee attendance, shift performance, and machine-level data may carry GDPR, data residency, union agreement, or internal security classification constraints.</li>
                    <li>Agree and document the data contract: the specific data sets the client commits to provide, the agreed format, the agreed freshness, and the confirmed date by which access will be available to the build team.</li>
                  </ul>
                </div>

                <div class="block">
                  <h4>Focus Questions</h4>
                  <ul>
                    <li>What is the exact name and version of each system in scope? Is the MES on-premise, cloud, or hybrid?</li>
                    <li>Can the IBM team connect to the MES today, or is there an OT network boundary that requires a separate access project?</li>
                    <li>What is the integration method available for each system: REST API, SAP BAPI or OData, JDBC direct query, file extract, or existing middleware such as MuleSoft or Azure Integration Services?</li>
                    <li>How many records per day does each key entity generate? What is the peak load during a shift changeover or a machine alarm event?</li>
                    <li>What is the freshness requirement for each entity, and what is actually achievable given current system architecture?</li>
                    <li>Does any data in scope carry GDPR, data residency, export control, union agreement, or internal security classification requirements?</li>
                    <li>Where will the agent infrastructure run — cloud, on-premise, or hybrid? Who owns that infrastructure and who governs it?</li>
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
                    <li>Connectivity test checklist: a step-by-step verification that IBM can reach each system — connection string, authentication method, test query or ping, and the result. Run during the session where possible.</li>
                    <li>Data volume estimation guide: a reference table of typical record volumes for common manufacturing systems, used to sanity-check the client's estimates.</li>
                    <li>Data sensitivity classification guide: a decision tree that maps data type to sensitivity category and the constraint it triggers — GDPR, data residency, union, or internal security.</li>
                    <li>Data contract template: data set name, system, format, freshness SLA, sensitivity classification, client owner, confirmed access date, and IBM acceptance criteria. Signed by both parties at end of session.</li>
                  </ul>
                </div>
              </div>

              <div class="output-box">
                <h4>Session output</h4>
                <ul>
                  <li>System inventory: confirmed names, versions, deployment models, and integration methods for every in-scope source.</li>
                  <li>Connectivity assessment: confirmed accessible, accessible with preparation by a specific date, or blocked with a named resolution path.</li>
                  <li>Data volume estimates per entity and peak load conditions.</li>
                  <li>Freshness SLAs: agreed and documented per entity — not aspirational, but what the current architecture can deliver.</li>
                  <li>Data sensitivity register: classification per entity and the constraint it triggers.</li>
                  <li>Signed data contract: what the client delivers, in what format, confirmed accessible by what date.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="end-day">
        <h3>End of Day 3 outputs</h3>
        <div class="end-day-grid">
          <div class="end-card">Domain map with owners, stewards, and MES-to-ERP flow gaps</div>
          <div class="end-card">Entity sketch with access rating and gap register</div>
          <div class="end-card">Data readiness recommendation: ready, conditional, or not yet ready</div>
          <div class="end-card">System inventory with confirmed integration methods</div>
          <div class="end-card">Signed data contract with freshness SLAs and access dates</div>
        </div>
      </div>

    </div>
  `;
});
