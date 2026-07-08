// Vertical-rhythm section wrapper. Accent prop lightly tints the section
// background without overwhelming the ivory base.
export default function Section({ children, accent = "none", className = "", id }) {
  const bgClass =
    accent === "interior"
      ? "bg-interior/5"
      : accent === "immigration"
        ? "bg-immigration/5"
        : accent === "agro"
          ? "bg-agro/5"
          : "bg-ivory";

  return (
    <section id={id} className={`${bgClass} py-16 md:py-24 ${className}`.trim()}>
      {children}
    </section>
  );
}
