import React, {useRef} from "react";


import "./Landing.scss";
import { useState } from "react";
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

function Landing() {

const myRef = useRef(null)
const executeScroll = () => scrollToRef(myRef)
  return (
    <div className="landing-container">
      <div  className="home__welcome-container"></div>
      <div  className="home__blog-container"></div>
      <div ref={myRef} onClick={() => executeScroll(myRef)} className="home__video-container"></div>
      <div className="home__gear-container"></div>
      <div className="home__video-container"></div>
    </div>
  );
}

export default Landing;
