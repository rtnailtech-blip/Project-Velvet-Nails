import {
  LayoutDashboard,
  Sparkles,
  Users,
  Images,
  Settings,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="w-72 bg-[#F7F3F2] border-r border-[#ECE5E8] px-6 py-8">
      {/* Logo */}
      <div className="mb-12">
        <h1 className="font-['Playfair_Display'] text-3xl font-semibold text-[#2E2E2E]">
          Velvet Nails
        </h1>

        <p className="mt-2 text-sm text-[#6F6F6F]">
          Luxury Nail Studio
        </p>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" />
        <SidebarItem icon={<Sparkles size={20} />} text="Consultation" />
        <SidebarItem icon={<Users size={20} />} text="Clients" />
        <SidebarItem icon={<Images size={20} />} text="Gallery" />
        <SidebarItem icon={<Settings size={20} />} text="Settings" />
      </nav>
    </aside>
  );
}

function SidebarItem({ icon, text }) {
  return (
    <button
      className="
        flex
        w-full
        items-center
        gap-3
        rounded-xl
        px-4
        py-3
        text-[#4A4A4A]
        transition-all
        duration-200
        hover:bg-white
        hover:shadow-sm
      "
    >
      {icon}

      <span className="font-medium">
        {text}
      </span>
    </button>
  );
}

export default Sidebar;