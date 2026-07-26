import { StatCard } from "../../components/ui";
import { stats } from "./dashboardData";

function StatsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <StatCard
  key={stat.title}
  title={stat.title}
  value={stat.value}
  subtitle={stat.subtitle}
  trend={stat.trend}
  icon={<Icon size={24} />}
/>
        );
      })}
    </div>
  );
}

export default StatsGrid;