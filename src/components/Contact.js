import React from 'react';
import { IconContext } from 'react-icons/lib';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useForm } from '@formspree/react';
import { BsEnvelope } from 'react-icons/bs';
import {
  FiFacebook,
  FiPhone,
  FiInstagram,
  FiTwitter,
  FiGithub,
  FiLinkedin,
} from 'react-icons/fi';
import Input from './common/Input';
import SubmitBtn from './common/SubmitBtn';
import Texterea from './common/Texterea';

const Contact = () => {
  const [state, handleSubmit] = useForm('mnqwneyz');

  const Message = () => (
    <div className="contact-main-container" id="contact" name="contact">
      <div className="contact-page">
        <div className="contact-details">
          <div className="title-container">
            <div className="before-line" />
            <h3 className="titles">Contact me</h3>
          </div>
          <h2 className="slogan">Let&#39;s do it together</h2>

          <p className="about-work">
            Question, comment or concern? this contact form is the best way to
            get in touch with me.
          </p>

          <div className="contact-address">
            <ul>
              <li>
                <a href="#f">
                  <div className="address-icon">
                    <IconContext.Provider
                      value={{ className: 'contact-address-icon' }}
                    >
                      <FaMapMarkerAlt />
                    </IconContext.Provider>
                  </div>
                  Kenya - Malindi
                </a>
              </li>
              <li>
                <a href="#f">
                  <div className="address-icon">
                    <IconContext.Provider
                      value={{ className: 'contact-address-icon' }}
                    >
                      <BsEnvelope />
                    </IconContext.Provider>
                  </div>
                  candyinga67@gmail.com
                </a>
              </li>
              <li>
                <a href="#f">
                  <div className="address-icon">
                    <IconContext.Provider
                      value={{ className: 'contact-address-icon' }}
                    >
                      <FiPhone />
                    </IconContext.Provider>
                  </div>
                  +254 (0) 745-889-613
                </a>
              </li>
            </ul>
          </div>
          <div className="contact-links">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/cynthia.inga.77/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconContext.Provider
                    value={{ className: 'contact-link-icon' }}
                  >
                    <FiFacebook />
                  </IconContext.Provider>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/candy_i99/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconContext.Provider
                    value={{ className: 'contact-link-icon' }}
                  >
                    <FiInstagram />
                  </IconContext.Provider>
                </a>
              </li>
              <li>
                <a href="https://github.com/cynthiainga" target="_blank" rel="noreferrer">
                  <IconContext.Provider
                    value={{ className: 'contact-link-icon' }}
                  >
                    <FiGithub />
                  </IconContext.Provider>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/CynthiaInga_C" target="_blank" rel="noreferrer">
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
                  target="_blank"
                  rel="noreferrer"
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

        <div className="contact-form redirect-form-contact">
          <div className="submission-form-message">
            Thanks for staying in touch! 😍 😍 😍 😍
          </div>
          <div className="show-form-btn">
            Click
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="show-contact-form"
            >
              here
            </button>
            to show the contact form again.
          </div>
        </div>
      </div>
    </div>
  );
  if (state.succeeded) {
    return <Message />;
  }

  return (
    <div className="contact-main-container" id="contact">
      <div className="contact-page">
        <div className="contact-details">
          <div className="title-container" data-aos="fade-down">
            <div className="before-line" />
            <h3 className="titles">Contact me</h3>
          </div>
          <h2 className="slogan" data-aos="fade-down">
            Let&#39;s do it together
          </h2>

          <p className="about-work" data-aos="fade-down">
            Question, comment or concern? this contact form is the best way to
            get in touch with me.
          </p>

          <div className="contact-address">
            <ul>
              <li data-aos="fade-down-right">
                <a href="#f">
                  <div className="address-icon">
                    <IconContext.Provider
                      value={{ className: 'contact-address-icon' }}
                    >
                      <FaMapMarkerAlt />
                    </IconContext.Provider>
                  </div>
                  Kenya - Malindi
                </a>
              </li>
              <li data-aos="fade-down-right">
                <a href="#f">
                  <div className="address-icon">
                    <IconContext.Provider
                      value={{ className: 'contact-address-icon' }}
                    >
                      <BsEnvelope />
                    </IconContext.Provider>
                  </div>
                  candyinga67@gmail.com
                </a>
              </li>
              <li data-aos="fade-down-right">
                <a href="#f">
                  <div className="address-icon">
                    <IconContext.Provider
                      value={{ className: 'contact-address-icon' }}
                    >
                      <FiPhone />
                    </IconContext.Provider>
                  </div>
                  +254 (0) 745-889-613
                </a>
              </li>
            </ul>
          </div>
          <div className="contact-links">
            <ul>
              <li data-aos="fade-right">
                <a
                  href="https://www.facebook.com/cynthia.inga.77/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconContext.Provider
                    value={{ className: 'contact-link-icon' }}
                  >
                    <FiFacebook />
                  </IconContext.Provider>
                </a>
              </li>
              <li data-aos="fade-right">
                <a
                  href="https://www.instagram.com/candy_i99/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconContext.Provider
                    value={{ className: 'contact-link-icon' }}
                  >
                    <FiInstagram />
                  </IconContext.Provider>
                </a>
              </li>
              <li data-aos="fade-right">
                <a href="https://github.com/cynthiainga" target="_blank" rel="noreferrer">
                  <IconContext.Provider
                    value={{ className: 'contact-link-icon' }}
                  >
                    <FiGithub />
                  </IconContext.Provider>
                </a>
              </li>
              <li data-aos="fade-right">
                <a href="https://twitter.com/CynthiaInga_C" target="_blank" rel="noreferrer">
                  <IconContext.Provider
                    value={{ className: 'contact-link-icon' }}
                  >
                    <FiTwitter />
                  </IconContext.Provider>
                </a>
              </li>
              <li data-aos="fade-right">
                <a
                  href="https://www.linkedin.com/in/cynthia-inga/"
                  target="_blank"
                  rel="noreferrer"
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

        <div className="contact-form" data-aos="fade-left">
          <form onSubmit={handleSubmit}>
            <Input placeholder="Name" name="name" errors={state.errors} />
            <Input
              placeholder="Email address"
              name="email"
              errors={state.errors}
            />
            <Input placeholder="Subject" name="subject" errors={state.errors} />
            <Texterea
              placeholder="Message"
              name="message"
              errors={state.errors}
            />
            <SubmitBtn message="Send" className="submit-bnt" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
