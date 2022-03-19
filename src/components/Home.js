import React from "react";
import logo from "../logo.png";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-logo_text">
          click <a href="/page">here</a> to view page.
        </p>
        <a
          className="App-link"
          href="https://www.w3schools.com/css/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn CSS
        </a>
      </header>
    </div>
  );
};

export default Home;
