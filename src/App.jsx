import React from "react";
import "./App.css";
import bg1 from "./assets/bg1.jpg";

const App = () => {
  return (
    <>
      <div>
        <section>
          <div id="upperFlex">
            <ul>
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
            <p>
              Ready to Earn Extra Cash? Give Life. Get Paid. We’re Open and
              Ready to Welcome New Donors!
            </p>
          </div>
          <nav id="nav">
            <div id="navdiv">
              <div id="logo">
                <a className="logo" href="">
                  Logo
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
      <div id="sec2">
        <div id="block1">
          <h1>GIVE Life</h1>
          <p>Lives Depend on Plasma Therapies. Become a Donor and Get Paid.</p>
        </div>
      </div>
    </>
  );
};

export default App;
