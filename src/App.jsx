import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Hero from "./pages/Hero";
import Features from "./pages/Features";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import JoinUs from "./pages/JoinUs";
import AppDownload from "./pages/AppDownload";
import WhyChooseUs from "./pages/WhyChooseUs";
import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hero" element={<Hero />} />
        <Route path="/features" element={<Features />} />
        <Route path="/WhyChooseUs" element={<WhyChooseUs />} />
        <Route path="/JoinUs" element={<JoinUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/app-download" element={<AppDownload />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
