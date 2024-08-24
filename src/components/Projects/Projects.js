import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import top_rate from "../../Assets/projects/top_rate_eng.png"
import { useTranslation } from "react-i18next"

function Projects() {

  const { t } = useTranslation(); 

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" dangerouslySetInnerHTML={{__html: t("projects._heading", {returnObjects: true} )}} />
        <p style={{ color: "white" }}>
          {t("projects._sub_heading", {returnObjects: true})}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={top_rate}
              isBlog={false}
              title={t("projects._.top_rate_eng.title", {returnObjects: true})}
              description={t("projects._.top_rate_eng.description", {returnObjects: true})}
              ghLink="https://github.com/IsmailGa/English-Center-React"
              demoLink="https://edu-center-english-webapp.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
