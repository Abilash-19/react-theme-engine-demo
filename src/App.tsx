import { useState, useCallback, useEffect } from "react";
import { useTheme, type ColorScale } from "react-theming-engine";
import { generateScaleFromHex, DEFAULT_PRIMARY } from "./utils/colors";
import { Hero } from "./components/Hero";
import { ThemeBar } from "./components/ThemeBar";
import { Footer } from "./components/Footer";
import { ProjectStatsDemo } from "./components/ProjectStatsDemo";
import { ActionShowcaseDemo } from "./components/ActionShowcaseDemo";
import { ThemeScaleDemo } from "./components/ThemeScaleDemo";
import { IntegrationGuide } from "./components/IntegrationGuide";
import { LiveComponentsDemo } from "./components/LiveComponentsDemo";
import { TypographyDemo } from "./components/TypographyDemo";
import { CodeSnippet } from "./components/CodeSnippet";

export default function App() {
  const { theme, setTheme, toggleColorMode, overrideTheme, resetTheme } =
    useTheme();
  const [activePrimaryScale, setActivePrimaryScale] =
    useState<ColorScale | null>(null);

  // Apply a better default primary for light/dark on first render
  useEffect(() => {
    if (theme.name === "light" || theme.name === "dark") {
      overrideTheme({
        palette: { primary: DEFAULT_PRIMARY },
        tokens: {
          accent: DEFAULT_PRIMARY[600],
          accentHover: DEFAULT_PRIMARY[700],
          accentForeground: "#ffffff",
          ring: DEFAULT_PRIMARY[600],
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const applyPrimaryOverride = useCallback(
    (scale: ColorScale) => {
      overrideTheme({
        palette: { primary: scale },
        tokens: {
          accent: scale[600],
          accentHover: scale[700],
          accentForeground: "#ffffff",
          ring: scale[600],
        },
      });
    },
    [overrideTheme]
  );

  const handlePrimaryPreset = useCallback(
    (scale: ColorScale) => {
      setActivePrimaryScale(scale);
      applyPrimaryOverride(scale);
    },
    [applyPrimaryOverride]
  );

  const handleCustomPrimaryHex = useCallback(
    (hex: string) => {
      const scale = generateScaleFromHex(hex);
      handlePrimaryPreset(scale);
    },
    [handlePrimaryPreset]
  );

  useEffect(() => {
    if (activePrimaryScale) applyPrimaryOverride(activePrimaryScale);
  }, [theme.colorMode, activePrimaryScale, applyPrimaryOverride]);

  const handleSelectTheme = (name: string) => {
    setActivePrimaryScale(null);
    setTheme(name);
  };

  const handleReset = () => {
    setActivePrimaryScale(null);
    resetTheme();
  };

  return (
    <div className="min-h-screen" data-theme={theme.name}>
      <Hero
        theme={theme}
        onSelectPreset={handlePrimaryPreset}
        onCustomColor={handleCustomPrimaryHex}
        onReset={handleReset}
      />

      <ThemeBar
        theme={theme}
        onSelectTheme={handleSelectTheme}
        onToggleColorMode={toggleColorMode}
        onSelectPreset={handlePrimaryPreset}
      />

      <main className="max-w-300 mx-auto py-14 px-6 max-md:py-10 max-md:px-4">

        {/* ── Section: Theme Playground ── */}
        <section className="mb-20">
          <div className="mb-6 flex flex-col items-start gap-1.5">
            <span className="badge-accent text-[0.6rem] uppercase tracking-[0.12em]">
              Interactive
            </span>
            <h2 className="text-[clamp(1.5rem,2.5vw,1.85rem)] font-bold tracking-tight">
              Theme Playground
            </h2>
            <p className="text-fg-muted text-[0.85rem] max-w-xl leading-relaxed">
              These components update in real-time as you switch themes and
              override colors. Try it.
            </p>
          </div>

          <ProjectStatsDemo />

          <div className="mt-5">
            <LiveComponentsDemo />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-5 max-md:grid-cols-1">
            <ActionShowcaseDemo />
            <ThemeScaleDemo theme={theme} />
          </div>
        </section>

        {/* ── Section: Integration Guide ── */}
        <IntegrationGuide />

        {/* ── Section: Token Preview ── */}
        <section className="mb-20">
          <div className="mb-6 flex flex-col items-start gap-1.5">
            <span className="badge-accent text-[0.6rem] uppercase tracking-[0.12em]">
              Typography
            </span>
            <h2 className="text-[clamp(1.5rem,2.5vw,1.85rem)] font-bold tracking-tight">
              Token Preview
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
            <TypographyDemo />
            <div className="card-base border-2 border-border p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-semibold tracking-tight">Primary Scale</span>
                <span className="badge-accent">
                  50 {"\u2192"} 900
                </span>
              </div>
              <div className="flex gap-1.5 h-28 items-end">
                {[20, 50, 40, 85, 60, 75, 100].map((v, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-accent rounded-t-sm transition-all duration-500"
                    style={{
                      opacity: 0.15 + i * 0.14,
                      height: `${v}%`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Section: Theme Snapshot ── */}
        <section className="mb-20">
          <div className="mb-6 flex flex-col items-start gap-1.5">
            <span className="badge-accent text-[0.6rem] uppercase tracking-[0.12em]">
              Export
            </span>
            <h2 className="text-[clamp(1.5rem,2.5vw,1.85rem)] font-bold tracking-tight">
              Theme Snapshot
            </h2>
            <p className="text-fg-muted text-[0.85rem] max-w-xl leading-relaxed">
              Current theme configuration as JSON. Copy to share or persist your brand.
            </p>
          </div>
          <CodeSnippet
            title="theme-config.json"
            code={JSON.stringify(
              {
                name: theme.name,
                colorMode: theme.colorMode,
                palette: theme.palette,
                neutral: theme.neutral,
                tokens: theme.tokens,
                shape: theme.shape,
                typography: theme.typography,
              },
              null,
              2
            )}
          />
        </section>

      </main>

      <Footer />
    </div>
  );
}
