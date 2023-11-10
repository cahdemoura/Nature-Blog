import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Ecossistemas from "./pages/Ecossistemas";
import Solucoes from "./pages/Solucoes";
import Sobre from "./pages/Sobre";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="https://natureblog.cmouradev.com/ecossistemas" element={<Ecossistemas />} />
        </Routes>
        <Routes>
          <Route path="/solucoes" element={<Solucoes />} />
        </Routes>
        <Routes>
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
