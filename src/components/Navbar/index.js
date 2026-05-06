import React from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink,
  LangToggle,
  ThemeToggle,
} from "./NavbarStyledComponent";
import { FaBars, FaSun, FaMoon } from "react-icons/fa";
import { Bio } from "../../data/constants";
import { useTheme } from "styled-components";
import { useTranslation } from "react-i18next";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "de" : "en");
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <span
            style={{
              fontWeight: 700,
              fontSize: "18px",
              color: "#00C9FF",
              letterSpacing: "0.5px",
            }}
          >
            Oumeima
          </span>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">{t("nav.about")}</NavLink>
          <NavLink href="#skills">{t("nav.skills")}</NavLink>
          <NavLink href="#experience">{t("nav.experience")}</NavLink>
          <NavLink href="#projects">{t("nav.projects")}</NavLink>
          <NavLink href="#education">{t("nav.education")}</NavLink>
          <NavLink href="#acheivements">{t("nav.achievements")}</NavLink>
          <NavLink href="#languages">{t("nav.languages")}</NavLink>
          <NavLink href="#contact">{t("nav.contact")}</NavLink>
        </NavItems>
        <ButtonContainer>
          <ThemeToggle onClick={toggleDarkMode} title={darkMode ? "Switch to light mode" : "Switch to dark mode"}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </ThemeToggle>
          <LangToggle onClick={toggleLang} style={{ marginRight: "12px" }}>
            {i18n.language === "en" ? "DE" : "EN"}
          </LangToggle>
          <GitHubButton href={Bio.github} target="_blank">
            {t("nav.github")}
          </GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => setIsOpen(false)}>
              {t("nav.about")}
            </MobileLink>
            <MobileLink href="#skills" onClick={() => setIsOpen(false)}>
              {t("nav.skills")}
            </MobileLink>
            <MobileLink href="#experience" onClick={() => setIsOpen(false)}>
              {t("nav.experience")}
            </MobileLink>
            <MobileLink href="#projects" onClick={() => setIsOpen(false)}>
              {t("nav.projects")}
            </MobileLink>
            <MobileLink href="#education" onClick={() => setIsOpen(false)}>
              {t("nav.education")}
            </MobileLink>
            <MobileLink href="#acheivements" onClick={() => setIsOpen(false)}>
              {t("nav.achievements")}
            </MobileLink>
            <MobileLink href="#languages" onClick={() => setIsOpen(false)}>
              {t("nav.languages")}
            </MobileLink>
            <MobileLink href="#contact" onClick={() => setIsOpen(false)}>
              {t("nav.contact")}
            </MobileLink>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <ThemeToggle onClick={toggleDarkMode} title={darkMode ? "Switch to light mode" : "Switch to dark mode"}>
                {darkMode ? <FaSun /> : <FaMoon />}
              </ThemeToggle>
              <LangToggle onClick={toggleLang}>
                {i18n.language === "en" ? "DE" : "EN"}
              </LangToggle>
              <GitHubButton
                style={{
                  padding: "10px 16px",
                  background: `${theme.primary}`,
                  color: "white",
                  width: "max-content",
                }}
                href={Bio.github}
                target="_blank"
              >
                {t("nav.githubProfile")}
              </GitHubButton>
            </div>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
