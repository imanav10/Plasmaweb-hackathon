import React from "react";
import "./WhatWeDo.css";
import { motion } from "framer-motion";

export default function WhatWeDo() {
  return (
    <>
      {/* <div className='master-container'> */}
      <div className="container">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5, type: "spring" }}
        >
          What Is Plasma?
        </motion.h1>
        <div className="imgs">
          <div className="img-ind" id="img1"></div>

          <div className="img-ind" id="img4"></div>

          <div className="img-ind" id="img3"></div>
        </div>

        <motion.div
          className="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, type: "spring" }}
        >
          <div id="para1" className="content-ind">
            <p>
              Plasma is a gold-colored liquid that makes up about 55% of your
              blood. It is the often forgotten part of blood. White blood cells,
              red blood cells, and platelets are important to body function. But
              plasma also plays a key role. This fluid carries the blood
              components throughout the body.
            </p>
          </div>

          <div id="para2" className="content-ind">
            <p>
              It is essential for maintaining proper body function and
              facilitates the movement of hormones, nutrients, enzymes,
              proteins, and other important nutrients to the parts of your body
              that need it most. It also helps the lungs during the exchange of
              oxygen and carbon dioxide.
            </p>
          </div>

          <div id="para3" className="content-id">
            <p>
              Plasma is a critical part of the treatment for many serious health
              problems. This is why there are blood drives asking people to
              donate blood plasma.
            </p>
          </div>
        </motion.div>
        <div className="text2">
          <h2 id="text2-ind">What does Plasma do?</h2>
          <p id="content2">
            Plasma does so many important things for your body, like:
          </p>
          <ul className="list">
            <li>
              <b>Redistributing water where your body needs it</b>
            </li>
            <li>
              <b>Supporting blood vessels from collapsing or clogging</b>
            </li>
            <li>
              <b>Maintaining blood pressure and circulation</b>
            </li>
            <li>
              <b>Regulating body temperature</b>
            </li>
            <li>
              <b>Removing waste from cells</b>
            </li>
            <li>
              <b>Helping clot blood</b>
            </li>
            <li>
              <b>
                Defending against bacterial, viral, fungal, and parasitic
                infections
              </b>
            </li>
          </ul>
        </div>
        <div className="img_below"></div>

        <div className="text3">
          <div className="img_last">
            <div id="i1" className="i"></div>
            <div id="i2" className="i"></div>
          </div>
          <div className="content3">
            <h2 id="text3-ind">How does donating</h2>
            <h2 id="text3-ind2">plasma work</h2>
            <div className="para_last">
              <p id="para">
                Plasma is donated through a process called plasmapheresis.
                Plasmapheresis is a safe and medically monitored process that
                separates and collects the plasma from your blood. While it may
                sound intense, it’s like donating blood and only requires a
                brief needle stick. Instead of donating all blood components,
                the unused components are returned to your body with a sterile
                saline solution, so you can begin replacing what you’ve donated.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
