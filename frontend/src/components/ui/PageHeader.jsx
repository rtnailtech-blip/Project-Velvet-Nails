function PageHeader({
  title,
  subtitle,
  action,
  className = "",
  ...props
}) {
  return (
    <div
      className={`
        mb-8
        flex
        items-center
        justify-between
        gap-6
        ${className}
      `}
      {...props}
    >
      <div>
        <h1 className="font-['Playfair_Display'] text-4xl font-semibold text-[var(--color-text)]">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-2 text-[var(--color-muted)]">
            {subtitle}
          </p>
        )}
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

export default PageHeader;