import { Search, CalendarDays, UserCircle2 } from "lucide-react";

function Header() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <header className="flex items-center justify-between rounded-3xl bg-white px-8 py-5 shadow-sm border border-[#ECE5E8]">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <Search className="text-[#6F6F6F]" size={20} />
        <input
          type="text"
          placeholder="Search clients..."
          className="outline-none bg-transparent text-sm placeholder:text-[#999] w-64"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2 text-[#6F6F6F] text-sm">
          <CalendarDays size={18} />
          <span>{today}</span>
        </div>

        <div className="flex items-center gap-2">
          <UserCircle2 size={34} className="text-[#CFA7B5]" />
          <div>
            <p className="text-sm font-semibold text-[#2D2D2D]">
              Rasaal
            </p>
            <p className="text-xs text-[#888]">
              Nail Artist
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;