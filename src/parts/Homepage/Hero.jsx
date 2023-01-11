import React from "react";

import HeroImg from "../../assets/images/hero.png";
import Button from "../../components/Button";

export default function Hero() {
  return (
    <section className="hero section">
      <div className="hero__container container grid gap-12 sm:grid-cols-2 sm:items-center lg:max-w-4xl">
        <div className="hero__data">
          <h1 className="hero__title section-title text-[42px] text-green-600 md:text-[56px] lg:text-[64px]">
            Tasty Food
          </h1>
          <p className="hero__text section-text text-[24px] font-bold text-gray-900 md:text-[32px]">
            Try the best food <br /> of the week.
          </p>
          <Button className="inline-flex">View Menu</Button>
        </div>

        <img src={HeroImg} className="justify-self-center" alt="hero image" />
      </div>
    </section>
  );
}
