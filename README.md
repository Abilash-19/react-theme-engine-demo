# 🎨 react-theming-engine

**A production-ready infrastructure for dynamic theming in React.** Transform your entire UI using a single brand color, mapped to semantic tokens and injected via CSS variables.

[![npm version](https://img.shields.io/npm/v/react-theming-engine.svg)](https://www.npmjs.com/package/react-theming-engine)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

---

## 🚀 Features

- **3-Layer Architecture**: Brand Palette → Semantic Tokens → CSS Variables.
- **Auto-Generated Scales**: Full 10-step scales (50-900) from any hex color.
- **Zero Runtime Style Invalidation**: No CSS-in-JS performance hits. Standard CSS variables are used.
- **Type Safe**: Full TypeScript support for tokens and configurations.
- **Persistence**: Built-in support for `localStorage`.

---

## 🛠️ Installation

```bash
npm install react-theming-engine
# or
yarn add react-theming-engine
```

---

## 📖 Quick Start

### 1. Wrap your application

```tsx
import { ThemeProvider } from "react-theming-engine";

function Root() {
  return (
    <ThemeProvider defaultThemeName="light" storageKey="app-theme">
      <App />
    </ThemeProvider>
  );
}
```

### 2. Use the hook

```tsx
import { useTheme } from "react-theming-engine";

function MyComponent() {
  const { theme, setTheme, toggleColorMode } = useTheme();

  return (
    <button onClick={toggleColorMode}>
      Theme: {theme.colorMode}
    </button>
  );
}
```

---

## 🧩 Usage Guide

### 🌊 In Normal CSS (Vanilla)

The engine injects semantic tokens as CSS variables. You can use them directly in any `.css` or `.scss` file.

```css
/* button.css */
.my-button {
  background-color: var(--color-accent); /* Mapped from your primary scale */
  color: var(--color-accent-foreground);
  border-radius: var(--radius-md);
  box-shadow: 0 4px 6px var(--color-shadow);
}

.my-button:hover {
  background-color: var(--color-accent-hover);
}
```

### 💨 In Tailwind CSS

To make Tailwind aware of the dynamic variables, add them to your `tailwind.config.js`.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        accent: {
          DEFAULT: "var(--color-accent)",
          foreground: "var(--color-accent-foreground)",
          hover: "var(--color-accent-hover)",
        },
        surface: {
          DEFAULT: "var(--color-surface)",
          hover: "var(--color-surface-hover)",
        },
        border: {
          DEFAULT: "var(--color-border)",
          subtle: "var(--color-border-subtle)",
          strong: "var(--color-border-strong)",
        }
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      }
    },
  },
  plugins: [],
};
```

**Usage in components:**
```tsx
<div className="bg-background text-foreground border-border rounded-md p-4">
  <button className="bg-accent hover:bg-accent-hover text-accent-foreground px-4 py-2 rounded-lg">
    Dynamic Button
  </button>
</div>
```

---

## 🏗️ Architecture

1.  **Brand Palette**: We take a `primary` color and generate colors like `primary-50`, `primary-500`, etc.
2.  **Semantic Tokens**: Tokens like `accent` point to a specific level of the palette (e.g., `primary-600` in light mode, `primary-400` in dark mode).
3.  **CSS Variables**: These tokens are written to the document root as `--color-accent`, allowing any CSS (Tailwind, CSS Modules, etc.) to consume them.

---

## ⚡ API Surface

### `useTheme()` returns:
- `theme`: The full theme configuration object.
- `setTheme(name: string)`: Switch to a named preset.
- `toggleColorMode()`: Swap between `light` and `dark`.
- `overrideTheme(config)`: Change tokens or scales on the fly.
- `resetTheme()`: Revert to default configuration.

---

## 📄 License

MIT © [Abilash-19](https://github.com/Abilash-19)
