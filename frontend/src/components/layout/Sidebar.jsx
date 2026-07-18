import { NavLink } from "react-router-dom";

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
        <SidebarItem
            to="/"
            icon={<LayoutDashboard size={20} />}
            text="Dashboard"
        />

        <SidebarItem
            to="/consultation"
            icon={<Sparkles size={20} />}
            text="Consultation"
        />

        <SidebarItem
            to="/clients"
            icon={<Users size={20} />}
            text="Clients"
        />

        <SidebarItem
            to="/gallery"
            icon={<Images size={20} />}
            text="Gallery"
        />

        <SidebarItem
            to="/settings"
            icon={<Settings size={20} />}
            text="Settings"
        />
      </nav>
    </aside>
  );
}

function SidebarItem({ icon, text, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `
        flex
        w-full
        items-center
        gap-3
        rounded-xl
        px-4
        py-3
        transition-all
        duration-200
        ${
          isActive
            ? "bg-white shadow-sm text-[#2E2E2E] font-semibold"
            : "text-[#4A4A4A] hover:bg-white hover:shadow-sm"
        }
        `
      }
    >
      {icon}

      <span>{text}</span>
    </NavLink>
  );
}

export default Sidebar;