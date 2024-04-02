import React from "react";
import { Link } from "react-router-dom";
import n1 from "../images/beach.jpg";
import n2 from "../images/joy.jpg";
import n3 from "../images/quote.jpg";
import n4 from "../images/bbz.jpg";

import {
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaSearchLocation,
} from "react-icons/fa";

//import css
import "./css/Ndibe.css";

const Nsukka = () => {
  return (
    <div className="nsukka-content">
      <div>
        <h1> NDIBE </h1>
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
            Ndibe beach, a serene oasis nestled in the heart of Afikpo LGA in
            Ebonyi state. As the beach of my people, Ndibe holds a special place
            in the hearts of locals and visitors alike. <br /> Here, amidst the
            shimmering sands and tranquil waters, families gather to fish, swim,
            and create cherished memories together. More than just a picturesque
            coastline, Ndibe Beach is a symbol of community unity and joy.{" "}
            <br /> It's a place where laughter fills the air, and the gentle
            lull of the waves brings a sense of peace and tranquility.
          </b>
        </p>
        <div className="nsukka-container">
          <Link to="/">
            <div
              className="nsukka-container--element"
              style={{
                backgroundImage: `url(${n1})`,
                objectFit: "contain",
                height: "600px",
                width: "600px",
              }}
            >
              <div className="nsukka_title">Ndibe Beach</div>
              <div className="nsukka_id">
                <span> Dec, 23</span>
              </div>
            </div>
          </Link>

          <Link to="/">
            <div
              className="nsukka-container--element"
              style={{
                backgroundImage: `url(${n2})`,
                objectFit: "contain",
                height: "600px",
                width: "600px",
              }}
            >
              <div className="nsukka_title">Nwa Nwoke</div>
              <div className="nsukka_id">
                <span> Dec, 23</span>
              </div>
            </div>
          </Link>

          <Link to="/">
            <div
              className="nsukka-container--element"
              style={{
                backgroundImage: `url(${n3})`,
                objectFit: "contain",
                height: "600px",
                width: "600px",
              }}
            >
              <div className="nsukka_title">Let the boys play</div>
              <div className="nsukka_id">
                <span> Dec, 23</span>
              </div>
            </div>
          </Link>

          <Link to="/">
            <div
              className="nsukka-container--element"
              style={{
                backgroundImage: `url(${n4})`,
                objectFit: "contain",
                height: "600px",
                width: "600px",
              }}
            >
              <div className="nsukka_title">Let the boys play</div>
              <div className="nsukka_id">
                <span> Dec, 23</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nsukka;
