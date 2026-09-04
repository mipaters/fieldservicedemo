import { ArrowDown } from "lucide-react";
import { agents, architecture, collaborationChain, executiveWalkthrough, outcomes } from "./data";

export function ExecutiveWalkthrough() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {executiveWalkthrough.map((s, i) => (
        <div key={s.minute} className="surface-panel relative rounded-2xl p-6">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-xs text-primary">{s.minute}</span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Stop {i + 1} of {executiveWalkthrough.length}
            </span>
          </div>
          <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
          <p className="mt-3 border-l-2 border-primary/50 pl-3 text-sm italic text-foreground/85">“{s.say}”</p>
          <p className="mt-4 text-sm text-muted-foreground">
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent">On screen — </span>
            {s.show}
          </p>
          <div className="mt-4 border-t border-border pt-3">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Point at</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {s.proof.map((p) => (
                <span
                  key={p}
                  className="rounded border border-border bg-secondary/50 px-1.5 py-0.5 text-[11px] text-muted-foreground"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
      {lead && <p className="mt-3 text-base text-muted-foreground">{lead}</p>}
    </div>
  );
}

export function OutcomeGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {outcomes.map((o) => (
        <div key={o.label} className="surface-panel rounded-2xl p-6">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{o.label}</p>
          <p className="mt-3 text-3xl font-bold text-signal">{o.value}</p>
          <p className="mt-1 text-sm text-accent">{o.detail}</p>
          <ul className="mt-4 space-y-1.5">
            {o.drivers.map((d) => (
              <li key={d} className="text-sm text-muted-foreground">
                {d}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function AgentGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {agents.map((a) => (
        <div
          key={a.n}
          className="surface-panel group rounded-2xl p-6 transition-shadow hover:shadow-[var(--shadow-glow)]"
        >
          <div className="flex items-center gap-3">
            <span className="grid size-8 place-items-center rounded-lg border border-primary/40 bg-primary/10 font-mono text-sm text-primary">
              {a.n}
            </span>
            <h3 className="text-base font-semibold">{a.name}</h3>
          </div>
          <ul className="mt-4 space-y-1.5">
            {a.responsibilities.map((r) => (
              <li key={r} className="text-sm text-foreground/80">
                {r}
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t border-border pt-3">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{a.meta.label}</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {a.meta.items.map((i) => (
                <span key={i} className="rounded border border-border bg-secondary/50 px-1.5 py-0.5 text-[11px] text-muted-foreground">
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function CollaborationChain() {
  return (
    <div className="surface-panel rounded-2xl p-6 sm:p-8">
      <ol className="grid gap-3">
        {collaborationChain.map((c, i) => (
          <li key={c} className="flex flex-col gap-3">
            <div className="flex items-center gap-4 rounded-xl border border-border bg-secondary/40 px-4 py-3">
              <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-sm text-foreground/90">{c}</span>
            </div>
            {i < collaborationChain.length - 1 && (
              <ArrowDown className="ml-6 size-4 text-accent/70" />
            )}
          </li>
        ))}
      </ol>
      <p className="mt-6 text-sm text-muted-foreground">
        The user experiences one seamless workflow while eight specialized agents coordinate autonomously behind the
        scenes.
      </p>
    </div>
  );
}

export function ArchitectureStack() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {architecture.map((l) => (
        <div key={l.layer} className="surface-panel rounded-2xl p-6">
          <div className="h-1 w-16 rounded-full animate-flow" />
          <h3 className="mt-4 text-lg font-semibold">{l.layer}</h3>
          <ul className="mt-3 space-y-1.5">
            {l.items.map((i) => (
              <li key={i} className="text-sm text-muted-foreground">
                {i}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
