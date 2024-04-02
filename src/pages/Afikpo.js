import React from "react";
import { Link } from "react-router-dom";
import a1 from "../images/hq.jpg";
import a2 from "../images/mask.jpg";
import a3 from "../images/dive.jpg";
import a4 from "../images/j.jpg";

import {
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaSearchLocation,
} from "react-icons/fa";

//import arrows
import topleft from "../images/Frame - 6.png";
import topright from "../images/Frame - 4.png";
import bottomright from "../images/Frame - 5.png";
import bottomleft from "../images/Frame - 2.png";
import plus from "../images/Center of Frame.png";

//import css
import "./css/collections.css";

const Afikpo = () => {
  return (
    <div className="main-collection">
      <div id="top">
        <img src={topleft} alt="left" className="left" />
        <img src={topright} alt="right" className="right" />
      </div>
      <div id="cam-shot">
        <h1>SHOT BY ADA</h1>
      </div>
      <div id="cam-middle">
        <img src={plus} alt="plus" className="plus" />
        <h3>Ndibe '23</h3>
        <p>To be Loved is to be seen, and to be seen is to be understood.</p>
      </div>
    </div>
  );
};

export default Afikpo;
