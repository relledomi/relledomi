const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Twitter", href: "#" },
];

export default function Footer() {
  return (
    <footer
      className="border-t border-border"
      style={{ padding: "40px var(--spacing-side)" }}
    >
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-baseline gap-2">
          <span className="font-[family-name:var(--font-display)] text-base text-kanga">
            RELLEDOMI
          </span>
          <span className="font-[family-name:var(--font-mono)] text-[8px] tracking-[0.12em] text-muted uppercase">
            ENTERTAINMENT
          </span>
        </div>

        {/* Social links */}
        <div className="flex gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-[family-name:var(--font-mono)] text-[11px] text-muted transition-colors duration-200 hover:text-sub no-underline"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-end gap-1">
          <span className="font-[family-name:var(--font-mono)] text-[10px] text-muted">
            &copy; 2026 Relledomi Entertainment LLC
          </span>
          <span className="font-[family-name:var(--font-mono)] text-[9px] text-dim">
            Nairobi, KE &times; Providence, US
          </span>
        </div>
      </div>
    </footer>
  );
}
