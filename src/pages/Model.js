import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

//Components
import ScrollForMore from "../components/scrollForMore";
//Ease
const transition = { duration: 1.4, ease: [0.6, -0.01, 0.95, 0.9] };

const firstName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

const Model = ({ imageDetails }) => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const [canScroll, setCanScroll] = useState(false);

  console.log("imageDetails", imageDetails);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);

  return (
    <motion.div
      onAnimationComplete={() => setCanScroll(true)}
      className="single"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="container fluid">
        <div className="row center top-row">
          <div className="top">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.2, ...transition },
              }}
              className="details"
            >
              <div className="location">
                <span>9.0765° N</span>
                {/* <span>7.3986° E</span> */}
              </div>
              <div className="">7.3986° E</div>
            </motion.div>
            <motion.div className="model">
              <motion.span className="first" variants={firstName}>
                <motion.span variants={letter}>A</motion.span>
                <motion.span variants={letter}>d</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>n</motion.span>
                <motion.span variants={letter}>n</motion.span>
                <motion.span variants={letter}>a</motion.span>
                {/* <motion.span variants={letter}>n</motion.span> */}
              </motion.span>
              <motion.span className="last" variants={lastName}>
                <motion.span variants={letter}>E</motion.span>
                <motion.span variants={letter}>l</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>j</motion.span>
                <motion.span variants={letter}>e</motion.span>
              </motion.span>
            </motion.div>
          </div>
        </div>
        <div className="row bottom-row">
          <div className="bottom">
            <motion.div className="image-container-single">
              <motion.div
                initial={{
                  y: "-50%",
                  width: imageDetails.width,
                  height: imageDetails.height,
                }}
                animate={{
                  y: 0,
                  width: "100%",
                  height: window.innerWidth > 1440 ? 800 : 400,
                  transition: { delay: 0.2, ...transition },
                }}
                className="thumbnail-single"
              >
                <motion.div
                  className="frame-single"
                  whileHover="hover"
                  transition={transition}
                >
                  <motion.img
                    src={require("../images/yasmeen.png")}
                    alt="an image"
                    style={{ scale: scale }}
                    initial={{ scale: 1.0 }}
                    animate={{
                      transition: { delay: 0.2, ...transition },
                      y: window.innerWidth > 1440 ? -1200 : -600,
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          <ScrollForMore />
        </div>
      </div>
      <div className="detailed-information">
        <div className="container">
          <div className="row">
            <h2 className="title">
              "Give me nothing, & <br /> I'll still produce a work of art"
              <h5> - Ada</h5>
            </h2>

            <p>
              Adanna Eleje, a Nigerian artist, skillfully captures the beauty
              inherent in the world—whether it be in the form of individuals or
              landscapes. Her aspirations are threefold: to be, to see, and to
              pursue everything that resonates with her innermost self. Adanna
              discovers reflections of herself in every person and element she
              encounters. Committed to refining her skills, she channels
              creativity into her work, intertwining her expressions with the
              rich tapestry of her Nigerian culture. Through her lens, she
              navigates the complexities of existence, acknowledging the paradox
              of conveying thoughts within the cultural context. Despite
              grappling with uncertainty and a sense of detachment, Adanna finds
              connection in the midst of chaos, questioning the authenticity of
              life itself.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Model;
