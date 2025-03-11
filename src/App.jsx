import React from "react";
import "./css/App.css";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";
import HeroSection from "./pages/Herosection";
import GuideSection from "./pages/GuideSection";
import TrustedSection from "./pages/TrustedSection";

 function App () {
  return (
    <>
      <div className="app">
        <Navbar/>
        <HeroSection />
        <GuideSection />
        <TrustedSection />
        <Footer />
      </div>
    </>
  )
}
export default App;