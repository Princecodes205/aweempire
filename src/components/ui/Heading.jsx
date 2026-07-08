// Fraunces display heading with size + accent variants.
// `as` controls the semantic tag (h1, h2, h3); size controls the visual scale.
const sizeMap = {
  display: "text-5xl md:text-6xl lg:text-7xl leading-[1.05]",
  xl: "text-4xl md:text-5xl lg:text-6xl leading-[1.08]",
  lg: "text-3xl md:text-4xl lg:text-5xl leading-[1.12]",
  md: "text-2xl md:text-3xl leading-[1.2]",
  sm: "text-xl md:text-2xl leading-[1.25]",
};

export default function Heading({
  children,
  as: Tag = "h2",
  size = "lg",
  className = "",
  accent,
}) {
  const sizeClass = sizeMap[size] ?? sizeMap.lg;
  const accentClass = accent
    ? accent === "interior"
      ? "text-interior"
      : accent === "immigration"
        ? "text-immigration"
        : accent === "agro"
          ? "text-agro"
          : "text-ink"
    : "text-ink";

  return (
    <Tag className={`font-display font-medium tracking-tight ${sizeClass} ${accentClass} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
