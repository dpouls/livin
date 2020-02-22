import React, {useState, useEffect} from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Login from '../Login/Login'

const Header = () => {
    const [login, toggleLogin] = useState(false)
  return (
    <div>

      
    <div className="header-container">
      <div className="header-title">LIVIN</div>
      <div className="header-links-container">
        <Link className="header-links" to="/">
          HOME
        </Link>
        <Link className="header-links" to="/blog">
          BLOG
        </Link>
        <Link className="header-links" to="/gear">
          GEAR
        </Link>
        <Link className="header-links" to="/video">
          VIDEO
        </Link>
        {/* <Link className='header-links' to='/socialmedia'>SOCIAL MEDIA</Link> */}
        <Link 
        // to="/login"
        onClick={() => toggleLogin(!login)}
        className="footer-links">
          LOGIN
        </Link>
      </div>
    </div>
    {login ? <Login toggleLogin={toggleLogin} /> : null}
    </div>
  );
};

export default Header;
