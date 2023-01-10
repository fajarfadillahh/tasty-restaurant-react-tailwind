import React from "react";

import Header from "../components/Header";
import Hero from "../parts/Homepage/Hero";
import About from "../parts/Homepage/About";
import Services from "../parts/Homepage/Services";
import Menu from "../parts/Homepage/Menu";

export default function Homepage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Menu />
    </>
  );
}
