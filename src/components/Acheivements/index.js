import React from "react";
import { useState } from "react";
import { Container, Wrapper, Title, CardContainer } from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { acheivements } from "../../data/constants";
import { useTranslation } from "react-i18next";

const Acheivements = ({ openModal, setOpenModal }) => {
  const { t } = useTranslation();
  // eslint-disable-next-line
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="acheivements">
      <Wrapper>
        <Title>{t("achievements.title")}</Title>
        <CardContainer>
          {toggle === "all" &&
            acheivements.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {acheivements
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Acheivements;
