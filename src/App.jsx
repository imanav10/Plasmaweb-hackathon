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
                <a target="blank" href="https://forms.gle/7YuTKuQ32jxHxksj6">
                  Schedule a Appointment
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  href="https://www.google.com/search?q=plasma+helpline+&sca_esv=0ee0280be053867a&sxsrf=ADLYWIJb_XD5VTeHhm0KNWIKbjbsZ_UeOA%3A1715948580954&ei=JExHZrboOYmz4-EP1dyq6AY&ved=0ahUKEwi2ivvM1pSGAxWJ2TgGHVWuCm0Q4dUDCBA&oq=plasma+helpline+&gs_lp=Egxnd3Mtd2l6LXNlcnAiEHBsYXNtYSBoZWxwbGluZSAyCBAhGKABGMMESJ9GUPgeWIg_cAR4AJABAJgBygGgAd0GqgEFMC40LjG4AQzIAQD4AQH4AQKYAgagAusGwgIOEAAYgAQYkQIYsQMYigXCAgUQABiABMICCxAuGIAEGMcBGK8BwgIGEAAYBxgewgIIEAAYgAQYogSYAwCIBgGSBwUxLjQuMaAH5RQ&sclient=gws-wiz-serp"
                >
                  Plasma Helpline
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  href="https://maps.app.goo.gl/SnAnadX3HrukoYh39"
                >
                  Location
                </a>
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
                    <a href="#about">Use of plasma</a>
                  </li>
                  <li>
                    <a href="#lmao">Our Approach</a>
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
    </>
  );
};

export default App;
