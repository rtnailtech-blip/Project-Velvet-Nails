import { Card, Button } from "../../../components/ui";

function SummarySection({
  title,
  data,
}) {
  return (
    <Card className="p-8">
      <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[var(--color-text)]">
        {title}
      </h3>

      <div className="mt-6 grid grid-cols-2 gap-5">
        {Object.entries(data).map(([key, value]) => (
          <div
            key={key}
            className="rounded-2xl bg-[var(--color-surface-soft)] p-4"
          >
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">
              {key.replace(/([A-Z])/g, " $1")}
            </p>

            <p className="mt-2 font-medium text-[var(--color-text)]">
              {Array.isArray(value)
                ? value.length
                  ? value.join(", ")
                  : "—"
                : value || "—"}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}

function SummaryStep({
  consultationData,
}) {
  return (
    <div className="space-y-8">

      <Card className="p-10 text-center">

        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-primary)]">
          Step 6
        </p>

        <h2 className="mt-3 font-['Playfair_Display'] text-5xl font-semibold text-[var(--color-text)]">
          Consultation Summary
        </h2>

        <p className="mx-auto mt-5 max-w-3xl leading-8 text-[var(--color-muted)]">
          Review all collected information before generating
          personalised recommendations for your client.
        </p>

      </Card>

      <SummarySection
        title="Client Profile"
        data={consultationData.client}
      />

      <SummarySection
        title="Hand Assessment"
        data={consultationData.handAssessment}
      />

      <SummarySection
        title="Nail Assessment"
        data={consultationData.nailAssessment}
      />

      <SummarySection
        title="Lifestyle"
        data={consultationData.lifestyle}
      />

      <SummarySection
        title="Style Preferences"
        data={consultationData.occasion}
      />

      <div className="flex justify-end">
        <Button size="lg">
          Generate Recommendation
        </Button>
      </div>

    </div>
  );
}

export default SummaryStep;