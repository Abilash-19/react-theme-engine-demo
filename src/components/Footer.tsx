import { IconGitHub, IconLinkedIn } from "./icons";

export function Footer() {
  return (
    <footer className="bg-surface border-t-2 border-border pt-16 pb-12 px-6">
      {/* Top Section */}
      <div className="max-w-300 mx-auto grid grid-cols-[2fr_1fr_1.5fr] gap-12 mb-16 max-lg:grid-cols-2 max-lg:gap-8 max-md:grid-cols-1">
        {/* Brand Column */}
        <div className="max-lg:col-span-2 max-md:col-span-1">
          <div className="text-xl font-bold tracking-tight mb-3">
            react-theming-engine
          </div>
          <p className="text-fg-muted text-sm max-w-[360px] leading-relaxed mb-6">
            Production-ready dynamic theming for React. Generate a palette, map
            semantic tokens, and ship CSS variables at scale.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/Abilash-19/react-theming-engine"
              target="_blank"
              rel="noreferrer"
              className="text-fg-muted transition-all hover:text-accent hover:-translate-y-0.5"
            >
              <IconGitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/abilash-s-84608a23a/"
              target="_blank"
              rel="noreferrer"
              className="text-fg-muted transition-all hover:text-accent hover:-translate-y-0.5"
            >
              <IconLinkedIn />
            </a>
          </div>
        </div>

        {/* Ecosystem Column */}
        <div>
          <div className="font-medium uppercase text-[0.68rem] tracking-[0.12em] text-fg-subtle mb-4">
            Ecosystem
          </div>
          <a
            href="https://github.com/Abilash-19/react-theming-engine"
            target="_blank"
            rel="noreferrer"
            className="block text-fg-muted no-underline text-sm font-medium mb-3 tracking-wide transition-all hover:text-accent hover:pl-1"
          >
            Engine Core
          </a>
          <a
            href="https://www.npmjs.com/package/react-theming-engine"
            target="_blank"
            rel="noreferrer"
            className="block text-fg-muted no-underline text-sm font-medium mb-3 tracking-wide transition-all hover:text-accent hover:pl-1"
          >
            NPM Registry
          </a>
          <a
            href="https://github.com/Abilash-19/react-theme-engine-demo"
            target="_blank"
            rel="noreferrer"
            className="block text-fg-muted no-underline text-sm font-medium mb-3 tracking-wide transition-all hover:text-accent hover:pl-1"
          >
            Demo Repository
          </a>
        </div>

        {/* Developer Column */}
        <div>
          <div className="font-medium uppercase text-[0.68rem] tracking-[0.12em] text-fg-subtle mb-4">
            Developer
          </div>
          <a
            href="https://www.linkedin.com/in/abilash-s-84608a23a/"
            target="_blank"
            rel="noreferrer"
            className="block text-fg-muted no-underline text-sm font-medium mb-3 tracking-wide transition-all hover:text-accent hover:pl-1"
          >
            LinkedIn Profile
          </a>
          <a
            href="https://github.com/Abilash-19"
            target="_blank"
            rel="noreferrer"
            className="block text-fg-muted no-underline text-sm font-medium mb-3 tracking-wide transition-all hover:text-accent hover:pl-1"
          >
            GitHub Portfolio
          </a>
          <div className="mt-4">
            <button
              className="btn-base btn-primary text-xs py-2 px-4"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/abilash-s-84608a23a/",
                  "_blank"
                )
              }
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-300 mx-auto pt-8 border-t-2 border-border-subtle flex justify-between items-center max-md:flex-col max-md:text-center max-md:gap-4">
        <div className="text-xs font-medium text-fg-muted tracking-wide">
          &copy; 2026 Abilash. Built for the open source community.
        </div>
        <div className="text-[0.68rem] font-medium text-fg-subtle uppercase tracking-wider">
          Semantic Tokens &bull; CSS Variables &bull; Production Ready
        </div>
      </div>
    </footer>
  );
}
