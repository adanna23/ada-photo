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
    <div className="exhibition-content">
      <div>
        <h1>EXHIBITIONS</h1>
        <Link
          className="ig-model"
          to="https://www.instagram.com/365da.ze/?igsh=MXJxNWFiZDBiaHo0aQ%3D%3D&utm_source=qr"
        >
          <FaInstagram
            size={30}
            style={{ color: "#000000", marginRight: "2rem" }}
          />
        </Link>
        {/* <p>
          <b>
            HEIGHT: 192 CM COLOR: NOIR EYES: BLACK WAIST: 32 CM CHEST: 32 CM
            SHOE:45
          </b>
        </p> */}
        <div className="exhibition-wrapper">
          <Link to="/Ihunanya">
            <div
              className="exhibition-container--element"
              alt="ihunanya"
              style={{ backgroundImage: `url(${exb1})`, objectFit: "contain" }}
            >
              <span>ịhụnanya</span>
            </div>
          </Link>

          {/* <Link to="/Ihunanya">
            <div
              className="exhibition-container--element"
              alt="ihunanya"
              style={{ backgroundImage: `url(${exb1})`, objectFit: "contain" }}
            >
              <span>ịhụnanya</span>
            </div>
          </Link>

          <Link to="/Ihunanya">
            <div
              className="exhibition-container--element"
              alt="ihunanya"
              style={{ backgroundImage: `url(${exb1})`, objectFit: "contain" }}
            >
              <span>ịhụnanya</span>
            </div>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default exhibitions;
