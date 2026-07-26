import {
  Card,
  OptionGroup,
  CheckboxGroup,
  TextArea,
} from "../../../components/ui";

const occupationOptions = [
  {
    value: "student",
    title: "Student",
    description: "School, college or university.",
  },
  {
    value: "office",
    title: "Office Professional",
    description: "Desk or corporate work.",
  },
  {
    value: "healthcare",
    title: "Healthcare",
    description: "Medical or clinical profession.",
  },
  {
    value: "beauty",
    title: "Beauty Industry",
    description: "Salon or beauty professional.",
  },
  {
    value: "homemaker",
    title: "Homemaker",
    description: "Household management.",
  },
  {
    value: "other",
    title: "Other",
    description: "Any other occupation.",
  },
];

const handUsageOptions = [
  {
    value: "light",
    title: "Light",
    description: "Minimal manual work.",
  },
  {
    value: "moderate",
    title: "Moderate",
    description: "Regular daily usage.",
  },
  {
    value: "heavy",
    title: "Heavy",
    description: "Frequent intensive hand usage.",
  },
];

const maintenanceOptions = [
  {
    value: "weekly",
    title: "Weekly",
    description: "Frequent maintenance.",
  },
  {
    value: "2weeks",
    title: "Every 2 Weeks",
    description: "Ideal salon schedule.",
  },
  {
    value: "3weeks",
    title: "Every 3 Weeks",
    description: "Extended maintenance.",
  },
  {
    value: "monthly",
    title: "Monthly",
    description: "Minimal salon visits.",
  },
];

const preferredLengthOptions = [
  {
    value: "short",
    title: "Short",
    description: "Practical everyday nails.",
  },
  {
    value: "medium",
    title: "Medium",
    description: "Balanced elegance.",
  },
  {
    value: "long",
    title: "Long",
    description: "Statement nails.",
  },
];

const previousServiceOptions = [
  {
    value: "none",
    title: "Never Had Nails Done",
    description: "First professional service.",
  },
  {
    value: "gel-polish",
    title: "Gel Polish",
    description: "Previous gel polish.",
  },
  {
    value: "builder-gel",
    title: "Builder Gel",
    description: "Strengthening overlays.",
  },
  {
    value: "acrylic",
    title: "Acrylic",
    description: "Traditional acrylic enhancements.",
  },
  {
    value: "extensions",
    title: "Gel Extensions",
    description: "Extension services.",
  },
  {
    value: "press-ons",
    title: "Press-ons",
    description: "Temporary nail sets.",
  },
];

function LifestyleStep({
  data,
  updateData,
}) {
  return (
    <Card className="p-10">

      <div className="max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-primary)]">
          Step 4
        </p>

        <h2 className="mt-3 font-['Playfair_Display'] text-4xl font-semibold text-[var(--color-text)]">
          Lifestyle Assessment
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-[var(--color-muted)]">
          Understanding your client's lifestyle helps recommend nail services
          that are both beautiful and practical for everyday life.
        </p>
      </div>

      <div className="mt-10 space-y-10">

        <OptionGroup
          label="Occupation"
          name="occupation"
          value={data.occupation}
          onChange={(value) =>
            updateData("occupation", value)
          }
          options={occupationOptions}
        />

        <OptionGroup
          label="Daily Hand Usage"
          name="handUsage"
          value={data.handUsage}
          onChange={(value) =>
            updateData("handUsage", value)
          }
          options={handUsageOptions}
        />

        <OptionGroup
          label="Maintenance Preference"
          name="maintenance"
          value={data.maintenance}
          onChange={(value) =>
            updateData("maintenance", value)
          }
          options={maintenanceOptions}
          columns={4}
        />

        <OptionGroup
          label="Preferred Nail Length"
          name="preferredLength"
          value={data.preferredLength}
          onChange={(value) =>
            updateData("preferredLength", value)
          }
          options={preferredLengthOptions}
        />

        <CheckboxGroup
          label="Previous Nail Services"
          values={data.previousServices}
          onChange={(values) =>
            updateData("previousServices", values)
          }
          options={previousServiceOptions}
        />

        <TextArea
          label="Allergies or Sensitivities"
          rows={4}
          value={data.notes || ""}
          placeholder="Products, allergies or anything important to note..."
          onChange={(e) =>
            updateData("notes", e.target.value)
          }
        />

      </div>

    </Card>
  );
}

export default LifestyleStep;