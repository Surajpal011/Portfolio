import React, { useEffect } from "react";
import "./home.css";
import "boxicons";
import ScrollReveal from "scrollreveal";
import main from "../../image/2.jpg";

const Home = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 400,
      reset: true,
    });
    sr.reveal(`.home__data`);
    sr.reveal(`.home__handle`, {
      delay: 100,
    });

    sr.reveal(`.home__social, .home__scroll`, {
      delay: 100,
      origin: "bottom",
    });
  }, []);
  return (
    <main className="main">
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__data">
            <span className="home__greeting">Hello, I'm</span>
            <h1 className="home__name">Suraj Pal</h1>
            <h3 className="home__education">MERN Developer</h3>

            <div className="home__button">
              <a href="#about" className="button">
                About
              </a>
            </div>
          </div>

          <div className="home__handle">
            <img src={main} alt="" className="home__img" />
          </div>

          <div className="home__social">
            <a
              href="https://www.linkedin.com/in/suraj-pal-561ab7125"
              className="home__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href="https://github.com/Surajpal011"
              className="home__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-github"></i>
            </a>
          </div>

          <a href="#about" className="home__scroll">
            <i className="bx bx-mouse home__scroll-icon"></i>
            <span className="home__scroll-name">Scroll Down</span>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;
