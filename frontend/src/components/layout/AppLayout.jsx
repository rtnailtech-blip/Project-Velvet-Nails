import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
function AppLayout() {
  return (
    <div className="flex h-screen bg-[#FCFAF8]">
      <Sidebar />

      <main className="flex-1 p-8">
        <Header />
            <section className="mt-8">
                <Outlet />
            </section>
        </main>
    </div>
  );
}

export default AppLayout;