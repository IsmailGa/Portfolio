import React from "react";
import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next"

/*
[
  "Web Developer",
  "Freelancer",
  "MERN Stack Developer",
  "Open Source Contributor"
]*/

function Type() {
  const { t } = useTranslation();
  return (
    <Typewriter
      options={{
        strings: t('type', { returnObjects: true }),
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;