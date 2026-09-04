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
    layer: "Data sources",
    items: ["OSS", "BSS", "CRM", "GIS", "Inventory", "Work orders", "Customer systems", "Network telemetry"],
  },
  {
    layer: "Operational systems",
    items: ["Dynamics 365 Field Service", "Dynamics Customer Service", "SAP", "ServiceNow", "Inventory systems"],
  },
  {
    layer: "AI services",
    items: ["Azure OpenAI", "Azure AI Search", "Azure AI Vision", "Azure Maps"],
  },
];
