// Button with three variants:
//   primary  — ink on ivory, used for the most important action
//   ghost    — ink outline, used for secondary actions
//   accent   — brass filled, used for the main CTA on a sub-brand page
// `href` renders an <a>; `to` renders a React Router <Link>; otherwise a <button>.
// All variants include a focus-visible ring.
import { Link } from "react-router";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm md:text-base font-semibold transition-colors duration-150 disabled:opacity-50 disabled:pointer-events-none";

const variantClass = {
  primary: "bg-ink text-ivory hover:bg-ink/85 focus-visible:outline-brass",
  ghost: "border border-ink/20 text-ink hover:bg-ink hover:text-ivory focus-visible:outline-brass",
  accent: "bg-brass text-ivory hover:bg-brass-dark focus-visible:outline-ink",
};

export default function Button({
  children,
  variant = "primary",
  href,
  to,
  className = "",
  ariaLabel,
  ...rest
}) {
  const classes = `${base} ${variantClass[variant] ?? variantClass.primary} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} aria-label={ariaLabel} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} aria-label={ariaLabel} className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" aria-label={ariaLabel} className={classes} {...rest}>
      {children}
    </button>
  );
}
