import RadioCard from "./RadioCard";

function OptionGroup({
  label,
  name,
  value,
  onChange,
  options,
  columns = 3,
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
    </div>
  );
}

export default OptionGroup;