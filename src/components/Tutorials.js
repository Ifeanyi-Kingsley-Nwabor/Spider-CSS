import React from "react";
import CssFrameworks from "./CssFrameworks";
import CssPlatform from "./CssPlatform";

const Tutorials = () => {
  return (
    <div>
      <div className="tutorial">
        <div className="tutorial_content">
          <h2 className="tutorial_title">Tutorials</h2>
          <p className="tutorial_text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
      </div>
      <div className="row_x css-materials">
        <div className="column_x">
          <CssPlatform />
        </div>
        <div className="column_x">
          <CssFrameworks />
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
