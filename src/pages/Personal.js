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
import "./css/Style1.css";

const personal = () => {
  return (
    <div className="main-content">
      <div>
        <h1>COLLECTION</h1>
      </div>
      <div className="no-contain">
        <div id="one">
          <p className="number">01</p>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            illum aspernatur officiis quisquam, illo earum consectetur ex
            eligendi veritatis dolores ullam odit, commodi est adipisci vero
            fugit, similique rem corporis!
          </p>
          <div id="img">
            <Link to="/Ndibe">
              <img src={p1} alt="collection" className="ihu" />
            </Link>
            <p>Ndibe Beach '23</p>
            <p>5° 50' 34" N , 7° 56' 50" E </p>
          </div>
        </div>
        <div id="one">
          <p className="number">02</p>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione et
            quidem odio consectetur ipsam incidunt veritatis rem! Distinctio
            voluptatibus blanditiis fugiat expedita, laboriosam, illum quos ipsa
            excepturi pariatur at deserunt?
          </p>
          <div id="img">
            <Link to="/afikpo">
              <img src={p2} alt="ihunanya" className="ihu" />
            </Link>
            <p>AFIKPO , EBONYI '24</p>
            <p>5.9054° N , 7.9375° E</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default personal;
