import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaSearchLocation,
} from "react-icons/fa";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <header>
      <div className="container">
        <div className="row space-between">
          <div className="logo">
            <Link to="/">
              <b>SHOTBYADA</b>
            </Link>
          </div>
          <div className="menu">
            MENU{" "}
            <div className="dropdown onClick={handleClick}">
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                  <Link
                    className="ig-model"
                    to="https://www.instagram.com/365da.ze/?igsh=MXJxNWFiZDBiaHo0aQ%3D%3D&utm_source=qr"
                  >
                    <FaInstagram
                      size={30}
                      style={{ color: "#000000", marginRight: "2rem" }}
                    />
                  </Link>
                </li>
                {/* <li>
                  <Link to="/WomanHome">Women</Link>
                </li>
                <li>
                  <Link to="/MenHome">Men</Link>
                </li>
                <li>
                  <Link to="/WhoWeAre">About</Link>
                </li>
                <li>
                  <Link to="/ContactUs">Contact Us</Link>
                </li>
                <li>
                  <Link to="/JoinUs">Join Us</Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
