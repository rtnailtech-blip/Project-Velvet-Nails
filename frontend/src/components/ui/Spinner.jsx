function Spinner({
  size = "md",
  className = "",
  ...props
}) {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-10 h-10",
  };

  return (
    <div
      role="status"
      aria-label="Loading"
      className={`
        ${sizes[size] || sizes.md}
        animate-spin
        rounded-full
        border-4
        border-[var(--color-border)]
        border-t-[var(--color-primary)]
        ${className}
      `}
      {...props}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default Spinner;