import React, { useRef } from "react";

import { withRouter } from "react-router-dom";

import "./Landing.scss";
import { useState } from "react";
// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

function Landing(props) {
  const scrollToRef = ref => {
    console.log("str hit");
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  const welcome = useRef(null);
  const blog = useRef(null);
  const video = useRef(null);
  const gear = useRef(null);
  const idk = useRef(null);

  return (
    <div className="landing-container">
      <div
        ref={welcome}
        onMouseEnter={() => scrollToRef(welcome)}
        className="home__welcome-container"
      >
        <div>
          <h1>LIVIN</h1>
        </div>
      </div>
      <div
        ref={blog}
        onMouseEnter={e => {
          scrollToRef(blog);

          console.log("onwheel hit");
        }}
        className="home__blog-container"
      >
        <div className="blog-content">
          <h1>WESTON POULSON</h1>
          <p>
            Who is Weston Poulson? Follow this hardcore Under Armour athlete and
            backcountry bowhunter’s journey right here…{" "}
            <button onClick={() => props.history.push("/blog")}>
              READ MORE >
            </button>
          </p>
        </div>
      </div>
      <div
        ref={video}
        onMouseEnter={() => scrollToRef(video)}
        className="home__video-container"
      >
        <div className="video-content">
          <h1>VIDEO</h1>
          <iframe
            src="https://www.youtube.com/embed/E7wJTI-1dvQ"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          />
          <p>
            See what's been going on...{" "}
            <button onClick={() => props.history.push("/videos")}>
              VIDEOS >
            </button>{" "}
          </p>
        </div>
      </div>
      <div
        ref={gear}
        onMouseEnter={() => scrollToRef(gear)}
        className="home__gear-container"
      >
        <div className="gear-content">
          <h1>
            GEAR </h1>
            <p>
              Make sure you go to the hill prepared. See what Weston uses when
              he's in the field.{" "}
            </p>
            <button onClick={() => props.history.push("/blog")}>
              GO TO GEAR >
            </button>
          
        </div>
      </div>
      <div
        ref={idk}
        onMouseEnter={() => scrollToRef(idk)}
        className="home__social-container"
      >
        <div className='social-content'>
          <h1>LET'S GET SOCIAL</h1>
          <div className='social-icons-container'>
          <p></p><i class="fab fa-instagram"></i>
          <i class="fab fa-youtube"></i>
          <i class="fab fa-facebook"></i>
          <i class="fab fa-twitter-square"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Landing);
