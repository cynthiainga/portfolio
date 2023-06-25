import React, { Component } from "react";

import { IconContext } from "react-icons/lib";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import { Link } from "react-scroll";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-main-container">
        <div className="footer-content">
          <div className="footer-up">
            <ul className="links-pages">
              <li data-aos="fade-right">
                <Link to="home" spy={true} smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li data-aos="fade-right">
                <Link to="about" spy={true} smooth={true} duration={500}>
                  About
                </Link>
              </li>
              <li data-aos="fade-right">
                <Link to="work" spy={true} smooth={true} duration={500}>
                  Work
                </Link>
              </li>
              <li data-aos="fade-right">
                <Link to="portfolio" spy={true} smooth={true} duration={500}>
                  Portfolio
                </Link>
              </li>
              <li data-aos="fade-right">
                <Link to="contact" spy={true} smooth={true} duration={500}>
                  Contact me
                </Link>
              </li>
            </ul>

            <div className="contact-links">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/cynthia.inga.77/"
                    target="blank"
                  >
                    <IconContext.Provider
                      value={{ className: "contact-link-icon" }}
                    >
                      <FiFacebook />
                    </IconContext.Provider>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/candyinga67/"
                    target="blank"
                  >
                    <IconContext.Provider
                      value={{ className: "contact-link-icon" }}
                    >
                      <FiInstagram />
                    </IconContext.Provider>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/cynthiainga" target="blank">
                    <IconContext.Provider
                      value={{ className: "contact-link-icon" }}
                    >
                      <FiGithub />
                    </IconContext.Provider>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/CynthiaInga_C" target="blank">
                    <IconContext.Provider
                      value={{ className: "contact-link-icon" }}
                    >
                      <FiTwitter />
                    </IconContext.Provider>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/cynthia-inga/"
                    target="blank"
                  >
                    <IconContext.Provider
                      value={{ className: "contact-link-icon" }}
                    >
                      <FiLinkedin />
                    </IconContext.Provider>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-down">
            <p>
              &copy; {new Date().getFullYear()}{" "}
              <a
                href="https://www.linkedin.com/in/cynthia-inga/"
                className="name"
              >
                Cynthia Inga C
              </a>
              , All right reserved
            </p>
          </div>
        </div>
      </div>
    );
  }
}
