import React from "react";
import "./Footer.scss";
import Axios from 'axios'
import ls from 'local-storage'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className='footer-links-container'>
        <Link 
        onClick={() => Axios.post('/auth/logout').then(ls.clear)}
        className='footer-links'>LOGOUT</Link>
      </div>
    </div>
  );
};

export default Footer;
