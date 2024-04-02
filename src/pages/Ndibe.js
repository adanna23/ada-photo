import React from "react";
import { Link } from "react-router-dom";
import n1 from "../images/beach.jpg";
import n2 from "../images/joy.jpg";
import n3 from "../images/quote.jpg";
import n4 from "../images/bbz.jpg";

//import arrows
import topleft from "../images/Frame - 6.png";
import topright from "../images/Frame - 4.png";
import bottomright from "../images/Frame - 5.png";
import bottomleft from "../images/Frame - 2.png";
import plus from "../images/Center of Frame.png";

import {
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaSearchLocation,
} from "react-icons/fa";

//import css
import "./css/collections.css";

const Nsukka = () => {
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

export default Nsukka;
