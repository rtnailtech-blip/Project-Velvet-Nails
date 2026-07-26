import { Button } from "../../../components/ui";

function StepNavigation({
  currentStep,
  totalSteps,
  onNext,
  onBack,
}) {
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === totalSteps - 1;

  return (
    <div
      className="
        flex
        items-center
        justify-between
        rounded-[28px]
        border
        border-[var(--color-border)]
        bg-[var(--color-surface)]
        px-8
        py-5
        shadow-[var(--shadow-sm)]
      "
    >
      <Button
        variant="secondary"
        onClick={onBack}
        disabled={isFirstStep}
      >
        Back
      </Button>

      <div className="text-sm font-medium text-[var(--color-muted)]">
        Step {currentStep + 1} of {totalSteps}
      </div>

      <Button
        onClick={onNext}
      >
        {isLastStep ? "Finish Consultation" : "Next"}
      </Button>
    </div>
  );
}

export default StepNavigation;