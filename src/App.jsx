import { BrowserRouter, Routes, Route} from "react-router-dom";
//Components
import Home from "./pages/Home"
import Header from "./layout/Header";
import Footer from "./layout/Footer";
//Pages
import About from "./pages/About";
import Team from "./pages/Team";
import DocRouter from "./router/doc.router";










function App() {

  
  return (
    <BrowserRouter>

      <Header />
      

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/docs/*"   element={ <DocRouter /> } />
        <Route path="/about" element={<About />}/>
        <Route path="/team" element={<Team />}/>
      </Routes>

      <Footer />
      
    </BrowserRouter>
  )
}

export default App
 