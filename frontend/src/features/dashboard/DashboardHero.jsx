import { CalendarDays } from "lucide-react";

function DashboardHero() {
  const greeting = (() => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  })();

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-[var(--color-border)]
        bg-[var(--color-surface)]
        px-10
        py-10
        shadow-[var(--shadow-sm)]
      "
    >
      {/* Accent */}
      <div className="absolute inset-x-0 top-0 h-1 bg-[var(--color-primary)]" />

      {/* Decorative Glow */}
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--color-primary-soft)] blur-3xl opacity-70" />

      <div className="relative flex items-start justify-between gap-10">
        {/* Left */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-primary)]">
            Velvet Nails
          </p>

          <h1 className="mt-5 font-['Playfair_Display'] text-6xl font-semibold leading-tight tracking-tight text-[var(--color-text)]">
            {greeting}, Rasaal.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-muted)]">
            Manage appointments, consultations, clients and your portfolio from one beautifully crafted workspace.
          </p>

          <div className="mt-10 flex gap-5">
            <div
              className="
                min-w-[220px]
                rounded-3xl
                border
                border-[var(--color-border)]
                bg-[var(--color-surface-soft)]
                p-6
              "
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                Today's Focus
              </p>

              <p className="mt-3 text-xl font-semibold text-[var(--color-text)]">
                3 Appointments
              </p>

              <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                Prioritize consultations and complete today's bookings.
              </p>
            </div>

            <div
              className="
                min-w-[220px]
                rounded-3xl
                border
                border-[var(--color-border)]
                bg-[var(--color-surface-soft)]
                p-6
              "
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                Studio Goal
              </p>

              <p className="mt-3 text-xl font-semibold text-[var(--color-text)]">
                Refresh Gallery
              </p>

              <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                Add today's best nail designs to your portfolio.
              </p>
            </div>
          </div>
        </div>

        {/* Right Panel */}

        <div
          className="
            flex
            min-h-[365px]
            min-w-[300px]
            flex-col
            justify-between
            rounded-3xl
            border
            border-[var(--color-border)]
            bg-[var(--color-surface-soft)]
            p-8
          "
        >
          {/* Top */}
          <div>
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-[var(--color-primary-soft)] p-3">
                <CalendarDays
                  size={22}
                  className="text-[var(--color-accent)]"
                />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  Today
                </p>

                <p className="mt-1 text-lg font-semibold text-[var(--color-text)]">
                  {today}
                </p>
              </div>
            </div>
          </div>

          {/* Middle */}
          <div>
            <div className="h-px bg-[var(--color-border)]" />

            <div className="py-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                Studio Status
              </p>

              <p className="mt-3 text-lg font-semibold text-[var(--color-text)]">
                Ready for the day
              </p>

              <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                Everything is prepared for today's appointments.
              </p>
            </div>

            <div className="h-px bg-[var(--color-border)]" />
          </div>

          {/* Bottom */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
              Next Appointment
            </p>

            <p className="mt-3 text-2xl font-semibold text-[var(--color-text)]">
              11:00 AM
            </p>

            <div className="mt-5 rounded-2xl border border-[var(--color-border)] bg-white p-5">
              <p className="font-semibold text-[var(--color-text)]">
                Priya Sharma
              </p>

              <p className="mt-1 text-sm text-[var(--color-muted)]">
                Gel Extensions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardHero;