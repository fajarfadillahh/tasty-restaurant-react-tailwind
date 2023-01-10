import React from "react";

import Header from "../components/Header";
import Hero from "../parts/Homepage/Hero";
import About from "../parts/Homepage/About";
import Services from "../parts/Homepage/Services";

export default function Homepage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
    </>
  );
}
