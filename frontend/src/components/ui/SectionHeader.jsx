function SectionHeader({
  title,
  action,
  className = "",
  ...props
}) {
  return (
    <div
      className={`
        mb-5
        flex
        items-center
        justify-between
        gap-4
        ${className}
      `}
      {...props}
    >
      <h2 className="text-xl font-semibold text-[var(--color-text)]">
        {title}
      </h2>

      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

export default SectionHeader;