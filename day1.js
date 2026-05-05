document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('day1-body');
  if (!el) return;

  el.innerHTML = `
    <div class="accordion-body">

      <div class="day-objective-block">
        <h3>Objective of the day</h3>
        <p>
          Understand who makes what decisions, what their hardest daily questions are, and where the
          current process breaks down across production, planning, maintenance, and order fulfillment.
          No solutions are discussed on Day 1.
        </p>
      </div>

      <div class="sessions">

        <div class="session">
          <div class="session-header">
            <div class="session-number">Session 1</div>
            <div>
              <h3>Operational Walkthrough</h3>
              <p class="session-desc">
                Understand how the plant actually runs: order receipt to production to dispatch,
                with real examples of what breaks down.
              </p>
            </div>
          </div>

          <div class="session-grid">
            <div class="block">
              <h4>Objective</h4>
              <ul>
                <li>Walk through the order-to-production-to-dispatch flow as it actually runs, not as the process diagram shows.</li>
                <li>Discuss how shifts, machines, materials, and orders are managed day to day.</li>
                <li>Identify delays, escalations, manual interventions, and informal workarounds.</li>
              </ul>
            </div>

            <div class="block">
              <h4>Focus Questions</h4>
              <ul>
                <li>How does a production plan get created and executed?</li>
                <li>What happens when a machine goes down mid-shift?</li>
                <li>How are orders prioritized when capacity is constrained?</li>
                <li>How are material shortages handled in the moment?</li>
                <li>Where do teams rely on phone calls, spreadsheets, or personal judgment rather than a system?</li>
              </ul>
            </div>

            <div class="block">
              <h4>Participants</h4>
              <ul>
                <li>Plant Manager</li>
                <li>Production Supervisor or Line Manager</li>
                <li>Planning or Scheduling Lead</li>
                <li>Maintenance Lead</li>
                <li>Supply Chain or Order Fulfillment Lead</li>
              </ul>
            </div>

            <div class="block">
              <h4>Accelerators</h4>
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

        <div class="session">
          <div class="session-header">
            <div class="session-number">Session 2</div>
            <div>
              <h3>Stakeholder Personas and Decision Discovery</h3>
              <p class="session-desc">
                Name the key roles involved in plant decisions, capture their hardest daily questions,
                and convert pain points into decisions with owners, triggers, and outcomes.
              </p>
            </div>
          </div>

          <div class="session-grid">
            <div class="block">
              <h4>Objective</h4>
              <ul>
                <li>Name the three to five roles who own or influence manufacturing decisions at this plant.</li>
                <li>For each role, capture the five questions they struggle most to answer on any given day, and how long it currently takes to get an answer.</li>
                <li>Convert each struggle into a decision: what is decided, by whom, how often, and what it depends on.</li>
              </ul>
            </div>

            <div class="block">
              <h4>Focus Questions</h4>
              <ul>
                <li>What is the hardest question you face at the start of your shift or day?</li>
                <li>How long does it take you to answer it today, and where do you go for the answer?</li>
                <li>Which decisions do you make multiple times a shift based on incomplete information?</li>
                <li>Which decisions do you wish someone else could make faster or better?</li>
                <li>Where do people override the ERP or MES because they do not trust the output?</li>
              </ul>
            </div>

            <div class="block">
              <h4>Participants</h4>
              <ul>
                <li>Plant Manager</li>
                <li>Maintenance Supervisor</li>
                <li>Planning or Scheduling Lead</li>
                <li>Operations Director or Head (if available)</li>
                <li>Supply Chain or Order Fulfillment Lead</li>
              </ul>
            </div>

            <div class="block">
              <h4>Accelerators</h4>
              <ul>
                <li>Persona template: role, hardest questions, current answer time, decision types owned.</li>
                <li>Decision inventory template (trigger, owner, inputs, outcome).</li>
                <li>Prompt cards to shift discussion from process view to decision view.</li>
                <li>Example persona cards from similar manufacturing sites as reference.</li>
              </ul>
            </div>
          </div>

          <div class="output-box">
            <h4>Session output</h4>
            <ul>
              <li>Three to five stakeholder persona profiles: role, five hard questions, current answer time per question, and decision types owned.</li>
              <li>Initial inventory of 15 to 25 manufacturing decisions, each with owner, trigger, data inputs, and expected outcome.</li>
            </ul>
          </div>
        </div>

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
              <h4>Objective</h4>
              <ul>
                <li>Group similar decisions, remove duplicates, and resolve overlaps.</li>
                <li>Score decisions by operational impact, frequency, urgency, and data dependency.</li>
                <li>Flag decisions that cut across production, planning, and supply chain data domains.</li>
              </ul>
            </div>

            <div class="block">
              <h4>Focus Questions</h4>
              <ul>
                <li>Which decisions cause the most production delays or financial losses?</li>
                <li>Which decisions happen daily, per shift, or weekly?</li>
                <li>Which ones currently take too long to make?</li>
                <li>Where does poor visibility into plant data affect outcomes?</li>
                <li>Which decisions would benefit most from a faster, data-backed recommendation?</li>
              </ul>
            </div>

            <div class="block">
              <h4>Participants</h4>
              <ul>
                <li>Plant Manager</li>
                <li>Operations Head (if available)</li>
                <li>Finance representative</li>
                <li>Planning or Scheduling Lead</li>
                <li>Maintenance Lead</li>
              </ul>
            </div>

            <div class="block">
              <h4>Accelerators</h4>
              <ul>
                <li>Prioritization matrix (impact, frequency, urgency).</li>
                <li>Benchmark reference: high-impact decisions from similar manufacturing sites.</li>
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
          <div class="end-card">Stakeholder persona profiles with hard questions and answer times</div>
          <div class="end-card">Operational friction map</div>
          <div class="end-card">Decision inventory (15 to 25 decisions)</div>
          <div class="end-card">Priority shortlist (5 to 7 decisions) for Day 2</div>
        </div>
      </div>

    </div>
  `;
});
