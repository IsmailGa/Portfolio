import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { useTranslation } from "react-i18next"

function Github() {

  const { t } = useTranslation();

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }} dangerouslySetInnerHTML={{__html: t("about.github_title", {returnObjects: true} )}}/>
      <GitHubCalendar
        username="IsmailGa"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
