export function InputDemo() {
  return (
    <div className="card-base p-8">
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold">Override Config</span>
        <div className="badge-accent font-bold text-[0.7rem] uppercase tracking-wider">
          Live Config
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <label className="text-xs font-bold uppercase text-fg-muted tracking-[0.1em]">
          Storage Key
        </label>
        <input
          type="text"
          defaultValue="app-theme"
          className="px-4 py-3.5 bg-bg border-2 border-border text-fg w-full text-[0.95rem] font-medium rounded-lg outline-none transition-all focus:border-accent focus:bg-surface focus:shadow-[0_0_0_4px_color-mix(in_srgb,var(--color-accent)_12%,transparent)]"
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <button className="btn-base btn-primary py-2.5 text-sm">Apply</button>
        <button className="btn-base btn-outline py-2.5 text-sm">Reset Theme</button>
      </div>
    </div>
  );
}
