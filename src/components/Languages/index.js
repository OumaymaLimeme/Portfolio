import React from "react";
import styled from "styled-components";
import { languages } from "../../data/constants";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 80px 0px;
  @media (max-width: 960px) {
    padding: 20px 0px 60px 0px;
  }
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
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 700;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  &::after {
    content: "";
    display: block;
    width: 56px;
    height: 3px;
    background: linear-gradient(90deg, #00c9ff, #0077b6);
    margin: 10px auto 0;
    border-radius: 2px;
  }
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const LanguagesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  margin-top: 36px;
  width: 100%;
`;

const LanguageCard = styled.div`
  background: ${({ theme }) => theme.card};
  border: 0.1px solid rgba(0, 201, 255, 0.3);
  box-shadow: rgba(23, 92, 230, 0.12) 0px 4px 24px;
  border-radius: 16px;
  padding: 28px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  min-width: 200px;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
  &:hover {
    transform: translateY(-6px);
    box-shadow: rgba(0, 201, 255, 0.2) 0px 8px 32px;
  }
  @media (max-width: 500px) {
    min-width: 150px;
    padding: 20px 24px;
  }
`;

const Flag = styled.span`
  font-size: 48px;
  line-height: 1;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.3));
`;

const LangName = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const LevelBadge = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  background: rgba(0, 201, 255, 0.1);
  border: 1px solid rgba(0, 201, 255, 0.25);
  border-radius: 20px;
  padding: 4px 14px;
  letter-spacing: 0.3px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 5px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  width: ${({ level }) => level}%;
  background: linear-gradient(90deg, #00c9ff, #0077b6);
  border-radius: 4px;
  transition: width 0.6s ease;
`;

const Languages = () => {
  const { t } = useTranslation();
  return (
    <Container id="languages">
      <Wrapper>
        <Title>{t("languages.title")}</Title>
        <LanguagesGrid>
          {languages.map((lang, index) => (
            <LanguageCard key={index}>
              <Flag>{lang.flag}</Flag>
              <LangName>{lang.name}</LangName>
              <LevelBadge>{lang.proficiency}</LevelBadge>
            </LanguageCard>
          ))}
        </LanguagesGrid>
      </Wrapper>
    </Container>
  );
};

export default Languages;
