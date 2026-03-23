import { useState, useCallback } from "react";
import {
  useTheme,
  type ThemeConfig,
  type ColorScale,
} from "react-theming-engine";
import "./App.css";

// ─── Component Demos ─────────────────────────────────────────────────────────

function NotificationDemo() {
  return (
    <div className="card notification-card">
      <div className="notification-header">
        <div className="notification-icon">🔔</div>
        <div className="notification-body">
          <div className="notification-title">System Update</div>
          <div className="notification-msg">A new version is available for your project.</div>
        </div>
      </div>
      <div className="notification-actions">
        <button className="btn btn-primary btn-sm">Update Now</button>
        <button className="btn btn-outline btn-sm">Later</button>
      </div>
    </div>
  );
}

function StatsCard() {
  return (
    <div className="card stats-card">
      <div className="card-header">
        <span className="card-title">Weekly Revenue</span>
      </div>
      <div className="stats-value">$12.4k</div>
      <div className="stats-trend positive">↑ 14.5% vs last week</div>
      <div className="mini-chart">
        {[40, 60, 45, 90, 70, 85, 95].map((val, i) => (
          <div
            key={i}
            className="mini-bar"
            style={{ height: `${val}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function NavigationMenu() {
  return (
    <div className="card nav-menu">
      <div className="nav-item active">🏠 Dashboard</div>
      <div className="nav-item">📈 Analytics</div>
      <div className="nav-item">👤 Profile</div>
      <div className="nav-item">⚙️ Settings</div>
      <div className="nav-divider" />
      <div className="nav-item danger">🚪 Logout</div>
    </div>
  );
}

function PricingCard() {
  return (
    <div className="card pricing-card">
      <div className="pricing-tag">Most Popular</div>
      <div className="card-header">
        <span className="card-title">Pro Plan</span>
      </div>
      <div className="pricing-price">
        $29<span className="pricing-period">/mo</span>
      </div>
      <ul className="pricing-features">
        <li>✓ Unlimited Projects</li>
        <li>✓ Custom Domains</li>
        <li>✓ Advanced Analytics</li>
      </ul>
      <button className="btn btn-primary" style={{ width: "100%", marginTop: "1rem" }}>
        Get Started
      </button>
    </div>
  );
}

function ProfileCard() {
  return (
    <div className="card profile-card">
      <div className="profile-header">
        <div className="profile-avatar">AD</div>
        <div>
          <div className="profile-name">Alex Designer</div>
          <div className="profile-role">UI/UX Engineer</div>
        </div>
      </div>
      <div className="profile-stats">
        <div className="p-stat"><strong>12</strong><span>Projects</span></div>
        <div className="p-stat"><strong>2.4k</strong><span>Followers</span></div>
      </div>
      <button className="btn btn-outline btn-sm" style={{ width: "100%", marginTop: "1rem" }}>
        View Portfolio
      </button>
    </div>
  );
}

function StepsDemo() {
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-title">Setup Progress</span>
      </div>
      <div className="steps">
        <div className="step active">
          <div className="step-circle">1</div>
          <div className="step-line" />
        </div>
        <div className="step active">
          <div className="step-circle">2</div>
          <div className="step-line" />
        </div>
        <div className="step">
          <div className="step-circle">3</div>
        </div>
      </div>
      <div className="typo-subtle" style={{ marginTop: "1rem", textAlign: "center" }}>
        Step 2 of 3: Configure Theme
      </div>
    </div>
  );
}

function StatusBanners() {
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-icon">🚦</span>
        <span className="card-title">Status Banners</span>
      </div>
      <div className="banner banner-success">✅ Completed successfully</div>
      <div className="banner banner-warning">⚠️ Needs attention</div>
      <div className="banner banner-error">❌ Connection failed</div>
      <div className="banner banner-info">ℹ️ Update available</div>
    </div>
  );
}

function InputDemo() {
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-icon">📝</span>
        <span className="card-title">Inputs & Focus</span>
      </div>
      <div className="input-group">
        <input className="input" placeholder="Name..." />
        <input className="input" placeholder="Email..." />
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button className="btn btn-primary" style={{ flex: 1 }}>
            Submit
          </button>
          <button className="btn btn-outline" style={{ flex: 1 }}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

function TypographyDemo() {
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-icon">🔤</span>
        <span className="card-title">Typography</span>
      </div>
      <div className="typo-h1">Heading One</div>
      <div className="typo-h2">Heading Two</div>
      <div className="typo-body">Body text using foreground-muted.</div>
      <div className="typo-subtle">Subtle supporting text.</div>
      <div className="typo-accent" style={{ marginTop: "0.4rem" }}>
        Accent-colored interactive →
      </div>
    </div>
  );
}

function ShapeDemo({ theme }: { theme: ThemeConfig }) {
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-icon">🔲</span>
        <span className="card-title">Border Radius</span>
      </div>
      <div className="radius-row">
        {Object.entries(theme.shape).map(([key, value]) => {
          const label = key.replace("radius", "").toLowerCase() || key;
          return (
            <div className="radius-item" key={key}>
              <div className="radius-box" style={{ borderRadius: value }} />
              <span className="radius-name">{label}</span>
              <span className="radius-name">{value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Theme Data ─────────────────────────────────────────────────────────────

const THEMES: { name: string; label: string; icon: string; dot: string }[] = [
  { name: "light", label: "Light", icon: "☀️", dot: "#ec4899" },
  { name: "dark", label: "Dark", icon: "🌙", dot: "#6366f1" },
  { name: "ocean", label: "Ocean", icon: "🌊", dot: "#38bdf8" },
  { name: "sunset", label: "Sunset", icon: "🌅", dot: "#f97316" },
  { name: "forest", label: "Forest", icon: "🌲", dot: "#34d399" },
  { name: "violet", label: "Violet", icon: "🔮", dot: "#c084fc" },
  { name: "earth", label: "Earth", icon: "☕", dot: "#a67c52" },
  { name: "glass", label: "Glassy", icon: "💎", dot: "#ffffff" },
];

const PRIMARY_PRESETS: { label: string; scale: ColorScale }[] = [
  {
    label: "Pink",
    scale: {
      50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4",
      400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d",
      800: "#9d174d", 900: "#831843",
    },
  },
  {
    label: "Indigo",
    scale: {
      50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc",
      400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca",
      800: "#3730a3", 900: "#312e81",
    },
  },
  {
    label: "Brown",
    scale: {
       50: "#fdf8f6", 100: "#f2e8e5", 200: "#eaddd7", 300: "#e0c1b3",
       400: "#d3a28a", 500: "#c78361", 600: "#a67c52", 700: "#8b5e3c",
       800: "#704d32", 900: "#5c3f2b",
    },
  },
  {
    label: "Emerald",
    scale: {
      50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7",
      400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857",
      800: "#065f46", 900: "#064e3b",
    },
  },
  {
    label: "Orange",
    scale: {
      50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74",
      400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c",
      800: "#9a3412", 900: "#7c2d12",
    },
  },
  {
    label: "Teal",
    scale: {
      50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4",
      400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e",
      800: "#115e59", 900: "#134e4a",
    },
  },
];

const SCALE_STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

// ─── Helpers ─────────────────────────────────────────────────────────────────

function hexToHsl(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return [0, 0, l * 100];
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h = 0;
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
  else if (max === g) h = ((b - r) / d + 2) / 6;
  else h = ((r - g) / d + 4) / 6;
  return [h * 360, s * 100, l * 100];
}

function hslToHex(h: number, s: number, l: number): string {
  s /= 100; l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, "0");
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

// ─── Main App ───────────────────────────────────────────────────────────────

export default function App() {
  const { theme, setTheme, toggleColorMode, overrideTheme, resetTheme } = useTheme();

  const handlePrimaryPreset = useCallback(
    (scale: ColorScale) => {
      overrideTheme({
        palette: { primary: scale },
        tokens: {
          accent: scale[600],
          accentHover: scale[500],
          accentForeground: "#ffffff",
          ring: scale[600],
        },
      });
    },
    [overrideTheme],
  );

  const handleCustomPrimaryHex = useCallback(
    (hex: string) => {
      const scale = generateScaleFromHex(hex);
      handlePrimaryPreset(scale);
    },
    [handlePrimaryPreset],
  );

  const handleReset = useCallback(() => {
    resetTheme();
  }, [resetTheme]);

  const handleRandomize = useCallback(() => {
    const randomHex = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
    handleCustomPrimaryHex(randomHex);
    const otherThemes = THEMES.filter((t) => t.name !== theme.name);
    const randomTheme = otherThemes[Math.floor(Math.random() * otherThemes.length)];
    setTheme(randomTheme.name);
  }, [handleCustomPrimaryHex, setTheme, theme.name]);

  return (
    <div className="app">
      {/* Hero */}
      <div className="hero minimal interaction-hero">
        <div className="hero-inner split-layout">
          <div className="hero-left">
            <div className="hero-brand">
              <div className="hero-logo">🎨</div>
              <div>
                <h1 className="hero-title">React Theming Engine</h1>
                <span className="hero-version">v0.1.0 • {theme.colorMode} mode</span>
              </div>
            </div>
            <p className="hero-desc">
              The ultimate theming engine for React. One primary color is all it takes to transform your entire design system instantly.
            </p>
            <div className="hero-badges">
              <span className="badge">3-Layer Arch</span>
              <span className="badge">Zero Runtime</span>
              <span className="badge">Type Safe</span>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-picker-container">
              <div className="picker-label">Configure Primary Color</div>
              <PrimaryColorChanger
                theme={theme}
                onSelectPreset={handlePrimaryPreset}
                onCustomColor={handleCustomPrimaryHex}
                onReset={handleReset}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Theme Bar */}
      <div className="theme-bar">
        <div className="theme-bar-inner">
          <div className="theme-selector">
            {THEMES.map((t) => (
              <button
                key={t.name}
                className={`theme-btn ${theme.name === t.name ? "active" : ""}`}
                onClick={() => setTheme(t.name)}
              >
                <span className="theme-btn-dot" style={{ backgroundColor: t.dot }} />
                {t.icon} {t.label}
              </button>
            ))}
          </div>
          <div className="theme-actions">
            <button className="btn btn-primary btn-sm" onClick={toggleColorMode}>
              ⇄ Toggle Mode
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="content">
        <div className="section instructions-section">
          <SectionHeader icon="📖" title="How it Works" />
          <div className="grid grid-3">
            <div className="instruction-card">
              <div className="ins-num">1</div>
              <h3>Pick Primary</h3>
              <p>Select a preset or choose a custom color. We generate a full 10-step scale automatically.</p>
            </div>
            <div className="instruction-card">
              <div className="ins-num">2</div>
              <h3>Tokens Map</h3>
              <p>Semantic tokens like <code>accent</code> and <code>ring</code> map directly to specific scale steps.</p>
            </div>
            <div className="instruction-card">
              <div className="ins-num">3</div>
              <h3>Live Refresh</h3>
              <p>CSS variables update in real-time. No re-renders, no flash of unstyled content.</p>
            </div>
          </div>
        </div>

        <div className="section landing-showcase">
          <SectionHeader icon="🚀" title="Premium Showcase" />
          <div className="grid grid-3">
            <PricingCard />
            <ProfileCard />
            <NotificationDemo />
          </div>
        </div>

        <div className="section landing-showcase">
          <SectionHeader icon="✨" title="Live Widgets" />
          <div className="grid grid-3">
            <StatsCard />
            <StepsDemo />
            <NavigationMenu />
          </div>
        </div>

        <div className="section">
          <SectionHeader icon="🧩" title="Base Elements" />
          <div className="grid grid-3">
            <StatusBanners />
            <InputDemo />
            <TypographyDemo />
          </div>
        </div>

        <div className="section">
          <SectionHeader icon="⚙️" title="Border Radius" />
          <ShapeDemo theme={theme} />
        </div>

        <div className="section">
          <SectionHeader icon="📋" title="Theme Config (JSON)" />
          <pre className="code-block">
            {JSON.stringify({
              name: theme.name,
              colorMode: theme.colorMode,
              tokens: theme.tokens,
              shape: theme.shape,
            }, null, 2)}
          </pre>
        </div>
      </div>

      {/* Floating Controls */}
      <div className="floating-controls">
        <button className="fab fab-primary" onClick={handleRandomize} title="Surprise Me!">✨</button>
        <div className="pill-switcher">
          {THEMES.map((t) => (
            <button
              key={t.name}
              className={`pill-btn ${theme.name === t.name ? "active" : ""}`}
              onClick={() => setTheme(t.name)}
              title={t.label}
            >{t.icon}</button>
          ))}
          <div className="pill-divider" />
          <button className="pill-btn" onClick={toggleColorMode} title="Toggle Mode">🌓</button>
        </div>
      </div>

      <footer className="footer">
        <strong>react-theming-engine</strong> — Brand Palette → Semantic Tokens → CSS Variables
      </footer>
    </div>
  );
}

// ─── Sub-Components ──────────────────────────────────────────────────────────

function PrimaryColorChanger({ theme, onSelectPreset, onCustomColor, onReset }: any) {
  const [customHex, setCustomHex] = useState(theme.palette.primary[500]);
  return (
    <div className="primary-changer">
      <div className="primary-changer-presets">
        <div className="primary-changer-label">Quick Presets</div>
        <div className="preset-grid">
          {PRIMARY_PRESETS.map((preset) => (
            <button key={preset.label} className="preset-btn" onClick={() => onSelectPreset(preset.scale)}>
              <div className="preset-swatch-row">
                {([300, 400, 500, 600, 700] as const).map((step) => (
                  <div key={step} className="preset-mini-swatch" style={{ backgroundColor: preset.scale[step] }} />
                ))}
              </div>
              <span className="preset-name">{preset.label}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="primary-changer-custom">
        <div className="primary-changer-label">Custom Color</div>
        <div className="custom-picker-row">
          <input type="color" className="custom-picker-input" value={customHex} onChange={(e) => {
            setCustomHex(e.target.value);
            onCustomColor(e.target.value);
          }} />
          <span className="custom-picker-hex">{customHex}</span>
          <div className="custom-picker-preview">
            {SCALE_STEPS.map((step) => (
              <div key={step} className="custom-preview-swatch" style={{ backgroundColor: theme.palette.primary[step] }} />
            ))}
          </div>
          <button className="btn btn-outline btn-sm" onClick={onReset}>↺ Reset</button>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ icon, title }: any) {
  return (
    <div className="section-header">
      <div className="section-icon">{icon}</div>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}
