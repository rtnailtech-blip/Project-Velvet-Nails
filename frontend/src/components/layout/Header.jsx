import {
  Search,
  CalendarDays,
  UserCircle2,
  ChevronDown,
} from "lucide-react";

function Header() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header
      className="
        flex
        items-center
        justify-between
        rounded-[28px]
        border
        border-[var(--color-border)]
        bg-[var(--color-surface)]
        px-8
        py-5
        shadow-[var(--shadow-sm)]
      "
    >
      {/* Search */}
      <div
        className="
          flex
          w-[400px]
          items-center
          gap-3
          rounded-2xl
          border
          border-transparent
          bg-[var(--color-surface-soft)]
          px-5
          py-3.5
          transition-[var(--transition-normal)]
          focus-within:border-[var(--color-border-strong)]
          focus-within:bg-[var(--color-surface)]
          focus-within:shadow-[var(--shadow-xs)]
        "
      >
        <Search
          size={18}
          className="text-[var(--color-muted)]"
        />

        <input
          type="text"
          placeholder="Search clients..."
          className="
            w-full
            bg-transparent
            text-sm
            text-[var(--color-text)]
            placeholder:text-[var(--color-muted)]
            outline-none
          "
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">

        {/* Date */}
        <div
          className="
            flex
            items-center
            gap-3
            rounded-2xl
            border
            border-[var(--color-border)]
            bg-[var(--color-surface-soft)]
            px-5
            py-3
          "
        >
          <CalendarDays
            size={18}
            className="text-[var(--color-primary)]"
          />

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
              Today
            </p>

            <p className="text-sm font-medium text-[var(--color-heading)]">
              {today}
            </p>
          </div>
        </div>

        {/* Profile */}
        <button
          className="
            group
            flex
            items-center
            gap-4
            rounded-2xl
            border
            border-[var(--color-border)]
            bg-[var(--color-surface-soft)]
            px-4
            py-2.5
            transition-[var(--transition-normal)]
            hover:border-[var(--color-border-strong)]
            hover:bg-[var(--color-surface)]
            hover:shadow-[var(--shadow-xs)]
          "
        >
          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-[var(--color-primary-soft)]
            "
          >
            <UserCircle2
              size={26}
              className="text-[var(--color-accent)]"
            />
          </div>

          <div className="text-left">
            <p className="text-sm font-semibold text-[var(--color-heading)]">
              Rasaal
            </p>

            <p className="text-xs text-[var(--color-muted)]">
              Nail Artist
            </p>
          </div>

          <ChevronDown
            size={16}
            className="
              text-[var(--color-muted)]
              transition-transform
              duration-200
              group-hover:rotate-180
            "
          />
        </button>

      </div>
    </header>
  );
}

export default Header;