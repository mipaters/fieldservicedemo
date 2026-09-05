import { useEffect, useState } from "react";
import { Play, Pause, RotateCcw, ArrowLeft, ArrowRight, User, Sparkles, Plug, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scenarios } from "./data";
import { cn } from "@/lib/utils";

export function ScenarioPlayer() {
  const [active, setActive] = useState(0);
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const scenario = scenarios[active] ?? scenarios[0]!;
  const total = scenario.steps.length;
  const current = scenario.steps[step]!;

  useEffect(() => {
    if (!playing) return;
    if (step >= total - 1) {
      setPlaying(false);
      return;
    }
    const t = setTimeout(() => setStep((s) => s + 1), 2400);
    return () => clearTimeout(t);
  }, [playing, step, total]);

  const select = (i: number) => {
    setActive(i);
    setStep(0);
    setPlaying(false);
  };

  return (
    <div className="surface-panel rounded-2xl p-5 sm:p-8">
      <div className="flex flex-wrap gap-2">
        {scenarios.map((s, i) => (
          <button
            key={s.id}
            onClick={() => select(i)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              i === active
                ? "border-primary/60 bg-primary/15 text-primary"
                : "border-border text-muted-foreground hover:text-foreground",
            )}
          >
            {s.title}
          </button>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-wrap gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">User</p>
            <p className="mt-1 text-base font-semibold">{scenario.user}</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Objective</p>
            <p className="mt-1 text-sm text-foreground/85">{scenario.objective}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => {
              if (step >= total - 1) setStep(0);
              setPlaying((p) => !p);
            }}
          >
            {playing ? <Pause /> : <Play />}
            {playing ? "Pause" : "Run scenario"}
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              setStep(0);
              setPlaying(false);
            }}
          >
            <RotateCcw />
            Reset
          </Button>
        </div>
      </div>

      {/* Progress segments */}
      <div className="mt-6 flex gap-1.5">
        {scenario.steps.map((s, i) => (
          <button
            key={`${scenario.id}-seg-${i}`}
            onClick={() => {
              setStep(i);
              setPlaying(false);
            }}
            className="h-1.5 flex-1 rounded-full transition-colors"
            style={{
              backgroundColor:
                i <= step ? "var(--primary)" : "color-mix(in oklab, var(--primary) 22%, transparent)",
            }}
            aria-label={`Go to step ${i + 1}`}
          />
        ))}
      </div>

      {/* Horizontal step tiles */}
      <div className="-mx-5 mt-5 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8">
        <div className="flex gap-3">
          {scenario.steps.map((s, i) => (
            <button
              key={`${scenario.id}-tile-${i}`}
              onClick={() => {
                setStep(i);
                setPlaying(false);
              }}
              className={cn(
                "w-44 shrink-0 rounded-xl border p-3 text-left transition-all",
                i === step
                  ? "border-primary/60 bg-primary/10 shadow-[var(--shadow-glow)]"
                  : i < step
                    ? "border-primary/30 bg-secondary/50"
                    : "border-border bg-secondary/30 opacity-60 hover:border-primary/40 hover:opacity-100",
              )}
            >
              <div className="flex items-center justify-between">
                <span
                  className={cn(
                    "grid size-6 place-items-center rounded-md border font-mono text-[11px]",
                    i <= step ? "border-primary/40 bg-primary/10 text-primary" : "border-border text-muted-foreground",
                  )}
                >
                  {i + 1}
                </span>
                {i < step && <span className="size-1.5 rounded-full bg-primary" />}
              </div>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-primary/90">{s.actor}</p>
              <p className="mt-1 line-clamp-3 text-xs leading-snug text-foreground/85">{s.text}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Current step detail */}
      <div key={`${scenario.id}-${step}`} className="animate-rise-in mt-5 rounded-xl border border-border bg-secondary/40 p-5 sm:p-6">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
          Step {step + 1} of {total} — {current.actor}
        </p>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-foreground/90">{current.text}</p>
        {current.bullets && (
          <ul className="mt-3 grid gap-1.5 sm:grid-cols-3">
            {current.bullets.map((b) => (
              <li key={b} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <ChevronRight className="size-3 text-accent" />
                {b}
              </li>
            ))}
          </ul>
        )}

        {(current.human || current.msft || current.systems) && (
          <div className="mt-5 grid gap-4 border-t border-border/60 pt-4 md:grid-cols-3">
            {current.human && (
              <div className="flex items-start gap-2">
                <User className="mt-0.5 size-4 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-foreground/80">
                  <span className="font-semibold text-foreground">Human interaction — </span>
                  {current.human}
                </p>
              </div>
            )}
            {current.msft && (
              <div className="flex items-start gap-2">
                <Sparkles className="mt-0.5 size-4 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-foreground/80">
                  <span className="font-semibold text-foreground">Powered by — </span>
                  {current.msft.join(" · ")}
                </p>
              </div>
            )}
            {current.systems && (
              <div className="flex items-start gap-2">
                <Plug className="mt-0.5 size-4 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-foreground/80">
                  <span className="font-semibold text-foreground">Systems touched — </span>
                  {current.systems.join(" · ")}
                </p>
              </div>
            )}
          </div>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-2">
          <Button variant="outline" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0}>
            <ArrowLeft className="size-4" /> Back
          </Button>
          {step < total - 1 ? (
            <Button onClick={() => setStep((s) => Math.min(total - 1, s + 1))}>
              Next step <ArrowRight className="size-4" />
            </Button>
          ) : (
            <Button
              onClick={() => {
                setStep(0);
                setPlaying(false);
              }}
            >
              <RotateCcw className="size-4" /> Restart
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
