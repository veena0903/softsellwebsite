import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import testimonial1 from "../../assets/testi-1.png";
import testimonial2 from "../../assets/testi-2.png";
import testimonial3 from "../../assets/testi-3.png";

const mockData = [
  {
    image: testimonial1,
    authorname: "Ernest Smith",
    authorposition: `Developer at Unixity`,
    authortext:
      "Outstanding dedication to excellence, exceptional support received. Impressive service!",
  },
  {
    image: testimonial2,
    authorname: "Stella Smith",
    authorposition: `Engineer at Unify`,
    authortext:
      "Expertise made all the difference, absolute pleasure to work with. Exceeded our expectations.",
  },
  {
    image: testimonial3,
    authorname: "Thomas Smith",
    authorposition: `Designer at Converta`,
    authortext:
      "I highly recommend this agency. Testing for our project was done everything top-notch",
  },
];

function Section4() {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className=" mb-5 mx-auto text-center">
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
              Testimonials
            </h2>

            <p className="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
              iusto! Quod recusandae
            </p>
          </Col>
        </Row>

        <Row>
          {mockData.map((testiData, index) => (
            <Col
              md={6}
              lg={4}
              className="mb-4 mb-md-0"
              key={index}
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div
                className="inner-box"
                data-aos="fade-up"
                data-aos-duration="200"
              >
                <div className="author">
                  <img src={testiData.image} className="img-fluid" alt="text" />
                  <div className="author-data">
                    <h5 className="name">{testiData.authorname}</h5>
                    <div className="position">{testiData.authorposition}</div>
                    <div className="stars">
                      <svg
                        width="95"
                        height="13"
                        viewBox="0 0 95 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.82 12.78L6.68 10.7L2.53 12.74L3.23 8.17L0 4.84L4.57 4.1L6.73 0L8.85 4.12L13.42 4.9L10.16 8.2L10.82 12.78Z"
                          fill="#FFBB00"
                        ></path>
                        <path
                          d="M31.2099 12.78L27.0699 10.7L22.9099 12.74L23.6199 8.17L20.3899 4.84L24.9599 4.1L27.1199 0L29.2399 4.12L33.8099 4.9L30.5499 8.2L31.2099 12.78Z"
                          fill="#FFBB00"
                        ></path>
                        <path
                          d="M51.59 12.78L47.46 10.7L43.3 12.74L44 8.17L40.77 4.84L45.34 4.1L47.5 0L49.62 4.12L54.19 4.9L50.93 8.2L51.59 12.78Z"
                          fill="#FFBB00"
                        ></path>
                        <path
                          d="M71.9799 12.78L67.8399 10.7L63.6799 12.74L64.3899 8.17L61.1599 4.84L65.7299 4.1L67.8899 0L70.0099 4.12L74.5799 4.9L71.3099 8.2L71.9799 12.78Z"
                          fill="#FFBB00"
                        ></path>
                        <path
                          d="M92.36 12.78L88.22 10.7L84.07 12.74L84.77 8.17L81.54 4.84L86.11 4.1L88.27 0L90.39 4.12L94.96 4.9L91.7 8.2L92.36 12.78Z"
                          fill="#FFBB00"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="text text-gray">{testiData.authortext}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Section4;
