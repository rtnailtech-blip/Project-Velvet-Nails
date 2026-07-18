function TextArea({
  id,
  label,
  rows = 4,
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

      <textarea
        id={id}
        rows={rows}
        className={`
          rounded-xl
          border
          border-[var(--color-border)]
          bg-[var(--color-surface)]
          px-4
          py-3
          outline-none
          resize-none
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

export default TextArea;