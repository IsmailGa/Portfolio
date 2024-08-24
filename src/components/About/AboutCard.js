import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useTranslation } from "react-i18next"

/*
Hi Everyone, I am <span className="purple">Soumyajit Behera </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br />
            I am currently employed as a software developer at Juspay.
            <br />
            I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
            Mesra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
*/

function AboutCard() {
  
  const { t } = useTranslation()
  // const activities = t("about.about_me.activities", {returnObjects:true});

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }} dangerouslySetInnerHTML={{__html: t("about.about_me.intro", {returnObjects: true})}}/>
          <ul>
            {t("about.about_me.activities", {returnObjects:true}).map((item, index) => (
              <li key={index} className="about-activity">
                <ImPointRight/> {item}
              </li>
            ))}
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
