import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Vision from "./pages/Vision";
import Projects from "./pages/Projects";
import Inauguration from "./pages/Inauguration";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div id="home">
        <Navbar />
        <Home />
      </div>
      <div id="about" className="md:min-h-screen">
        <About />
      </div>
      <div id="vision" className="md:min-h-screen">
        <Vision />
      </div>
      <div id="projects" className="md:min-h-screen">
        <Projects />
      </div>
      <div id="inauguration" className="md:min-h-screen">
        <Inauguration />
      </div>
      <div id="contact">
        {" "}
        <Footer />
      </div>
    </>
  );
}

export default App;
