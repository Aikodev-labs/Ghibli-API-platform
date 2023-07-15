import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Doc from "./pages/Doc";





function App() {

  
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/docs" element={<Doc />}/>
      </Routes>
      
      <Footer />
    </BrowserRouter>
  )
}

export default App
 