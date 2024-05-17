import React from "react";
import Doctor from "./assets/image.jpg";
import Nurse from "./assets/blabla.jpg";
import chiko from "./assets/chiko.jpg";
import spark from "./assets/spark.svg";
import "./Page.css";

function Page() {
  return (
    <>
      <div>
        <section>
          <div id="upperFlex">
            <ul id="forLap">
              <li>
                <a href="https://forms.gle/7YuTKuQ32jxHxksj6">
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
      <div className="about-section" id="about">
        <div className="about-image-content">
          <img src={Doctor} alt="Doctor Group" className="about-image1" />
          <hr className="line" />
          <img
            src={chiko}
            id="doc2"
            alt="Doctor Group"
            className="about-image1"
          />
          <hr className="line" />
          <img
            src={Nurse}
            id="doc3"
            alt="Doctor Group"
            className="about-image1"
          />
          <hr className="line" />
        </div>
        <div className="about-text-content">
          <h3 className="about-title">
            <span>What Is Donated Plasma Used For?</span>
          </h3>
          <p className="about-description">
            For many people with rare diseases, chronic conditions, or severe
            injuries, plasma-based therapies are the only way to help them heal.
            When you donate plasma and platelets with PlasmaSource, you can rest
            easy knowing your donation goes to those who need it most. Plasma
            and its lifesaving proteins cannot be created in a lab, so hospitals
            and healthcare providers rely on a steady flow of plasma donations
            to treat their patients. With your donations, hospitals and
            physicians can effectively treat serious disorders and injuries like
            <br />
            <br />
            <ol>
              <li>
                <b className="tit">Genetic emphysema </b>
                <li>
                  A lung disease caused by damage to the small air sacs in the
                  lungs.
                </li>
              </li>
              <br />
              <li>
                <b className="tit">Hereditary angioedema </b>
                <li>
                  A disorder characterized by recurrent episodes of severe
                  swelling of the arms, legs, face, intestinal tract, and
                  airway.
                </li>
              </li>
              <br />
              <li>
                <b className="tit">Liver failure</b>
                <li>
                  A condition in which large parts of the liver become damaged
                  beyond repair and it can no longer function.
                </li>
              </li>
              <br />
              <li>
                <b className="tit">Severe burns</b>
                <li>
                  A condition in which there is a critical injury to the skin,
                  fat, muscle, or bone tissue due to heat, electricity,
                  radiation, or chemicals.
                </li>
              </li>
              <br />
              <li>
                <b className="tit">Severe infections</b>
                <li>
                  These may include infections like Severe Acute Respiratory
                  Syndrome Coronavirus 2 (SARS-CoV-2) and Coronavirus Disease-19
                  (COVID-19).
                </li>
              </li>
              <br />
              <li>
                <b className="tit">Hemophilia A</b>
                <li>
                  A hereditary genetic disorder in which the blood does not clot
                  properly. It is caused by a missing or defective blood
                  clotting factor.
                </li>
              </li>
              <br />
              <li>
                <b className="tit">Shock</b>
                <li>
                  A life-threatening condition that occurs when the body is not
                  getting enough blood flow, meaning the cells and organs are
                  not getting enough oxygen and nutrients to function properly.
                </li>
              </li>
            </ol>
          </p>

          <h4 className="elementor-heading-title elementor-size-default about-tit">
            WHAT IF MY
            <span className="titleDis titleDis-green-dark">
              {" "}
              Plasma Donation
            </span>
            <br />
            IS NOT USED RIGHT AWAY?
          </h4>
          <p className="about-description">
            Donated plasma that is not earmarked for immediate use is tested,
            transported to our state-of-the-art laboratory, and frozen within 24
            hours to preserve its integrity and valuable blood clotting factors.
            Frozen donations can be stored for up to one year and thawed as
            needed. Donated plasma that is earmarked for immediate use is tested
            and transported to our state-of-the-art laboratory or one of our
            partners across Illinois. Whether your donation is used immediately,
            or frozen for future use, it will undergo PRT (Pathogen Reduction
            Technology) to detect and remove any bacterial contaminations and
            emerging infections to help prevent transfusion-transmitted disease.
          </p>
        </div>
      </div>
    </>
  );
}

export default Page;
