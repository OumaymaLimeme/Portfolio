import React from "react";
import styled from "styled-components";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import ExperienceCard from "../Cards/ExperienceCard";
import { experiences } from "../../data/constants";
import { useTranslation } from "react-i18next";
import SectionLabel from "../SectionLabel";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 80px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 80px 16px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;


const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const Experience = () => {
  const { t } = useTranslation();
  return (
    <Container id="experience">
      <Wrapper>
        <SectionLabel
          number="02"
          title={t("experience.title")}
          desc={t("experience.desc")}
        />
        <TimelineSection>
          <Timeline position="alternate">
            {experiences.map((experience, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: index % 2 === 0 ? "flex-end" : "flex-start",
                    py: "12px",
                  }}
                >
                  <span style={{
                    fontFamily: "'Fira Code', monospace",
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.35)",
                    letterSpacing: "0.04em",
                  }}>
                    {experience.date}
                  </span>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="info" />
                  {index !== experiences.length - 1 && (
                    <TimelineConnector style={{ background: "#00C9FF" }} />
                  )}
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <ExperienceCard experience={experience} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default Experience;
