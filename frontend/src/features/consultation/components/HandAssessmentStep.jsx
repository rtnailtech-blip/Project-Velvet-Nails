import {
  Card,
  OptionGroup,
  TextArea,
} from "../../../components/ui";

const handSizeOptions = [
  {
    value: "small",
    title: "Small",
    description: "Delicate and petite hands.",
  },
  {
    value: "medium",
    title: "Medium",
    description: "Balanced proportions.",
  },
  {
    value: "large",
    title: "Large",
    description: "Broader hand proportions.",
  },
];

const fingerLengthOptions = [
  {
    value: "short",
    title: "Short",
    description: "Compact finger length.",
  },
  {
    value: "medium",
    title: "Medium",
    description: "Average proportions.",
  },
  {
    value: "long",
    title: "Long",
    description: "Elegant elongated fingers.",
  },
];

const skinToneOptions = [
  {
    value: "fair",
    title: "Fair",
    description: "Very light complexion.",
  },
  {
    value: "light",
    title: "Light",
    description: "Light skin tone.",
  },
  {
    value: "medium",
    title: "Medium",
    description: "Balanced complexion.",
  },
  {
    value: "tan",
    title: "Tan",
    description: "Warm tan complexion.",
  },
  {
    value: "deep",
    title: "Deep",
    description: "Rich deep complexion.",
  },
];

const undertoneOptions = [
  {
    value: "cool",
    title: "Cool",
    description: "Pink or blue undertones.",
  },
  {
    value: "neutral",
    title: "Neutral",
    description: "Balanced undertones.",
  },
  {
    value: "warm",
    title: "Warm",
    description: "Golden or olive undertones.",
  },
];

const handConditionOptions = [
  {
    value: "smooth",
    title: "Smooth",
    description: "Healthy hydrated skin.",
  },
  {
    value: "dry",
    title: "Dry",
    description: "Needs additional moisture.",
  },
  {
    value: "mature",
    title: "Mature",
    description: "Visible signs of ageing.",
  },
  {
    value: "sensitive",
    title: "Sensitive",
    description: "Requires gentle products.",
  },
];

function HandAssessmentStep({
  data,
  updateData,
  errors = {},
}) {
  return (
    <Card className="p-10">
      <div className="max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-primary)]">
          Step 2
        </p>

        <h2 className="mt-3 font-['Playfair_Display'] text-4xl font-semibold text-[var(--color-text)]">
          Hand Assessment
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-[var(--color-muted)]">
          Assess the client's hand proportions, complexion and skin
          condition to help determine flattering nail shapes, lengths
          and colour recommendations.
        </p>
      </div>

      <div className="mt-10 space-y-10">

        <OptionGroup
          label="Hand Size"
          name="handSize"
          value={data.handSize}
          onChange={(value) =>
            updateData("handSize", value)
          }
          options={handSizeOptions}
          error={!!errors.handSize}
          helperText={errors.handSize}
        />

        <OptionGroup
          label="Finger Length"
          name="fingerLength"
          value={data.fingerLength}
          onChange={(value) =>
            updateData("fingerLength", value)
          }
          options={fingerLengthOptions}
          error={!!errors.fingerLength}
          helperText={errors.fingerLength}
        />

        <OptionGroup
          label="Skin Tone"
          name="skinTone"
          value={data.skinTone}
          onChange={(value) =>
            updateData("skinTone", value)
          }
          options={skinToneOptions}
          columns={5}
          error={!!errors.skinTone}
          helperText={errors.skinTone}
        />

        <OptionGroup
          label="Undertone"
          name="undertone"
          value={data.undertone}
          onChange={(value) =>
            updateData("undertone", value)
          }
          options={undertoneOptions}
          error={!!errors.undertone}
          helperText={errors.undertone}
        />

        <OptionGroup
          label="Hand Condition"
          name="handCondition"
          value={data.handCondition}
          onChange={(value) =>
            updateData("handCondition", value)
          }
          options={handConditionOptions}
          columns={4}
          error={!!errors.handCondition}
          helperText={errors.handCondition}
        />

        <TextArea
          label="Additional Observations"
          rows={4}
          placeholder="Add any observations that may influence recommendations..."
          value={data.notes || ""}
          onChange={(e) =>
            updateData("notes", e.target.value)
          }
        />

      </div>
    </Card>
  );
}

export default HandAssessmentStep;