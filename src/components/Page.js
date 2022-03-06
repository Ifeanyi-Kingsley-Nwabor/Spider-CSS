import React from "react";
import Hero from "./Hero";
import About from "./About";
import Tutorials from "./Tutorials";

import Contact from "./Contact";
import Footer from "./Footer";

const Page = () => {
  return (
    <div className="page">
      <Hero />
      <About />
      <Tutorials />

      <Contact />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
