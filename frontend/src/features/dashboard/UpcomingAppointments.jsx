import {
  Avatar,
  Badge,
  Card,
  SectionHeader,
} from "../../components/ui";

import {
  Clock3,
  Timer,
  ChevronRight,
} from "lucide-react";

import { upcomingAppointments } from "./dashboardData";

function UpcomingAppointments() {
  const getVariant = (status) => {
    switch (status) {
      case "Confirmed":
        return "success";
      case "In Progress":
        return "warning";
      default:
        return "neutral";
    }
  };

  return (
    <Card>
      <SectionHeader title="Today's Schedule" />

      <div className="mt-6 space-y-5">
        {upcomingAppointments.map((appointment) => (
          <div
            key={appointment.id}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-[var(--color-border)]
              bg-[var(--color-surface-soft)]
              p-6
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[var(--color-primary)]
              hover:shadow-[var(--shadow-sm)]
            "
          >
            {/* Left Accent */}
            <div className="absolute left-0 top-0 h-full w-1 bg-[var(--color-primary)] opacity-70" />

            <div className="flex items-start justify-between">

              {/* Client */}
              <div className="flex items-center gap-4">

                <Avatar
                  name={appointment.name}
                  size="lg"
                />

                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-text)]">
                    {appointment.name}
                  </h3>

                  <p className="mt-1 text-sm text-[var(--color-muted)]">
                    {appointment.service}
                  </p>
                </div>

              </div>

              <Badge variant={getVariant(appointment.status)}>
                {appointment.status}
              </Badge>

            </div>

            <div className="mt-6 flex items-center justify-between">

              <div className="flex gap-8">

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-primary-soft)]">
                    <Clock3
                      size={18}
                      className="text-[var(--color-accent)]"
                    />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-muted)]">
                      Time
                    </p>

                    <p className="mt-1 font-medium text-[var(--color-text)]">
                      {appointment.time}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-primary-soft)]">
                    <Timer
                      size={18}
                      className="text-[var(--color-accent)]"
                    />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-muted)]">
                      Duration
                    </p>

                    <p className="mt-1 font-medium text-[var(--color-text)]">
                      {appointment.duration}
                    </p>
                  </div>
                </div>

              </div>

              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  shadow-[var(--shadow-xs)]
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                "
              >
                <ChevronRight
                  size={18}
                  className="text-[var(--color-accent)]"
                />
              </div>

            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default UpcomingAppointments;