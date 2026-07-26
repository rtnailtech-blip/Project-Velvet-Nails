function CheckboxGroup({
  label,
  options,
  values,
  onChange,
  columns = 3,
}) {
  const toggleValue = (value) => {
    if (values.includes(value)) {
      onChange(values.filter((item) => item !== value));
    } else {
      onChange([...values, value]);
    }
  };

  return (
    <div>
      {label && (
        <h3 className="mb-5 text-lg font-semibold text-[var(--color-text)]">
          {label}
        </h3>
      )}

      <div
        className={`grid gap-5 ${
          columns === 2
            ? "grid-cols-2"
            : columns === 4
            ? "grid-cols-4"
            : "grid-cols-3"
        }`}
      >
        {options.map((option) => {
          const selected = values.includes(option.value);

          return (
            <button
              type="button"
              key={option.value}
              onClick={() => toggleValue(option.value)}
              className={`
                rounded-2xl
                border
                p-5
                text-left
                transition-all
                duration-300

                ${
                  selected
                    ? "border-[var(--color-primary)] bg-[var(--color-primary-soft)] shadow-[var(--shadow-xs)]"
                    : "border-[var(--color-border)] bg-[var(--color-surface-soft)] hover:border-[var(--color-primary)]"
                }
              `}
            >
              <h4 className="font-semibold text-[var(--color-text)]">
                {option.title}
              </h4>

              <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                {option.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CheckboxGroup;