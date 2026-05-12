import { BrowserRouter, Routes, Route } from "react-router";
import NotFound from "./pages/NotFound.jsx";
import Homepage from "./pages/Homepage.jsx";
import ChiSiamo from "./pages/ChiSiamo.jsx";
import Prodotti from "./pages/Prodotti.jsx";
import LayoutPage from "./layouts/LayoutPage.jsx";
import dreamTeam from "./data/dreamTeam.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutPage />}>
          {/* http://localhost:5173/ */}
          <Route path="" element={<Homepage />} />

          {/* http://localhost:5173/chi-siamo */}
          <Route path="chi-siamo" element={<ChiSiamo />} />

          {/* http://localhost:5173/prodotti */}
          <Route path="prodotti" element={<Prodotti />} />
        </Route>
        {/* Pagina non trovata*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter >
  );
}
export default App;
