document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('day3-body');
  if (!el) return;

  el.innerHTML = `
    <div class="accordion-body">

      <div class="day-objective-block">
        <h3>Objective of the day</h3>
        <p>
          Map the data landscape before any design begins. Identify the business sub-domains that
          hold the data, sketch the key entities and their relationships, and surface access and quality
          gaps that need resolving before the build phase starts.
        </p>
      </div>

      <div class="sessions">

        <div class="session">
          <div class="session-header">
            <div class="session-number">Session 1</div>
            <div>
              <h3>Domain Map</h3>
              <p class="session-desc">
                Name the data sub-domains relevant to the selected use case, assign a business owner
                and data steward to each, and map where the domains intersect.
              </p>
            </div>
          </div>

          <div class="session-grid">
            <div class="block">
              <h4>Objective</h4>
              <ul>
                <li>Name the sub-domains that hold data relevant to the selected use case: for example, production (MES), calendar and shift (plant scheduler), maintenance (CMMS), workforce (HCM), and finance (ERP FI).</li>
                <li>For each domain, identify the primary system, the business owner, and the data steward who is accountable for quality and access.</li>
                <li>Determine which domains are in scope for the selected use case and which are out of scope or deferred.</li>
                <li>Map the cross-domain relationships: which pairs of domains must be joined to answer the use case questions, and what entity links them.</li>
              </ul>
            </div>

            <div class="block">
              <h4>Focus Questions</h4>
              <ul>
                <li>What are the named data domains in this plant? What does each one cover?</li>
                <li>Who is the business owner of each domain? Who is accountable for data quality?</li>
                <li>Which domains must be in scope to answer the use case questions?</li>
                <li>Where do two domains need to be joined? For example, which production records relate to which shift, or which downtime event links to which cost posting?</li>
                <li>Are there domains where the data exists but the system ownership is unclear or contested?</li>
              </ul>
            </div>

            <div class="block">
              <h4>Participants</h4>
              <ul>
                <li>Chief Data Officer or Data Lead</li>
                <li>IT or OT Lead</li>
                <li>Plant Systems Owner</li>
                <li>Finance Systems Lead (for cost domain)</li>
                <li>HR or Workforce Lead (for labor domain)</li>
              </ul>
            </div>

            <div class="block">
              <h4>Accelerators</h4>
              <ul>
                <li>Domain map template: sub-domain name, system, business owner, data steward, in/out of scope, notes.</li>
                <li>Manufacturing domain reference: production, calendar, maintenance, workforce, finance, quality, inventory.</li>
                <li>Cross-domain hot spot reference: common joins across manufacturing data domains.</li>
              </ul>
            </div>
          </div>

          <div class="output-box">
            <h4>Session output</h4>
            <ul>
              <li>Domain map table: sub-domain name, system, business owner, data steward, in-scope for this use case, notes.</li>
              <li>Cross-domain hot spot list: the specific entity joins that the use case depends on.</li>
            </ul>
          </div>
        </div>

        <div class="session">
          <div class="session-header">
            <div class="session-number">Session 2</div>
            <div>
              <h3>Entity Sketch and Data Access</h3>
              <p class="session-desc">
                Sketch the key entities in each in-scope domain, assess what data is accessible and
                how clean it is, and identify the bridges needed across domain boundaries.
              </p>
            </div>
          </div>

          <div class="session-grid">
            <div class="block">
              <h4>Objective</h4>
              <ul>
                <li>For each in-scope domain, name the root entities (shared reference data such as Resource, ReasonCode, ShiftPattern) and the domain-specific entities that hold operational records.</li>
                <li>Sketch the key relationships: which entities link within a domain, and which require a bridge across domain lines.</li>
                <li>Assess access and quality per entity: can it be queried programmatically, how complete is the history, and are there known quality issues.</li>
              </ul>
            </div>

            <div class="block">
              <h4>Focus Questions</h4>
              <ul>
                <li>What are the core entities in each domain? For example: WorkOrder, ShiftInstance, MaintenanceEvent, Employee, CostCenter.</li>
                <li>Which entities are shared across domains and serve as the join keys?</li>
                <li>Can each entity be accessed via an API or query, or does it require a manual extract?</li>
                <li>How far back does the history go for each entity? Is it sufficient for the use case?</li>
                <li>Are there known gaps: missing values, inconsistent codes, duplicate records, or units that vary by plant?</li>
              </ul>
            </div>

            <div class="block">
              <h4>Participants</h4>
              <ul>
                <li>Data or Systems Architect</li>
                <li>IT or OT Lead</li>
                <li>Plant Systems Owner</li>
                <li>Domain stewards identified in Session 1</li>
              </ul>
            </div>

            <div class="block">
              <h4>Accelerators</h4>
              <ul>
                <li>Entity sketch template: entity name, domain, business key, surrogate key, key attributes, access method.</li>
                <li>Root entity reference for manufacturing: Resource, ReasonCode, UnitOfMeasure, ShiftPattern, Product.</li>
                <li>Data access and quality scorecard per entity.</li>
                <li>Bridge pattern reference: how cross-domain joins are typically structured.</li>
              </ul>
            </div>
          </div>

          <div class="output-box">
            <h4>Session output</h4>
            <ul>
              <li>Entity sketch per domain: root entities, domain entities, and the bridges that connect them across domains.</li>
              <li>Access and quality rating per entity: ready, accessible with preparation, or not accessible.</li>
            </ul>
          </div>
        </div>

        <div class="session">
          <div class="session-header">
            <div class="session-number">Session 3</div>
            <div>
              <h3>Gap Prioritization</h3>
              <p class="session-desc">
                Identify which data and access gaps are critical to the use case and agree on
                a resolution plan before the design phase begins.
              </p>
            </div>
          </div>

          <div class="session-grid">
            <div class="block">
              <h4>Objective</h4>
              <ul>
                <li>Classify each gap: blocking (prevents the use case from being delivered), manageable (reduces quality or coverage), or deferrable (low impact).</li>
                <li>Agree on the resolution approach for each blocking gap: integration work, data clean-up, proxy data, or manual input.</li>
                <li>Assign an owner and estimated timeline to each critical gap.</li>
              </ul>
            </div>

            <div class="block">
              <h4>Focus Questions</h4>
              <ul>
                <li>Which gaps would prevent the agent from answering the use case questions at all?</li>
                <li>Which gaps reduce answer quality but do not stop delivery?</li>
                <li>Can any gaps be filled with proxy data or derived calculations?</li>
                <li>What is the realistic time to resolve each critical gap?</li>
                <li>Are there gaps that require investment in new system integrations or data pipelines?</li>
              </ul>
            </div>

            <div class="block">
              <h4>Participants</h4>
              <ul>
                <li>IT or OT Lead</li>
                <li>Plant Manager</li>
                <li>Data Architect</li>
                <li>Finance Lead (for gaps requiring investment)</li>
              </ul>
            </div>

            <div class="block">
              <h4>Accelerators</h4>
              <ul>
                <li>Gap priority matrix (blocking, manageable, deferrable).</li>
                <li>Data remediation effort reference.</li>
                <li>Proxy data identification guide.</li>
              </ul>
            </div>
          </div>

          <div class="output-box">
            <h4>Session output</h4>
            <ul>
              <li>Gap register: gap description, affected entity or domain, priority classification, resolution approach, owner, and estimated timeline.</li>
              <li>Data readiness recommendation: ready to proceed, conditional, or not yet ready.</li>
            </ul>
          </div>
        </div>

      </div>

      <div class="end-day">
        <h3>End of Day 3 outputs</h3>
        <div class="end-day-grid">
          <div class="end-card">Domain map with sub-domains, owners, stewards, and cross-domain hot spots</div>
          <div class="end-card">Entity sketch per domain with access and quality rating</div>
          <div class="end-card">Gap register with resolution plan and owners</div>
          <div class="end-card">Data readiness recommendation: ready, conditional, or not yet ready</div>
        </div>
      </div>

    </div>
  `;
});
