import { useState, useEffect } from "react";
import type { ThemeConfig, ColorScale } from "react-theming-engine";
import { THEMES, PRIMARY_PRESETS } from "../utils/colors";

export function ThemeBar({
  theme,
  onSelectTheme,
  onToggleColorMode,
  onSelectPreset,
}: {
  theme: ThemeConfig;
  onSelectTheme: (name: string) => void;
  onToggleColorMode: () => void;
  onSelectPreset: (scale: ColorScale) => void;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-1000 bg-surface/85 backdrop-blur-xl border-b-2 border-border py-2">
      <div className="max-w-300 mx-auto flex justify-between items-center gap-3 px-6 max-md:flex-col max-md:items-stretch max-md:px-4">
        {/* Theme buttons */}
        <div className="flex gap-1 overflow-x-auto flex-1 min-w-0 no-scrollbar max-md:w-full">
          {THEMES.map((t) => (
            <button
              key={t.name}
              className={`py-1.5 px-3 rounded-md flex items-center gap-1.5 cursor-pointer shrink-0 border-none whitespace-nowrap font-medium min-h-9 transition-all text-xs tracking-wide ${
                theme.name === t.name
                  ? "bg-accent text-accent-fg shadow-[0_3px_12px_color-mix(in_srgb,var(--color-accent)_30%,transparent)]"
                  : "bg-transparent text-fg-muted hover:bg-surface-hover hover:text-fg"
              }`}
              onClick={() => onSelectTheme(t.name)}
            >
              <span className="w-3.5 inline-flex items-center justify-center text-[0.7rem]">
                {theme.name === t.name ? "\u2728" : t.icon}
              </span>
              {t.label}
            </button>
          ))}
        </div>

        {/* Primary color dots — only visible after scrolling past hero */}
        <div
          className={`flex items-center gap-1.5 transition-all duration-300 max-md:justify-center ${
            scrolled
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-1 pointer-events-none w-0 overflow-hidden"
          }`}
        >
          {PRIMARY_PRESETS.map((p) => {
            const isActive =
              theme.palette.primary[500]?.toLowerCase() ===
              p.scale[500]?.toLowerCase();
            return (
              <button
                key={p.label}
                title={p.label}
                className={`w-5 h-5 rounded-full cursor-pointer border-2 transition-all shrink-0 ${
                  isActive
                    ? "border-fg scale-125 shadow-[0_0_0_2px_color-mix(in_srgb,var(--color-accent)_30%,transparent)]"
                    : "border-transparent hover:scale-110 opacity-80 hover:opacity-100"
                }`}
                style={{ background: p.scale[500] }}
                onClick={() => onSelectPreset(p.scale)}
              />
            );
          })}
        </div>

        {/* Color mode toggle */}
        <button
          className="btn-base btn-outline text-xs py-1.5 px-3 max-md:w-full"
          onClick={onToggleColorMode}
        >
          {theme.colorMode === "dark" ? "\u2600\uFE0F  Light mode" : "\uD83C\uDF19  Dark mode"}
        </button>
      </div>
    </nav>
  );
}
