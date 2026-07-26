import {
  Card,
  SectionHeader,
} from "../../components/ui";

import {
  Clock3,
  ArrowUpRight,
} from "lucide-react";

import { recentActivity } from "./dashboardData";

const timestamps = [
  "10 min ago",
  "1 hour ago",
  "Yesterday",
  "2 days ago",
  "3 days ago",
];

function RecentActivity() {
  return (
    <Card className="bg-[var(--color-surface-soft)]">
      <SectionHeader title="Recent Activity" />

      <div className="relative mt-8 ml-4 border-l border-[var(--color-border)]">

        {recentActivity.map((activity, index) => (
          <div
            key={index}
            className="
              group
              relative
              mb-8
              pl-8
              last:mb-0
            "
          >
            {/* Timeline Dot */}
            <div
              className="
                absolute
                -left-[13px]
                top-1
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                border-2
                border-white
                bg-[var(--color-primary-soft)]
                shadow-[var(--shadow-xs)]
              "
            >
              <div className="h-2.5 w-2.5 rounded-full bg-[var(--color-primary)]" />
            </div>

            <div
              className="
                rounded-2xl
                border
                border-[var(--color-border)]
                bg-white
                p-5
                transition-all
                duration-300
                hover:border-[var(--color-primary)]
                hover:shadow-[var(--shadow-sm)]
              "
            >
              <div className="flex items-start justify-between gap-6">

                <div className="flex-1">

                  <p className="leading-7 text-[var(--color-text)]">
                    {activity}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-sm text-[var(--color-muted)]">
                    <Clock3 size={15} />

                    <span>
                      {timestamps[index] || "Recently"}
                    </span>
                  </div>

                </div>

                <ArrowUpRight
                  size={18}
                  className="
                    text-[var(--color-muted)]
                    transition-all
                    duration-300
                    group-hover:text-[var(--color-accent)]
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />

              </div>
            </div>
          </div>
        ))}

      </div>
    </Card>
  );
}

export default RecentActivity;