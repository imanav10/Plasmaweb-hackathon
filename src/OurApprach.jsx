import React from "react";
import "./App.css";
import img1 from "./assets/merimg.png";
import spark from "./assets/spark.svg";

const App = () => {
  return (
    <>
      <div>
        <section>
          <div id="upperFlex">
            <ul id="forLap">
              <li>
                <a target="blank" href="https://forms.gle/7YuTKuQ32jxHxksj6">
                  Schedule a Appointment
                </a>
              </li>
              <li>
                <a href="">Call Us</a>
              </li>
              <li>
                <a href="">Location</a>
              </li>
            </ul>
          </div>
          <div id="label">
            <p>We’re Open and Ready to Welcome New Donors!</p>
          </div>
          <nav id="nav">
            <div id="navdiv">
              <div id="logo">
                <a className="logo" href="">
                  <img id="mainlogo" src={spark} alt="" />
                </a>
              </div>
              <div id="navEle">
                <ul>
                  <li>
                    <a href="<Page />">Use of plasma</a>
                  </li>
                  <li>
                    <a href="">Plasma Defined</a>
                  </li>
                  <li>
                    <a href="">Our Approach</a>
                  </li>
                  <li>
                    <a
                      target="blank"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSftNZednySh_dqiyURpmuv_JACm_4hIPGR7kswiIU0ROAbXIA/viewform?usp=sf_link"
                    >
                      Become a Donor
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </section>
      </div>
      <div id="lmao" className="hero">
        <div>
          <img src={img1} id="img2" alt="" />
        </div>
      </div>
      <div id="sec5out">
        <div id="sec5">
          <h1>Thanks For Visiting </h1>
        </div>
      </div>
    </>
  );
};

export default App;
