import React from "react";
import { Link } from "react-router-dom";
import spider2 from "../spider2.jpeg";

const About = () => {
  return (
    <div className="row ">
      <div className=" about">
        <h1 className="about_title">ABOUT</h1>
        <hr className="about_hr" />
        <div className="row">
          <div className="about_content">
            <img
              className="about_image"
              src={spider2}
              alt="spider"
              // style={{ width: "600", height: "400" }}
            />
            <div className="about_text">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <br />
              <br />

              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
              </p>
              <br />
              <br />

              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur?
              </p>
              <br />
              <br />

              <p>
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                esse quam nihil molestiae consequatur, vel illum qui dolorem eum
                fugiat quo voluptas nulla pariatur
              </p>
            </div>
          </div>

          <Link className="back_link" to="/page">
            Back to Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
