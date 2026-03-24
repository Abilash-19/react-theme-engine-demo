import { useState } from "react";

export function CodeSnippet({ title, code }: { title: string; code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-border/70 overflow-hidden bg-bg/95 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border/60 bg-bg/80">
        <span className="font-mono text-[0.72rem] font-medium text-fg-muted tracking-wide">
          {title}
        </span>
        <button
          className="px-2.5 py-1 text-[0.65rem] font-medium rounded-md border border-border bg-surface text-fg-muted hover:bg-accent hover:text-accent-fg hover:border-accent transition-all cursor-pointer tracking-wide"
          onClick={handleCopy}
        >
          {copied ? "\u2713 Copied" : "Copy Source"}
        </button>
      </div>
      <pre className="p-4 font-mono text-[0.78rem] leading-6 text-fg overflow-auto whitespace-pre-wrap break-all">
        {code}
      </pre>
    </div>
  );
}
