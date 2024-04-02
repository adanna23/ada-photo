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

//import css
import "./css/Afikpo.css";

const Afikpo = () => {
  return (
    <div className="afikpo-content">
      <div>
        <h1> AFIKPO </h1>
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
          <b></b>
        </p>
        <div className="afikpo-container">
          <Link to="/">
            <div
              className="afikpo-container--element"
              style={{
                backgroundImage: `url(${a1})`,
                objectFit: "contain",
                height: "600px",
                width: "600px",
              }}
            >
              <div className="afikpo_title">Ndibe Beach</div>
              <div className="afikpo_id">
                <span> Dec, 23</span>
              </div>
            </div>
          </Link>

          <Link to="/">
            <div
              className="afikpo-container--element"
              style={{
                backgroundImage: `url(${a2})`,
                objectFit: "contain",
                height: "600px",
                width: "600px",
              }}
            >
              <div className="afikpo_title">Ndibe Beach</div>
              <div className="afikpo_id">
                <span> Dec, 23</span>
              </div>
            </div>
          </Link>

          <Link to="/">
            <div
              className="afikpo-container--element"
              style={{
                backgroundImage: `url(${a3})`,
                objectFit: "contain",
                height: "600px",
                width: "600px",
              }}
            >
              <div className="afikpo_title">Ndibe Beach</div>
              <div className="afikpo_id">
                <span> Dec, 23</span>
              </div>
            </div>
          </Link>

          <Link to="/">
            <div
              className="afikpo-container--element"
              style={{
                backgroundImage: `url(${a4})`,
                objectFit: "contain",
                height: "600px",
                width: "600px",
              }}
            >
              <div className="afikpo_title">Ndibe Beach</div>
              <div className="afikpo_id">
                <span> Dec, 23</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Afikpo;
