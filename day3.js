document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('day3-body');
  if (!el) return;

  el.innerHTML = `
    <div class="accordion-body">

      <div class="day-objective-block">
        <h3>Objective of the day</h3>
        <p>
          Before any design begins, the team maps what data actually exists across plant systems
          and what access looks like in practice. Data gaps are surfaced here, when they are still
          fixable, rather than mid-build when they become blockers.
        </p>
      </div>

      <div class="sessions">

        <div class="session">
          <div class="session-header">
            <div class="session-number">Session 1</div>
            <div>
              <h3>System and Data Inventory</h3>
              <p class="session-desc">
                Walk through every system and data source relevant to the selected decision.
                Establish what data exists, where it lives, and who owns it.
              </p>
            </div>
          </div>

          <div class="session-grid">
            <div class="block">
              <h4>Objective</h4>
              <ul>
                <li>Identify every data system that touches the selected decision: ERP, MES, historian, CMMS, WMS, and manual logs.</li>
                <li>Capture what data each system generates, at what frequency, and in what format.</li>
                <li>Understand who manages each system and who controls data access.</li>
              </ul>
            </div>

            <div class="block">
              <h4>Focus Questions</h4>
              <ul>
                <li>Which systems generate data that feeds into this decision today?</li>
                <li>Is the data produced in real time, in daily batches, or entered manually?</li>
                <li>Who owns each data source and who controls access permissions?</li>
                <li>Is there a single source of truth, or do multiple systems hold conflicting versions of the same data?</li>
                <li>Are there informal data sources such as shift logs, spreadsheets, or personal notebooks?</li>
              </ul>
            </div>

            <div class="block">
              <h4>Participants</h4>
              <ul>
                <li>IT or OT Lead</li>
                <li>Data or Systems Architect</li>
                <li>Plant Manager</li>
                <li>Maintenance Lead (for CMMS and equipment data)</li>
              </ul>
            </div>

            <div class="block">
              <h4>Accelerators</h4>
              <ul>
                <li>Data source inventory template (system, owner, data type, frequency, current use).</li>
                <li>Manufacturing system landscape reference covering ERP, MES, historian, CMMS, and WMS layers.</li>
                <li>Common data domain list: production orders, machine states, inventory, quality, maintenance work orders.</li>
              </ul>
            </div>
          </div>

          <div class="output-box">
            <h4>Session output</h4>
            <ul>
              <li>Inventory of all relevant data sources with system name, owner, data type, update frequency, format, and current use.</li>
            </ul>
          </div>
        </div>

        <div class="session">
          <div class="session-header">
            <div class="session-number">Session 2</div>
            <div>
              <h3>Data Access and Quality Check</h3>
              <p class="session-desc">
                Assess what data is accessible in practice, how clean and consistent it is,
                and whether it can support a decision agent reliably.
              </p>
            </div>
          </div>

          <div class="session-grid">
            <div class="block">
              <h4>Objective</h4>
              <ul>
                <li>For each data source in the inventory, assess whether it can be accessed programmatically.</li>
                <li>Evaluate data quality: completeness, consistency, historical depth, and known issues.</li>
                <li>Classify each source as ready to use, accessible with preparation, or not accessible.</li>
              </ul>
            </div>

            <div class="block">
              <h4>Focus Questions</h4>
              <ul>
                <li>Can this data be extracted via an API or query, or does it require manual export?</li>
                <li>How complete is the historical data and how far back does it go?</li>
                <li>Are there known quality issues: missing values, duplicates, inconsistent units, or stale records?</li>
                <li>Is the data structured and normalized, or does it require significant preparation?</li>
                <li>Who needs to approve data access and how long does that typically take?</li>
              </ul>
            </div>

            <div class="block">
              <h4>Participants</h4>
              <ul>
                <li>IT or OT Lead</li>
                <li>Data or Systems Architect</li>
                <li>Plant Systems Owner</li>
              </ul>
            </div>

            <div class="block">
              <h4>Accelerators</h4>
              <ul>
                <li>Data access and quality scorecard.</li>
                <li>Common data quality issue reference (manufacturing-specific).</li>
                <li>Access request checklist and typical approval timeline reference.</li>
              </ul>
            </div>
          </div>

          <div class="output-box">
            <h4>Session output</h4>
            <ul>
              <li>Access and quality rating per data source: ready, accessible with preparation work, or not accessible.</li>
            </ul>
          </div>
        </div>

        <div class="session">
          <div class="session-header">
            <div class="session-number">Session 3</div>
            <div>
              <h3>Gap Prioritization</h3>
              <p class="session-desc">
                Identify which data gaps are critical to the decision logic and agree on
                a resolution plan before design begins.
              </p>
            </div>
          </div>

          <div class="session-grid">
            <div class="block">
              <h4>Objective</h4>
              <ul>
                <li>Classify each gap: blocking (prevents the decision from being made), manageable (reduces accuracy), or deferrable (low impact).</li>
                <li>Agree on the resolution approach for each blocking gap: integration, data clean-up, proxy data, or manual input.</li>
                <li>Assign an owner and estimated timeline to each critical gap.</li>
              </ul>
            </div>

            <div class="block">
              <h4>Focus Questions</h4>
              <ul>
                <li>Which gaps would prevent the agent from making this decision at all?</li>
                <li>Which gaps reduce accuracy but do not stop the decision from being made?</li>
                <li>Can any gaps be filled with proxy data or derived calculations?</li>
                <li>What is the realistic time to resolve each critical gap?</li>
                <li>Are there any gaps that require investment in new systems or integrations?</li>
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
              <li>Gap register with priority classification, resolution approach, owner, and estimated timeline per gap.</li>
            </ul>
          </div>
        </div>

      </div>

      <div class="end-day">
        <h3>End of Day 3 outputs</h3>
        <div class="end-day-grid">
          <div class="end-card">Data source inventory across all relevant plant systems</div>
          <div class="end-card">Access and quality rating per source</div>
          <div class="end-card">Gap register with resolution plan and owners</div>
          <div class="end-card">Data readiness recommendation: ready, conditional, or not yet ready</div>
        </div>
      </div>

    </div>
  `;
});
