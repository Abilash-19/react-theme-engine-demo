import { IconArrowUpRight } from "./icons";

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
    trend: "Palette \u2192 Tokens \u2192 CSS",
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

export function ProjectStatsDemo() {
  return (
    <div className="grid grid-cols-4 gap-4 mt-4 max-lg:grid-cols-2 max-md:grid-cols-1">
      {stats.map((s, i) => (
        <div
          key={i}
          className={`p-5 rounded-2xl flex flex-col justify-between min-h-[170px] relative transition-all duration-300 ease-in-out hover:-translate-y-1 ${
            s.featured
              ? "bg-[linear-gradient(135deg,var(--color-accent),color-mix(in_srgb,var(--color-accent)_75%,black))] text-accent-fg shadow-[0_8px_32px_color-mix(in_srgb,var(--color-accent)_30%,transparent)] hover:shadow-[0_16px_48px_color-mix(in_srgb,var(--color-accent)_40%,transparent)]"
              : "card-base hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
          }`}
          style={s.featured ? { padding: '1.25rem' } : {}}
        >
          <div className="flex justify-between items-start">
            <span className={`text-sm font-medium tracking-wide ${s.featured ? "opacity-90" : "opacity-65"}`}>
              {s.label}
            </span>
            <div
              className={`w-8 h-8 rounded-full border flex items-center justify-center ${
                s.featured
                  ? "bg-white/15 border-white/25 text-white"
                  : "bg-surface border-border text-fg"
              }`}
            >
              <IconArrowUpRight />
            </div>
          </div>
          <div className="text-[2.75rem] font-bold leading-none my-2 tracking-tight">
            {s.value}
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`px-2 py-0.5 rounded text-[0.68rem] font-medium tracking-wide ${
                s.featured
                  ? "bg-white/15 text-white"
                  : "badge-accent"
              }`}
            >
              {s.trend}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
