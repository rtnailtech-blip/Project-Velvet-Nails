import { Card } from ".";

function StatCard({
  title,
  value,
  subtitle,
  icon,
  className = "",
  ...props
}) {
  return (
    <Card
      className={`flex items-start justify-between ${className}`}
      {...props}
    >
      <div>
        <p className="text-sm text-[var(--color-muted)]">
          {title}
        </p>

        <h2 className="mt-2 text-3xl font-bold text-[var(--color-text)]">
          {value}
        </h2>

        {subtitle && (
          <p className="mt-2 text-sm text-[var(--color-muted)]">
            {subtitle}
          </p>
        )}
      </div>

      {icon && (
        <div className="rounded-2xl bg-[var(--color-primary)]/15 p-3 text-[var(--color-primary)]">
          {icon}
        </div>
      )}
    </Card>
  );
}

export default StatCard;