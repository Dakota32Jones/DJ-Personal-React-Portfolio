import { useState } from "react";
import { Container } from "react-bootstrap";
import contactImg from "../assets/images/contact-img.png";
export const Contact = () => {
  // initial state object
  const formInitialDetails = {
    firstName: "",
    lasName: "",
    email: "",
    phone: "",
    message: "",
  };
  // creating form details state
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  // submission button update to sending
  const [buttonText, setButtonText] = useState("Send");
  // update api call with an error if there's an error
  const [status, setStatus] = useState({});

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Me" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
