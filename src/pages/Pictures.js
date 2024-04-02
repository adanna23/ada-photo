import React from "react";

//import images for exhibitions
import moon from "../images/fn.jpg";
import line from "../images/Line 7.png";

//import css
import "./css/Pictures.css";

const Pictures = () => {
  return (
    <div className="pic-container">
      <div id="b-w">
        <img src={moon} alt="moon" className="b-w" />
      </div>
      <div id="line">
        <img src="line" alt="" className="line" />
      </div>
      <div id="description">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          obcaecati eos eveniet! Vel ea debitis sunt ratione quam maiores labore
          ipsam, iusto laborum ad, quo fugit facilis quisquam at libero!
        </p>
      </div>
      <div id="color-img">
        <img src={moon} alt="moon" className="color" />
      </div>
    </div>
  );
};

export default Pictures;
