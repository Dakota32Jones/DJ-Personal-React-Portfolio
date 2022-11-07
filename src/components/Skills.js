// importing from our carousel package
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import meter1 from "../assets/images/meter1.png";
import meter2 from "../assets/images/meter2.png";
import meter3 from "../assets/images/meter3.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Through the bootcamp we have learned many skills like fetching
                api's, building back end applications with mongoDB, SQL and
                building out front end applications for the client side.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt=" 95% meter" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="80% meter" />
                  <h5>Code configuration</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="90% meter" />
                  <h5>Api fetching</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="80% meter" />
                  <h5>Back-End Development</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
