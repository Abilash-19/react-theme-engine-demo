import type { ColorScale } from "react-theming-engine";

export function hexToHsl(hex: string): [number, number, number] {
  hex = hex.replace(/^#/, "");
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h = 0,
    s;
  const l = (max + min) / 2;
  if (max === min) h = s = 0;
  else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

export function hslToHex(h: number, s: number, l: number): string {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

export function generateScaleFromHex(hex: string): ColorScale {
  const [h, s] = hexToHsl(hex);
  const lightnesses = [95, 90, 82, 72, 60, 48, 40, 33, 26, 18];
  const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;
  const scale: Record<number, string> = {};
  steps.forEach((step, i) => {
    scale[step] = hslToHex(h, Math.min(s * 1.1, 100), lightnesses[i]);
  });
  return scale as unknown as ColorScale;
}

// Default primary for light/dark — a warm, sophisticated coral-rose
export const DEFAULT_PRIMARY = generateScaleFromHex("#E04E6A");

export const PRIMARY_PRESETS = [
  { label: "Crimson", scale: generateScaleFromHex("#e11d48") },
  { label: "Stellar", scale: generateScaleFromHex("#3b82f6") },
  { label: "Jade", scale: generateScaleFromHex("#10b981") },
  { label: "Amber", scale: generateScaleFromHex("#f59e0b") },
  { label: "Cyan", scale: generateScaleFromHex("#06b6d4") },
  { label: "Violet", scale: generateScaleFromHex("#8b5cf6") },
];

export const THEMES = [
  { name: "light", icon: "\u26AA", label: "Light" },
  { name: "dark", icon: "\u26AB", label: "Dark" },
  { name: "ocean", icon: "\uD83D\uDD35", label: "Ocean" },
  { name: "sunset", icon: "\uD83D\uDFE7", label: "Sunset" },
  { name: "forest", icon: "\uD83D\uDFE2", label: "Forest" },
  { name: "violet", icon: "\uD83D\uDFE3", label: "Violet" },
  { name: "earth", icon: "\uD83D\uDFE4", label: "Earth" },
];
