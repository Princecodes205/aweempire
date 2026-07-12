// Motion primitives — shared building blocks for scroll reveals, stagger,
// and hover lifts. All primitives honor `prefers-reduced-motion` via
// Framer Motion's `useReducedMotion()` — when set, animations collapse
// to instant (opacity 1, transform 0, no transition).
//
// Used by:
//   - Layout.jsx                 → page transitions
//   - Hero, Story, Philosophy... → section-level reveals
//   - InteriorSubsections, AgroGallery → image tile stagger
//   - CTAs, card components      → HoverLift
//
// "Subtle, editorial" motion: short durations (0.5–0.7s), small Y
// translates (16–24px), gentle stagger (60–80ms), gentle springs for
// hover. No bounce, no overshoot, no parallax. Matches the Fraunces
// serif / Inter body editorial tone of the brand.
import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import {
  fadeUpVariants,
  containerVariants,
  itemVariants,
  pageVariants,
  pageTransition,
} from "./transitions.js";

// Reveal: a single element that fades up when it scrolls into view.
// `as` controls the rendered tag (default `div`); `amount` is the
// fraction of the element that must be visible to trigger (0.2 = 20%).
export function Reveal({
  children,
  as = "div",
  amount = 0.3,
  delay = 0,
  className,
  ...rest
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={fadeUpVariants}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

// Stagger: a parent that fades up its children in sequence when it
// enters view. Each child should be a motion.* element with
// `variants={itemVariants}` (or compatible).
export function Stagger({ children, as = "div", amount = 0.1, className, ...rest }) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={containerVariants}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

// StaggerChild: a child element that participates in a parent Stagger.
// Inherits the parent's `hidden` → `visible` variant cycle.
export function StaggerChild({ children, as = "div", className, ...rest }) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag variants={itemVariants} className={className} {...rest}>
      {children}
    </MotionTag>
  );
}

// HoverLift: small scale + Y lift on hover, slight press on tap.
// `intensity` is one of "subtle" (1.02 / -2px, default), "medium"
// (1.04 / -4px), or "lift" (1.06 / -6px). Use `subtle` for CTAs and
// small cards, `medium` for hero card grids, `lift` for property
// listings.
export function HoverLift({ children, intensity = "subtle", className, ...rest }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className} {...rest}>{children}</div>;

  const scales = { subtle: 1.02, medium: 1.04, lift: 1.06 };
  const yOffsets = { subtle: -2, medium: -4, lift: -6 };

  return (
    <motion.div
      whileHover={{ y: yOffsets[intensity], scale: scales[intensity] }}
      whileTap={{ scale: scales[intensity] * 0.97 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

// PageTransition: soft cross-fade + small Y translate between route
// changes. Drop one of these in Layout as the Outlet wrapper.
export function PageTransition({ children, className }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
