import { useState } from "react";

import ClientDetailsStep from "./components/ClientDetailsStep";
import HandAssessmentStep from "./components/HandAssessmentStep";
import NailAssessmentStep from "./components/NailAssessmentStep";
import ConsultationLayout from "./components/ConsultationLayout";
import LifestyleStep from "./components/LifestyleStep";
import OccasionStep from "./components/OccasionStep";
import SummaryStep from "./components/SummaryStep";
import { initialConsultationData } from "./consultationData";

const steps = [
  "Client Details",
  "Hand Assessment",
  "Nail Assessment",
  "Lifestyle",
  "Occasion",
  "Summary",
];

function ConsultationPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const [consultationData, setConsultationData] =
    useState(initialConsultationData);

  const updateSection = (section, field, value) => {
    setConsultationData((prev) => ({
      ...prev,

      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const nextStep = () => {
    setCurrentStep((prev) =>
      Math.min(prev + 1, steps.length - 1)
    );
  };

  const previousStep = () => {
    setCurrentStep((prev) =>
      Math.max(prev - 1, 0)
    );
  };

  return (
    <ConsultationLayout
      steps={steps}
      currentStep={currentStep}
      onNext={nextStep}
      onBack={previousStep}
    >
      {currentStep === 0 && (
        <ClientDetailsStep
          data={consultationData.client}
          updateData={(field, value) =>
            updateSection("client", field, value)
          }
        />
      )}

      {currentStep === 1 && (
        <HandAssessmentStep
          data={consultationData.handAssessment}
          updateData={(field, value) =>
            updateSection("handAssessment", field, value)
          }
        />
      )}

      {currentStep === 2 && (
        <NailAssessmentStep
          data={consultationData.nailAssessment}
          updateData={(field, value) =>
            updateSection("nailAssessment", field, value)
          }
        />
      )}

      {currentStep === 3 && (
        <LifestyleStep
          data={consultationData.lifestyle}
          updateData={(field, value) =>
            updateSection("lifestyle", field, value)
          }
        />
      )}

      {currentStep === 4 && (
        <OccasionStep
          data={consultationData.occasion}
          updateData={(field, value) =>
            updateSection("occasion", field, value)
          }
        />
      )}

      {currentStep === 5 && (
        <SummaryStep
          consultationData={consultationData}
        />
      )}

    </ConsultationLayout>
  );
}

export default ConsultationPage;