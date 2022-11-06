import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubRepoUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="project-imgbx">
        <img src={imgUrl} />
        <div className="txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <span>{githubRepoUrl}</span>
        </div>
      </div>
    </Col>
  );
};
