import {
  Card,
  SectionHeader,
} from "../../components/ui";

import {
  Sparkles,
  UserPlus,
  ImagePlus,
  ArrowRight,
} from "lucide-react";

const actions = [
  {
    title: "New Consultation",
    description: "Start a personalized nail consultation.",
    icon: Sparkles,
  },
  {
    title: "Add Client",
    description: "Create a new client profile.",
    icon: UserPlus,
  },
  {
    title: "Upload Gallery",
    description: "Add today's latest nail designs.",
    icon: ImagePlus,
  },
];

function QuickActions() {
  return (
    <Card className="bg-[var(--color-surface-soft)]">
      <SectionHeader title="Quick Actions" />

      <div className="mt-6 space-y-5">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="
                group
                flex
                w-full
                items-center
                justify-between
                rounded-3xl
                border
                border-[var(--color-border)]
                bg-white
                p-6
                text-left
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[var(--color-primary)]
                hover:shadow-[var(--shadow-sm)]
              "
            >
              <div className="flex items-center gap-5">

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[var(--color-primary-soft)]
                    text-[var(--color-accent)]
                    transition-all
                    duration-300
                    group-hover:scale-105
                  "
                >
                  <Icon size={22} />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[var(--color-text)]">
                    {action.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[var(--color-muted)]">
                    {action.description}
                  </p>
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
                  bg-[var(--color-primary-soft)]
                  text-[var(--color-accent)]
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                "
              >
                <ArrowRight size={18} />
              </div>
            </button>
          );
        })}
      </div>
    </Card>
  );
}

export default QuickActions;