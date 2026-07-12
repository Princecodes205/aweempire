// Motion transition presets and variants for the brand's "subtle,
// editorial" feel. Used by the primitives in `./primitives.jsx`.
//
// Tuning notes:
//   - Duration 0.5–0.7s for entrances, 0.35–0.5s for exits.
//   - Easing: cubic-bezier(0.16, 1, 0.3, 1) ("ease-out-expo") for
//     entrances — fast start, gentle settle. Matches the editorial
//     tone without feeling sluggish.
//   - Y-translate 16–24px for reveals, 8–12px for page transitions.
//   - Stagger 70ms — readable as a sequence, not a flicker.
//   - Spring stiffness 320, damping 22 for hovers — responsive but
//     not bouncy.
export const easeOutExpo = [0.16, 1, 0.3, 1];

// Reveal: single element fades up into place.
export const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

// Stagger container: orchestrates the timing of its children.
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

// Stagger child: each child fades up in turn. No springs here — a
// tween with the same ease as fadeUpVariants reads as one continuous
// motion.
export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOutExpo },
  },
};

// Page transition: cross-fade with a small Y translate. Used by
// AnimatePresence in Layout.jsx. Exit is shorter than enter so the
// next page appears to push the previous one out.
export const pageVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

export const pageTransition = {
  duration: 0.4,
  ease: easeOutExpo,
};
