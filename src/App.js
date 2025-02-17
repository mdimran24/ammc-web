import { BrowserRouter, Routes, Route } from "react-router-dom";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import bootstrap from 'bootstrap';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
import AboutUs from "./pages/AboutUs";
import LandlordServices from "./pages/LandlordServices";
import InvestorServices from "./pages/InvestorService";
import ContactUs from "./pages/ContactUs"
import BacktoTop from "./components/BacktoTop";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <TopBar />
        <Navbar />
        
        {/* ✅ Push all content down to prevent navbar overlap */}
        <div className="pages mt-8 md:mt-12">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/landlordservices" element={<LandlordServices />} />
            <Route path="/investorservices" element={<InvestorServices />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
          {/* <BacktoTop/> */}
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
