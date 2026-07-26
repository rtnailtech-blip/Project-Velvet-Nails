import {
  Card,
  OptionGroup,
  CheckboxGroup,
  TextArea,
} from "../../../components/ui";

const nailLengthOptions = [
  {
    value: "very-short",
    title: "Very Short",
    description: "Minimal free edge.",
  },
  {
    value: "short",
    title: "Short",
    description: "Suitable for everyday wear.",
  },
  {
    value: "medium",
    title: "Medium",
    description: "Balanced length.",
  },
  {
    value: "long",
    title: "Long",
    description: "Naturally long nails.",
  },
];

const nailShapeOptions = [
  {
    value: "round",
    title: "Round",
    description: "Soft rounded edges.",
  },
  {
    value: "oval",
    title: "Oval",
    description: "Elegant and natural.",
  },
  {
    value: "square",
    title: "Square",
    description: "Straight edges.",
  },
  {
    value: "squoval",
    title: "Squoval",
    description: "Square with softened corners.",
  },
  {
    value: "almond",
    title: "Almond",
    description: "Tapered elegant shape.",
  },
  {
    value: "coffin",
    title: "Coffin",
    description: "Long tapered square tip.",
  },
];

const strengthOptions = [
  {
    value: "weak",
    title: "Weak",
    description: "Breaks easily.",
  },
  {
    value: "normal",
    title: "Normal",
    description: "Healthy strength.",
  },
  {
    value: "strong",
    title: "Strong",
    description: "Very durable natural nails.",
  },
];

const cuticleOptions = [
  {
    value: "healthy",
    title: "Healthy",
    description: "Well maintained.",
  },
  {
    value: "dry",
    title: "Dry",
    description: "Needs hydration.",
  },
  {
    value: "overgrown",
    title: "Overgrown",
    description: "Requires cuticle care.",
  },
  {
    value: "damaged",
    title: "Damaged",
    description: "Needs gentle treatment.",
  },
];

const concernOptions = [
  {
    value: "peeling",
    title: "Peeling",
    description: "Layers separating.",
  },
  {
    value: "splitting",
    title: "Splitting",
    description: "Nails splitting easily.",
  },
  {
    value: "thin",
    title: "Thin Nails",
    description: "Flexible nail plate.",
  },
  {
    value: "brittle",
    title: "Brittle",
    description: "Dry and fragile.",
  },
  {
    value: "ridges",
    title: "Ridges",
    description: "Visible nail ridges.",
  },
  {
    value: "biting",
    title: "Nail Biting",
    description: "Habitual nail biting.",
  },
  {
    value: "staining",
    title: "Staining",
    description: "Surface discoloration.",
  },
];

function NailAssessmentStep({
  data,
  updateData,
  errors = {},
}) {
  return (
    <Card className="p-10">
      <div className="max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-primary)]">
          Step 3
        </p>

        <h2 className="mt-3 font-['Playfair_Display'] text-4xl font-semibold text-[var(--color-text)]">
          Nail Assessment
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-[var(--color-muted)]">
          Evaluate the natural condition of the client's nails to recommend
          suitable services, products and designs.
        </p>
      </div>

      <div className="mt-10 space-y-10">

        <OptionGroup
          label="Natural Nail Length"
          name="nailLength"
          value={data.nailLength}
          onChange={(value) =>
            updateData("nailLength", value)
          }
          options={nailLengthOptions}
          columns={4}
          error={!!errors.nailLength}
          helperText={errors.nailLength}
        />

        <OptionGroup
          label="Current Nail Shape"
          name="nailShape"
          value={data.nailShape}
          onChange={(value) =>
            updateData("nailShape", value)
          }
          options={nailShapeOptions}
          error={!!errors.nailShape}
          helperText={errors.nailShape}
        />

        <OptionGroup
          label="Nail Strength"
          name="nailStrength"
          value={data.nailStrength}
          onChange={(value) =>
            updateData("nailStrength", value)
          }
          options={strengthOptions}
          error={!!errors.nailStrength}
          helperText={errors.nailStrength}
        />

        <OptionGroup
          label="Cuticle Condition"
          name="cuticleCondition"
          value={data.cuticleCondition}
          onChange={(value) =>
            updateData("cuticleCondition", value)
          }
          options={cuticleOptions}
          columns={4}
          error={!!errors.cuticleCondition}
          helperText={errors.cuticleCondition}
        />

        <CheckboxGroup
          label="Nail Concerns"
          values={data.concerns}
          onChange={(values) =>
            updateData("concerns", values)
          }
          options={concernOptions}
          error={!!errors.concerns}
          helperText={errors.concerns}
        />

        <TextArea
          label="Professional Notes"
          rows={4}
          placeholder="Additional observations..."
          value={data.notes || ""}
          onChange={(e) =>
            updateData("notes", e.target.value)
          }
        />

      </div>
    </Card>
  );
}

export default NailAssessmentStep;