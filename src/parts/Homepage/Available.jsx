import React from "react";
import { Link } from "react-router-dom";

import AvailableImg from "../../assets/images/movil-app.png";
import AppImg1 from "../../assets/images/app1.png";
import AppImg2 from "../../assets/images/app2.png";

export default function Available() {
  return (
    <section className="available section">
      <div className="available__container container grid gap-8 sm:grid-cols-2 sm:items-center lg:max-w-4xl">
        <div className="available__data justify-self-center text-center sm:text-left">
          <p className="available__subtitle section-subtitle">App</p>
          <h1 className="available__title section-title">App is available</h1>
          <p className="available__text section-text md:max-w-sm">
            Find our application and download it, you can make reservations,
            food orders, see your delivaries on the way and much more.
          </p>
          <div className="available__button inline-flex items-center justify-center gap-4">
            <Link to="/playstore">
              <img
                src={AppImg2}
                className="available__button-playstore w-[110px]"
                alt="playstore image"
              />
            </Link>
            <Link to="/appstore">
              <img
                src={AppImg1}
                className="available__button-appstore w-[110px]"
                alt="appstore image"
              />
            </Link>
          </div>
        </div>

        <img
          src={AvailableImg}
          className="available__img w-[250px] justify-self-center sm:-order-1 sm:w-[300px] lg:w-[380px]"
          alt="available image"
        />
      </div>
    </section>
  );
}
