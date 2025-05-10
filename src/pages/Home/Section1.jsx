import { useState } from "react";
import { Col, Container, Row, Carousel } from "react-bootstrap";

import rightimg from "../../assets/banner-right-image.png";

function Section1() {
  const slides = [
    {
      maintitle: "Welcome to SoftSell",
      title: "Build <em>your website</em> the best in <span>SEO</span>",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quasi dolores provident cupiditate eum.",
      buttontext: "Get a Quote",
    },
    {
      maintitle: "Online Marketing",
      title: "Get the <em>best ideas</em> for <span>your website</span>",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quasi dolores provident cupiditate eum.",
      buttontext: "Get a Quote",
    },
    {
      maintitle: "Video Tutorials",
      title: "Watch <em>our videos</em> for your <span>projects</span>",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quasi dolores provident cupiditate eum.",
      buttontext: "Get a Quote",
    },
  ];

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="main-banner hero_section">
      <Container>
        <Row>
          <Col lg="12">
            <Row className="align-items-center">
              <Col lg="6">
                <div className="position-relative">
                  <Carousel
                    activeIndex={index}
                    onSelect={handleSelect}
                    interval={2000}
                    className="align-self-left left-content "
                  >
                    {slides.map((slide, i) => (
                      <Carousel.Item key={i}>
                        <h6>{slide.maintitle}</h6>
                        <h2 dangerouslySetInnerHTML={{ __html: slide.title }} />
                        <p className="para_text">{slide.para}</p>
                        <a href="#" className="contact_now">
                          {slide.buttontext}
                        </a>
                      </Carousel.Item>
                    ))}
                  </Carousel>

                  <div className="indiator">
                    {slides.map((_, i) => (
                      <span
                        key={i}
                        className={`custom-indicator ${
                          index === i ? "active" : ""
                        }`}
                        onClick={() => setIndex(i)}
                      >
                        {i + 1}
                      </span>
                    ))}
                  </div>
                </div>
              </Col>
              <Col lg="6" className="d-none d-lg-block" data-aos="fade-left">
                <div>
                  <img src={rightimg} alt=" " className="img-fluid" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Section1;
