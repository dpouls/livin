import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className='footer-links-container'>
        <Link className='footer-links'>Log in</Link>
      </div>
    </div>
  );
};

export default Footer;
