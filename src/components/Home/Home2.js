import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { useTranslation } from "react-i18next";

function Home2() {
  const { t } = useTranslation();
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1
              style={{ fontSize: "2.6em" }}
              dangerouslySetInnerHTML={{ __html: t("home.intro.title") }}
            />
            <p
              className="home-about-body"
              dangerouslySetInnerHTML={{ __html: t("home.intro.body") }}
            />
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>{t("home.social.title", { returnObjects: true })}</h1>
            <p>{t("home.social.descr", { returnObjects: true })}</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
