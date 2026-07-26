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

  const [errors, setErrors] = useState({});

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

    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const validateCurrentStep = () => {
    const newErrors = {};

    // Step 1: Client Details
    if (currentStep === 0) {
      if (!consultationData.client.fullName?.trim()) {
        newErrors.fullName = "Full name is required";
      }

      const phone = consultationData.client.phone?.trim();

      if (!phone) {
        newErrors.phone = "Phone number is required";
      } else if (!/^\d{10}$/.test(phone)) {
        newErrors.phone = "Phone number must be exactly 10 digits";
      }

      if (!consultationData.client.clientType) {
        newErrors.clientType = "Please select client type";
      }
    }

    // Step 2: Hand Assessment
    if (currentStep === 1) {
      if (!consultationData.handAssessment.handSize) {
        newErrors.handSize = "Please select hand size";
      }

      if (!consultationData.handAssessment.fingerLength) {
        newErrors.fingerLength = "Please select finger length";
      }

      if (!consultationData.handAssessment.skinTone) {
        newErrors.skinTone = "Please select skin tone";
      }

      if (!consultationData.handAssessment.undertone) {
        newErrors.undertone = "Please select undertone";
      }

      if (!consultationData.handAssessment.handCondition) {
        newErrors.handCondition = "Please select hand condition";
      }
    }

    // Step 3: Nail Assessment
    if (currentStep === 2) {
      if (!consultationData.nailAssessment.nailLength) {
        newErrors.nailLength = "Please select nail length";
      }

      if (!consultationData.nailAssessment.nailShape) {
        newErrors.nailShape = "Please select nail shape";
      }

      if (!consultationData.nailAssessment.nailStrength) {
        newErrors.nailStrength = "Please select nail strength";
      }

      if (!consultationData.nailAssessment.cuticleCondition) {
        newErrors.cuticleCondition =
          "Please select cuticle condition";
      }

      if (
        !consultationData.nailAssessment.concerns ||
        consultationData.nailAssessment.concerns.length === 0
      ) {
        newErrors.concerns =
          "Please select at least one nail concern";
      }
    }

    // Step 4: Lifestyle Validation
    if (currentStep === 3) {
      if (!consultationData.lifestyle.occupation) {
        newErrors.occupation = "Please select occupation";
      }

      if (!consultationData.lifestyle.handUsage) {
        newErrors.handUsage = "Please select daily hand usage";
      }

      if (!consultationData.lifestyle.maintenance) {
        newErrors.maintenance = "Please select maintenance preference";
      }

      if (!consultationData.lifestyle.preferredLength) {
        newErrors.preferredLength = "Please select preferred nail length";
      }
    }

    // Step 5: Occasion Validation
    if (currentStep === 4) {
      if (!consultationData.occasion.occasion) {
        newErrors.occasion = "Please select occasion";
      }

      if (!consultationData.occasion.style) {
        newErrors.style = "Please select style preference";
      }

      if (!consultationData.occasion.finish) {
        newErrors.finish = "Please select preferred finish";
      }

      if (!consultationData.occasion.artLevel) {
        newErrors.artLevel = "Please select nail art level";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    const isValid = validateCurrentStep();

    if (!isValid) return;

    setCurrentStep((prev) =>
      Math.min(prev + 1, steps.length - 1)
    );
  };

  const previousStep = () => {
    setErrors({});

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
          errors={errors}
          updateData={(field, value) =>
            updateSection("client", field, value)
          }
        />
      )}

      {currentStep === 1 && (
        <HandAssessmentStep
          data={consultationData.handAssessment}
          errors={errors}
          updateData={(field, value) =>
            updateSection("handAssessment", field, value)
          }
        />
      )}

      {currentStep === 2 && (
        <NailAssessmentStep
          data={consultationData.nailAssessment}
          errors={errors}
          updateData={(field, value) =>
            updateSection("nailAssessment", field, value)
          }
        />
      )}

      {currentStep === 3 && (
        <LifestyleStep
          data={consultationData.lifestyle}
          errors={errors}
          updateData={(field, value) =>
            updateSection("lifestyle", field, value)
          }
        />
      )}

      {currentStep === 4 && (
        <OccasionStep
          data={consultationData.occasion}
          errors={errors}
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