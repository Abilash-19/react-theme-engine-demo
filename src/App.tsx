import { useState, useCallback, useEffect } from "react";
import {
  useTheme,
  type ThemeConfig,
  type ColorScale,
} from "react-theming-engine";
import "./App.css";

// ─── SVG Icons (Professional Brand Assets) ───────────────────────────────────

const IconGitHub = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const IconArrowUpRight = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="square"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

// ─── Component Demos ─────────────────────────────────────────────────────────

function CodeSnippet({ title, code }: { title: string; code: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div
      className="code-container"
      style={{ border: "2px solid var(--color-border)" }}
    >
      <div
        className="code-header"
        style={{ borderBottom: "2px solid var(--color-border)" }}
      >
        <span className="code-title">{title}</span>
        <button className="code-copy-btn" onClick={handleCopy}>
          {copied ? "✓ Copied" : "Copy Source"}
        </button>
      </div>
      <pre className="code-block" style={{ fontSize: "0.85rem" }}>
        {code}
      </pre>
    </div>
  );
}

function InputDemo() {
  return (
    <div
      className="card"
      style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span className="card-title" style={{ fontSize: "1.2rem" }}>
          Override Config
        </span>
        <div
          style={{
            padding: "4px 8px",
            background:
              "color-mix(in srgb, var(--color-accent) 15%, transparent)",
            borderRadius: "4px",
            fontSize: "0.7rem",
            fontWeight: 900,
            color: "var(--color-accent)",
          }}
        >
          LIVE CONFIG
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <label
          style={{
            fontSize: "0.75rem",
            fontWeight: 900,
            textTransform: "uppercase",
            color: "var(--color-foreground-muted)",
            letterSpacing: "0.08em",
          }}
        >
          Storage Key
        </label>
        <input type="text" defaultValue="app-theme" className="input-refined" />
      </div>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
      >
        <button className="btn btn-primary" style={{ padding: "0.6rem" }}>
          Apply
        </button>
        <button className="btn btn-outline" style={{ padding: "0.6rem" }}>
          Reset Theme
        </button>
      </div>
    </div>
  );
}

function IntegrationGuide() {
  return (
    <section className="section">
      <div className="section-header">
        <h2 className="section-title">Integration Guide</h2>
        <p className="section-subtitle">
          Use semantic CSS variables in Tailwind CSS or plain CSS without adding
          a runtime styling layer.
        </p>
      </div>
      <div className="grid grid-3 integration-grid">
        <div className="integration-box integration-box-wide">
          <div className="integration-header">
            <span className="integration-type">Required Setup</span>
          </div>
          <CodeSnippet
            title="main.tsx"
            code={`import { ThemeProvider } from "react-theming-engine";

function Root() {
  return (
    <ThemeProvider defaultThemeName="light" storageKey="app-theme">
      <App />
    </ThemeProvider>
  );
}`}
          />
        </div>
        <div className="integration-box">
          <div className="integration-header">
            <span className="integration-type">Tailwind CSS</span>
          </div>
          <CodeSnippet
            title="tailwind.config.js"
            code={`module.exports = {
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        accent: {
          DEFAULT: 'var(--color-accent)',
          foreground: 'var(--color-accent-foreground)',
          hover: 'var(--color-accent-hover)',
        },
        surface: 'var(--color-surface)',
      }
    }
  }
}`}
          />
        </div>
        <div className="integration-box">
          <div className="integration-header">
            <span className="integration-type">Semantic CSS</span>
          </div>
          <CodeSnippet
            title="globals.css"
            code={`.btn-primary {
  background-color: var(--color-accent);
  color: var(--color-accent-foreground);
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-md);
  font-weight: 700;
}

.btn-primary:hover {
  background-color: var(--color-accent-hover);
}`}
          />
        </div>
      </div>
    </section>
  );
}

function TypographyDemo() {
  return (
    <div className="card">
      <div className="typo-showcase">
        <div className="typo-group">
          <span className="typo-tag" style={{ letterSpacing: "0.3em" }}>
            React Library
          </span>
          <h1
            className="typo-display"
            style={{ fontWeight: 900, letterSpacing: "-0.05em" }}
          >
            Theme Engine
          </h1>
        </div>
        <div className="typo-group">
          <span className="typo-tag" style={{ letterSpacing: "0.3em" }}>
            Documentation
          </span>
          <p className="typo-lead" style={{ letterSpacing: "0.04em" }}>
            Production-ready dynamic theming for React design systems.
          </p>
        </div>
      </div>
    </div>
  );
}

function ActionShowcaseDemo() {
  return (
    <div className="card" style={{ border: "2px solid var(--color-border)" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span className="card-title">Action States</span>
        <span className="trend-indicator">Interactive</span>
      </div>
      <p className="typo-muted" style={{ fontSize: "0.95rem" }}>
        Buttons, badges, and secondary actions update instantly from the active
        semantic token set.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.85rem" }}>
        <button className="btn btn-primary">Primary Action</button>
        <button className="btn btn-outline">Secondary Action</button>
        <button
          className="btn btn-outline"
          style={{
            background:
              "color-mix(in srgb, var(--color-accent) 10%, transparent)",
            color: "var(--color-accent)",
            borderColor:
              "color-mix(in srgb, var(--color-accent) 25%, var(--color-border))",
          }}
        >
          Accent Surface
        </button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
        {["accent", "surface", "border", "foreground"].map((token) => (
          <span
            key={token}
            className="trend-indicator"
            style={{ fontWeight: 800 }}
          >
            {token}
          </span>
        ))}
      </div>
    </div>
  );
}

function ThemeScaleDemo({ theme }: { theme: ThemeConfig }) {
  const shadeSteps = [50, 100, 200, 300, 400, 500] as const;

  return (
    <div className="card" style={{ border: "2px solid var(--color-border)" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span className="card-title">Primary Shades</span>
        <span className="trend-indicator">Live Scale</span>
      </div>
      <p className="typo-muted" style={{ fontSize: "0.95rem" }}>
        Generated shades respond to the active theme playground and show how one
        brand color expands into a usable scale.
      </p>
      <div className="shade-showcase">
        {shadeSteps.map((step) => (
          <div key={step} className="shade-swatch-card">
            <div
              className="shade-swatch-block"
              style={{ background: theme.palette.primary[step] }}
            />
            <div className="shade-swatch-label">{step}</div>
            <div className="shade-swatch-hex">
              {theme.palette.primary[step]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectStatsDemo() {
  const stats = [
    {
      label: "Brand Scale",
      value: "10",
      trend: "Shades 50-900",
      featured: true,
    },
    {
      label: "Architecture",
      value: "3",
      trend: "Palette -> Tokens -> CSS",
      featured: false,
    },
    {
      label: "Runtime Cost",
      value: "0",
      trend: "No CSS-in-JS invalidation",
      featured: false,
    },
    {
      label: "Persistence",
      value: "Yes",
      trend: "Works with localStorage",
      featured: false,
    },
  ];

  return (
    <div className="project-grid">
      {stats.map((s, i) => (
        <div
          key={i}
          className={`project-card ${s.featured ? "featured" : ""}`}
          style={{
            border: s.featured ? "none" : "2px solid var(--color-border)",
          }}
        >
          <div className="project-card-header">
            <span className="project-label">{s.label}</span>
            <div className="project-icon-btn">
              <IconArrowUpRight />
            </div>
          </div>
          <div className="project-value">{s.value}</div>
          <div className="project-footer">
            <span className="trend-indicator">{s.trend}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Main App ───────────────────────────────────────────────────────────────

export default function App() {
  const { theme, setTheme, toggleColorMode, overrideTheme, resetTheme } =
    useTheme();
  const [activePrimaryScale, setActivePrimaryScale] =
    useState<ColorScale | null>(null);

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
    [overrideTheme],
  );

  const handlePrimaryPreset = useCallback(
    (scale: ColorScale) => {
      setActivePrimaryScale(scale);
      applyPrimaryOverride(scale);
    },
    [applyPrimaryOverride],
  );

  const handleCustomPrimaryHex = useCallback(
    (hex: string) => {
      const scale = generateScaleFromHex(hex);
      handlePrimaryPreset(scale);
    },
    [handlePrimaryPreset],
  );

  useEffect(() => {
    if (activePrimaryScale) applyPrimaryOverride(activePrimaryScale);
  }, [theme.colorMode, activePrimaryScale, applyPrimaryOverride]);

  const [copied, setCopied] = useState(false);
  const copyInstall = () => {
    navigator.clipboard.writeText("npm i react-theming-engine");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const THEMES = [
    { name: "light", icon: "⚪", label: "Light" },
    { name: "dark", icon: "⚫", label: "Dark" },
    { name: "ocean", icon: "🔵", label: "Ocean" },
    { name: "sunset", icon: "🟧", label: "Sunset" },
    { name: "forest", icon: "🟢", label: "Forest" },
    { name: "violet", icon: "🟣", label: "Violet" },
    { name: "earth", icon: "🟤", label: "Earth" },
  ];

  return (
    <div className="app" data-theme={theme.name}>
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-stack">
            <div className="hero-brand">
              <h1 className="hero-title">react-theming-engine</h1>
            </div>
            <div className="hero-badge-wrap">
              <a
                href="https://www.linkedin.com/in/abilash-s-84608a23a/"
                target="_blank"
                rel="noreferrer"
                className="badge-dev"
              >
                Developed by Abilash
              </a>
            </div>
            <p className="hero-desc">
              A production-ready infrastructure for dynamic theming in React.
              Generate a brand palette from one primary color, map it to
              semantic tokens, and publish CSS variables across your UI.
            </p>
            <div className="hero-feature-list">
              {[
                { label: "50-900 Scale", icon: "◌" },
                { label: "Semantic Tokens", icon: "◍" },
                { label: "Zero Runtime", icon: "⚡" },
                { label: "Persisted State", icon: "◈" },
              ].map((item) => (
                <div key={item.label} className="hero-feature-item">
                  <span className="hero-feature-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            <div className="hero-cta-group">
              <a
                href="https://github.com/Abilash-19/react-theming-engine"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline hero-link"
              >
                <IconGitHub /> GitHub repo
              </a>
              <button
                className={`btn btn-outline hero-install-btn ${copied ? "copied" : ""}`}
                onClick={copyInstall}
              >
                {copied ? "Copied" : "npm i react-theming-engine"}
              </button>
            </div>
          </div>
          <div className="hero-picker-container">
            <div className="picker-header">
              <div className="picker-heading">
                <span className="picker-label">Theme Playground</span>
                <span className="picker-subtitle">
                  Switch presets or generate a new primary scale instantly.
                </span>
              </div>
              <button
                className="reset-link"
                onClick={() => {
                  setActivePrimaryScale(null);
                  resetTheme();
                }}
              >
                Reset Theme
              </button>
            </div>
            <PrimaryColorChanger
              theme={theme}
              onSelectPreset={handlePrimaryPreset}
              onCustomColor={handleCustomPrimaryHex}
            />
          </div>
        </div>
      </header>

      <nav className="theme-bar">
        <div className="theme-bar-inner">
          <div className="theme-selector">
            {THEMES.map((t) => (
              <button
                key={t.name}
                className={`theme-btn ${theme.name === t.name ? "active" : ""}`}
                onClick={() => {
                  setActivePrimaryScale(null);
                  setTheme(t.name);
                }}
              >
                <span className="theme-btn-icon">
                  {theme.name === t.name ? "✨" : t.icon}
                </span>{" "}
                {t.label}
              </button>
            ))}
          </div>
          <button className="btn btn-outline btn-sm" onClick={toggleColorMode}>
            {theme.colorMode === "dark" ? "Switch to light" : "Switch to dark"}
          </button>
        </div>
      </nav>

      <main className="content">
        <section className="section">
          <div className="section-header">
            <h2 className="section-title">Theme Playground</h2>
            <p className="section-subtitle">
              Preview how semantic tokens and CSS variables react to theme
              changes in real time.
            </p>
          </div>
          <ProjectStatsDemo />
          <div className="grid grid-3" style={{ marginTop: "2rem" }}>
            <div
              className="card"
              style={{
                padding: "1.25rem",
                border: "2px solid var(--color-border)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {[
                  "Brand Palette",
                  "Accent Tokens",
                  "Surface States",
                  "CSS Variables",
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`nav-item-refined ${i === 0 ? "active" : ""}`}
                    style={{
                      padding: "1rem 1.5rem",
                      borderRadius: "1px",
                      fontWeight: 700,
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <InputDemo />
            <div
              className="card"
              style={{
                border: "2px solid var(--color-border)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                padding: "2.5rem",
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>
                CSS
              </div>
              <div className="card-title">Runtime Output</div>
              <p className="typo-muted" style={{ fontSize: "0.9rem" }}>
                Semantic tokens are injected as standard CSS variables for the
                whole application.
              </p>
            </div>
          </div>
          <div
            className="grid grid-2 playground-extended-grid"
            style={{ marginTop: "2rem" }}
          >
            <ActionShowcaseDemo />
            <ThemeScaleDemo theme={theme} />
          </div>
        </section>

        <IntegrationGuide />

        <section className="section">
          <h2 className="section-title" style={{ marginBottom: "2.5rem" }}>
            Token Preview
          </h2>
          <div className="grid grid-2">
            <TypographyDemo />
            <div
              className="card"
              style={{ border: "2px solid var(--color-border)" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "2rem",
                }}
              >
                <span className="card-title" style={{ fontWeight: 900 }}>
                  Primary Scale
                </span>
                <span className="trend-indicator" style={{ fontWeight: 900 }}>
                  50 {"->"} 900
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  height: "140px",
                  alignItems: "flex-end",
                }}
              >
                {[20, 50, 40, 85, 60, 75, 100].map((v, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      background: "var(--color-accent)",
                      opacity: 0.15 + i * 0.14,
                      height: `${v}%`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title" style={{ marginBottom: "2.5rem" }}>
            Theme Snapshot
          </h2>
          <CodeSnippet
            title="release-v1.4.0.json"
            code={JSON.stringify(
              {
                version: "1.4.0",
                engine: "react-theming-engine",
                tokens: theme.tokens,
                primary: theme.palette.primary,
              },
              null,
              2,
            )}
          />
        </section>
      </main>

      <footer className="footer-refined">
        <div className="footer-top">
          <div className="footer-col brand">
            <div className="footer-brand-title">react-theming-engine</div>
            <p className="footer-tagline">
              Production-ready dynamic theming for React. Generate a palette,
              map semantic tokens, and ship CSS variables at scale.
            </p>
            <div className="footer-socials">
              <a
                href="https://github.com/Abilash-19/react-theming-engine"
                target="_blank"
                rel="noreferrer"
              >
                <IconGitHub />
              </a>
              <a
                href="https://www.linkedin.com/in/abilash-s-84608a23a/"
                target="_blank"
                rel="noreferrer"
              >
                <IconLinkedIn />
              </a>
            </div>
          </div>
          <div className="footer-col">
            <div className="footer-label">Ecosystem</div>
            <a
              href="https://github.com/Abilash-19/react-theming-engine"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              Engine Core
            </a>
            <a
              href="https://www.npmjs.com/package/react-theming-engine"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              NPM Registry
            </a>
            <a
              href="https://github.com/Abilash-19/react-theme-engine-demo"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              Demo Repository
            </a>
          </div>
          <div className="footer-col">
            <div className="footer-label">Developer</div>
            <a
              href="https://www.linkedin.com/in/abilash-s-84608a23a/"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              LinkedIn Profile
            </a>
            <a
              href="https://github.com/Abilash-19"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              GitHub Portfolio
            </a>
            <div style={{ marginTop: "1rem" }}>
              <button
                className="btn btn-primary btn-sm"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/abilash-s-84608a23a/",
                    "_blank",
                  )
                }
              >
                Get in touch
              </button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2026 Abilash. Built for the open source community.
          </div>
          <div className="footer-legal">
            Semantic Tokens • CSS Variables • Production Ready
          </div>
        </div>
      </footer>
    </div>
  );
}

function PrimaryColorChanger({
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
    <div className="primary-changer">
      <div className="preset-grid-modern">
        {PRIMARY_PRESETS.map((p) => {
          const isActive =
            theme.palette.primary[500].toLowerCase() ===
            p.scale[500].toLowerCase();
          return (
            <button
              key={p.label}
              className={`preset-modern-btn ${isActive ? "active" : ""}`}
              onClick={() => onSelectPreset(p.scale)}
              style={{ "--preset-color": p.scale[500] } as React.CSSProperties}
            >
              <div className="preset-shimmer" />
            </button>
          );
        })}
      </div>
      <div className="custom-picker-area">
        <div className="picker-row-refined">
          <div className="picker-visual">
            <input
              type="color"
              className="custom-picker-input"
              value={customHex}
              onChange={(e) => {
                onCustomColor(e.target.value);
              }}
            />
            <div
              className="picker-preview"
              style={{
                background: customHex,
                boxShadow: `0 0 20px color-mix(in srgb, ${customHex} 40%, transparent)`,
              }}
            />
          </div>
          <div className="picker-details">
            <div className="picker-hex-label">Primary Color</div>
            <div className="picker-hex-val">{customHex.toUpperCase()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function hexToHsl(hex: string): [number, number, number] {
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

function hslToHex(h: number, s: number, l: number): string {
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

function generateScaleFromHex(hex: string): ColorScale {
  const [h, s] = hexToHsl(hex);
  const lightnesses = [95, 90, 82, 72, 60, 48, 40, 33, 26, 18];
  const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;
  const scale: Record<number, string> = {};
  steps.forEach((step, i) => {
    scale[step] = hslToHex(h, Math.min(s * 1.1, 100), lightnesses[i]);
  });
  return scale as unknown as ColorScale;
}

const PRIMARY_PRESETS = [
  { label: "Crimson", scale: generateScaleFromHex("#e11d48") },
  { label: "Stellar", scale: generateScaleFromHex("#3b82f6") },
  { label: "Jade", scale: generateScaleFromHex("#10b981") },
  { label: "Amber", scale: generateScaleFromHex("#f59e0b") },
  { label: "Cyan", scale: generateScaleFromHex("#06b6d4") },
  { label: "Violet", scale: generateScaleFromHex("#8b5cf6") },
];
