import { useState } from "react";

function LiveCard() {
  return (
    <div className="card-base p-5 gap-3.5">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-accent/15 flex items-center justify-center text-accent font-medium text-xs tracking-wide">
          AB
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-medium text-sm text-fg truncate tracking-wide">Design System</div>
          <div className="text-[0.7rem] text-fg-muted tracking-wide">Updated 2 min ago</div>
        </div>
        <span className="badge-accent text-[0.6rem]">Active</span>
      </div>
      <p className="text-[0.82rem] text-fg-muted leading-relaxed">
        Tokens and variables update in real-time as you switch themes above.
      </p>
      <div className="flex gap-2">
        <button className="btn-base btn-primary text-xs py-1.5 px-3">View</button>
        <button className="btn-base btn-outline text-xs py-1.5 px-3">Share</button>
      </div>
    </div>
  );
}

function LiveForm() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="card-base p-5 gap-3.5">
      <div className="font-medium text-sm text-fg tracking-wide">Settings</div>
      <div className="flex flex-col gap-2.5">
        <input
          type="text"
          placeholder="Search tokens..."
          className="px-3 py-2 bg-bg border border-border text-fg text-xs rounded-md outline-none transition-all tracking-wide focus:border-accent focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--color-accent)_10%,transparent)]"
        />
        <div className="flex items-center justify-between py-0.5">
          <span className="text-xs text-fg-muted tracking-wide">Dark mode sync</span>
          <button
            className={`w-9 h-5 rounded-full transition-all duration-200 relative cursor-pointer border-none ${
              toggle ? "bg-accent" : "bg-border"
            }`}
            onClick={() => setToggle(!toggle)}
          >
            <div
              className={`absolute top-[2px] w-4 h-4 rounded-full bg-white shadow-sm transition-all duration-200 ${
                toggle ? "left-[18px]" : "left-[2px]"
              }`}
            />
          </button>
        </div>
        <div className="flex items-center justify-between py-0.5">
          <span className="text-xs text-fg-muted tracking-wide">Persist to storage</span>
          <button className="w-9 h-5 rounded-full transition-all duration-200 relative cursor-pointer border-none bg-accent">
            <div className="absolute top-[2px] left-[18px] w-4 h-4 rounded-full bg-white shadow-sm" />
          </button>
        </div>
      </div>
      <button className="btn-base btn-primary text-xs py-1.5 w-full">Save Changes</button>
    </div>
  );
}

function LiveNotification() {
  return (
    <div className="card-base p-5 gap-2.5">
      <div className="font-medium text-sm text-fg tracking-wide">Notifications</div>
      {[
        { title: "Theme applied", desc: "Ocean preset loaded", time: "now", unread: true },
        { title: "Scale generated", desc: "10 shades from #3b82f6", time: "2m", unread: true },
        { title: "Config saved", desc: "localStorage updated", time: "5m", unread: false },
      ].map((n, i) => (
        <div
          key={i}
          className={`flex items-start gap-2.5 p-2.5 rounded-lg transition-all ${
            n.unread ? "bg-accent/5 border border-accent/10" : "border border-transparent"
          }`}
        >
          <div
            className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
              n.unread ? "bg-accent" : "bg-border"
            }`}
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-medium text-fg tracking-wide">{n.title}</span>
              <span className="text-[0.6rem] text-fg-subtle shrink-0">{n.time}</span>
            </div>
            <span className="text-[0.7rem] text-fg-muted">{n.desc}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function LiveTokenTable() {
  const tokens = [
    { name: "--color-accent", var: "accent", preview: "bg-accent" },
    { name: "--color-surface", var: "surface", preview: "bg-surface" },
    { name: "--color-border", var: "border", preview: "bg-border" },
    { name: "--color-foreground", var: "foreground", preview: "bg-fg" },
  ];

  return (
    <div className="card-base p-5 gap-2.5">
      <div className="flex items-center justify-between">
        <div className="font-medium text-sm text-fg tracking-wide">Active Tokens</div>
        <span className="badge-accent text-[0.6rem]">Live</span>
      </div>
      <div className="flex flex-col gap-1.5">
        {tokens.map((t) => (
          <div
            key={t.name}
            className="flex items-center gap-2.5 p-2 rounded-md bg-bg/50 border border-border/40"
          >
            <div className={`w-4 h-4 rounded-sm shrink-0 border border-black/5 ${t.preview}`} />
            <code className="text-[0.68rem] font-mono text-fg-muted flex-1 truncate">
              {t.name}
            </code>
            <span className="text-[0.6rem] font-medium text-accent uppercase tracking-wider">{t.var}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LiveComponentsDemo() {
  return (
    <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
      <LiveCard />
      <LiveForm />
      <LiveNotification />
      <LiveTokenTable />
    </div>
  );
}
