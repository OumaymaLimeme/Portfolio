import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";
import { useTranslation } from "react-i18next";
import SectionLabel from "../SectionLabel";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  const { t } = useTranslation();
  return (
    <Container id="projects">
      <Wrapper>
        <SectionLabel
          number="03"
          title={t("projects.title")}
          desc={t("projects.desc")}
        />
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              {t("projects.all")}
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              {t("projects.all")}
            </ToggleButton>
          )}
          <Divider />
          {toggle === "web app" ? (
            <ToggleButton
              active
              value="web app"
              onClick={() => setToggle("web app")}
            >
              {t("projects.webApp")}
            </ToggleButton>
          ) : (
            <ToggleButton value="web app" onClick={() => setToggle("web app")}>
              {t("projects.webApp")}
            </ToggleButton>
          )}
          <Divider />
          {toggle === "android app" ? (
            <ToggleButton
              active
              value="android app"
              onClick={() => setToggle("android app")}
            >
              {t("projects.androidApp")}
            </ToggleButton>
          ) : (
            <ToggleButton
              value="android app"
              onClick={() => setToggle("android app")}
            >
              {t("projects.androidApp")}
            </ToggleButton>
          )}
          <Divider />
          {toggle === "machine learning" ? (
            <ToggleButton
              active
              value="machine learning"
              onClick={() => setToggle("machine learning")}
            >
              {t("projects.machineLearning")}
            </ToggleButton>
          ) : (
            <ToggleButton
              value="machine learning"
              onClick={() => setToggle("machine learning")}
            >
              {t("projects.machineLearning")}
            </ToggleButton>
          )}
          <Divider />
          {toggle === "Ai projects" ? (
            <ToggleButton
              active
              value="Ai projects"
              onClick={() => setToggle("Ai projects")}
            >
              {t("projects.aiProjects")}
            </ToggleButton>
          ) : (
            <ToggleButton
              value="Ai projects"
              onClick={() => setToggle("Ai projects")}
            >
              {t("projects.aiProjects")}
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
                index={index}
              />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
                index={index}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
