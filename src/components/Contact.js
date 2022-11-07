import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/images/contact-img.png";
export const Contact = () => {
  // initial state object
  const formInitialDetails = {
    firstName: "",
    lastName: "",
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

  //   update form details with user input and leave the rest of the form intact. So only update the portion of the form the person is filling out
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };
  // once user submits email post response to server so we can get the contact information the user submitted.
  const handleSubmit = async (e) => {
    e.prevent.default();
    setButtonText("Sending....");
    let response = await fetch("http://localhost:5000/contact", {
      method: "Post",
      headers: {
        "Content-Type": "Application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({
        success: true,
        message: "Message has been sent successfully!",
      });
    } else {
      setStatus({
        success: false,
        message: "Uh oh! Something went wrong, please try again.",
      });
    }
  };

  //   create our form with image
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Me" />
          </Col>
          <Col md={6}>
            <h2>Get in touch with me!</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone Number"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    row={6}
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  />
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
