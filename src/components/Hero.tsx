import { useState } from "react";
import type { ThemeConfig, ColorScale } from "react-theming-engine";
import { IconGitHub, IconLinkedIn, IconCopy, IconCheck } from "./icons";
import { PrimaryColorChanger } from "./PrimaryColorChanger";

const FEATURES = [
  { label: "Zero Runtime" },
  { label: "Semantic Tokens" },
  { label: "Tailwind Ready" },
  { label: "Type-Safe" },
];

export function Hero({
  theme,
  onSelectPreset,
  onCustomColor,
  onReset,
}: {
  theme: ThemeConfig;
  onSelectPreset: (s: ColorScale) => void;
  onCustomColor: (h: string) => void;
  onReset: () => void;
}) {
  const [copied, setCopied] = useState(false);

  const copyInstall = () => {
    navigator.clipboard.writeText("npm i react-theming-engine");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="relative py-16 px-6 overflow-hidden border-b border-border-subtle max-lg:py-12 max-lg:px-4 max-md:py-10 max-md:px-4">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 70% 20%, color-mix(in srgb, var(--color-accent) 14%, transparent), transparent),
            radial-gradient(ellipse 50% 80% at 0% 100%, color-mix(in srgb, var(--color-accent) 8%, transparent), transparent),
            linear-gradient(180deg, color-mix(in srgb, var(--color-surface) 90%, var(--color-background)) 0%, var(--color-surface) 100%)
          `,
        }}
      />

      <div className="max-w-300 mx-auto grid grid-cols-[1.1fr_0.9fr] items-start gap-10 relative z-[1] max-lg:grid-cols-1 max-lg:text-center max-lg:gap-8">
        {/* Left Column */}
        <div className="flex flex-col items-start gap-5 max-lg:items-center">
          {/* Title + badge */}
          <div className="flex items-center gap-3 flex-wrap max-lg:justify-center max-sm:flex-col max-sm:gap-2">
            <h1 className="text-[clamp(1.8rem,3.5vw,3rem)] font-bold tracking-[-0.03em] leading-[1.1] text-fg max-sm:text-[clamp(1.6rem,7vw,2.2rem)]">
              react-theming-engine
            </h1>
            <a
              href="https://www.linkedin.com/in/abilash-s-84608a23a/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 py-1 px-2.5 bg-accent/10 border border-accent/20 text-accent font-medium text-[0.68rem] no-underline rounded-md tracking-wide transition-all hover:-translate-y-0.5 hover:bg-accent/15 hover:border-accent/35 shrink-0 max-sm:py-0.5 max-sm:px-2 max-sm:text-[0.6rem] max-sm:gap-1"
            >
              <span className="max-sm:w-3.5 max-sm:h-3.5 w-4 h-4 inline-flex"><IconLinkedIn /></span>
              <span>by Abilash</span>
            </a>
          </div>

          {/* Description */}
          <p className="text-[clamp(0.88rem,1.4vw,0.95rem)] text-fg-muted max-w-[32rem] leading-relaxed max-lg:mx-auto">
            A production-ready infrastructure for dynamic theming in React.
            Generate a brand palette from one primary color, map it to semantic
            tokens, and publish CSS variables across your UI.
          </p>

          {/* Feature chips */}
          <div className="flex flex-wrap gap-1.5 max-lg:justify-center">
            {FEATURES.map((item) => (
              <span
                key={item.label}
                className="py-1 px-2.5 rounded-md border border-border/40 bg-surface/50 text-fg-muted text-[0.68rem] font-medium leading-none backdrop-blur-sm tracking-wider uppercase"
              >
                {item.label}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex gap-2.5 flex-wrap items-stretch max-lg:justify-center max-md:flex-col max-md:w-full">
            <a
              href="https://github.com/Abilash-19/react-theming-engine"
              target="_blank"
              rel="noreferrer"
              className="btn-base btn-outline py-2 px-4 no-underline max-md:w-full"
            >
              <IconGitHub /> GitHub repo
            </a>
            <button
              className={`btn-base py-2 px-4 font-mono text-xs cursor-pointer max-md:w-full ${
                copied ? "btn-primary" : "btn-outline"
              }`}
              onClick={copyInstall}
            >
              {copied ? (
                <>
                  <IconCheck size={13} /> Copied!
                </>
              ) : (
                <>
                  npm i react-theming-engine <IconCopy size={13} />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column - Theme Playground Card */}
        <div className="relative self-start w-full max-lg:max-w-[40rem] max-lg:mx-auto">
          <div className="absolute -inset-2 bg-accent/8 rounded-3xl blur-2xl z-0" />
          <div className="relative z-[1] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-surface)_97%,white),var(--color-surface))] border border-border/60 rounded-2xl p-5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] max-sm:p-4">
            <div className="flex justify-between items-start gap-3 mb-4 max-sm:flex-col max-sm:items-stretch">
              <div className="flex-1 flex flex-col gap-0.5">
                <span className="font-medium uppercase text-[0.68rem] text-fg-muted tracking-[0.14em]">
                  Theme Playground
                </span>
                <span className="text-[0.7rem] text-fg-subtle leading-snug">
                  Switch presets or pick a custom primary color.
                </span>
              </div>
              <button
                className="bg-surface-hover border border-border text-fg-muted px-2.5 py-1 rounded-md text-[0.68rem] font-medium cursor-pointer transition-all hover:bg-accent hover:text-accent-fg hover:border-accent max-sm:self-start"
                onClick={onReset}
              >
                Reset
              </button>
            </div>
            <PrimaryColorChanger
              theme={theme}
              onSelectPreset={onSelectPreset}
              onCustomColor={onCustomColor}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
