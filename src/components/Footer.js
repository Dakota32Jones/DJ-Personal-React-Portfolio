import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/images/logo.png";

export const Footer = () => {
  retun(
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <img src={logo} />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
