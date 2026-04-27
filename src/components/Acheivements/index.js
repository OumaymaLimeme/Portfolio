import React, { useState } from "react";
import { Container, Wrapper, Title, CardContainer } from "./ProjectsStyle";
import AchievementCard from "../Cards/AchievementCard";
import AchievementDetails from "../AchievementDetails";
import { acheivements } from "../../data/constants";
import { useTranslation } from "react-i18next";

const Acheivements = () => {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState({ state: false, achievement: null });

  return (
    <Container id="acheivements">
      <Wrapper>
        <Title>{t("achievements.title")}</Title>
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
