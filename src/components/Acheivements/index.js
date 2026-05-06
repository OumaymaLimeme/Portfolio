import React, { useState } from "react";
import { Container, Wrapper, CardContainer } from "./ProjectsStyle";
import AchievementCard from "../Cards/AchievementCard";
import AchievementDetails from "../AchievementDetails";
import { acheivements } from "../../data/constants";
import { useTranslation } from "react-i18next";
import SectionLabel from "../SectionLabel";

const Acheivements = () => {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState({ state: false, achievement: null });

  return (
    <Container id="acheivements">
      <Wrapper>
        <SectionLabel number="05" title={t("achievements.title")} />
        <CardContainer>
          {acheivements.map((achievement) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              setOpenModal={setOpenModal}
            />
          ))}
        </CardContainer>
      </Wrapper>
      {openModal.state && (
        <AchievementDetails openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </Container>
  );
};

export default Acheivements;
