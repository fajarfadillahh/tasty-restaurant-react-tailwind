import React from "react";

import ServicesImg1 from "../../assets/images/services-dish.svg";
import ServicesImg2 from "../../assets/images/services-pizza.svg";
import ServicesImg3 from "../../assets/images/services-truck.svg";

export default function Services() {
  return (
    <section className="services section">
      <div className="services__container container grid gap-8">
        <div className="services__data justify-self-center text-center">
          <p className="services__subtitle section-subtitle">Offering</p>
          <h1 className="services__title section-title">Our amazing service</h1>
        </div>

        <div className="services__group grid grid-cols-[repeat(auto-fit,minmax(230px,0.8fr))] justify-center gap-12">
          <div className="services__content grid gap-6">
            <img
              src={ServicesImg1}
              className="h-16 w-16 justify-self-center"
              alt="services icon"
            />

            <div className="services__content-data justify-self-center text-center">
              <h3 className="services__content-title pb-4 text-[18px] font-bold text-gray-900">
                Execellent Food
              </h3>
              <p className="services__content-text text-[15px] text-gray-600">
                We offer clients excellent quality services for man years, the
                best and delicious food in the city.
              </p>
            </div>
          </div>

          <div className="services__content grid gap-6">
            <img
              src={ServicesImg2}
              className="h-16 w-16 justify-self-center"
              alt="services icon"
            />

            <div className="services__content-data justify-self-center text-center">
              <h3 className="services__content-title pb-4 text-[18px] font-bold text-gray-900">
                Fast Food
              </h3>
              <p className="services__content-text text-[15px] text-gray-600">
                We offer clients excellent quality services for man years, the
                best and delicious food in the city.
              </p>
            </div>
          </div>

          <div className="services__content grid gap-6">
            <img
              src={ServicesImg3}
              className="h-16 w-16 justify-self-center"
              alt="services icon"
            />

            <div className="services__content-data justify-self-center text-center">
              <h3 className="services__content-title pb-4 text-[18px] font-bold text-gray-900">
                Delivery Food
              </h3>
              <p className="services__content-text text-[15px] text-gray-600">
                We offer clients excellent quality services for man years, the
                best and delicious food in the city.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
