import DashboardHero from "./DashboardHero";
import StatsGrid from "./StatsGrid";
import UpcomingAppointments from "./UpcomingAppointments";
import QuickActions from "./QuickActions";
import RecentActivity from "./RecentActivity";

function DashboardPage() {
  return (
    <div className="space-y-8">
      <DashboardHero />

      <StatsGrid />

      <div className="grid gap-8 lg:grid-cols-2">
        <UpcomingAppointments />
        <QuickActions />
      </div>

      <RecentActivity />
    </div>
  );
}

export default DashboardPage;