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
    <aside
      className="
        flex
        h-screen
        w-80
        flex-col
        border-r
        border-[var(--color-border)]
        bg-[var(--color-surface-soft)]
        px-8
        py-8
      "
    >
      {/* Brand */}
      <div className="mb-14">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-primary)]">
          Velvet
        </p>

        <h1 className="mt-2 font-['Playfair_Display'] text-5xl font-semibold leading-none tracking-tight text-[var(--color-heading)]">
          Nails
        </h1>

        <p className="mt-4 max-w-[180px] text-sm leading-6 text-[var(--color-muted)]">
          Luxury Nail Studio
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-3">
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

      {/* Footer */}
      <div className="border-t border-[var(--color-border)] pt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Velvet Nails
        </p>

        <p className="mt-2 text-sm font-medium text-[var(--color-heading)]">
          Version 1.0.0
        </p>

        <p className="mt-1 text-xs text-[var(--color-muted)]">
          Luxury Studio Assistant
        </p>
      </div>
    </aside>
  );
}

function SidebarItem({ icon, text, to }) {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <div
          className={`
            group
            relative
            flex
            w-full
            items-center
            gap-4
            rounded-2xl
            border
            px-4
            py-3.5
            transition-[var(--transition-normal)]

            ${
              isActive
                ? "border-[var(--color-border-strong)] bg-[var(--color-surface)] shadow-[var(--shadow-sm)]"
                : "border-transparent hover:border-[var(--color-border)] hover:bg-[var(--color-surface)] hover:shadow-[var(--shadow-xs)]"
            }
          `}
        >
          {isActive && (
            <span className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full bg-[var(--color-primary)]" />
          )}

          <div
            className={`
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              transition-[var(--transition-normal)]

              ${
                isActive
                  ? "bg-[var(--color-primary-soft)] text-[var(--color-accent)]"
                  : "text-[var(--color-muted)] group-hover:bg-[var(--color-primary-soft)] group-hover:text-[var(--color-accent)]"
              }
            `}
          >
            {icon}
          </div>

          <span
            className={`
              text-[15px]

              ${
                isActive
                  ? "font-semibold text-[var(--color-heading)]"
                  : "font-medium text-[var(--color-muted)] group-hover:text-[var(--color-heading)]"
              }
            `}
          >
            {text}
          </span>
        </div>
      )}
    </NavLink>
  );
}

export default Sidebar;