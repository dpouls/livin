import React, { useState, useEffect } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import ls from "local-storage";
import Axios from "axios";

const Header = () => {
  const [login, toggleLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false)
  // useEffect(() => {

  // },[username.length])
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

          {ls.get('username') ? (
            <Link
              onClick={() => Axios.post("/auth/logout").then(ls.clear).then(() => setLoggedIn(false))}
              className="footer-links"
            >
              LOGOUT
            </Link>
          ) : (
            <Link
              // to="/login"
              onClick={() => toggleLogin(!login)}g
              className="footer-links"
            >
              LOGIN
            </Link>
          )}
        </div>
      </div>
      {login ? <Login setLoggedIn={setLoggedIn} toggleLogin={toggleLogin} /> : null}
    </div>
  );
};

export default Header;
