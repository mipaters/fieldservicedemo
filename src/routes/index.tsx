import { createFileRoute, Link } from "@tanstack/react-router";
import { Radio, Satellite, Truck, Users } from "lucide-react";
import heroImage from "@/assets/hero-field.jpg";
import { Button } from "@/components/ui/button";
import { ScenarioPlayer } from "@/components/agentfield/ScenarioPlayer";
import {
  AgentGrid,
  ArchitectureStack,
  CollaborationChain,
  ExecutiveWalkthrough,
  OutcomeGrid,
  SectionHeading,
} from "@/components/agentfield/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AgentField 360 | Autonomous Field Service for Telecom" },
      {
        name: "description",
        content:
          "AgentField 360 turns telecom field service into an autonomous, agent-orchestrated operation: higher first-time fix, faster restoration, fewer truck rolls.",
      },
      { property: "og:title", content: "AgentField 360 | Autonomous Field Service for Telecom" },
      {
        property: "og:description",
        content:
          "Eight specialized agents coordinate dispatch, diagnostics, inventory, technicians and customers in one seamless workflow.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [
  { icon: Radio, label: "Active outages", value: "12" },
  { icon: Truck, label: "Trucks in field", value: "148" },
  { icon: Users, label: "Techs assisted today", value: "1,204" },
  { icon: Satellite, label: "Autonomous actions", value: "37,910" },
];

function Index() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-lg bg-primary/15 text-primary">
              <Satellite className="size-4" />
            </span>
            <span className="font-display text-sm font-bold tracking-tight">AgentField 360</span>
          </div>
          <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
            <Link to="/walkthrough" className="hover:text-foreground">Walkthrough</Link>
            <a href="#outcomes" className="hover:text-foreground">Outcomes</a>
            <a href="#scenarios" className="hover:text-foreground">Scenarios</a>
            <a href="#walkthrough" className="hover:text-foreground">Demo guide</a>
            <a href="#agents" className="hover:text-foreground">Agents</a>
            <a href="#architecture" className="hover:text-foreground">Architecture</a>
          </nav>
          <Button asChild size="sm">
            <Link to="/walkthrough">Executive walkthrough</Link>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroImage}
          alt="Field technician reviewing live fiber network diagnostics at a street cabinet"
          width={1600}
          height={1008}
          className="absolute inset-0 size-full object-cover opacity-35"
        />
        <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-hero)", opacity: 0.85 }} />
        <div className="absolute inset-0 grid-backdrop opacity-40" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:py-32">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Autonomous field service platform
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">
            Instead of technicians searching for answers, <span className="text-signal">answers find the technician.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/80">
            AgentField 360 turns field service from a labor-intensive operation into an AI-powered service ecosystem,
            where agents continuously coordinate technicians, customers, dispatchers, inventory, network operations and
            work orders.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <Link to="/walkthrough">Start the executive walkthrough</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#outcomes">See the business case</a>
            </Button>
          </div>

          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="surface-panel flex items-center gap-4 rounded-xl px-5 py-4">
                <s.icon className="size-5 text-accent" />
                <div>
                  <p className="font-display text-2xl font-bold">{s.value}</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="The problem"
              title="Billions spent coordinating people, not fixing networks"
              lead="Operators pay for truck rolls, installs, network repairs, dispatch operations, contractor management, inventory logistics and repeat service calls."
            />
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              {[
                "Reviewing work orders",
                "Searching documentation",
                "Calling supervisors",
                "Finding parts",
                "Updating systems",
                "Coordinating repairs",
              ].map((i) => (
                <li key={i} className="rounded-lg border border-border/70 bg-secondary/30 px-4 py-2">
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="surface-panel rounded-2xl p-8">
            <SectionHeading eyebrow="The shift" title="Agents coordinate systems. People focus on customers." />
            <div className="mt-6 space-y-4 text-sm">
              {[
                ["Dispatchers", "manually managing schedules", "agents dynamically orchestrate work"],
                ["Technicians", "hunting for answers", "answers arrive with context"],
                ["Customers", "waiting for updates", "proactive progress and outcomes"],
              ].map(([who, before, after]) => (
                <div key={who} className="rounded-xl border border-border bg-secondary/40 p-4">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-primary">{who}</p>
                  <p className="mt-1 text-muted-foreground line-through decoration-destructive/60">{before}</p>
                  <p className="mt-1 text-foreground/90">{after}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section id="outcomes" className="border-y border-border/60 bg-secondary/20 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="Business outcomes"
            title="What changes in the first year"
            lead="Modelled impact across the core field-service metrics operators already report on."
          />
          <div className="mt-10">
            <OutcomeGrid />
          </div>
        </div>
      </section>

      {/* Executive walkthrough */}
      <section id="walkthrough" className="mx-auto max-w-7xl px-5 py-20">
        <SectionHeading
          eyebrow="Executive walkthrough"
          title="How to run this demo in 18 minutes"
          lead="Six stops, what to say at each one, and the exact proof point on screen — built for a CxO audience."
        />
        <div className="mt-10">
          <ExecutiveWalkthrough />
        </div>
      </section>

      {/* Scenarios */}
      <section id="scenarios" className="mx-auto max-w-7xl px-5 py-20">
        <SectionHeading
          eyebrow="Live walkthroughs"
          title="Three scenarios, one orchestrated workflow"
          lead="Press run and watch the agents hand off work with no swivel-chair operations."
        />
        <div className="mt-10">
          <ScenarioPlayer />
        </div>
      </section>

      {/* Agents */}
      <section id="agents" className="border-y border-border/60 bg-secondary/20 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="Autonomous agent framework"
            title="Eight specialized agents"
            lead="Each agent owns a domain, shares context, and escalates only when a human adds value."
          />
          <div className="mt-10">
            <AgentGrid />
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <SectionHeading
            eyebrow="Agent collaboration"
            title="A fiber outage, end to end"
            lead="One customer report triggers a chain of autonomous handoffs that closes the loop back to the customer."
          />
          <CollaborationChain />
        </div>
      </section>

      {/* Architecture */}
      <section id="architecture" className="border-y border-border/60 bg-secondary/20 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="Microsoft architecture"
            title="Built on the stack operators already run"
            lead="Experience, agent orchestration, data and operational systems in one reference design."
          />
          <div className="mt-10">
            <ArchitectureStack />
          </div>
        </div>
      </section>

      {/* Close */}
      <section className="mx-auto max-w-5xl px-5 py-24 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Executive soundbite</p>
        <blockquote className="mt-6 font-display text-2xl font-bold leading-snug sm:text-4xl">
          “AgentField 360 transforms every field technician into a super-technician, every dispatcher into an AI
          orchestrator, and every service interaction into a proactive, autonomous experience.”
        </blockquote>
        <div className="mt-10 grid gap-3 sm:grid-cols-5">
          {[
            "Faster service restoration",
            "Better customer experiences",
            "Higher technician productivity",
            "Lower operational costs",
            "Autonomous operations",
          ].map((s) => (
            <div key={s} className="surface-panel rounded-xl px-4 py-3 text-sm text-foreground/85">
              {s}
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-border/60 py-8">
        <p className="mx-auto max-w-7xl px-5 text-xs text-muted-foreground">
          AgentField 360 — illustrative demo. Metrics shown are modelled targets, not measured results.
        </p>
      </footer>
    </main>
  );
}
