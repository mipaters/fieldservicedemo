import { useEffect, useState } from "react";
import { Play, Pause, RotateCcw, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scenarios } from "./data";
import { cn } from "@/lib/utils";

export function ScenarioPlayer() {
  const [active, setActive] = useState(0);
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const scenario = scenarios[active] ?? scenarios[0]!;

  useEffect(() => {
    if (!playing) return;
    if (step >= scenario.steps.length) {
      setPlaying(false);
      return;
    }
    const t = setTimeout(() => setStep((s) => s + 1), 1200);
    return () => clearTimeout(t);
  }, [playing, step, scenario.steps.length]);

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

      <div className="mt-6 grid gap-8 lg:grid-cols-[300px_1fr]">
        <div className="space-y-5">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">User</p>
            <p className="mt-1 text-lg font-semibold">{scenario.user}</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Objective</p>
            <p className="mt-1 text-sm text-foreground/85">{scenario.objective}</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Agents involved</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {scenario.agents.map((a) => (
                <span
                  key={a}
                  className="rounded-md border border-border bg-secondary/60 px-2 py-1 text-xs text-foreground/80"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-2 pt-1">
            <Button
              onClick={() => {
                if (step >= scenario.steps.length) setStep(0);
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

        <ol className="relative space-y-3 border-l border-border pl-6">
          {scenario.steps.map((s, i) => {
            const revealed = i < step;
            const current = i === step - 1;
            return (
              <li
                key={`${scenario.id}-${i}`}
                className={cn(
                  "relative rounded-xl border p-4 transition-all duration-500",
                  revealed
                    ? "border-primary/35 bg-secondary/50 opacity-100"
                    : "border-border/60 bg-transparent opacity-35",
                  current && "shadow-[var(--shadow-glow)]",
                )}
              >
                <span
                  className={cn(
                    "absolute -left-[31px] top-6 size-2.5 rounded-full",
                    revealed ? "bg-primary" : "bg-border",
                    current && "animate-node",
                  )}
                />
                <p className="font-mono text-[11px] uppercase tracking-widest text-primary/90">{s.actor}</p>
                <p className="mt-1 text-sm text-foreground/90">{s.text}</p>
                {s.bullets && (
                  <ul className="mt-2 grid gap-1 sm:grid-cols-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <ChevronRight className="size-3 text-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
