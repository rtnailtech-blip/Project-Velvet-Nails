import {
  Card,
  Input,
  TextArea,
  RadioCard,
} from "../../../components/ui";

function ClientDetailsStep({
  data,
  updateData,
}) {
  return (
    <Card className="p-10">
      <div className="max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-primary)]">
          Step 1
        </p>

        <h2 className="mt-3 font-['Playfair_Display'] text-4xl font-semibold text-[var(--color-text)]">
          Client Details
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-[var(--color-muted)]">
          Begin every consultation by collecting the client's basic
          information. This profile will be used for future appointments,
          recommendations and consultation history.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-6">
        <Input
          label="Full Name"
          placeholder="Enter client's full name"
          value={data.fullName}
          onChange={(e) => updateData("fullName", e.target.value)}
        />

        <Input
          label="Phone Number"
          placeholder="+91 XXXXX XXXXX"
          value={data.phone}
          onChange={(e) => updateData("phone", e.target.value)}
        />

        <Input
          label="Email Address"
          placeholder="example@email.com"
          value={data.email}
          onChange={(e) => updateData("email", e.target.value)}
        />

        <Input
          label="Date of Birth"
          type="date"
          value={data.dateOfBirth}
          onChange={(e) => updateData("dateOfBirth", e.target.value)}
        />
      </div>

      <div className="mt-8">
        <label className="mb-4 block text-sm font-semibold text-[var(--color-text)]">
          Client Type
        </label>

        <div className="grid grid-cols-2 gap-5">
          <RadioCard
            name="clientType"
            value="new"
            checked={data.clientType === "new"}
            onChange={(e) => updateData("clientType", e.target.value)}
            title="New Client"
            description="First consultation with Velvet Nails."
          />

          <RadioCard
            name="clientType"
            value="existing"
            checked={data.clientType === "existing"}
            onChange={(e) => updateData("clientType", e.target.value)}
            title="Existing Client"
            description="Returning client with previous visit history."
          />
        </div>
      </div>

      <div className="mt-8">
        <TextArea
          label="Consultation Notes"
          placeholder="Any additional notes before beginning the consultation..."
          rows={5}
          value={data.notes}
          onChange={(e) => updateData("notes", e.target.value)}
        />
      </div>
    </Card>
  );
}

export default ClientDetailsStep;