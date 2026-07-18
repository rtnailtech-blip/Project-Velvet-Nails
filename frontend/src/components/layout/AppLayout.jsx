import Sidebar from "./Sidebar";
function AppLayout() {
  return (
    <div className="flex h-screen bg-[#FCFAF8]">
      <Sidebar />

      <main className="flex-1 p-10">
        Main Content
      </main>
    </div>
  );
}

export default AppLayout;