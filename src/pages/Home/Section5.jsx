import React, { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";

const Section5 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <section className="padding contactform">
      <Container>
        <Row>
          <Col lg="8" className=" mx-auto text-center">
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
              Contact Us
            </h2>

            <p className="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
              iusto! Quod recusandae
            </p>
          </Col>
        </Row>

        <Row>
          <Col lg="10" className="mx-auto text-center">
            <Form className="formbox mt-5" onSubmit={handleSubmit}>
              <Form.Group className="formfield">
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>

              <Form.Group className="formfield">
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>

              <Form.Group className="formfield">
                <Form.Control
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                />
              </Form.Group>

              <Form.Group className="formfield">
                <Form.Select
                  name="licenseType"
                  value={formData.licenseType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select license type</option>
                  <option value="free">Free</option>
                  <option value="standard">Standard</option>
                  <option value="enterprise">Enterprise</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="w-100 mb-4">
                <Form.Control
                  as="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Type your message here..."
                />
              </Form.Group>
              <Button className="submitbtn mx-auto" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section5;
