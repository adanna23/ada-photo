import React from "react";
import { Link } from "react-router-dom";
import p1 from "../images/beach.jpg";
import p2 from "../images/joy.jpg";
import p3 from "../images/hq.jpg";
import p4 from "../images/quote.jpg";
import p5 from "../images/mask.jpg";
import p6 from "../images/bbz.jpg";

import {
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaSearchLocation,
} from "react-icons/fa";

//import css
import "./css/Personal.css";

const personal = () => {
  return (
    <div className="personal-content">
      <div>
        <h1>PERSONAL PROJECTS</h1>
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
            I share a curated collection of photography projects close to my
            heart. <br />
            Here, you'll find a glimpse into my creative journey, as I explore
            themes, concepts, and stories that resonate deeply with me.
            <br />
            From intimate portraits to thought-provoking conceptual series, each
            project represents a unique expression of my vision and artistic
            sensibility. <br />
            Through these projects, I aim to delve into the depths of human
            experience, capture fleeting moments of beauty, and spark meaningful
            conversations.
          </b>
        </p>
        <div className="personal-wrapper">
          <Link to="/ndibe">
            <div
              className="personal-container--element"
              style={{
                backgroundImage: `url(${p1})`,
                objectFit: "contain",
                height: "600px",
                width: "600px",
              }}
            >
              <div className="personal_title">Ndibe Beach</div>
              <div className="personal_id">
                <span> 5° 50' 34" N ,</span>
                <span> 7° 56' 50" E </span>
              </div>
            </div>
          </Link>

          {/* <Link to="/" className="personal-polaroid">
            <div
              className="personal-container--element"
              style={{
                backgroundImage: `url(${p2})`,
                objectFit: "contain",
                height: "600px",
                width: "600px",
              }}
            >
              <div className="personal_title">Nsukka Beach</div>
              <div className="personal_id">
                <span> 6° 51' 28.188" N ,</span>
                <span> 7° 23' 44.772" E </span>
              </div>
            </div>
          </Link> */}

          <Link to="/afikpo" className="personal-polaroid">
            <div
              className="personal-container--element"
              style={{
                backgroundImage: `url(${p3})`,
                objectFit: "contain",
                height: "600px",
                width: "600px",
              }}
            >
              <div className="personal_title">Afikpo, Ebonyi</div>
              <div className="personal_id">
                <span> 5.9054° N ,</span>
                <span> 7.9375° E</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default personal;
