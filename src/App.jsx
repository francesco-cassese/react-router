import { BrowserRouter, Routes, Route } from "react-router";
import NotFound from "./pages/NotFound";
import Homepage from "./pages/Homepage";
import ChiSiamo from "./pages/ChiSiamo";
import Prodotti from "./pages/Prodotti";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* http://localhost:5173/ */}
        <Route path="" element={<Homepage />} />

        {/* http://localhost:5173/chi-siamo */}
        <Route path="chi-siamo" element={<ChiSiamo />} />

        {/* http://localhost:5173/prodotti */}
        <Route path="prodotti" element={<Prodotti />} />

        {/* Pagina non trovata*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
