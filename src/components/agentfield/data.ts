export type Outcome = {
  label: string;
  value: string;
  detail: string;
  drivers: string[];
};

export const outcomes: Outcome[] = [
  {
    label: "First time fix rate",
    value: "72% → 89%",
    detail: "+17 points",
    drivers: ["Contextual guidance", "Historical resolutions", "Visual diagnostics", "Network intelligence"],
  },
  {
    label: "Mean time to repair",
    value: "-35 to 50%",
    detail: "Faster restoration",
    drivers: ["Agent-assisted troubleshooting", "Automated diagnostics", "Dynamic dispatching", "Automated escalation"],
  },
  {
    label: "Technician productivity",
    value: "+20 to 35%",
    detail: "More jobs per day",
    drivers: ["No admin overhead", "No manual documentation", "No knowledge searches", "No scheduling friction"],
  },
  {
    label: "Truck rolls",
    value: "-10 to 25%",
    detail: "Fewer dispatches",
    drivers: ["Remote diagnostics", "Automated issue identification", "Better routing", "Better inventory planning"],
  },
  {
    label: "Customer satisfaction",
    value: "+15 to 30 pts",
    detail: "CSAT lift",
    drivers: ["Proactive updates", "Shorter resolution times", "Better first-time fixes"],
  },
];

export type Scenario = {
  id: string;
  title: string;
  user: string;
  objective: string;
  agents: string[];
  steps: { actor: string; text: string; bullets?: string[] }[];
};

export const scenarios: Scenario[] = [
  {
    id: "fiber-install",
    title: "New fiber install",
    user: "Residential customer",
    objective: "Install fiber broadband service",
    agents: [
      "Customer Engagement",
      "Serviceability",
      "Scheduling",
      "Dispatch",
      "Inventory",
      "Technician Copilot",
      "Activation",
    ],
    steps: [
      { actor: "Customer", text: "Submits a fiber service order online." },
      { actor: "Customer Engagement Agent", text: "Receives the request and opens the install journey." },
      { actor: "Serviceability Agent", text: "Verifies eligibility.", bullets: ["Address", "Fiber availability", "Capacity"] },
      { actor: "Inventory Agent", text: "Reserves equipment.", bullets: ["ONT", "Router", "Cabling"] },
      { actor: "Scheduling Agent", text: "Identifies the best appointment window." },
      { actor: "Dispatch Agent", text: "Assigns the technician and optimizes the route." },
      { actor: "Technician Copilot", text: "Prepares the installation plan and site brief." },
      { actor: "Activation Agent", text: "Validates the service.", bullets: ["Signal levels", "Device registration", "Service activation"] },
      { actor: "Customer Engagement Agent", text: "Sends confirmation and onboarding information." },
    ],
  },
  {
    id: "outage-repair",
    title: "Fiber outage repair",
    user: "Field technician",
    objective: "Restore a customer reporting an outage",
    agents: ["Incident", "Technician Copilot", "Network Intelligence", "Visual Inspection", "Knowledge", "Closure"],
    steps: [
      { actor: "Technician", text: "Arrives onsite with full context already loaded.", bullets: ["Service history", "Previous outages", "Equipment installed", "Nearby network events"] },
      { actor: "Technician", text: "Asks in natural language: \"Why is this ONT offline?\"" },
      { actor: "Network Intelligence Agent", text: "Analyzes the network.", bullets: ["Alarm data", "Telemetry", "Signal metrics", "Configuration changes"] },
      { actor: "Visual Inspection Agent", text: "Examines the camera image of the enclosure." },
      { actor: "Knowledge Agent", text: "Retrieves similar incidents and proven fixes." },
      { actor: "Technician Copilot", text: "Surfaces recommended repair steps instantly." },
      { actor: "Closure Agent", text: "Resolves the job and updates every downstream system." },
    ],
  },
  {
    id: "storm-recovery",
    title: "Storm recovery event",
    user: "Field operations director",
    objective: "Restore service after a major outage",
    agents: ["Outage Command", "Dispatch", "Fleet", "Workforce", "Communications"],
    steps: [
      { actor: "Event", text: "A storm causes multiple simultaneous service interruptions." },
      { actor: "Outage Command Agent", text: "Triages the event.", bullets: ["Prioritizes incidents", "Clusters nearby events", "Predicts root causes"] },
      { actor: "Dispatch Agent", text: "Reshapes the response.", bullets: ["Rebalances workforce", "Creates repair zones", "Optimizes routes"] },
      { actor: "Communications Agent", text: "Keeps customers informed.", bullets: ["Notifies customers", "Updates service status", "Provides ETA predictions"] },
      { actor: "Leadership dashboard", text: "Shows live recovery posture.", bullets: ["Active outages", "Restoration progress", "Resource utilization"] },
    ],
  },
];

export type Agent = {
  n: number;
  name: string;
  responsibilities: string[];
  meta: { label: string; items: string[] };
  note?: string;
};

export const agents: Agent[] = [
  {
    n: 1,
    name: "Dispatch Agent",
    responsibilities: ["Route optimization", "Technician assignment", "SLA management", "Dynamic rescheduling"],
    meta: { label: "Uses", items: ["Maps", "Traffic", "Skills matching", "Job prioritization"] },
  },
  {
    n: 2,
    name: "Technician Copilot Agent",
    responsibilities: ["Work order summaries", "Troubleshooting guidance", "Natural language support", "Resolution recommendations"],
    meta: { label: "Uses", items: ["Dynamics 365 Field Service Copilot"] },
    note: "Aligns with Field Service Copilot work-order summarization and contextual assistance.",
  },
  {
    n: 3,
    name: "Network Intelligence Agent",
    responsibilities: ["Analyze network alarms", "Review telemetry", "Detect root cause", "Predict likely failures"],
    meta: {
      label: "Data sources",
      items: ["Netcracker OSS", "Amdocs BSS", "Nokia NSP", "Ciena Blue Planet", "Splunk event streams"],
    },
  },
  {
    n: 4,
    name: "Visual Inspection Agent",
    responsibilities: ["Analyze images", "Validate installations", "Detect equipment faults", "Verify repair quality"],
    meta: { label: "Uses", items: ["GPT Vision", "Azure AI Vision"] },
  },
  {
    n: 5,
    name: "Inventory Agent",
    responsibilities: ["Check truck stock", "Locate replacement parts", "Reserve inventory", "Initiate replenishment"],
    meta: { label: "Uses", items: ["SAP S/4HANA", "Oracle SCM", "Dynamics 365 Field Service inventory"] },
  },
  {
    n: 6,
    name: "Safety Agent",
    responsibilities: ["Assess risk", "Validate procedures", "Monitor compliance", "Deliver safety guidance"],
    meta: { label: "Uses", items: ["Procedure library", "Compliance policies"] },
  },
  {
    n: 7,
    name: "Customer Engagement Agent",
    responsibilities: ["Proactive outreach", "ETA notifications", "Appointment updates", "Service communication"],
    meta: { label: "Uses", items: ["Salesforce Service Cloud", "Dynamics 365 Customer Service", "Amdocs CES"] },
  },
  {
    n: 8,
    name: "Closure Agent",
    responsibilities: ["Generate service reports", "Update CRM", "Update billing", "Close work orders", "Trigger surveys"],
    meta: { label: "Uses", items: ["Dynamics 365 Field Service", "ServiceNow CSM", "Amdocs billing", "Salesforce"] },
  },
];

export const collaborationChain = [
  "Customer reports outage",
  "Customer Engagement Agent creates case",
  "Network Intelligence Agent identifies likely root cause",
  "Dispatch Agent assigns best technician",
  "Inventory Agent verifies parts availability",
  "Technician Copilot briefs technician",
  "Visual Inspection Agent validates repair",
  "Closure Agent updates systems",
  "Customer Engagement Agent confirms resolution",
];

export const architecture = [
  {
    layer: "Experience layer",
    items: ["AgentField 360 front end", "Microsoft Teams", "Mobile technician experience"],
  },
  {
    layer: "Agent layer",
    items: ["Microsoft Copilot Studio", "Azure AI Agents", "Azure OpenAI"],
  },
  {
    layer: "Data layer",
    items: ["Microsoft Fabric", "OneLake", "Data Activator"],
  },
  {
    layer: "OSS / network sources",
    items: [
      "Netcracker OSS",
      "Nokia NSP",
      "Ciena Blue Planet",
      "Cisco Crosswork",
      "Esri ArcGIS",
      "Network telemetry",
    ],
  },
  {
    layer: "BSS / customer sources",
    items: ["Amdocs CES", "Oracle BRM", "Salesforce Service Cloud", "Dynamics 365 Customer Service", "Work orders"],
  },
  {
    layer: "Operational systems",
    items: [
      "Dynamics 365 Field Service",
      "ServiceNow CSM & FSM",
      "SAP S/4HANA",
      "Oracle SCM",
      "Salesforce Field Service",
    ],
  },
  {
    layer: "AI services",
    items: ["Azure OpenAI", "Azure AI Search", "Azure AI Vision", "Azure Maps"],
  },
];

export type WalkthroughStop = {
  minute: string;
  title: string;
  say: string;
  show: string;
  proof: string[];
};

export type WalkthroughStep = {
  title: string;
  detail: string;
  to: string;
};

export const walkthroughSteps: WalkthroughStep[] = [
  {
    title: "Field service is a coordination problem",
    detail:
      "Operators spend billions on truck rolls, installs, dispatch operations, contractor management and repeat visits. Most of that spend coordinates people — it does not repair networks.",
    to: "/",
  },
  {
    title: "AgentField 360 is an orchestration layer",
    detail:
      "The Autonomous Workforce Operations Platform sits above existing CRM, field service, workforce management, inventory and network operations systems — coordinating Netcracker, Amdocs, ServiceNow, Dynamics 365, Salesforce, SAP and Oracle rather than replacing them.",
    to: "/#shift",
  },
  {
    title: "Specialized agents own each domain",
    detail:
      "Eight agents — Dispatch, Technician Copilot, Network Intelligence, Visual Inspection, Inventory, Safety, Customer Engagement and Closure — share one context and escalate only when a human adds value.",
    to: "/#agents",
  },
  {
    title: "Answers find the technician",
    detail:
      "Instead of technicians searching documentation and calling supervisors, agents deliver context, diagnostics and recommended repairs the moment a job starts. People focus on customers, not systems.",
    to: "/#shift",
  },
  {
    title: "One orchestrated workflow across systems",
    detail:
      "A single customer report moves through seven agents with no swivel-chair between Netcracker, ServiceNow and Dynamics 365 Field Service. Closure writes back to every downstream system automatically.",
    to: "/#scenarios",
  },
  {
    title: "Business outcomes in the first year",
    detail:
      "First-time fix 72% → 89%, mean time to repair down 35–50%, truck rolls down 10–25% and CSAT up 15–30 points — every number maps to a metric you already report to the board.",
    to: "/#outcomes",
  },
  {
    title: "Scales through mass events",
    detail:
      "The same orchestration absorbs a storm with multiple simultaneous outages — clustering incidents, rebalancing the workforce into repair zones and pushing customer ETAs — without adding dispatchers.",
    to: "/#scenarios",
  },
  {
    title: "Built on the stack operators already run",
    detail:
      "Microsoft Copilot Studio, Azure AI Agents and Fabric form the agent and data spine, sitting above your OSS/BSS systems of record. Nothing here asks you to replace your stack.",
    to: "/#architecture",
  },
];

export const executiveWalkthrough: WalkthroughStop[] = [
  {
    minute: "00:00",
    title: "Frame the cost problem",
    say: "Field service is one of the largest controllable cost pools in the business — trucks, contractors, repeat visits — and most of that spend goes to coordination, not repair.",
    show: "Open on the hero and the live operations counters.",
    proof: ["148 trucks in field", "12 active outages", "37,910 autonomous actions"],
  },
  {
    minute: "02:00",
    title: "Anchor on the business case",
    say: "Every number here maps to a metric you already report to the board — first-time fix, MTTR, truck rolls, CSAT.",
    show: "Scroll to Business outcomes and read the drivers under two tiles.",
    proof: ["First time fix 72% → 89%", "MTTR down 35–50%", "Truck rolls down 10–25%"],
  },
  {
    minute: "05:00",
    title: "Run the fiber outage scenario",
    say: "Watch a single customer report move through seven agents with no swivel-chair between Netcracker, ServiceNow and Dynamics.",
    show: "Press run on the Fiber outage repair scenario and narrate each handoff.",
    proof: ["Network Intelligence reads Netcracker + Nokia NSP", "Copilot runs in Dynamics 365 Field Service", "Closure writes back to ServiceNow"],
  },
  {
    minute: "09:00",
    title: "Show the agent framework",
    say: "This is not one chatbot. Eight specialized agents each own a domain and share the same context.",
    show: "Walk the agent grid and open the Uses row on Inventory and Closure.",
    proof: ["SAP S/4HANA and Oracle SCM for parts", "Salesforce and Amdocs for the customer", "Azure AI Vision for repair validation"],
  },
  {
    minute: "12:00",
    title: "Prove the storm scenario at scale",
    say: "The same orchestration absorbs a mass event without adding dispatchers.",
    show: "Run the Storm recovery scenario and stop on the leadership dashboard step.",
    proof: ["Incidents clustered and prioritized", "Workforce rebalanced into repair zones", "Customer ETAs pushed automatically"],
  },
  {
    minute: "15:00",
    title: "Land the architecture and next step",
    say: "Nothing here asks you to replace your stack — the agents sit above Netcracker, Amdocs, Oracle, Salesforce, ServiceNow and Dynamics.",
    show: "Finish on the architecture layers and the executive soundbite.",
    proof: ["Copilot Studio + Azure AI orchestration", "Fabric and OneLake as the data spine", "Existing OSS/BSS systems of record unchanged"],
  },
];
