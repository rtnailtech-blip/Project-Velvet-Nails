function Input({
  id,
  label,
  type = "text",
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
          border-[var(--color-border)]
          bg-[var(--color-surface)]
          px-4
          py-3
          outline-none
          transition-all
          focus:border-[var(--color-primary)]
          focus:ring-2
          focus:ring-[var(--color-primary)]
          ${className}
        `}
        {...props}
      />
    </div>
  );
}

export default Input;