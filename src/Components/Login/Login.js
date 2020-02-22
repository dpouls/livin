import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";
import axios from "axios";
import ls from "local-storage";
const Login = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const goTo = (e) => {
    const noToggle = '.login-modal, .login-input, .login-button'
    console.log(e.target)
    if(!e.target.matches(noToggle)){
        props.toggleLogin()
    }
  }

  const handleSubmit = e => {
    console.log("hit");
    e.preventDefault();
    axios.post("/auth/login", { username, password }).then(
      res => {
        ls.set("id", res.data.id);
        ls.set("username", res.data.username);
        props.toggleLogin()
        // props.history.push('/')
      }
      //  (res) => res.status === 202 ? props.history.push('/') : null
    );
  };

  return (
    <div onClick={(e) => goTo(e)}  className="login-container">
      {/* <div > */}
      <form className="login-modal" action="">
        {/* <h1>{ls.get("username") || "not logged in"}</h1> */}
        <input
          className='login-input'
          name="username"
          placeholder="USERNAME"
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          onSubmit={e => handleSubmit(e)}
          required
        />

        <input
          className='login-input'
          name="password"
          placeholder="PASSWORD"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          onSubmit={e => handleSubmit(e)}
          required
        />

        <button className='login-button' onClick={e => handleSubmit(e)}>LOGIN</button>
      </form>
      {/* </div> */}
    </div>
  );
};
export default withRouter(Login);
