import RadioCard from "./RadioCard";

function OptionGroup({
  label,
  name,
  value,
  onChange,
  options,
  columns = 3,
  error = false,
  helperText = "",
}) {
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
        {options.map((option) => (
          <RadioCard
            key={option.value}
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={(e) => onChange(e.target.value)}
            title={option.title}
            description={option.description}
          />
        ))}
      </div>

      {helperText && (
        <p
          className={`mt-3 text-sm ${
            error
              ? "text-[var(--color-danger)]"
              : "text-[var(--color-muted)]"
          }`}
        >
          {helperText}
        </p>
      )}
    </div>
  );
}

export default OptionGroup;