function ProgressStepper({
  steps,
  currentStep,
}) {
  return (
    <div
      className="
        rounded-[28px]
        border
        border-[var(--color-border)]
        bg-[var(--color-surface)]
        px-8
        py-7
        shadow-[var(--shadow-sm)]
      "
    >
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const completed = index < currentStep;
          const active = index === currentStep;

          return (
            <div
              key={step}
              className="flex flex-1 items-center"
            >
              <div className="flex flex-col items-center">

                <div
                  className={`
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    text-sm
                    font-semibold
                    transition-all
                    duration-300

                    ${
                      completed
                        ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                        : active
                        ? "border-[var(--color-primary)] bg-[var(--color-primary-soft)] text-[var(--color-accent)]"
                        : "border-[var(--color-border)] bg-[var(--color-surface-soft)] text-[var(--color-muted)]"
                    }
                  `}
                >
                  {index + 1}
                </div>

                <p
                  className={`
                    mt-3
                    text-sm
                    text-center
                    transition-colors
                    duration-300

                    ${
                      active
                        ? "font-semibold text-[var(--color-heading)]"
                        : completed
                        ? "font-medium text-[var(--color-text)]"
                        : "text-[var(--color-muted)]"
                    }
                  `}
                >
                  {step}
                </p>

              </div>

              {index !== steps.length - 1 && (
                <div
                  className={`
                    mx-4
                    mb-8
                    h-[2px]
                    flex-1
                    rounded-full
                    transition-all
                    duration-300

                    ${
                      completed
                        ? "bg-[var(--color-primary)]"
                        : "bg-[var(--color-border)]"
                    }
                  `}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProgressStepper;