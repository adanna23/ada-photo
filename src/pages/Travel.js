import React from "react";
import { Link } from "react-router-dom";
import travel1 from "../images/ca.jpg";
import travel2 from "../images/lo.jpg";
import travel3 from "../images/ct.jpg";

import {
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaSearchLocation,
} from "react-icons/fa";

//import css
import "./css/Style1.css";

const Travel = () => {
  return (
    <div className="main-content">
      <div>
        <h1>TRAVEL</h1>
      </div>
      <div className="no-contain">
        <div id="one">
          <p className="number">01</p>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fuga,
            quae necessitatibus quas ut dolore quasi ipsa natus unde quaerat
            iure quo consequatur ad quisquam cupiditate consequuntur ratione
            maxime quidem.
          </p>
          <div id="img">
            <Link to="/">
              <img src={travel1} alt="collection" className="ihu" />
            </Link>
            <div className="location_title">Toronto, CA</div>
            <div className="location_id">
              <span>April '23</span>
            </div>
          </div>
        </div>
        <div id="one">
          <p className="number">02</p>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fuga,
            quae necessitatibus quas ut dolore quasi ipsa natus unde quaerat
            iure quo consequatur ad quisquam cupiditate consequuntur ratione
            maxime quidem.
          </p>
          <div id="img">
            <Link to="/">
              <img src={travel2} alt="ihunanya" className="ihu" />
            </Link>
            <div className="location_title">London, UK</div>
            <div className="location_id">
              <span>Summer '21</span>
            </div>
          </div>
        </div>
        <div id="one">
          <p className="number">03</p>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fuga,
            quae necessitatibus quas ut dolore quasi ipsa natus unde quaerat
            iure quo consequatur ad quisquam cupiditate consequuntur ratione
            maxime quidem.
          </p>
          <div id="img">
            <Link to="/">
              <img src={travel3} alt="collection" className="ihu" />
            </Link>
            <div className="location_title">Storrs, CT</div>
            <div className="location_id">
              <span>April '23</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;
