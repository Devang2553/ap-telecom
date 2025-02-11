import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./component/navbar";
import AboutPage from "./pages/about";
import ContactUsPage from "./pages/contactUs";
import HomePage from "./pages/homePage";
import OurServicePage from "./pages/ourService";
import TestimonialPage from "./pages/testimonial";
import { FooterSection } from "./component/footer/FooterSection";

function App() {
  const [isopen, setIsopen] = useState(true);
  return (
    <Router>
      <Navbar isopen={isopen} setIsopen={setIsopen} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/" element={<ServicePage />} /> */}
        <Route path="/testimonials" element={<TestimonialPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/our-services" element={<OurServicePage />} />
        <Route path="/about-us" element={<AboutPage />} />
      </Routes>
      <FooterSection/>
    </Router>
  );
}

export default App;
