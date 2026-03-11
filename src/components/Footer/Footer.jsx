import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer-main container-fluid">
        <div className="container-fluid px-5">
          <div className="row align-items-end">
            {/* LEFT SECTION */}
            <div className="col-lg-4 footer-left d-flex flex-column">
              <img
                src="loksuja-logo.png"
                alt="Lok Sujag"
                className="footer-logo"
              />

              <p className="footer-text">
                A digital news media platform of Pakistanis living in Pakistan
                and across the world and striving for a democratic, peaceful,
                and prosperous Pakistan
              </p>

              <div className="social-icons mt-auto">
                <FaFacebookF />
                <FaInstagram />
                <FaTwitter />
                <FaLinkedinIn />
              </div>
            </div>
         
            {/* MIDDLE LINKS */}
            <div className="col-lg-2 col-md-6 footer-links">
              <ul>
                <li>About us</li>
                <li>Contact us</li>
                <li>Code of conduct</li>
                <li>Writers</li>
                
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <ul>
                <li>Jobs</li>
                <li>Privacy policy</li>
                <li>Terms of use</li>
                <li>Site map</li>
              </ul>
            </div>

            {/* RIGHT SECTION */}
            <div className="col-lg-4 footer-newsletter">
              <h4>Join Lok Sujag Community</h4>

              <p>Enter your email below to join our community.</p>

              <div className="newsletter-box">
                <input type="email" placeholder="Your Email Address" />

                <button>JOIN</button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* COPYRIGHT BAR */}

      <div className="footer-bottom">
        Copyright © 2026. loksujag. All rights reserved.
      </div>
    </>
  );
};
export default Footer;
