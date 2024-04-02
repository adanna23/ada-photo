import React from "react";

import { Link } from "react-router-dom";
import exb1 from "../images/mask2.jpg";
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

const exhibitions = () => {
  return (
    <div className="main-content">
      <div>
        <h1>EXHIBITIONS</h1>
      </div>
      <div className="no-contain">
        <div id="one">
          <p className="number">01</p>
          <p className="text">
            Derived from the Igbo word meaning "to love," Ihunanya embodies the
            profound connection between seeing and being loved. <br /> In a
            world where visibility is often equated with validation and
            understanding, this exhibition seeks to illuminate the beauty and
            significance of being seen. <br /> Through captivating imagery and
            evocative storytelling, Ihunanya invites viewers on a journey of
            discovery and connection, where each photograph <br />
            becomes a testament to the power of love and appreciation.
          </p>
          <div id="img">
            <Link to="/Ihunanya">
              <img src={exb1} alt="ihunanya" className="ihu" />
            </Link>
            <p>IHUNANYA '24</p>
          </div>
        </div>
        <div id="one">
          <p className="number">02</p>
          <p className="text">
            Derived from the Igbo word meaning "to love," Ihunanya embodies the
            profound connection between seeing and being loved. <br /> In a
            world where visibility is often equated with validation and
            understanding, this exhibition seeks to illuminate the beauty and
            significance of being seen. <br /> Through captivating imagery and
            evocative storytelling, Ihunanya invites viewers on a journey of
            discovery and connection, where each photograph <br />
            becomes a testament to the power of love and appreciation.
          </p>
          <div id="img">
            <Link to="/Ihunanya">
              <img src={exb1} alt="ihunanya" className="ihu" />
            </Link>
            <p>IHUNANYA '24</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default exhibitions;
