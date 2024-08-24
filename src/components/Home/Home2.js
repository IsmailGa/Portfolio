import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next";

// I fell in love with programming, opening for myself new projects and ideas to create after
// <br />
// <br />I am fluent in classics like
// <i>
//   <b className="purple"> Javascript and Python. </b>
// </i>
// <br />
// <br />
// My field of Interest's are building new &nbsp;
// <i>
//   <b className="purple">Web Technologies and Products </b> and
//   also in areas related to{" "}
//   <b className="purple">
//     Blockchain.
//   </b>
// </i>
// <br />
// <br />
// Whenever possible, I also apply my passion for developing products
// with <b className="purple">Node.js</b> and
// <i>
//   <b className="purple">
//     {" "}
//     Modern Javascript Library and Frameworks
//   </b>
// </i>
// &nbsp; like
// <i>
//   <b className="purple"> React.js and Next.js</b>
// </i>

function Home2() {
  const { t, i18n } = useTranslation();
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }} dangerouslySetInnerHTML={{ __html: t('home.intro.title') }}/>
            <p className="home-about-body"  dangerouslySetInnerHTML={{ __html: t('home.intro.body') }}/>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>{t("home.social.title", {returnObjects: true})}</h1>
            <p>
              {t("home.social.descr", {returnObjects: true})}
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/IsmailGa"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ismail-gayratov-306386247/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mmmh_1_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
