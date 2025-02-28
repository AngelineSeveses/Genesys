import React from "react";
import "./App.css";
import { StickyNavbar } from "./components/StickyNavbar";
import Hero from "./components/Hero";
import Imageslider from "./components/Imageslider";
import Features from "./pages/Features";
import Clients from "./pages/Clients";
import Works from "./pages/Works";
import Workflow from "./pages/Workflow";
import Footer from "./pages/Footer";
import Multi from "./pages/Multi";
import Competitive from "./pages/Competitive";
import Streams from "./Streams";

const App = () => {
  return (
    <div>
      <StickyNavbar />
      <Hero />
      <Imageslider />
      <Features />
      <Clients />
      <Works />
      <Workflow />
      <Multi />
      <Competitive />
      <Streams />
      <Footer />
    </div>
  );
};

export default App;
