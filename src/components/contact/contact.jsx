import React, { useEffect } from "react";
import "./contact.css";
import "boxicons";
import ScrollReveal from "scrollreveal";

const Contact = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 400,
      reset: true,
    });

    sr.reveal(`.contact__info, .contact__title-info`, {
      delay: 100,
      scale: 0.9,
      origin: "left",
      distance: "30px",
    });

    sr.reveal(`.contact__form, .contact__title-form`, {
      delay: 100,
      scale: 0.9,
      origin: "right",
      distance: "30px",
    });
  }, []);
  return (
    <main className="main">
      <section className="contact section" id="contact">
        <span className="section__subtitle">Get in touch</span>
        <h3 className="section__title">Contact Me</h3>

        <div className="contact__container container grid">
          <div className="contact__content">
            <h3 className="contact__title contact__title-info">Talk to me</h3>

            <div className="contact__info">
              <div className="contact__card">
                <i className="bx bx-mail-send contact__card-icon"></i>
                <h3 className="contact__card-title">Email</h3>
                <span className="contact__card-data">abc@gmail.com</span>

                <a
                  href="mailto:example@domain.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__button"
                >
                  Write Me{" "}
                  <i className="bx bx-right-arrow contact__button-icon"></i>
                </a>
              </div>

              <div className="contact__card">
                <i className="bx bxl-whatsapp contact__card-icon"></i>
                <h3 className="contact__card-title">Whatsapp</h3>
                <span className="contact__card-data">1234567890</span>

                <a
                  href="https://api.whatsapp.com/send?phone=+916969696969&text=Hey there!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__button"
                >
                  Write Me{" "}
                  <i className="bx bx-right-arrow contact__button-icon"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact__content">
            <h3 className="contact__title contact__title-form">
              Write Me your Message
            </h3>

            <form action="" className="contact__form">
              <div className="contact__form-div">
                <label className="contact__form-tag">Name</label>
                <input
                  type="text"
                  placeholder="Enter name"
                  className="contact__form-input"
                />
              </div>

              <div className="contact__form-div">
                <label className="contact__form-tag">Mail</label>
                <input
                  type="text"
                  placeholder="Enter email"
                  className="contact__form-input"
                />
              </div>

              <div className="contact__form-div contact__form-area">
                <label className="contact__form-tag">Message</label>
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Write your Message"
                  className="contact__form-input"
                ></textarea>
              </div>

              <button className="button">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
