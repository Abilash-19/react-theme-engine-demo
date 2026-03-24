import type { ThemeConfig, ColorScale } from "react-theming-engine";
import { PRIMARY_PRESETS } from "../utils/colors";

export function PrimaryColorChanger({
  theme,
  onSelectPreset,
  onCustomColor,
}: {
  theme: ThemeConfig;
  onSelectPreset: (s: ColorScale) => void;
  onCustomColor: (h: string) => void;
}) {
  const customHex = theme.palette.primary[500];

  return (
    <div className="flex flex-col gap-4">
      {/* Preset Grid */}
      <div className="grid grid-cols-6 gap-2.5 max-sm:grid-cols-3">
        {PRIMARY_PRESETS.map((p) => {
          const isActive =
            theme.palette.primary[500].toLowerCase() ===
            p.scale[500].toLowerCase();
          return (
            <button
              key={p.label}
              className={`h-10 relative border-2 cursor-pointer transition-all duration-200 ease-in-out overflow-hidden rounded-lg shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] ${
                isActive
                  ? "scale-110 border-fg z-10 shadow-[0_0_0_3px_color-mix(in_srgb,var(--preset-color)_30%,transparent),0_8px_16px_rgba(0,0,0,0.15)]"
                  : "border-transparent hover:-translate-y-0.5 hover:shadow-[0_6px_12px_rgba(0,0,0,0.12)]"
              }`}
              onClick={() => onSelectPreset(p.scale)}
              style={
                { "--preset-color": p.scale[500], background: p.scale[500] } as React.CSSProperties
              }
            >
              <div className="absolute inset-[-100%] bg-[linear-gradient(45deg,transparent,rgba(255,255,255,0.2),transparent)] animate-shimmer" />
            </button>
          );
        })}
      </div>

      {/* Hint */}
      <p className="text-[0.65rem] text-fg-subtle tracking-wide leading-relaxed -mt-1">
        Pick a preset above or click the swatch below to choose any color. The entire UI will re-theme instantly.
      </p>

      {/* Custom Color Picker */}
      <div className="flex items-center gap-4 p-3.5 bg-bg border border-border rounded-xl max-sm:flex-col max-sm:items-start">
        <div className="relative w-12 h-12 shrink-0 rounded-lg overflow-hidden">
          <input
            type="color"
            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-[5]"
            value={customHex}
            onChange={(e) => onCustomColor(e.target.value)}
          />
          <div
            className="absolute inset-0 border-[3px] border-surface rounded-lg"
            style={{
              background: customHex,
              boxShadow: `0 0 16px color-mix(in srgb, ${customHex} 35%, transparent)`,
            }}
          />
        </div>
        <div className="flex-1">
          <div className="text-[0.62rem] font-medium text-fg-subtle tracking-[0.12em] uppercase mb-0.5">
            Primary Color
          </div>
          <div className="font-mono text-lg font-medium tracking-wide text-fg max-sm:text-base">
            {customHex.toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  );
}
