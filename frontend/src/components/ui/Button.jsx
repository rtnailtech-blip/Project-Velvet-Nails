function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const baseClasses =
    "rounded-xl px-5 py-3 font-medium transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60";

  const variants = {
    primary:
      "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]",

    secondary:
      "border border-[var(--color-border)] bg-white text-[var(--color-text)] hover:bg-[#F8F6F5]",

    danger:
      "bg-[var(--color-danger)] text-white hover:opacity-90",
  };

  return (
    <button
      className={`${baseClasses} ${
        variants[variant] || variants.primary
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;