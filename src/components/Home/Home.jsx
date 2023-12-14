import React from "react";
import "./home.css";
import img from "../../assets/img";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__data">
          <span className="home__greeting">Hello, I'm</span>
          <h1 className="home__name">Frank Vukelić</h1>
          <h3 className="home__education">Fullstack Developer</h3>

          <div className="home__buttons">
            {/* Insert CV */}
            <a
              download=""
              href="assets/pdf/Ansel-Cv.pdf"
              className="button button--ghost">
              Download CV
            </a>
            <a href="#about" className="button">
              About me
            </a>
          </div>
        </div>

        <div className="home__handle">
          {/* Insert image, according to the example size of the portfolio */}
          <img src={img.profile} alt="" className="home__img" />
        </div>

        <div className="home__social">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            className="home__social-link">
            <i className="bx bxl-linkedin-square"></i>
          </a>
          <a
            href="https://github.com/basedhound"
            target="_blank"
            className="home__social-link">
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <a href="#about" className="home__scroll">
          <i className="bx bx-mouse home__scroll-icon"></i>
          <span className="home__scroll-name">Scroll Down</span>
        </a>
      </div>
    </section>
  );
};

export default Home;
