// Max-width container with responsive horizontal padding.
export default function Container({ children, className = "", as: Tag = "div" }) {
  return (
    <Tag className={`mx-auto w-full max-w-7xl px-5 md:px-8 ${className}`.trim()}>
      {children}
    </Tag>
  );
}
