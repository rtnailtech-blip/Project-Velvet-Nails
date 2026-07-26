import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-[var(--color-background)]">
      <Sidebar />

      <main
        className="
          flex-1
          overflow-y-auto
          bg-[radial-gradient(circle_at_top_right,rgba(215,171,184,0.12)_0%,transparent_38%),radial-gradient(circle_at_bottom_left,rgba(215,171,184,0.08)_0%,transparent_30%),var(--color-background)]
        "
      >
        <div className="mx-auto max-w-[1600px] px-10 py-8">
          <Header />

          <section className="mt-10 pb-10">
            <Outlet />
          </section>
        </div>
      </main>
    </div>
  );
}

export default AppLayout;