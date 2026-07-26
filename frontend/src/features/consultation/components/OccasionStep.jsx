import {
  Card,
  OptionGroup,
  CheckboxGroup,
  TextArea,
} from "../../../components/ui";

const occasionOptions = [
  {
    value: "everyday",
    title: "Everyday",
    description: "Comfortable daily wear.",
  },
  {
    value: "office",
    title: "Office",
    description: "Professional appearance.",
  },
  {
    value: "bridal",
    title: "Wedding",
    description: "Bridal or engagement.",
  },
  {
    value: "party",
    title: "Party",
    description: "Special celebration.",
  },
  {
    value: "vacation",
    title: "Vacation",
    description: "Holiday nails.",
  },
  {
    value: "festival",
    title: "Festival",
    description: "Seasonal celebrations.",
  },
];

const styleOptions = [
  {
    value: "minimal",
    title: "Minimal",
    description: "Clean and subtle.",
  },
  {
    value: "elegant",
    title: "Elegant",
    description: "Timeless luxury.",
  },
  {
    value: "luxury",
    title: "Luxury",
    description: "Premium sophisticated.",
  },
  {
    value: "glam",
    title: "Glamorous",
    description: "Bold statement.",
  },
  {
    value: "cute",
    title: "Cute",
    description: "Soft playful.",
  },
  {
    value: "trendy",
    title: "Trendy",
    description: "Latest styles.",
  },
];

const colourOptions = [
  { value: "nude", title: "Nude", description: "Natural shades." },
  { value: "pink", title: "Pink", description: "Soft blush tones." },
  { value: "white", title: "White", description: "Classic white." },
  { value: "red", title: "Red", description: "Bold reds." },
  { value: "brown", title: "Brown", description: "Earthy tones." },
  { value: "black", title: "Black", description: "Elegant dark shades." },
  { value: "gold", title: "Gold", description: "Luxury metallic." },
  { value: "silver", title: "Silver", description: "Cool metallic." },
  { value: "pastel", title: "Pastels", description: "Soft colours." },
  { value: "bright", title: "Bright", description: "Vibrant colours." },
];

const finishOptions = [
  {
    value: "glossy",
    title: "Glossy",
    description: "Classic shine.",
  },
  {
    value: "matte",
    title: "Matte",
    description: "Velvety finish.",
  },
  {
    value: "chrome",
    title: "Chrome",
    description: "Mirror effect.",
  },
  {
    value: "cat-eye",
    title: "Cat Eye",
    description: "Magnetic finish.",
  },
  {
    value: "velvet",
    title: "Velvet",
    description: "Luxury shimmer.",
  },
  {
    value: "glitter",
    title: "Glitter",
    description: "Sparkling finish.",
  },
];

const artLevelOptions = [
  {
    value: "none",
    title: "None",
    description: "Solid colour only.",
  },
  {
    value: "minimal",
    title: "Minimal",
    description: "Simple accents.",
  },
  {
    value: "moderate",
    title: "Moderate",
    description: "Balanced nail art.",
  },
  {
    value: "detailed",
    title: "Detailed",
    description: "Highly artistic.",
  },
];

function OccasionStep({
  data,
  updateData,
  errors = {},
}) {
  return (
    <Card className="p-10">
      <div className="max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-primary)]">
          Step 5
        </p>

        <h2 className="mt-3 font-['Playfair_Display'] text-4xl font-semibold text-[var(--color-text)]">
          Occasion & Style
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-[var(--color-muted)]">
          Capture the client's personal style and the purpose of this nail set.
        </p>
      </div>

      <div className="mt-10 space-y-10">

        <OptionGroup
          label="Occasion"
          name="occasion"
          value={data.occasion}
          onChange={(value) =>
            updateData("occasion", value)
          }
          options={occasionOptions}
          error={!!errors.occasion}
          helperText={errors.occasion}
        />

        <OptionGroup
          label="Style Preference"
          name="style"
          value={data.style}
          onChange={(value) =>
            updateData("style", value)
          }
          options={styleOptions}
          error={!!errors.style}
          helperText={errors.style}
        />

        <CheckboxGroup
          label="Favourite Colour Families"
          values={data.colours}
          onChange={(values) =>
            updateData("colours", values)
          }
          options={colourOptions}
        />

        <OptionGroup
          label="Preferred Finish"
          name="finish"
          value={data.finish}
          onChange={(value) =>
            updateData("finish", value)
          }
          options={finishOptions}
          error={!!errors.finish}
          helperText={errors.finish}
        />

        <OptionGroup
          label="Nail Art Level"
          name="artLevel"
          value={data.artLevel}
          onChange={(value) =>
            updateData("artLevel", value)
          }
          options={artLevelOptions}
          columns={4}
          error={!!errors.artLevel}
          helperText={errors.artLevel}
        />

        <TextArea
          label="Inspiration"
          rows={4}
          value={data.notes || ""}
          onChange={(e) =>
            updateData("notes", e.target.value)
          }
          placeholder="Pinterest links, Instagram references, favourite designs..."
        />

      </div>
    </Card>
  );
}

export default OccasionStep;