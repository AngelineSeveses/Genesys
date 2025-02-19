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
import Multichar from "./pages/Multichar";
import Edge from "./pages/Edge";


const App = () => {
  return (
    <div>
      <StickyNavbar />
      <Hero />
      <Imageslider />
      <Imageslider />
      <Features />
      <Clients/>
      <Works/>
      <Workflow/>
      <Edge/>
      <Multichar/>
      <Footer/>
    </div>
  );
};

export default App;
