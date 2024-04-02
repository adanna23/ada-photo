import React from "react";
import { Link } from "react-router-dom";

//import overhead banner
import Ihunanya1 from "../images/logos/ihunanyapng.png";

//import css
import "./css/collections.css";

//import fa
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

//import images for exhibitions
import ihu1 from "../images/moonlight.jpg";
import ihu2 from "../images/boat.jpg";
import ihu3 from "../images/boy2.jpg";
import ihu4 from "../images/fn.jpg";
import ihu5 from "../images/msqu.jpg";
import ihu6 from "../images/finalbyz.jpg";
import ihu7 from "../images/ggirl.jpg";
import ihu8 from "../images/mask2.jpg";

const Ihunanya = () => {
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
        <h3>ịhụnanya '24</h3>
        <p>To be Loved is to be seen, and to be seen is to be understood.</p>
      </div>
    </div>
  );
};

export default Ihunanya;
