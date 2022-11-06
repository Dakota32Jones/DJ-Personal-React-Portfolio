import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/images/header-img.png";

export const Banner = () => {
  // looping through index of words
  const [loopNum, setLoopNum] = useState(0);
  // setting state for deletion of words
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Full Stack Web Developer",
    "Web Designer",
    "Front-End Web Developer",
  ];
  // component needs to know what word to set in the state
  const [text, setText] = useState("");
  // this is will determine how fast a letter will be typed on the page
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  // period of time each word will be shown on the page
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Check out my portfolio!</span>
            <h1>
              {`Hello I am Dakota Jones `}
              <span className="wrap">{text}</span>
            </h1>
            <p>lorem Ipsum is fun to write</p>
            <button onClick={() => console.log("connect")}>
              Let's Connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img"></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
