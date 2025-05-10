import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import chooseus from "../../assets/chooseus.png";
import global from "../../assets/global-marketing.png";
import award from "../../assets/award.png";

function Section3() {
  return (
    <section className="padding">
      <Container>
        <Row>
          <Col md="6" lg="6" data-aos="zoom-in" data-aos-delay="0">
            <img src={chooseus} alt="why choose us" className="img-fluid" />
          </Col>
          <Col
            md="6"
            lg="6"
            className="chooseustext"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h2 className="mainheading mx-auto text-center">
              <span>
                <svg
                  aria-hidden="true"
                  class="e-font-icon-svg e-fas-spinner"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"></path>
                </svg>
              </span>
              Why Choose Us
            </h2>

            <h5 className="mb-3">The Minds Behind Your Brand’s Success</h5>
            <p className="text-gray">
              At the heart of our agency is a passion for creativity and a
              relentless drive to push boundaries. We are a team of thinkers,
              dreamers, and doers who specialize in crafting unique strategies
              bring brands.
            </p>

            <div className="icon-box d-flex gap-4 mt-4  ">
              <div className="single-icon-box text-left">
                <div className="icon">
                  <img src={global} alt="" className="img-fluid" />
                </div>
                <h4>Global Company</h4>
                <p>
                  Our great team of more than to 1400 software experts member.
                </p>
              </div>
              <div className="single-icon-box">
                <div className="icon">
                  <img src={award} alt="" className="img-fluid" />
                </div>
                <h4>Award Wining</h4>
                <p>
                  Our great team of more than to 1400 software experts member.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section3;
