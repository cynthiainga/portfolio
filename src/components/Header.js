import React, { Component, createRef } from 'react';
import { IconContext } from 'react-icons';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { Link } from 'react-scroll';
import logo from '../assets/images/logo1.png';

// Or Access Link,Element,etc as follows
class Header extends Component {
  constructor(props) {
    super(props);
    this.navbar = createRef();
    this.menu = createRef();
  }

  state = {
    links: [
      {
        id: 1, name: 'Home', to: 'home', class: '',
      },
      {
        id: 2, name: 'About', to: 'about', class: '',
      },
      {
        id: 3, name: 'Work', to: 'work', class: '',
      },
      {
        id: 4, name: 'Portfolio', to: 'portfolio', class: '',
      },
      {
        id: 5, name: 'Contact', to: 'contact', class: '',
      },
    ],
  };

  handleShowLinks = () => {
    this.navbar.current.classList.toggle('open');
    this.menu.current.classList.toggle('open');
  };

  handleHover = (link) => {
    const links = this.state.links.map((item) => {
      if (item.id === link.id) {
        item.class = 'focusOut focused';
      } else {
        item.class = 'focusOut';
      }
      return item;
    });
    this.setState({ links });
  };

  handleHoverOut = () => {
    const links = this.state.links.map((item) => {
      item.class = '';

      return item;
    });
    this.setState({ links });
  };

  handleCursorEnter = () => {};

  closeMenu = () => {
    this.navbar.current.classList.remove('open');
    this.menu.current.classList.remove('open');
  };

  render() {
    return (
      <header>
        <nav className="header-main-container" ref={this.menu}>
          <div className="logo-container">
            <Link
              to="home"
              spy
              smooth
              duration={500}
              delay={800}
              className="logo-area"
              onClick={this.closeMenu}
            >
              <img src={logo} alt="homeImage" className="logo" />
            </Link>
          </div>
          <div className="hamburger-container">
            <div className="hamburger-area" onClick={this.handleShowLinks}>
              <div className="burger" />
              <div className="burger" />
              <div className="burger" />
            </div>
          </div>
        </nav>
        <nav className="header-links-main-container" ref={this.navbar}>
          <div className="navbar-overlay-main-container" />
          <div className="links-wrapper">
            <div className="menu-text">
              <h1>Menu</h1>
            </div>
            <ul>
              {this.state.links.map((link, index) => (
                <li
                  onMouseEnter={() => this.handleHover(link)}
                  onMouseLeave={() => this.handleHoverOut(link)}
                  className={link.class}
                  key={link.id}
                >
                  <Link
                    to={link.to}
                    spy
                    smooth
                    duration={500}
                    delay={800}
                    key={link.id}
                    onClick={this.handleShowLinks}
                  >
                    {link.name}
                  </Link>
                  <div className="link-number">
                    0
                    {index + 1}
                  </div>
                  <div className="link-text-overlay">{link.name}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="contact-details">
            <div className="contact-text">
              <p>candyinga67@gmail.com</p>
              {' '}
              <br />
              <p>+(254) 745-889-613</p>
              {' '}
              <br />
              <span>Kenya - Malindi</span>
            </div>
            <div className="contact-details-icon-wrapper">
              <div className="contact-icon-item">
                <a
                  href="https://www.facebook.com/cynthia.inga.77/"
                  target="blank"
                >
                  <IconContext.Provider
                    value={{ className: 'header-links-icon' }}
                  >
                    <FaFacebookF />
                  </IconContext.Provider>
                </a>
                <a href="https://twitter.com/CynthiaInga_C" target="blank">
                  <IconContext.Provider
                    value={{ className: 'header-links-icon' }}
                  >
                    <FaTwitter />
                  </IconContext.Provider>
                </a>
                <a
                  href="https://www.instagram.com/candyinga67/"
                  target="blank"
                >
                  <IconContext.Provider
                    value={{ className: 'header-links-icon' }}
                  >
                    <FaInstagram />
                  </IconContext.Provider>
                </a>
                <a
                  href="https://www.linkedin.com/in/cynthia-inga/"
                  target="blank"
                >
                  <IconContext.Provider
                    value={{ className: 'header-links-icon' }}
                  >
                    <AiFillLinkedin />
                  </IconContext.Provider>
                </a>
                <a href="https://github.com/cynthiainga" target="blank">
                  <IconContext.Provider
                    value={{ className: 'header-links-icon' }}
                  >
                    <AiOutlineGithub />
                  </IconContext.Provider>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
