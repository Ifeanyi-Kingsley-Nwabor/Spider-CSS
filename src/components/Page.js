import React from "react";
import Hero from "./Hero";
import About from "./About";
import Tutorials from "./Tutorials";
import Contact from "./Contact";

const Page = () => {
  return (
    <div className="page" id="page-layout">
      <Hero />
      <About />
      <Tutorials />
      <Contact />
    </div>
  );
};

export default Page;
