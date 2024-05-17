import React from "react";
import "./App.css";
import img2 from "./assets/img2.png";
import spark from "./assets/spark.svg";

const App = () => {
  return (
    <>
      <div>
        <section>
          <div id="upperFlex">
            <ul id="forLap">
              <li>
                <a href="">Schedule a Appointment</a>
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
                    <a>Why Plasma ▼</a>
                  </li>
                  <li>
                    <a href="">Become a Donor</a>
                  </li>
                  <li>
                    <a href="">Current Donors</a>
                  </li>
                  <li>
                    <a href="">About Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </section>
      </div>
      <div id="sec2out">
        <div id="sec2">
          <div id="block1">
            <h1>GIVE Life</h1>
            <p>
              Lives Depend on Plasma Therapies. Become a Donor and Get Paid.
            </p>
          </div>
        </div>
      </div>
      <div id="sec3out">
        <div id="sec3">
          <h1>WELCOME TO THE FUTURE of plasma donation.</h1>
          <p>
            Our highly skilled technicians are ready to provide donors with a
            welcoming plasma donation experience using leading-edge
            technologies, techniques, and safety protocols. At PlasmaSource,
            donations are easy, and the perfect fit for those wanting to make a
            meaningful impact on the lives of others and earn extra money.
            Here’s how to get started at our plasma donating center:
          </p>
        </div>
        <img src={img2} id="img2" alt="" />
      </div>
      <div id="sec4out">
        <div id="sec4"></div>
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
