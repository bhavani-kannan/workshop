document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('day4-body');
  if (!el) return;

  el.innerHTML = `
    <div class="accordion-body">

      <div class="day-objective-block">
        <h3>Objective of the day</h3>
        <p>
          The team defines exactly what the AI agent will do: what triggers it, what data it reads,
          what logic it applies, and what it recommends. This becomes the design specification
          that the build team works from. No code is written on Day 4.
        </p>
      </div>

      <div class="sessions">

        <div class="session">
          <div class="session-header">
            <div class="session-number">Session 1</div>
            <div>
              <h3>Decision Logic Mapping</h3>
              <p class="session-desc">
                Define the complete logic of the selected decision, from trigger to output recommendation.
              </p>
            </div>
          </div>

          <div class="session-grid">
            <div class="block">
              <h4>Objective</h4>
              <ul>
                <li>Map the trigger: what event or condition initiates this decision.</li>
                <li>Define the inputs: what data the agent reads at the point of decision.</li>
                <li>Specify the evaluation logic: what rules, thresholds, and conditions the agent applies.</li>
                <li>Define the output: what recommendation the agent produces and in what form.</li>
              </ul>
            </div>

            <div class="block">
              <h4>Focus Questions</h4>
              <ul>
                <li>What exactly triggers this decision: time-based, event-based, or threshold-based?</li>
                <li>What data does the agent need to read at the moment of decision?</li>
                <li>What constraints must the logic respect: safety limits, capacity ceilings, contractual terms, shift boundaries?</li>
                <li>What does a correct recommendation look like? What does a wrong one look like?</li>
                <li>Does the logic change depending on product type, machine state, or shift pattern?</li>
              </ul>
            </div>

            <div class="block">
              <h4>Participants</h4>
              <ul>
                <li>Plant Manager</li>
                <li>Production Lead or Line Manager</li>
                <li>Planning or Scheduling Lead</li>
                <li>Process Engineer (where applicable)</li>
              </ul>
            </div>

            <div class="block">
              <h4>Accelerators</h4>
              <ul>
                <li>Decision logic canvas (trigger, inputs, rules, thresholds, output).</li>
                <li>Constraint identification guide for manufacturing decisions.</li>
                <li>Common manufacturing decision logic patterns: prioritization, scheduling, allocation, substitution.</li>
              </ul>
            </div>
          </div>

          <div class="output-box">
            <h4>Session output</h4>
            <ul>
              <li>Decision logic diagram showing trigger, input data, evaluation rules, thresholds, and output recommendation.</li>
            </ul>
          </div>
        </div>

        <div class="session">
          <div class="session-header">
            <div class="session-number">Session 2</div>
            <div>
              <h3>Data Product Definition</h3>
              <p class="session-desc">
                Specify the data products the decision agent needs, who owns them, and what
                quality and freshness standards apply.
              </p>
            </div>
          </div>

          <div class="session-grid">
            <div class="block">
              <h4>Objective</h4>
              <ul>
                <li>Identify each data product the agent requires to execute its logic.</li>
                <li>Define the schema, refresh frequency, and quality standard for each.</li>
                <li>Clarify ownership and what happens when a data product is late, incomplete, or degraded.</li>
              </ul>
            </div>

            <div class="block">
              <h4>Focus Questions</h4>
              <ul>
                <li>What data products does the decision agent need to operate?</li>
                <li>How fresh does each input need to be: real time, hourly, or daily?</li>
                <li>Who is responsible for producing and maintaining each data product?</li>
                <li>What happens to the agent's recommendation when a data product is unavailable or degraded?</li>
                <li>Are any of these data products shared with other systems or use cases in the plant?</li>
              </ul>
            </div>

            <div class="block">
              <h4>Participants</h4>
              <ul>
                <li>IT or OT Lead</li>
                <li>Data Architect</li>
                <li>Plant Systems Owner</li>
                <li>Planning Lead (for scheduling and inventory data products)</li>
              </ul>
            </div>

            <div class="block">
              <h4>Accelerators</h4>
              <ul>
                <li>Data product specification template (name, owner, schema, refresh rate, quality standard, failure handling).</li>
                <li>Data product ownership matrix.</li>
                <li>Freshness and SLA reference for manufacturing data.</li>
              </ul>
            </div>
          </div>

          <div class="output-box">
            <h4>Session output</h4>
            <ul>
              <li>Data product specification for each required input: name, owner, refresh frequency, schema, quality standard, and failure handling approach.</li>
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
                <li>Specify which recommendations can be acted on directly and which require human review.</li>
                <li>Design the approval workflow and escalation path for out-of-range recommendations.</li>
              </ul>
            </div>

            <div class="block">
              <h4>Focus Questions</h4>
              <ul>
                <li>Which recommendations can the plant team act on immediately without additional approval?</li>
                <li>What hard limits must the agent never exceed?</li>
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
              <li>Constraint register, approval workflow diagram, and override and fallback rules for all recommendation types.</li>
            </ul>
          </div>
        </div>

      </div>

      <div class="end-day">
        <h3>End of Day 4 outputs</h3>
        <div class="end-day-grid">
          <div class="end-card">Decision logic diagram (trigger to recommendation)</div>
          <div class="end-card">Data product specifications for all required inputs</div>
          <div class="end-card">Constraint register and approval workflow</div>
          <div class="end-card">Full design specification ready for Day 5 validation</div>
        </div>
      </div>

    </div>
  `;
});
