function EmptyState({
  title,
  description,
  action,
  className = "",
  ...props
}) {
  return (
    <div
      className={`
        flex
        flex-col
        items-center
        justify-center
        rounded-3xl
        border
        border-dashed
        border-[var(--color-border)]
        bg-[var(--color-surface)]
        p-12
        text-center
        ${className}
      `}
      {...props}
    >
      <h3 className="text-xl font-semibold text-[var(--color-text)]">
        {title}
      </h3>

      {description && (
        <p className="mt-3 max-w-md text-[var(--color-muted)]">
          {description}
        </p>
      )}

      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}

export default EmptyState;