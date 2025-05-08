import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="main-layout">
      <div className="top-half">
        <div className="hero-wrapper">
          <div className="hero">
            <Hero />
          </div>
        </div>
      </div>
      <div className="bottom-half">
        <Carousel />
      </div>
    </div>
  );
}

export default App;