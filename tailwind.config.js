/**
 * Tailwind CSS v3 configuration using react-theming-engine preset.
 *
 * This file is a REFERENCE for Tailwind v3 projects.
 * The demo itself uses Tailwind v4 with CSS-first @theme configuration
 * in src/index.css — which achieves the same mapping.
 *
 * Usage (Tailwind v3):
 *   npm install react-theming-engine tailwindcss@3
 *   Then use this config as your tailwind.config.js
 */

import { themePreset } from 'react-theming-engine/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [themePreset],
  theme: {
    extend: {},
  },
  plugins: [],
}
