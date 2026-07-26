import {
  CalendarDays,
  Users,
  Sparkles,
  Image,
} from "lucide-react";

export const stats = [
  {
    title: "Appointments",
    value: "12",
    subtitle: "Scheduled for today",
    trend: "8%",
    icon: CalendarDays,
  },
  {
    title: "Clients",
    value: "148",
    subtitle: "Active clients",
    trend: "12%",
    icon: Users,
  },
  {
    title: "Consultations",
    value: "6",
    subtitle: "Awaiting review",
    trend: "5%",
    icon: Sparkles,
  },
  {
    title: "Gallery",
    value: "84",
    subtitle: "Designs available",
    trend: "10%",
    icon: Image,
  },
];

export const upcomingAppointments = [
  {
    id: 1,
    name: "Priya Sharma",
    service: "Gel Extensions",
    time: "11:00 AM",
    duration: "2 hrs",
    status: "Confirmed",
  },
  {
    id: 2,
    name: "Ayesha Khan",
    service: "Luxury Nail Art",
    time: "1:30 PM",
    duration: "1.5 hrs",
    status: "In Progress",
  },
  {
    id: 3,
    name: "Riya Patel",
    service: "French Manicure",
    time: "4:00 PM",
    duration: "1 hr",
    status: "Pending",
  },
];

export const recentActivity = [
  "Priya Sharma booked Gel Extensions.",
  "Gallery updated with five new luxury nail designs.",
  "Ayesha Khan completed her consultation.",
  "Monthly revenue report generated.",
];