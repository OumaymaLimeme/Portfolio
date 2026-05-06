import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-top: 20px;
  margin-bottom: 8px;
  width: 100%;
`;

const Tag = styled.span`
  font-family: "Fira Code", "Courier New", monospace;
  font-size: 13px;
  color: ${({ theme }) => theme.primary};
  letter-spacing: 0.18em;
  opacity: 0.8;
  margin-bottom: 2px;
`;

const H2 = styled.h2`
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;
  line-height: 1.15;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Bar = styled.div`
  width: 40px;
  height: 3px;
  background: linear-gradient(90deg, #00c9ff, #0077b6);
  border-radius: 2px;
  margin: 8px 0 4px;
`;

const Sub = styled.p`
  font-size: 17px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const SectionLabel = ({ number, title, desc }) => (
  <Wrap>
    <Tag>{number}.</Tag>
    <H2>{title}</H2>
    <Bar />
    {desc && <Sub>{desc}</Sub>}
  </Wrap>
);

export default SectionLabel;
