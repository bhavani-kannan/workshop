document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('day1-body');
  if (!el) return;

  el.innerHTML = `
    <div class="accordion-body">

      <div class="day-objective-block">
        <h3>Objective of the day</h3>
        <p>
          Align on the operational and financial decisions that drive plant performance.
          The focus is on where current decision-making breaks down: production scheduling,
          maintenance response, order prioritization, and inventory management.
          No solutions are proposed on Day 1.
        </p>
      </div>

      <div class="sessions">

        <!-- Session 1 -->
        <div class="session">
          <div class="session-header">
            <div class="session-number">Session 1</div>
            <div>
              <h3>Operational Walkthrough</h3>
              <p class="session-desc">
                Understand how manufacturing operations actually run across production,
                planning, maintenance, and order fulfillment.
              </p>
            </div>
          </div>

          <div class="session-grid">
            <div class="block">
              <h4>What happens in the room</h4>
              <ul>
                <li>Walk through the order-to-production-to-dispatch flow.</li>
                <li>Discuss how shifts, machines, materials, and orders are managed day to day.</li>
                <li>Identify delays, escalations, manual interventions, and informal workarounds.</li>
              </ul>
            </div>

            <div class="block">
              <h4>Key questions</h4>
              <ul>
                <li>How does a production plan get created and executed?</li>
                <li>What happens when a machine goes down mid-shift?</li>
                <li>How are orders prioritized when capacity is constrained?</li>
                <li>How are material shortages handled in the moment?</li>
                <li>Where do teams rely on phone calls, spreadsheets, or personal judgment?</li>
              </ul>
            </div>

            <div class="block">
              <h4>Stakeholders in the room</h4>
              <ul>
                <li>Plant Manager</li>
                <li>Production Supervisor or Line Manager</li>
                <li>Planning or Scheduling Lead</li>
                <li>Maintenance Lead</li>
                <li>Supply Chain or Order Fulfillment Lead</li>
              </ul>
            </div>

            <div class="block">
              <h4>Assets brought in</h4>
              <ul>
                <li>Manufacturing process reference flow (order to dispatch).</li>
                <li>Industry prompts for downtime, scheduling conflicts, shortages, and dispatch delays.</li>
                <li>Scenario cards: machine breakdown, delayed order, material shortage, capacity crunch.</li>
              </ul>
            </div>
          </div>

          <div class="output-box">
            <h4>Session output</h4>
            <ul>
              <li>High-level operational flow map from order receipt to goods dispatch.</li>
              <li>Documented friction points: delays, rework, escalations, and manual overrides.</li>
            </ul>
          </div>
        </div>

        <!-- Session 2 -->
        <div class="session">
          <div class="session-header">
            <div class="session-number">Session 2</div>
            <div>
              <h3>Decision Discovery</h3>
              <p class="session-desc">
                Convert operational pain points into actual business decisions, each with a trigger,
                an owner, known data inputs, and a measurable outcome.
              </p>
            </div>
          </div>

          <div class="session-grid">
            <div class="block">
              <h4>What happens in the room</h4>
              <ul>
                <li>Take each friction point identified in the morning and ask: what decision is being made here?</li>
                <li>Frame each decision with its trigger, owner, required inputs, and expected outcome.</li>
                <li>Separate process steps from decisions where an AI agent could assist or recommend.</li>
              </ul>
            </div>

            <div class="block">
              <h4>Key questions</h4>
              <ul>
                <li>When something goes wrong, what decision is made and by whom?</li>
                <li>Which decisions are made multiple times a day or per shift?</li>
                <li>Which decisions pull data from more than one system?</li>
                <li>Where do people override ERP or MES outputs?</li>
                <li>Which decisions directly affect production volume, cost, or on-time delivery?</li>
              </ul>
            </div>

            <div class="block">
              <h4>Stakeholders in the room</h4>
              <ul>
                <li>Plant Manager</li>
                <li>Production Supervisor or Line Manager</li>
                <li>Planning or Scheduling Lead</li>
                <li>Maintenance Lead</li>
                <li>Supply Chain or Order Fulfillment Lead</li>
              </ul>
            </div>

            <div class="block">
              <h4>Assets brought in</h4>
              <ul>
                <li>Decision inventory template (trigger, owner, inputs, outcome).</li>
                <li>Pre-built set of manufacturing decision examples for reference.</li>
                <li>Prompt cards to shift discussion from process view to decision view.</li>
              </ul>
            </div>
          </div>

          <div class="output-box">
            <h4>Session output</h4>
            <ul>
              <li>Initial inventory of 15 to 25 manufacturing decisions.</li>
              <li>Each decision captured with: who decides, what triggers it, what data is needed, and what outcome is expected.</li>
            </ul>
          </div>
        </div>

        <!-- Session 3 -->
        <div class="session">
          <div class="session-header">
            <div class="session-number">Session 3</div>
            <div>
              <h3>Decision Consolidation and Prioritization</h3>
              <p class="session-desc">
                Narrow the inventory to the highest-value decisions to carry into Day 2 use case selection.
              </p>
            </div>
          </div>

          <div class="session-grid">
            <div class="block">
              <h4>What happens in the room</h4>
              <ul>
                <li>Group similar decisions, remove duplicates, and resolve overlaps.</li>
                <li>Score decisions by operational impact, decision frequency, and urgency.</li>
                <li>Flag decisions that cut across production, planning, and supply chain data domains.</li>
              </ul>
            </div>

            <div class="block">
              <h4>Key questions</h4>
              <ul>
                <li>Which decisions cause the most production delays or financial losses?</li>
                <li>Which decisions happen daily, per shift, or weekly?</li>
                <li>Which ones currently take too long to make?</li>
                <li>Where does poor visibility into plant data affect outcomes?</li>
                <li>Which decisions would benefit most from a faster, data-backed recommendation?</li>
              </ul>
            </div>

            <div class="block">
              <h4>Stakeholders in the room</h4>
              <ul>
                <li>Plant Manager</li>
                <li>Operations Head (if available)</li>
                <li>Finance representative</li>
                <li>Planning or Scheduling Lead</li>
                <li>Maintenance Lead</li>
              </ul>
            </div>

            <div class="block">
              <h4>Assets brought in</h4>
              <ul>
                <li>Prioritization matrix (impact x frequency x urgency).</li>
                <li>Benchmark reference: common high-impact decisions from similar manufacturing sites.</li>
                <li>Scoring prompts covering revenue loss, unplanned downtime, missed delivery, and cost leakage.</li>
              </ul>
            </div>
          </div>

          <div class="output-box">
            <h4>Session output</h4>
            <ul>
              <li>Shortlist of 5 to 7 high-impact decisions, scored and ranked.</li>
              <li>Initial high, medium, and low priority grouping agreed by the team.</li>
              <li>First view of which decisions are candidates for an AI decision support agent.</li>
            </ul>
          </div>
        </div>

      </div>

      <div class="end-day">
        <h3>End of Day 1 outputs</h3>
        <div class="end-day-grid">
          <div class="end-card">Operational flow and friction map</div>
          <div class="end-card">Structured decision inventory (15 to 25 decisions)</div>
          <div class="end-card">Shortlist of 5 to 7 high-impact decisions</div>
          <div class="end-card">Prioritized input for Day 2 use case selection</div>
        </div>
      </div>

    </div>
  `;
});
