import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import license from "../../assets/export-license.png";
import stamp from "../../assets/stamp.png";
import pay from "../../assets/pay.png";

const mockData = [
  {
    image: license,
    title: "Upload License",
    paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor`,
    step: "Step 1",
  },
  {
    image: stamp,
    title: "Get Valuation",
    paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor`,
    step: "Step 2",
  },
  {
    image: pay,
    title: "Get Paid",
    paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor`,
    step: "Step 3",
  },
];

function Section2() {
  return (
    <>
      <section className="step-process-area position-relative">
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
                How It Works
              </h2>

              <p className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                iusto! Quod recusandae ducimus ad officia reiciendis, eveniet
                nam obcaecati. Doloribus, maiores aperiam. Vero nam optio
                incidunt, accusantium labore molestiae aliquam!
              </p>
            </Col>
          </Row>
          <Row>
            {mockData.map((cardData, index) => (
              <Col
                md={6}
                lg={4}
                className="mb-4 mb-md-0"
                key={index}
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="steps-item text-center px-3 py-3">
                  <div className="position-relative mb-5">
                    <div className="icon">
                      <img
                        src={cardData.image}
                        className="img-fluid"
                        alt="icon"
                      />
                    </div>

                    <svg
                      className="iconbg"
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <path
                        d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z"
                        transform="translate(100 100)"
                      ></path>{" "}
                    </svg>
                  </div>

                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                  <p className="stepnum">{cardData.step}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
        <div className="dark-bg ht-bg-move"></div>
      </section>
    </>
  );
}

export default Section2;
