import React from "react";

import AboutImg from "../../assets/images/about.jpg";
import Button from "../../components/Button";

export default function About() {
  return (
    <section className="about section">
      <div className="about__container container grid gap-12 sm:grid-cols-2 sm:items-center lg:max-w-4xl">
        <div className="about__data justify-self-center text-center sm:text-left">
          <p className="about__subtitle section-subtitle">About Us</p>
          <h1 className="about__title section-title">
            We cook the best <br /> tasty food
          </h1>
          <p className="about__text section-text md:max-w-[310px]">
            We cook the best food the entire city, with the excellent customer
            service, the best meals and the best price, visit us.
          </p>
          <Button url="explore" className="inline-flex">
            Explore History
          </Button>
        </div>

        <img
          src={AboutImg}
          className="justify-self-center rounded-xl sm:-order-1"
          alt="about image"
        />
      </div>
    </section>
  );
}
