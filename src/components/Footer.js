import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import navIcon1 from "../assets/images/nav-icon1.png";
import navIcon2 from "../assets/images/nav-icon2.png";
import navIcon3 from "../assets/images/nav-icon3.png";

export const Footer = () => {
  retun(
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <img src={logo} />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="">
                <img src={navIcon1} />
              </a>
              <a href="">
                <img src={navIcon2} />
              </a>
              <a href="">
                <img src={navIcon3} />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved by Dakota Jones </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
