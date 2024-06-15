import React, { useEffect } from "react";
import "./about.css";
import "boxicons";
import second from "../../image/code.jpeg";
import ScrollReveal from "scrollreveal";

const About = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 400,
      reset: true,
    });

    sr.reveal(`.about__img`, {
      delay: 100,
      origin: "left",
      scale: 0.9,
      distance: "30px",
    });

    sr.reveal(`.about__data, .about__description, .about__button-contact`, {
      delay: 100,
      scale: 0.9,
      origin: "right",
      distance: "30px",
    });
  }, []);
  return (
    <main className="main">
      <section className="about section" id="about">
        <span className="section__subtitle">My Intro</span>
        <h2 className="section__title">About Me</h2>

        <div className="about__container container grid">
          <img src={second} alt="" className="about__img" />

          <div className="about__data">
            <div className="about__info">
              <div className="about__box">
                <i className="bx bx-award about__icon"></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">Fresher</span>
              </div>
              <div className="about__box">
                <i className="bx bx-briefcase-alt about__icon"></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">10+ Projects</span>
              </div>
            </div>

            <p className="about__description">
              Enthusiastic Full Stack Developer seeking a challenging position
              to leverage my strong foundation in both front-end and back-end
              technologies. Eager to contribute my problem-solving skills and
              creativity to develop innovative web applications and enhance user
              experiences.
            </p>

            <div className="home__button">
              <a
                href="/Suraj cv.pdf"
                className="button button--ghost"
                download="Suraj cv.pdf"
              >
                Download CV
              </a>

              <a href="#contact" className="button about__button-contact">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
