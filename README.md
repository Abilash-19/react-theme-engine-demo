# 🎨 React Theming Engine

> **The ultimate theming engine for React.** One primary color is all it takes to transform your entire design system instantly.

[![npm version](https://img.shields.io/npm/v/react-theming-engine.svg)](https://www.npmjs.com/package/react-theming-engine)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

React Theming Engine is a powerful, type-safe styling system built on a **3-Layer Architecture**:
1. **Brand Palette**: A full 10-step color scale generated from a single hex code.
2. **Semantic Tokens**: Abstract tokens (e.g., `accent`, `ring`, `background`) mapped to palette steps.
3. **CSS Variables**: Real-time injection into the DOM for zero-runtime performance feel.

---

## 🚀 Installation

```bash
npm install react-theming-engine
# or
yarn add react-theming-engine
# or
pnpm add react-theming-engine
```

---

## 🛠️ Quick Start

### 1. Wrap your application

Wrap your root component with the `ThemeProvider`. This manages the theme state, persistence, and CSS variable injection.

```tsx
// main.tsx
import { ThemeProvider } from "react-theming-engine";

createRoot(document.getElementById("root")).render(
  <ThemeProvider defaultThemeName="light" storageKey="my-app-theme">
    <App />
  </ThemeProvider>
);
```

### 2. Access the theme state

Use the `useTheme` hook anywhere in your app to control the interface.

```tsx
import { useTheme } from "react-theming-engine";

function ThemeSwitcher() {
  const { theme, setTheme, toggleColorMode } = useTheme();

  return (
    <div>
      <p>Current Mode: {theme.colorMode}</p>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
      <button onClick={toggleColorMode}>Toggle Light/Dark</button>
    </div>
  );
}
```

---

## ✨ Features

### 🌈 Real-time Theme Overrides
Transform your UI on the fly by overriding specific palette scales or semantic tokens.

```tsx
const { overrideTheme } = useTheme();

const handleUpdatePrimary = (newScale: ColorScale) => {
  overrideTheme({
    palette: { primary: newScale },
    tokens: {
      accent: newScale[600],
      accentHover: newScale[500],
    }
  });
};
```

### 🧩 Type Safety
Enjoy full TypeScript support for your theme configuration, palette steps, and token definitions.

### 🌓 Built-in Mode Management
Seamlessly switch between Light and Dark modes with automatic persistence to `localStorage`.

### 🚀 Zero Runtime Feel
Transitions are handled via CSS variables (`--ring`, `--accent`, etc.), ensuring smooth updates without expensive React re-renders for styles.

---

## 📖 How it Works

1. **Pick Primary**: You provide a single color. We generate a full 10-step scale (50-900) automatically.
2. **Tokens Map**: Semantic tokens like `accent` and `ring` map directly to specific scale steps.
3. **Live Refresh**: CSS variables update in the `:root` or container in real-time. No style flash.

---

## 📄 License

MIT © [Abilash-19](https://github.com/Abilash-19)
