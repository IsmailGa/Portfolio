import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import i_level from "../../Assets/projects/i_level.png";
import anor_auto from "../../Assets/projects/anor_auto.png";
import kiut_ise from "../../Assets/projects/kiut_ise.png";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1
          className="project-heading"
          dangerouslySetInnerHTML={{
            __html: t("projects._heading", { returnObjects: true }),
          }}
        />
        <p style={{ color: "white" }}>
          {t("projects._sub_heading", { returnObjects: true })}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kiut_ise}
              isBlog={false}
              title={t("projects._.kiut_ise.title", { returnObjects: true })}
              description={t("projects._.kiut_ise.description", {
                returnObjects: true,
              })}
              ghLink="https://github.com/IsmailGa/kiut_ise_kafedra"
              demoLink="https://ai.kiut.uz"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={i_level}
              isBlog={false}
              title={t("projects._.ilevel.title", { returnObjects: true })}
              description={t("projects._.ilevel.description", {
                returnObjects: true,
              })}
              ghLink="https://github.com/IsmailGa"
              demoLink="https://i-level.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={anor_auto}
              isBlog={false}
              title={t("projects._.anor_auto.title", { returnObjects: true })}
              description={t("projects._.anor_auto.description", {
                returnObjects: true,
              })}
              ghLink="https://github.com/IsmailGa"
              demoLink="https://anor-auto.uz"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
