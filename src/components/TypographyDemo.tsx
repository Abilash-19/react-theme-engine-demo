export function TypographyDemo() {
  return (
    <div className="card-base p-7">
      <div className="flex flex-col gap-8 p-1">
        <div className="flex flex-col gap-1.5">
          <span className="text-[0.65rem] font-medium uppercase text-accent tracking-[0.2em] opacity-70">
            React Library
          </span>
          <h1 className="text-[3rem] font-bold tracking-[-0.03em] leading-[0.95] max-md:text-4xl">
            Theme Engine
          </h1>
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="text-[0.65rem] font-medium uppercase text-accent tracking-[0.2em] opacity-70">
            Documentation
          </span>
          <p className="text-[1.35rem] font-medium text-fg leading-snug tracking-[-0.01em]">
            Production-ready dynamic theming for React design systems.
          </p>
        </div>
      </div>
    </div>
  );
}
