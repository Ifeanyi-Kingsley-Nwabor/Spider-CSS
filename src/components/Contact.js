import React from "react";
import github from "../github2.png";
import linkedin from "../linkedin.png";
import portfolio from "../portfolio.png";

const Contact = () => {
  return (
    <div className="row contact_section">
      <h1 className=" contact_section_header">Contact</h1>
      <hr className=" about_hr" />
      <div className=" container">
        <form className="col s12 m6 l5">
          <input type="text" id="name" name="name" placeholder="Full Name" />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
          />

          <textarea
            id="subject"
            name="subject"
            placeholder="Message"
            style={{ height: "200px" }}
          ></textarea>

          <div className="submit">
            <button className="button">Submit</button>
          </div>
        </form>
        <div className="col s12 m6 l5 contact_info">
          <div className="row">
            <p>Spider Web CSS</p>
          </div>
          <div className="row">
            <p>
              928 Jefferson
              <br />
              St #APT 1 Jefferson City
              <br />
              Missouri(MO), 65101
            </p>
          </div>
          <div className="row">
            <p>Email: nwaborkingsley@gmail.com</p>
            <div className="row fone-number">
              <p>
                Tel: (573) 616-1910
                <br />
                Fax: (573) 616-1912
              </p>
            </div>
            <div className="link_row">
              <div className="tooltip">
                <a
                  className="contact_links"
                  href="https://github.com/Ifeanyi-Kingsley-Nwabor"
                  target="_blank"
                  rel=" noreferrer noopener"
                >
                  <img
                    className="contact_link_icon"
                    src={github}
                    alt="github repo"
                  />
                  <span className="contact_link_text tooltiptext">Github</span>
                </a>
              </div>
              <div className="tooltip">
                <a
                  className="contact_links"
                  href="https://nik-portfolio.netlify.app/"
                  target="_blank"
                  rel=" noreferrer noopener"
                >
                  <img
                    className="contact_link_icon"
                    src={portfolio}
                    alt="portfolio"
                  />
                  <span className="contact_link_text tooltiptext">
                    Portfolio
                  </span>
                </a>
              </div>

              <div className="tooltip">
                <a
                  className="contact_links"
                  href="https://de.linkedin.com/in/iknwabor"
                  target="_blank"
                  rel=" noreferrer noopener"
                >
                  <img
                    className="contact_link_icon"
                    src={linkedin}
                    alt="linkedin"
                  />
                  <span className="contact_link_text tooltiptext">
                    Linkedin
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="message_icons">
        <span className="material-icons message_icons_icon">phone_in_talk</span>
        <span className="material-icons message_icons_icon">whatsapp</span>
        <span className="material-icons message_icons_icon">email</span>
      </div>
    </div>
  );
};

export default Contact;
