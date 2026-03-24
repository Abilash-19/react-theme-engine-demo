import { CodeSnippet } from "./CodeSnippet";

const steps = [
  {
    num: "01",
    label: "Provider Setup",
    desc: "Wrap your app root",
    type: "Required",
    title: "main.tsx",
    code: `import { ThemeProvider } from "react-theming-engine";

function Root() {
  return (
    <ThemeProvider defaultThemeName="light" storageKey="app-theme">
      <App />
    </ThemeProvider>
  );
}`,
  },
  {
    num: "02",
    label: "Tailwind v3",
    desc: "Use the built-in preset",
    type: "Option A",
    title: "tailwind.config.js",
    code: `import { themePreset } from 'react-theming-engine/tailwind';

export default {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [themePreset],
}

// Now use: bg-background, text-foreground, bg-accent,
// text-accent-foreground, bg-surface, border-border, etc.`,
  },
  {
    num: "03",
    label: "Tailwind v4",
    desc: "CSS-first @theme mapping",
    type: "Option B",
    title: "index.css",
    code: `@import "tailwindcss";

@theme {
  --color-bg: var(--color-background);
  --color-fg: var(--color-foreground);
  --color-accent: var(--color-accent);
  --color-accent-fg: var(--color-accent-foreground);
  --color-surface: var(--color-surface);
  --color-border: var(--color-border);
  --font-sans: var(--font-sans);
  --font-mono: var(--font-mono);
}`,
  },
  {
    num: "04",
    label: "Vanilla CSS",
    desc: "Use CSS variables directly",
    type: "Option C",
    title: "styles.css",
    code: `.btn-primary {
  background-color: var(--color-accent);
  color: var(--color-accent-foreground);
  border-radius: var(--radius-md);
}

.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  color: var(--color-foreground);
}`,
  },
];

export function IntegrationGuide() {
  return (
    <section className="mb-20">
      <div className="mb-6 flex flex-col items-start gap-1.5">
        <span className="badge-accent text-[0.6rem] uppercase tracking-[0.12em]">
          Get Started
        </span>
        <h2 className="text-[clamp(1.5rem,2.5vw,1.85rem)] font-bold tracking-tight">
          Integration Guide
        </h2>
        <p className="text-fg-muted text-[0.85rem] max-w-xl leading-relaxed">
          Three steps to add dynamic theming to any React project. No runtime CSS-in-JS required.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {steps.map((step) => (
          <div key={step.num} className="card-base p-0 overflow-hidden">
            <div className="flex max-md:flex-col">
              {/* Left: Step Info */}
              <div className="w-64 shrink-0 p-6 flex flex-col gap-3 border-r border-border/50 bg-accent/[0.03] max-md:w-full max-md:border-r-0 max-md:border-b max-md:border-border/50">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-accent/20 leading-none">
                    {step.num}
                  </span>
                  <span className="badge-accent text-[0.55rem] uppercase tracking-wider">
                    {step.type}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-fg text-sm tracking-wide">{step.label}</div>
                  <div className="text-xs text-fg-muted mt-0.5 tracking-wide">{step.desc}</div>
                </div>
              </div>
              {/* Right: Code */}
              <div className="flex-1 p-5 min-w-0">
                <CodeSnippet title={step.title} code={step.code} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
