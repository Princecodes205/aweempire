// Wordmark — the v1 brand mark until Awk provides an official logo.
// `size` controls the visual scale; `tone` controls light/dark variant
// (e.g. "light" for use on dark surfaces like the ContactBar).
const sizeMap = {
  sm: { word: "text-xl", sub: "text-[8px]" },
  md: { word: "text-2xl", sub: "text-[10px]" },
  lg: { word: "text-4xl", sub: "text-xs" },
  hero: { word: "text-6xl md:text-7xl lg:text-8xl", sub: "text-sm md:text-base" },
};

const toneMap = {
  light: "text-ivory",
  dark: "text-ink",
};

export default function Wordmark({ size = "md", tone = "dark", as: Tag = "span", className = "" }) {
  const s = sizeMap[size] ?? sizeMap.md;
  const t = toneMap[tone] ?? toneMap.dark;

  return (
    <Tag aria-label="Awk Group" className={`inline-flex flex-col items-start leading-none ${className}`.trim()}>
      <span className={`font-display font-medium tracking-tight ${s.word} ${t}`}>Awk</span>
      <span
        className={`mt-1 font-display font-medium uppercase tracking-[0.3em] ${s.sub} text-brass`}
      >
        Group
      </span>
    </Tag>
  );
}
