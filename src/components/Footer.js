import React from 'react';
import { IconContext } from 'react-icons/lib';
import {
  FiMail,
  FiTwitter,
  FiGithub,
  FiLinkedin,
} from 'react-icons/fi';
import { Link } from 'react-scroll';

const Footer = () => (
  <div className="footer-main-container">
    <div className="footer-content">
      <div className="footer-up">
        <ul className="links-pages">
          <li data-aos="fade-right">
            <Link to="home" spy smooth duration={500}>
              Home
            </Link>
          </li>
          <li data-aos="fade-right">
            <Link to="about" spy smooth duration={500}>
              About
            </Link>
          </li>
          <li data-aos="fade-right">
            <Link to="work" spy smooth duration={500}>
              Work
            </Link>
          </li>
          <li data-aos="fade-right">
            <Link to="portfolio" spy smooth duration={500}>
              Portfolio
            </Link>
          </li>
          <li data-aos="fade-right">
            <Link to="contact" spy smooth duration={500}>
              Contact me
            </Link>
          </li>
        </ul>

        <div className="contact-links">
          <ul>
            <li>
              <a
                href="mailto:candyinga67@gmail.com"
                target="blank"
              >
                <IconContext.Provider
                  value={{ className: 'contact-link-icon' }}
                >
                  <FiMail />
                </IconContext.Provider>
              </a>
            </li>
            <li>
              <a href="https://github.com/cynthiainga" target="blank">
                <IconContext.Provider
                  value={{ className: 'contact-link-icon' }}
                >
                  <FiGithub />
                </IconContext.Provider>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/CynthiaInga_C" target="blank">
                <IconContext.Provider
                  value={{ className: 'contact-link-icon' }}
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
                  value={{ className: 'contact-link-icon' }}
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
          &copy;
          {' '}
          {new Date().getFullYear()}
          {' '}
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

export default Footer;
