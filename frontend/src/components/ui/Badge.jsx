function Badge({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-[var(--color-primary)]/15 text-[var(--color-primary)]",

    success:
      "bg-[var(--color-success)]/15 text-[var(--color-success)]",

    warning:
      "bg-[var(--color-warning)]/15 text-[var(--color-warning)]",

    danger:
      "bg-[var(--color-danger)]/15 text-[var(--color-danger)]",

    neutral:
      "bg-gray-100 text-[var(--color-muted)]",
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