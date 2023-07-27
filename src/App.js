import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/home";
import Services from "./Components/services";
import Navbar from "./Components/navbar";
import Form from "./Components/contactform";
import Store from "./Components/Contents";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="navbar" element={<Navbar />} />
          <Route path="form" element={<Form />} />
          <Route path="store" element={<Store />} />
          <Route path="footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    
    
    
    </div>
  );
}

export default App;
