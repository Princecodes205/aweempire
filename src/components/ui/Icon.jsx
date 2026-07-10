// Shared icon set. Inline SVG paths so we don't pull a package, stay tree-shakeable,
// and inherit color from `currentColor`. All icons are decorative by default — the
// button text carries meaning, so `aria-hidden="true"` is set unless `title` is passed.
//
// Usage:
//   <Icon name="phone" />                       decorative
//   <Icon name="phone" title="Call us" />       accessible — reads "Call us"

const PATHS = {
  // 24x24 line icons. stroke-based, currentColor, 1.8 stroke width to match Header's old SVG.
  phone:
    <path
      d="M5 4.5h3.2l1.6 3.8-2 1.2a12 12 0 0 0 6.7 6.7l1.2-2 3.8 1.6V19a1.5 1.5 0 0 1-1.6 1.5C9.3 20 4 14.7 3.5 6.1A1.5 1.5 0 0 1 5 4.5z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      fill="none"
    />,
  chat: (
    <>
      <path
        d="M4 5.5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-4 3.5v-3.5H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="9" cy="11" r="1" fill="currentColor" />
      <circle cx="12" cy="11" r="1" fill="currentColor" />
      <circle cx="15" cy="11" r="1" fill="currentColor" />
    </>
  ),
  mail: (
    <>
      <rect
        x="3"
        y="5.5"
        width="18"
        height="13"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
      />
      <path
        d="M3.5 7l8.5 6 8.5-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="none"
      />
    </>
  ),
  menu: (
    <path
      d="M4 7h16M4 12h16M4 17h16"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      fill="none"
    />
  ),
  close: (
    <path
      d="M6 6l12 12M18 6L6 18"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      fill="none"
    />
  ),
  // Bed icon: headboard on the left, pillow, mattress, frame.
  // 24x24 stroked line icon matching the rest of the set.
  bed: (
    <path
      d="M3 18V8m0 10h18M3 14h18v4M7 12h4v2H7v-2zm10 0h4v2h-4v-2zM3 18v-2"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  // Pin icon for property location rows.
  pin: (
    <>
      <path
        d="M12 21s-7-6.2-7-12a7 7 0 1 1 14 0c0 5.8-7 12-7 12z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="12" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.8" fill="none" />
    </>
  ),
  // Solid WhatsApp glyph (lifted from WhatsAppFab) for the FAB. Filled, not stroked.
  "whatsapp-glyph": (
    <path d="M16 .5C7.4.5.5 7.4.5 16c0 2.8.7 5.5 2.1 7.9L.5 31.5l7.7-2c2.3 1.3 5 2 7.8 2 8.6 0 15.5-6.9 15.5-15.5S24.6.5 16 .5zm0 28.3c-2.5 0-4.9-.7-7-1.9l-.5-.3-4.6 1.2 1.2-4.5-.3-.5C3.7 21 3 18.5 3 16 3 8.8 8.8 3 16 3s13 5.8 13 13-5.8 12.8-13 12.8zm7.4-9.6c-.4-.2-2.4-1.2-2.8-1.3-.4-.1-.6-.2-.9.2s-1 1.3-1.3 1.6c-.2.2-.5.3-.9.1-.4-.2-1.7-.6-3.3-2-1.2-1.1-2-2.4-2.3-2.8-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.2 0-.5 0-.7 0-.2-.9-2.1-1.2-2.9-.3-.7-.6-.6-.9-.6h-.7c-.2 0-.6.1-1 .5-.4.4-1.4 1.3-1.4 3.2s1.4 3.7 1.6 4c.2.3 2.8 4.3 6.8 6 1 .4 1.7.7 2.3.8 1 .3 1.8.3 2.5.2.8-.1 2.4-1 2.8-1.9.3-.9.3-1.7.2-1.9-.1-.1-.4-.2-.8-.4z" />
  ),
};

export default function Icon({
  name,
  size = 22,
  className = "",
  title,
}) {
  const path = PATHS[name];
  if (!path) {
    if (import.meta.env.DEV) {
      console.warn(`[Icon] unknown name: ${name}`);
    }
    return null;
  }

  // whatsapp-glyph is a filled 32x32 viewBox path; everything else is 24x24 stroked.
  const viewBox = name === "whatsapp-glyph" ? "0 0 32 32" : "0 0 24 24";

  const ariaProps = title
    ? { role: "img", "aria-label": title }
    : { "aria-hidden": "true" };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={size}
      height={size}
      fill={name === "whatsapp-glyph" ? "currentColor" : "none"}
      className={className}
      {...ariaProps}
    >
      {title ? <title>{title}</title> : null}
      {path}
    </svg>
  );
}
