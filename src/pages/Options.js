import * as React from "react";

// #import images
import personal1 from "../images/polaroid_personal.png";
import personal2 from "../images/polaroid_exhibiton.png";
import personal3 from "../images/polaroid_travel.png";

//import css
import "./css/Options.css";

//import Link
import { Link } from "react-router-dom";

const Options = () => {
  return (
    <>
      <div className="grid-wrapper">
        <div
          className="grid-container--element"
          style={{ backgroundImage: `url(${personal1})` }}
        >
          <Link to="/personal" className="polaroids-personal">
            {/* <h2>PERSONAL PROJECTS</h2> */}
          </Link>
        </div>

        <div
          className="grid-container--element"
          style={{ backgroundImage: `url(${personal2})` }}
        >
          <Link to="/exhibitions" className="polaroids-exhibition">
            {/* <h2>EXHIBITIONS</h2> */}
          </Link>
        </div>

        <div
          className="grid-container--element"
          style={{ backgroundImage: `url(${personal3})` }}
        >
          <Link to="/travel" className="polaroids-travel">
            {/* <h2>TRAVEL</h2> */}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Options;
