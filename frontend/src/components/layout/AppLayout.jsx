import Sidebar from "./Sidebar";
import Header from "./Header";
function AppLayout() {
  return (
    <div className="flex h-screen bg-[#FCFAF8]">
      <Sidebar />

      <main className="flex-1 p-8">
        <Header />
            <section className="mt-8 rounded-3xl border border-[#ECE5E8] bg-white p-10 shadow-sm">
                <h1 className="font-['Playfair_Display'] text-4xl font-semibold text-[#2D2D2D]">
                Welcome to Velvet Nails
                </h1>

                <p className="mt-4 max-w-2xl text-[#6F6F6F]">
                Your luxury nail consultation assistant is ready. Soon you'll be able to
                manage clients, recommend nail art, and create beautiful consultations
                from one elegant workspace.
                </p>
            </section>
        </main>
    </div>
  );
}

export default AppLayout;