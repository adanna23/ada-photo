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
import "./css/Travel.css";

const Travel = () => {
  return (
    <div className="travel-content">
      <div>
        <h1>TRAVEL</h1>
        <Link
          className="ig-model"
          to="https://www.instagram.com/365da.ze/?igsh=MXJxNWFiZDBiaHo0aQ%3D%3D&utm_source=qr"
        >
          <FaInstagram
            size={30}
            style={{ color: "#000000", marginRight: "2rem" }}
          />
        </Link>
        <p>
          <b>
            I invite you to embark on a visual journey through captivating
            destinations captured through my lens. <br /> As a passionate
            photographer, I strive to encapsulate the essence and beauty of each
            location, from serene beaches to bustling city streets and
            everything in between. <br />
            Through my photography, I aim to evoke a sense of wanderlust and
            inspire exploration of the world's diverse landscapes and cultures.
            <br />I hope this collection transports you to far-off places and
            ignites your sense of wanderlust.
          </b>
        </p>
        <div className="travel-wrapper">
          <div
            className="travel-container--element"
            style={{ backgroundImage: `url(${travel2})` }}
          >
            <Link to="/" className="travel-polaroid">
              {/* <h2>ịhụnanya</h2> */}
            </Link>
            <div className="location_title">London, UK</div>
            <div className="location_id">
              <span>Summer '21</span>
            </div>
          </div>
          <div
            className="travel-container--element"
            style={{ backgroundImage: `url(${travel3})` }}
          >
            <Link to="/" className="travel-polaroid">
              {/* <h2>PERSONAL PROJECTS</h2> */}
            </Link>
            <div className="location_title">Storrs, CT</div>
            <div className="location_id">
              <span>April '23</span>
            </div>
          </div>

          <div
            className="travel-container--element"
            style={{ backgroundImage: `url(${travel1})` }}
          >
            <Link to="/" className="travel-polaroid">
              {/* <h2>PERSONAL PROJECTS</h2> */}
            </Link>
            <div className="location_title">Toronto, CA</div>
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
