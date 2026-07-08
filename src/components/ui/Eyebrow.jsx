// Uppercase brass eyebrow label used above section titles.
// Uses tracking-[0.25em] for that wide, premium feel.
export default function Eyebrow({ children, className = "" }) {
  return (
    <span
      className={`inline-block font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.25em] text-brass ${className}`.trim()}
    >
      {children}
    </span>
  );
}
