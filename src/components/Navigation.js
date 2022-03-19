import React from "react";
import SpiderLegs from "./SpiderLegs";

const Navigation = () => {
  return (
    <div>
      <nav className="navbar">
        {/* <!-- LOGO --> */}
        <div className="logo">
          <div className="logo_spider">
            {" "}
            <SpiderLegs />
          </div>

          <div className="logo_text">
            <a href="/" style={{ color: "white" }}>
              Spider CSS
            </a>
          </div>
        </div>
        {/* <!-- NAVIGATION MENU --> */}
        <ul className="nav-links">
          {/* <!-- USING CHECKBOX HACK --> */}
          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" className="hamburger">
            &#9776;
          </label>
          {/* <!-- NAVIGATION MENUS --> */}
          <div className="menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li className="tutorials">
              <a href="tutorials">Tutorials</a>
              {/* <!-- DROPDOWN MENU --> */}
              <ul className="dropdown">
                <li>
                  <a href="/frameworks">CSS Frameworks</a>
                </li>
                <li>
                  <a href="/platforms">CSS learning platforms</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="/contact">Contact</a>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
