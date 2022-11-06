import { Col, Container, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description:
        "Front End application that fetches data from multiple API's.",
      imgUrl: projImg,
      githubRepoUrl: "",
    },
    {
      title: "Project 2",
      description:
        "Front End application that fetches data from multiple API's.",
      imgUrl: projImg2,
      githubRepoUrl: "",
    },
    {
      title: "Project 3",
      description:
        "Front End application that fetches data from multiple API's.",
      imgUrl: projImg3,
      githubRepoUrl: "",
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Lorem Ipsum</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey={first}>Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey={second}>Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey={third}>Tab Three</Nav.Link>
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
                <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
