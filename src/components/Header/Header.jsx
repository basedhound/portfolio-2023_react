import { useEffect, useState, useContext } from "react";
import "./header.css";
import "../../styles.css";

import { ThemeContext } from "../../App";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  

  // Navbar current location
  const [activeLink, setActiveLink] = useState("");
  useEffect(() => {
    const scrollActive = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute("id");

        if (
          window.scrollY > sectionTop &&
          window.scrollY <= sectionTop + sectionHeight
        ) {
          setActiveLink(sectionId);
        }
      });
    };
    window.addEventListener("scroll", scrollActive);
    return () => {
      window.removeEventListener("scroll", scrollActive);
    };
  }, []);
 
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          FV
        </a>
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="#home"
                title="Home"
                className={`nav__link ${
                  activeLink === "home" ? "active-link" : ""
                }`}>
                <i className="bx bx-home-alt nav__icon"></i>
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                title="About"
                className={`nav__link ${
                  activeLink === "about" ? "active-link" : ""
                }`}>
                <i className="bx bx-user nav__icon"></i>
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                title="Skills"
                className={`nav__link ${
                  activeLink === "skills" ? "active-link" : ""
                }`}>
                <i className="bx bx-book nav__icon"></i>
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#work"
                title="Work"
                className={`nav__link ${
                  activeLink === "work" ? "active-link" : ""
                }`}>
                <i className="bx bx-briefcase-alt-2 nav__icon"></i>
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                title="Contact"
                className={`nav__link ${
                  activeLink === "contact" ? "active-link" : ""
                }`}>
                <i className="bx bx-message-square-detail nav__icon"></i>
              </a>
            </li>
          </ul>
        </div>

        {/* Theme change button */}
        <i
          onClick={toggleTheme}
          className={`bx ${
            theme === "dark" ? "bx-sun" : "bx-moon"
          } change-theme`}
          id="theme-button"></i>
      </nav>
    </header>
  );
};

export default Header;
