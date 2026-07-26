import { Card } from ".";

function StatCard({
  title,
  value,
  subtitle,
  trend,
  icon,
  className = "",
}) {
  return (
    <Card
      interactive
      className={`
        group
        flex
        items-start
        justify-between
        ${className}
      `}
    >
      <div className="flex-1">

        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
          {title}
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight text-[var(--color-text)]">
          {value}
        </h2>

        {(trend || subtitle) && (
          <div className="mt-5 flex flex-wrap items-center gap-3">

            {trend && (
              <span className="rounded-full bg-[var(--color-primary-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-accent)]">
                ↑ {trend}
              </span>
            )}

            {subtitle && (
              <span className="text-sm text-[var(--color-muted)]">
                {subtitle}
              </span>
            )}

          </div>
        )}

      </div>

      {icon && (
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-[var(--color-primary-soft)]
            text-[var(--color-accent)]
            transition-all
            duration-300
            group-hover:scale-105
          "
        >
          {icon}
        </div>
      )}
    </Card>
  );
}

export default StatCard;