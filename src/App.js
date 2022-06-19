import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import { CarouselData } from "./components/CarouselData";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel className="slider" slides={CarouselData} />
    </div>
  );
}

export default App;
