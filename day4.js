document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('day4-body');
  if (!el) return;

  el.innerHTML = `
    <div class="accordion-body">

      <div class="day-objective-block">
        <h3>Objective of the day</h3>
        <p>
          Define the complete design specification: the metrics the agent measures, the decision logic
          it applies, the concepts and filters it uses, and the constraints it operates within.
          Everything agreed today goes directly into the build brief. No code is written on Day 4.
        </p>
      </div>

      <div class="sessions">

        <div class="session">
          <div class="session-header">
            <div class="session-number">Session 1</div>
            <div>
              <h3>Metric Catalogue</h3>
              <p class="session-desc">
                Define the metrics the use case depends on: what each metric measures, how it is
                calculated, what it decomposes into, and which source columns feed it.
              </p>
            </div>
          </div>

          <div class="session-grid">
            <div class="block">
              <h4>Objective</h4>
              <ul>
                <li>List the 5 to 12 metrics the use case must compute or reference.</li>
                <li>For each metric: name it, define its unit, set the direction (higher or lower is better), specify the dimensions it can be sliced by, and identify the source columns it draws from.</li>
                <li>Define decompositions where one metric is the product of others: for example, OEE equals availability multiplied by performance multiplied by quality.</li>
                <li>Assign a steward to each metric and confirm who signs off if the definition is disputed.</li>
              </ul>
            </div>

            <div class="block">
              <h4>Focus Questions</h4>
              <ul>
                <li>What are the metrics this use case must be able to compute or display?</li>
                <li>For each metric: what is its unit, and is higher or lower the right direction?</li>
                <li>Which dimensions must each metric support: by plant, line, machine, shift, product?</li>
                <li>Does any metric decompose into sub-metrics? For example, does OEE break into availability, performance, and quality?</li>
                <li>Which source system and which columns or fields does each metric derive from?</li>
                <li>Who is accountable for the definition and quality of each metric?</li>
              </ul>
            </div>

            <div class="block">
              <h4>Participants</h4>
              <ul>
                <li>Plant Manager</li>
                <li>Process or Manufacturing Engineer</li>
                <li>Finance Lead (for cost-based metrics)</li>
                <li>Data Architect</li>
                <li>Domain stewards from Day 3</li>
              </ul>
            </div>

            <div class="block">
              <h4>Accelerators</h4>
              <ul>
                <li>Metric catalogue template: name, description, unit, direction, dimensions, time windows, decomposition, source columns, steward.</li>
                <li>Reference metric library for manufacturing: OEE, availability, performance, quality, downtime minutes, cost per unit, throughput, scrap rate, attendance rate.</li>
                <li>Decomposition diagram reference showing common metric trees.</li>
              </ul>
            </div>
          </div>

          <div class="output-box">
            <h4>Session output</h4>
            <ul>
              <li>Metric catalogue: 5 to 12 metrics, each with name, unit, direction, dimensions, time windows, decomposition, source columns, and assigned steward.</li>
            </ul>
          </div>
        </div>

        <div class="session">
          <div class="session-header">
            <div class="session-number">Session 2</div>
            <div>
              <h3>Decision Logic and Concepts</h3>
              <p class="session-desc">
                Define the logic the agent applies to reach a recommendation, and name the reusable
                concepts, time windows, and operational filters the logic depends on.
              </p>
            </div>
          </div>

          <div class="session-grid">
            <div class="block">
              <h4>Objective</h4>
              <ul>
                <li>Map the decision logic: what triggers the agent, what metrics and data it reads, what rules it applies, what thresholds it uses, and what recommendation it produces.</li>
                <li>Name the reusable concepts the logic depends on: time windows such as today, this shift, this week, and last 30 days; and operational filters such as unplanned downtime, night shift, or high-priority orders.</li>
                <li>Define the predicate for each concept so it can be applied consistently across all queries and reports.</li>
              </ul>
            </div>

            <div class="block">
              <h4>Focus Questions</h4>
              <ul>
                <li>What exactly triggers this decision: a time threshold, an event, a metric crossing a limit?</li>
                <li>Which metrics and entities does the agent read at the moment of decision?</li>
                <li>What rules or thresholds does the logic apply? For example: if unplanned downtime exceeds 30 minutes, escalate.</li>
                <li>What time windows does the logic compare against: this shift vs. last 30 days, this week vs. same week last year?</li>
                <li>What operational filters matter: only unplanned events, only night shift, only orders above a certain value?</li>
                <li>Do the concepts change depending on plant, product, or machine type?</li>
              </ul>
            </div>

            <div class="block">
              <h4>Participants</h4>
              <ul>
                <li>Plant Manager</li>
                <li>Production Lead or Line Manager</li>
                <li>Planning or Scheduling Lead</li>
                <li>Process Engineer</li>
                <li>Data Architect</li>
              </ul>
            </div>

            <div class="block">
              <h4>Accelerators</h4>
              <ul>
                <li>Decision logic canvas: trigger, inputs, rules, thresholds, output recommendation.</li>
                <li>Concept definition template: name, kind (time window or operational filter), predicate, applies-to columns.</li>
                <li>Common manufacturing concept reference: today, this shift, this week, last 30 days, unplanned, night shift, weekend, high-priority.</li>
                <li>Constraint identification guide for manufacturing decisions.</li>
              </ul>
            </div>
          </div>

          <div class="output-box">
            <h4>Session output</h4>
            <ul>
              <li>Decision logic diagram: trigger, input metrics, evaluation rules, thresholds, and output recommendation.</li>
              <li>Concepts catalogue: named time windows and operational filters, each with a defined predicate and the columns it applies to.</li>
            </ul>
          </div>
        </div>

        <div class="session">
          <div class="session-header">
            <div class="session-number">Session 3</div>
            <div>
              <h3>Constraint and Approval Design</h3>
              <p class="session-desc">
                Define the limits within which the agent operates and the approval steps that apply
                when a recommendation falls outside the normal range.
              </p>
            </div>
          </div>

          <div class="session-grid">
            <div class="block">
              <h4>Objective</h4>
              <ul>
                <li>Define hard limits the agent must never exceed: safety thresholds, regulatory requirements, contract terms.</li>
                <li>Specify which recommendations can be acted on directly and which require human review before action.</li>
                <li>Design the approval workflow and escalation path for out-of-range or low-confidence recommendations.</li>
              </ul>
            </div>

            <div class="block">
              <h4>Focus Questions</h4>
              <ul>
                <li>Which recommendations can the plant team act on immediately without additional approval?</li>
                <li>What hard limits must the agent never exceed: safety thresholds, regulatory requirements, contractual terms?</li>
                <li>Who approves a recommendation that falls outside the normal operating range?</li>
                <li>How does the approval process change during planned shutdowns, emergencies, or shift handover?</li>
                <li>How should the agent behave when it has low confidence in its recommendation?</li>
              </ul>
            </div>

            <div class="block">
              <h4>Participants</h4>
              <ul>
                <li>Plant Manager</li>
                <li>Operations Head</li>
                <li>Maintenance Lead</li>
                <li>Compliance or EHS Lead (where applicable)</li>
              </ul>
            </div>

            <div class="block">
              <h4>Accelerators</h4>
              <ul>
                <li>Decision authority matrix template.</li>
                <li>Constraint and override design guide.</li>
                <li>Confidence threshold reference for agent output.</li>
              </ul>
            </div>
          </div>

          <div class="output-box">
            <h4>Session output</h4>
            <ul>
              <li>Constraint register: hard limits, soft limits, and override conditions.</li>
              <li>Approval workflow diagram: who approves what, at what threshold, through what channel.</li>
              <li>Fallback rules: how the agent behaves when data is missing, stale, or confidence is below threshold.</li>
            </ul>
          </div>
        </div>

      </div>

      <div class="end-day">
        <h3>End of Day 4 outputs</h3>
        <div class="end-day-grid">
          <div class="end-card">Metric catalogue (5 to 12 metrics with source columns and stewards)</div>
          <div class="end-card">Decision logic diagram and concepts catalogue</div>
          <div class="end-card">Constraint register and approval workflow</div>
          <div class="end-card">Full design specification ready for Day 5 validation</div>
        </div>
      </div>

    </div>
  `;
});
