function RadioCard({
  name,
  value,
  checked,
  onChange,
  title,
  description,
}) {
  return (
    <label
      className={`
        group
        cursor-pointer
        rounded-3xl
        border
        p-5
        transition-all
        duration-300

        ${
          checked
            ? "border-[var(--color-primary)] bg-[var(--color-primary-soft)] shadow-[var(--shadow-sm)]"
            : "border-[var(--color-border)] bg-[var(--color-surface-soft)] hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-xs)]"
        }
      `}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="hidden"
      />

      <div className="flex items-start justify-between">

        <div>
          <h3 className="font-semibold text-[var(--color-text)]">
            {title}
          </h3>

          {description && (
            <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
              {description}
            </p>
          )}
        </div>

        <div
          className={`
            flex
            h-6
            w-6
            items-center
            justify-center
            rounded-full
            border-2
            transition-all

            ${
              checked
                ? "border-[var(--color-primary)]"
                : "border-[var(--color-border)]"
            }
          `}
        >
          <div
            className={`
              h-3
              w-3
              rounded-full
              transition-all

              ${
                checked
                  ? "bg-[var(--color-primary)]"
                  : "bg-transparent"
              }
            `}
          />
        </div>

      </div>
    </label>
  );
}

export default RadioCard;