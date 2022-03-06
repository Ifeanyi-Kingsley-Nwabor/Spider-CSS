import React from "react";
import { Link } from "react-router-dom";

const CssFrameworks = () => {
  return (
    <div className="frameworks">
      <span className="material-icons pulse">rocket_launch</span>{" "}
      <h3 className="frameworks_title">Learn Css using these Frameworks</h3>
      <div className="frameworks_content">
        <hr />
        <div className="list-item">
          <Link
            to="https://getbootstrap.com/"
            target="_blank"
            rel=" noreferrer noopener"
          >
            Bootstrap
          </Link>
        </div>
        <hr />
        <div className="list-item">
          <Link
            to="https://get.foundation/"
            target="_blank"
            rel=" noreferrer noopener"
          >
            Foundation
          </Link>
        </div>
        <hr />
        <div className="list-item">
          <Link
            to="https://materializecss.com/"
            target="_blank"
            rel=" noreferrer noopener"
          >
            Materialize CSS
          </Link>
        </div>
        <hr />
        <div className="list-item">
          <Link
            to="https://tailwindcss.com/"
            target="_blank"
            rel=" noreferrer noopener"
          >
            Tailwind CSS
          </Link>
        </div>
        <hr />
        <div className="list-item">
          <Link
            to="https://mui.com/"
            target="_blank"
            rel=" noreferrer noopener"
          >
            Material UI
          </Link>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default CssFrameworks;
