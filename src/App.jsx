import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Vision from "./pages/Vision";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Home />
      </div>
      <div className="min-h-screen">
        <About />
      </div>
      <div className="min-h-screen">
        <Vision />
      </div>
    </>
  );
}

export default App;
