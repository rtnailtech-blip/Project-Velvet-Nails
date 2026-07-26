function Input({
  id,
  label,
  type = "text",
  error = false,
  helperText = "",
  className = "",
  ...props
}) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium text-[var(--color-text)]"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        type={type}
        className={`
          rounded-xl
          border
          bg-[var(--color-surface)]
          px-4
          py-3
          outline-none
          transition-all
          duration-300

          ${
            error
              ? "border-[var(--color-danger)] ring-2 ring-[var(--color-danger)]/10"
              : "border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]"
          }

          ${className}
        `}
        {...props}
      />

      {helperText && (
        <p
          className={`
            text-sm
            ${
              error
                ? "text-[var(--color-danger)]"
                : "text-[var(--color-muted)]"
            }
          `}
        >
          {helperText}
        </p>
      )}
    </div>
  );
}

export default Input;