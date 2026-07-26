function Badge({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
  primary: "bg-[var(--color-primary)]/15 text-[var(--color-primary)]",

  success: "bg-green-100 text-green-700",

  warning: "bg-yellow-100 text-yellow-700",

  danger: "bg-red-100 text-red-700",

  neutral: "bg-gray-100 text-[var(--color-muted)]",
};

  return (
    <span
      className={`
        inline-flex
        items-center
        justify-center
        rounded-full
        px-3
        py-1
        text-xs
        font-medium
        whitespace-nowrap
        ${variants[variant] || variants.primary}
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  );
}

export default Badge;