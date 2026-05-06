import React from "react";
import HeroBgAnimation from "../HeroBgAnimation";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Span,
  SubTitle,
  ResumeButton,
  PhotoContainer,
  Img,
  ScrollCTAWrapper,
  ScrollLabel,
  ScrollArrow,
} from "./HeroStyle";
import HeroImg from "../../images/oumeima.jpeg";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import { useTranslation } from "react-i18next";
import TerminalWindow from "./TerminalWindow";

const HeroSection = () => {
  const { t } = useTranslation();
  const terminalLines = t("terminal.lines", { returnObjects: true });

  const scrollToSkills = () => {
    const el = document.getElementById("skills");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <TerminalWindow
              lines={Array.isArray(terminalLines) ? terminalLines : []}
              title={t("terminal.title")}
            />
            <TextLoop>
              {t("hero.iam")}
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{t("hero.description")}</SubTitle>
            <ResumeButton href={Bio.resume} target="display">
              {t("hero.resume")}
            </ResumeButton>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <PhotoContainer>
              <Img src={HeroImg} alt="hero-image" />
            </PhotoContainer>
          </HeroRightContainer>
        </HeroInnerContainer>

        <ScrollCTAWrapper onClick={scrollToSkills}>
          <ScrollLabel>{t("hero.scrollCta")}</ScrollLabel>
          <ScrollArrow />
        </ScrollCTAWrapper>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
