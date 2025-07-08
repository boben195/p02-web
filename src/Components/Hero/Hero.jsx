import React from "react";
import "./Hero.css";
import hero_img from "../../assets/hero.png";
const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero_content">
          <div className="hero_left">
            <h2>Unlish Premium Sound Quality</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
              repellat libero fuga nulla quos neque, quidem laboriosam, est,
              saepe nostrum excepturi?
            </p>
            <button>Shop the collection</button>
          </div>
          <div className="hero right">
            <img src={hero_img} alt="Some headphones dude" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
