import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import AppLayout from "./components/layout/AppLayout";

import DashboardPage from "./features/dashboard/DashboardPage";
import ConsultationPage from "./features/consultation/ConsultationPage";
import ClientsPage from "./features/clients/ClientsPage";
import GalleryPage from "./features/gallery/GalleryPage";
import SettingsPage from "./features/settings/SettingsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<DashboardPage />} />

          <Route
            path="consultation"
            element={<ConsultationPage />}
          />

          <Route
            path="clients"
            element={<ClientsPage />}
          />

          <Route
            path="gallery"
            element={<GalleryPage />}
          />

          <Route
            path="settings"
            element={<SettingsPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;