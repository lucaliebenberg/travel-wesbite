import React from "react";
import Destinations from "./components/Destinations";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Selects from "./components/Selects";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <Carousel />
    </div>
  );
}

export default App;
