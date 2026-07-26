import PageHeader from "../../../components/ui/PageHeader";
import ProgressStepper from "./ProgressStepper";
import StepNavigation from "./StepNavigation";

function ConsultationLayout({
  steps,
  currentStep,
  children,
  onNext,
  onBack,
}) {
  return (
    <div className="space-y-8">

      <PageHeader
        title="Consultation"
        subtitle="Guide every client through a personalized luxury consultation."
      />

      <ProgressStepper
        steps={steps}
        currentStep={currentStep}
      />

      {children}

      <StepNavigation
        currentStep={currentStep}
        totalSteps={steps.length}
        onNext={onNext}
        onBack={onBack}
      />

    </div>
  );
}

export default ConsultationLayout;