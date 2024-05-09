import { Col, Container, Nav, Tab, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
//  qimport projImg from "../assets/images/CLI-employee-tracker.png";
import projImg2 from "../assets/images/coding-quiz.jpg";
import projImg3 from "../assets/images/Tech-blog.jpg";
import projImg4 from "../assets/images/note-taker-proj.png";
import projImg5 from "../assets/images/AAU-Website.jpg";

export const Projects = () => {
  const projects = [
    {
      title: "Note Taker App",
      description:
        "Note Taking application where a user can save notes and delete them.",
      imgUrl: projImg4,
      githubRepoUrl: "https://dj-note-taking-app.herokuapp.com/",
    },
    {
      title: "Coding Quiz",
      description:
        "Front End application that tracks user score and updates points from quiz",
      imgUrl: projImg2,
      githubRepoUrl: "https://dakota32jones.github.io/coding-quiz/",
    },
    {
      title: "Tech Blog",
      description:
        "Front End application that allows users to input data and see other's comments. Similar to facebook",
      imgUrl: projImg3,
      githubRepoUrl: "https://tech-blog-dashboard.herokuapp.com/login/",
    },
    {
      title: "AUU Wesbite ",
      description:
        "Front End application that allows users interact with the website. Also shows front end UI/UX design skills.",
      imgUrl: projImg5,
      githubRepoUrl: "https://dakota32jones.github.io/AUU-Website/index.html",
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>
              Below are some projects I have worked on and took pride in
              building. Please check these projects out!
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
                {/* need to add tab pane tomorrow for projects */}
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  More projects will be inserted here at a later time!
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  More projects will be inserted here at a later time!
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
