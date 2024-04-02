import React from "react";
import { Link } from "react-router-dom";

//import overhead banner
import Ihunanya1 from "../images/logos/ihunanyapng.png";

//import css
import "./css/Ihunanya.css";

//import fa
import {
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaSearchLocation,
} from "react-icons/fa";

//import images for exhibitions
import ihu1 from "../images/moonlight.jpg";
import ihu2 from "../images/boat.jpg";
import ihu3 from "../images/boy2.jpg";
import ihu4 from "../images/fn.jpg";
import ihu5 from "../images/msqu.jpg";
import ihu6 from "../images/finalbyz.jpg";
import ihu7 from "../images/ggirl.jpg";
import ihu8 from "../images/mask2.jpg";

const Ihunanya = () => {
  return (
    <>
      <div className="logos">
        <div className="logos-slide">
          <img src={Ihunanya1} />
          <img src={Ihunanya1} />
          <img src={Ihunanya1} />
          <img src={Ihunanya1} />
          <img src={Ihunanya1} />
          <img src={Ihunanya1} />
          <img src={Ihunanya1} />
          <img src={Ihunanya1} />
        </div>

        <div className="logos-slide">
          <img src={Ihunanya1} />
          <img src={Ihunanya1} />
          <img src={Ihunanya1} />
          <img src={Ihunanya1} />
          <img src={Ihunanya1} />
          <img src={Ihunanya1} />
          <img src={Ihunanya1} />
          <img src={Ihunanya1} />
        </div>
      </div>
      <div className="ihunanya-content">
        <div>
          <Link
            className="ig-model"
            to="https://www.instagram.com/ayomideazeem1/?igshid=MzRlODBiNWFlZA%3D%3D"
          >
            <FaInstagram
              size={30}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            />
          </Link>
          <p>
            <b>
              <span>
                ịhụnanya : To be Loved is to be seen, and to be seen is to be
                understood.
              </span>
              <br />
              Derived from the Igbo word meaning "to love," Ihunanya embodies
              the profound connection between seeing and being loved. <br /> In
              a world where visibility is often equated with validation and
              understanding, this exhibition seeks to illuminate the beauty and
              significance of being seen. <br /> Through captivating imagery and
              evocative storytelling, Ihunanya invites viewers on a journey of
              discovery and connection, where each photograph <br />
              becomes a testament to the power of love and appreciation.
            </b>
          </p>

          <div className="ihunanya-container">
            <div
              className="ihu-container--element"
              style={{
                backgroundImage: `url(${ihu1})`,
                objectFit: "contain",
                height: "600px",
                width: "600px",
              }}
            >
              <div className="ihu_title">Nsukka Beach</div>
              <div className="ihu_id">
                <span> Dec '23</span>
              </div>
            </div>

            <div
              className="ihu-container--element"
              style={{
                backgroundImage: `url(${ihu2})`,
                objectFit: "contain",
                height: "600px",
                width: "600px",
              }}
            >
              <div className="ihu_title">Serenity</div>
              <div className="ihu_id">
                <span> Dec '23</span>
              </div>
            </div>

            <div
              className="ihu-container--element"
              style={{
                backgroundImage: `url(${ihu3})`,
                objectFit: "contain",
                height: "600px",
                width: "600px",
              }}
            >
              <div className="ihu_title">Euphoria in Nsukka</div>
              <div className="ihu_id">
                <span> Dec '23</span>
              </div>
            </div>

            <div
              className="ihu-container--element"
              style={{
                backgroundImage: `url(${ihu4})`,
                objectFit: "contain",
                height: "600px",
                width: "600px",
              }}
            >
              <div className="ihu_title">Ndi Egwu Christmas</div>
              <div className="ihu_id">
                <span> Dec '23</span>
              </div>
            </div>

            <div
              className="ihu-container--element"
              style={{
                backgroundImage: `url(${ihu5})`,
                objectFit: "contain",
                height: "600px",
                width: "600px",
              }}
            >
              <div className="ihu_title">Lugulu</div>
              <div className="ihu_id">
                <span> Dec '23</span>
              </div>
            </div>

            <div
              className="ihu-container--element"
              style={{
                backgroundImage: `url(${ihu6})`,
                objectFit: "contain",
                height: "600px",
                width: "600px",
              }}
            >
              <div className="ihu_title">Life</div>
              <div className="ihu_id">
                <span> Dec '23</span>
              </div>
            </div>

            <div
              className="ihu-container--element"
              style={{
                backgroundImage: `url(${ihu7})`,
                objectFit: "contain",
                height: "600px",
                width: "600px",
              }}
            >
              <div className="ihu_title">Christmas dress</div>
              <div className="ihu_id">
                <span> Dec '23</span>
              </div>
            </div>

            <div
              className="ihu-container--element"
              style={{
                backgroundImage: `url(${ihu8})`,
                objectFit: "contain",
                height: "600px",
                width: "600px",
              }}
            >
              <div className="ihu_title">Lugulu</div>
              <div className="ihu_id">
                <span> Dec '23</span>
              </div>
            </div>

            {/* <img src={ihu2} />
            <img src={ihu3} />
            <img src={ihu4} />
            <img src={ihu5} />
            <img src={ihu6} />
            <img src={ihu7} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Ihunanya;
