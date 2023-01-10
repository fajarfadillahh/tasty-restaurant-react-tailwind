import React from "react";

import Button from "./Button";

export default function Contact() {
  return (
    <section className="contact section">
      <div className="contact__container container grid">
        <div className="contact__data justify-self-center text-center">
          <p className="contact__subtitle section-subtitle">Let's Talk</p>
          <h1 className="contact__title section-title">Contact Us</h1>
          <p className="contact__text section-text">
            If you want to reserve a table in our restaurant, contact us and we
            will attemd you quickly, with our 24/7 chat service.
          </p>
        </div>

        <Button url="/contact-us" className="justify-self-center">
          Contact us now
        </Button>
      </div>
    </section>
  );
}
