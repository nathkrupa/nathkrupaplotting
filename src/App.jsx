import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Vision from "./pages/Vision";
import Projects from "./pages/Projects";
import Inauguration from "./pages/Inauguration";
import Footer from "./components/Footer";
import Service from "./pages/Service";

function App() {
  return (
    <div className="max-w-screen-2xl overflow-hidden">
      {" "}
      {/* Added overflow-hidden */}
      <div className="max-w-full mx-auto">
        <div id="home">
          <Navbar />
          <Home />
        </div>
        <div id="about" className="md:min-h-screen">
          <About />
        </div>
        <div id="inauguration" className="md:min-h-screen">
          <Inauguration />
        </div>
        <div id="vision" className="md:min-h-screen">
          <Vision />
        </div>
        <div id="projects" className="md:min-h-screen">
          <Projects />
        </div>
        <div id="service" className="md:min-h-screen">
          <Service />
        </div>

        <div id="contact">
          {" "}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
