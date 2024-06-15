import React, { useEffect } from "react";
import "boxicons";
import "./skills.css";
import ScrollReveal from "scrollreveal";

const Skills = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 400,
      reset: true,
    });

    sr.reveal(`.skills__content`, {
      delay: 100,
      scale: 0.9,
      origin: "bottom",
      distance: "30px",
    });
  }, []);
  return (
    <main className="main">
      <section class="skills section" id="skills">
        <span class="section__subtitle">My Abilities</span>
        <h2 class="section__title">My Skills</h2>

        <div class="skills__container container grid">
          <div class="skills__content">
            <h3 class="skills__title">Frontend Development</h3>

            <div class="skills__box">
              <div class="skills__group">
                <div class="skills__data">
                  <i class="bx bxs-badge-check"></i>

                  <div>
                    <h3 class="skills__name">HTML</h3>
                    <span class="skills__level">Advanced</span>
                  </div>
                </div>

                <div class="skills__data">
                  <i class="bx bxs-badge-check"></i>

                  <div>
                    <h3 class="skills__name">CSS</h3>
                    <span class="skills__level">Advanced</span>
                  </div>
                </div>

                <div class="skills__data">
                  <i class="bx bxs-badge-check"></i>

                  <div>
                    <h3 class="skills__name">Javascript</h3>
                    <span class="skills__level">Advanced</span>
                  </div>
                </div>
              </div>
              <div class="skills__group">
                <div class="skills__data">
                  <i class="bx bxs-badge-check"></i>

                  <div>
                    <h3 class="skills__name">Bootstrap</h3>
                    <span class="skills__level">Intermediate</span>
                  </div>
                </div>

                <div class="skills__data">
                  <i class="bx bxs-badge-check"></i>

                  <div>
                    <h3 class="skills__name">Tailwind</h3>
                    <span class="skills__level">Intermediate</span>
                  </div>
                </div>

                <div class="skills__data">
                  <i class="bx bxs-badge-check"></i>

                  <div>
                    <h3 class="skills__name">React</h3>
                    <span class="skills__level">Intermediate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="skills__content">
            <h3 class="skills__title">Backend Development</h3>

            <div class="skills__box">
              <div class="skills__group">
                <div class="skills__data">
                  <i class="bx bxs-badge-check"></i>

                  <div>
                    <h3 class="skills__name">Node JS</h3>
                    <span class="skills__level">Advanced</span>
                  </div>
                </div>

                <div class="skills__data">
                  <i class="bx bxs-badge-check"></i>

                  <div>
                    <h3 class="skills__name">Express</h3>
                    <span class="skills__level">Advanced</span>
                  </div>
                </div>

                <div class="skills__data">
                  <i class="bx bxs-badge-check"></i>

                  <div>
                    <h3 class="skills__name">MySQL</h3>
                    <span class="skills__level">Intermediate</span>
                  </div>
                </div>
              </div>
              <div class="skills__group">
                <div class="skills__data">
                  <i class="bx bxs-badge-check"></i>

                  <div>
                    <h3 class="skills__name">PHP</h3>
                    <span class="skills__level">Intermediate</span>
                  </div>
                </div>

                <div class="skills__data">
                  <i class="bx bxs-badge-check"></i>

                  <div>
                    <h3 class="skills__name">Java</h3>
                    <span class="skills__level">Intermediate</span>
                  </div>
                </div>

                <div class="skills__data">
                  <i class="bx bxs-badge-check"></i>

                  <div>
                    <h3 class="skills__name">Mongo DB</h3>
                    <span class="skills__level">Advanced</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Skills;
