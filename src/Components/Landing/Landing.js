import React, { useRef } from "react";

import "./Landing.scss";
import { useState } from "react";
// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

function Landing() {

  const scrollToRef = ref => {
    console.log('str hit')
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
    
    
  const welcome = useRef(null);
  const blog = useRef(null);
  const video = useRef(null);
  const gear = useRef(null);
  const idk = useRef(null);

  return (
    <div
      className="landing-container"
    >
      <div
        ref={welcome}
        onMouseEnter={() => scrollToRef(welcome)}
        className="home__welcome-container"
      >welcome</div>
      <div
        ref={blog}
        onMouseEnter={ (e) => {
         scrollToRef(blog)
         
          console.log('onwheel hit')}}
        className="home__blog-container"
      >blog</div>
      <div
        ref={video}
        onMouseEnter={() => scrollToRef(video)}
        className="home__video-container"
      >video</div>
      <div
        ref={gear}
        onMouseEnter={() => scrollToRef(gear)}
        className="home__gear-container">gear
       </div>
      <div
        ref={idk}
        onMouseEnter={() => scrollToRef(idk)}
        className="home__video-container"
      >idk</div>
    </div>
  );
}

export default Landing;
