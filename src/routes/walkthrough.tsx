import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Play, RotateCcw, Satellite } from "lucide-react";
import { Button } from "@/components/ui/button";
import { walkthroughSteps } from "@/components/agentfield/data";
import { SectionHeading } from "@/components/agentfield/sections";

export const Route = createFileRoute("/walkthrough")({
  head: () => ({
    meta: [
      { title: "Executive Walkthrough | AgentField 360" },
      {
        name: "description",
        content:
          "A guided executive summary of AgentField 360 — the Autonomous Workforce Operations Platform that orchestrates field service across existing telecom systems.",
      },
      { property: "og:title", content: "Executive Walkthrough | AgentField 360" },
      {
        property: "og:description",
        content:
          "Eight-step executive walkthrough: the coordination problem, the orchestration layer, specialized agents, live scenarios, business outcomes and the Microsoft architecture.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Walkthrough,
});

function Walkthrough() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const current = walkthroughSteps[step]!;

  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-lg bg-primary/15 text-primary">
              <Satellite className="size-4" />
            </span>
            <span className="font-display text-sm font-bold tracking-tight">AgentField 360</span>
          </Link>
          <Button asChild size="sm" variant="outline">
            <Link to="/">Back to overview</Link>
          </Button>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Executive walkthrough"
          title="The eight-step executive summary"
          lead="A guided narrative of what AgentField 360 is, the problem it solves, and how it orchestrates field service across the systems operators already run — without replacing them."
        />

        {!started ? (
          <div className="mt-10">
            <Button size="lg" onClick={() => setStarted(true)}>
              <Play className="size-4" /> Start the executive walkthrough
            </Button>

            <p className="mt-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              What you will see
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {walkthroughSteps.map((s, i) => (
                <div key={s.title} className="surface-panel rounded-2xl p-5">
                  <span className="grid size-8 place-items-center rounded-lg border border-primary/40 bg-primary/10 font-mono text-sm text-primary">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 text-base font-semibold leading-snug">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.detail}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="mt-8 flex gap-1.5">
              {walkthroughSteps.map((s, i) => (
                <button
                  key={s.title}
                  onClick={() => setStep(i)}
                  className="h-1.5 flex-1 rounded-full transition-colors"
                  style={{
                    backgroundColor: i <= step ? "var(--primary)" : "color-mix(in oklab, var(--primary) 22%, transparent)",
                  }}
                  aria-label={`Go to step ${i + 1}`}
                />
              ))}
            </div>

            <div key={step} className="surface-panel animate-rise-in mt-6 rounded-2xl p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                Step {step + 1} of {walkthroughSteps.length}
              </p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">{current.title}</h3>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground/80">{current.detail}</p>

              <div className="mt-8 flex flex-wrap items-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                >
                  <ArrowLeft className="size-4" /> Back
                </Button>
                {step < walkthroughSteps.length - 1 ? (
                  <Button onClick={() => setStep((s) => Math.min(walkthroughSteps.length - 1, s + 1))}>
                    Next step <ArrowRight className="size-4" />
                  </Button>
                ) : (
                  <Button onClick={() => { setStarted(false); setStep(0); }}>
                    <RotateCcw className="size-4" /> Restart
                  </Button>
                )}
                <Button asChild variant="outline">
                  <Link to={current.to}>Open the supporting view</Link>
                </Button>
              </div>
            </div>

            <div className="mt-4 grid gap-2 md:grid-cols-4">
              {walkthroughSteps.map((s, i) => (
                <button
                  key={s.title}
                  onClick={() => setStep(i)}
                  className={`rounded-xl border p-3 text-left transition-colors ${
                    i === step
                      ? "border-primary/60 bg-primary/10"
                      : "border-border bg-secondary/30 hover:border-primary/40"
                  }`}
                >
                  <p className="font-mono text-[10px] font-semibold text-muted-foreground">STEP {i + 1}</p>
                  <p className="mt-1 text-xs font-medium leading-snug">{s.title}</p>
                </button>
              ))}
            </div>
          </>
        )}
      </section>

      <footer className="border-t border-border/60 py-8">
        <p className="mx-auto max-w-7xl px-5 text-xs text-muted-foreground">
          AgentField 360 — illustrative demo. Metrics shown are modelled targets, not measured results.
        </p>
      </footer>
    </main>
  );
}
