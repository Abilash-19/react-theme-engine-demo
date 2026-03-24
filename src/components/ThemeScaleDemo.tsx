import type { ThemeConfig } from "react-theming-engine";

const shadeSteps = [50, 100, 200, 300, 400, 500] as const;

export function ThemeScaleDemo({ theme }: { theme: ThemeConfig }) {
  return (
    <div className="card-base border-2 border-border p-6">
      <div className="flex justify-between items-center">
        <span className="text-base font-semibold tracking-tight">Primary Shades</span>
        <span className="badge-accent">Live Scale</span>
      </div>
      <p className="text-fg-muted text-sm leading-relaxed">
        Generated shades respond to the active theme and show how one
        brand color expands into a usable scale.
      </p>
      <div className="grid grid-cols-3 gap-2.5 max-sm:grid-cols-2">
        {shadeSteps.map((step) => (
          <div
            key={step}
            className="p-3 rounded-xl border border-border bg-bg/70"
          >
            <div
              className="h-16 rounded-lg mb-2.5 border border-black/5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)]"
              style={{ background: theme.palette.primary[step] }}
            />
            <div className="text-[0.62rem] font-medium tracking-widest text-fg-subtle uppercase">
              {step}
            </div>
            <div className="font-mono text-[0.7rem] text-fg mt-0.5">
              {theme.palette.primary[step]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
