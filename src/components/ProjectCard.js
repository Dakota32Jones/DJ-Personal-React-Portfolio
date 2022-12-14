import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubRepoUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="project images" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <span>Github repo: {githubRepoUrl}</span>
        </div>
      </div>
    </Col>
  );
};
