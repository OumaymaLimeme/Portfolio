import styled from "styled-components";
// eslint-disable-next-line no-unused-vars
import _default from "../../themes/default";

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 90%;
  max-width: 300px;
  max-height: 360px;
  border-radius: 16px;
  object-fit: cover;
  border: 2px solid rgba(0, 201, 255, 0.25);
  box-shadow: 0 0 40px rgba(0, 201, 255, 0.18), 0 20px 60px rgba(0, 0, 0, 0.45);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 0 60px rgba(0, 201, 255, 0.35), 0 24px 60px rgba(0, 0, 0, 0.5);
  }
  @media (max-width: 768px) {
    max-width: 380px;
    max-height: 380px;
  }

  @media (max-width: 640px) {
    max-width: 260px;
    max-height: 260px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const Tagline = styled.div`
  font-size: 15px;
  font-style: italic;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 18px;
  line-height: 1.6;
  opacity: 0.85;
  padding-left: 16px;
  border-left: 3px solid ${({ theme }) => theme.primary};
  @media (max-width: 960px) {
    text-align: center;
    border-left: none;
    padding-left: 0;
    border-top: none;
  }
  @media (max-width: 640px) {
    font-size: 13px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 550;
  font-size: 30px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  color: #00C9FF;
  cursor: pointer;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

export const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 230px;
    text-align: center;
    padding: 10px 0;
    color: ${({ theme }) => theme.black};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: linear-gradient(135deg, #00C9FF 0%, #0077B6 100%);
    box-shadow: 0px 0px 24px rgba(0, 201, 255, 0.3);
    &:hover {
        transform: scale(1.05);
        transition: all 0.4s ease-in-out;
        box-shadow: 0px 0px 40px rgba(0, 201, 255, 0.5);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 

`;
