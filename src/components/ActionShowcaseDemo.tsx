export function ActionShowcaseDemo() {
  return (
    <div className="card-base border-2 border-border p-6">
      <div className="flex justify-between items-center">
        <span className="text-base font-semibold tracking-tight">Action States</span>
        <span className="badge-accent">Interactive</span>
      </div>
      <p className="text-fg-muted text-sm leading-relaxed">
        Buttons, badges, and secondary actions update instantly from the active
        semantic token set.
      </p>
      <div className="flex flex-wrap gap-2">
        <button className="btn-base btn-primary text-xs py-2 px-3.5">Primary Action</button>
        <button className="btn-base btn-outline text-xs py-2 px-3.5">Secondary Action</button>
        <button className="btn-base bg-accent/10 text-accent border-accent/25 hover:bg-accent/20 text-xs py-2 px-3.5">
          Accent Surface
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {["accent", "surface", "border", "foreground"].map((token) => (
          <span key={token} className="badge-accent">
            {token}
          </span>
        ))}
      </div>
    </div>
  );
}
