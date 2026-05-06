import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { useTranslation } from "react-i18next";

import { Bio } from "../../data/constants";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  //background: linear-gradient(100.26deg, rgba(0, 102, 255, 0.05) 42.33%, rgba(150, 0, 225, 0.05) 127.07%);
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;


const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: hsla(213, 84%, 58%, 0.884);
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: hsla(213, 84%, 58%, 0.884);
  }
`;

const CTA = styled.div`
  text-align: center;
  margin-bottom: 0.5rem;
`;

const CTAHeadline = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin: 0 0 6px;
  line-height: 1.2;

  @media (max-width: 640px) {
    font-size: 22px;
  }
`;

const CTAAccent = styled.span`
  color: ${({ theme }) => theme.primary};
`;

const CTAEmail = styled.a`
  font-size: 15px;
  color: ${({ theme }) => theme.text_secondary};
  text-decoration: none;
  letter-spacing: 0.02em;
  transition: color 0.2s ease;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Divider = styled.hr`
  width: 100%;
  max-width: 400px;
  border: none;
  border-top: 1px solid rgba(0, 201, 255, 0.12);
  margin: 0.5rem 0;
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;


function Footer() {
  const { t } = useTranslation();
  return (
    <FooterContainer>
      <FooterWrapper>
        <CTA>
          <CTAHeadline>
            Let's <CTAAccent>build</CTAAccent> something great.
          </CTAHeadline>
          <CTAEmail href={`mailto:${Bio.email}`}>{Bio.email}</CTAEmail>
        </CTA>
        <Divider />
        <Nav>
          <NavLink href="#about">{t("nav.about")}</NavLink>
          <NavLink href="#skills">{t("nav.skills")}</NavLink>
          <NavLink href="#experience">{t("nav.experience")}</NavLink>
          <NavLink href="#projects">{t("nav.projects")}</NavLink>
          <NavLink href="#education">{t("nav.education")}</NavLink>
          <NavLink href="#acheivements">{t("nav.achievements")}</NavLink>
          <NavLink href="#languages">{t("nav.languages")}</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.facebook} target="display">
            <FacebookIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="display">
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.github} target="display">
            <GitHubIcon />
          </SocialMediaIcon>
          <SocialMediaIcon>
            <a
              href={`mailto:${Bio.email}`}
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              <AlternateEmailIcon />
            </a>
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>{t("footer.rights")}</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
