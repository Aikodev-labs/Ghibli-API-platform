import { BrowserRouter, Route, Routes } from "react-router-dom";
//Components
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Home from "./pages/Home";
//Pages
import About from "./pages/About";
import Support from "./pages/Support";
import Team from "./pages/Team";
import DocRouter from "./router/doc.router";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs/*" element={<DocRouter />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/support" element={<Support />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
