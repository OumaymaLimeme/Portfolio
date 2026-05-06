import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";
import { useTranslation } from "react-i18next";
import SectionLabel from "../SectionLabel";
import useScrollReveal from "../../hooks/useScrollReveal";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  padding: 0 16px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid hsla(213, 84%, 58%, 0.884);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 100%;
    width: 100%;
    padding: 10px 20px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + "cc"};
  border: 1px solid ${({ theme }) => theme.text_primary + "55"};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: default;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) => ($visible ? "translateY(0)" : "translateY(18px)")};
  transition: opacity 0.4s ease ${({ $delay }) => $delay || 0}s,
    transform 0.4s ease ${({ $delay }) => $delay || 0}s,
    border-color 0.2s ease,
    background 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    background: rgba(0, 201, 255, 0.08);
    color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 14px rgba(0, 201, 255, 0.18);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Skills = () => {
  const { t } = useTranslation();
  const [containerRef, visible] = useScrollReveal();

  return (
    <Container id="skills">
      <Wrapper>
        <SectionLabel
          number="01"
          title={t("skills.title")}
          desc={t("skills.desc")}
        />
        <SkillsContainer ref={containerRef}>
          {skills.map((skill, index) => (
            <Skill key={index}>
              <SkillTitle>
                {t(`skills.categories.${index}`, { defaultValue: skill.title })}
              </SkillTitle>
              <SkillList>
                {skill.skills.map((item, idx) => (
                  <SkillItem
                    key={idx}
                    $visible={visible}
                    $delay={idx * 0.05}
                  >
                    <SkillImage src={item.image} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
