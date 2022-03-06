import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        Copyright © Spider Web CSS
        <br />
        <Link to="#!" target="_blank" rel=" noreferrer noopener">
          Data protection
        </Link>
        <br />
        All rights reserved 2022{" "}
      </p>
    </div>
  );
};

export default Footer;
