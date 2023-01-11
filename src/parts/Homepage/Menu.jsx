import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import MenuImg1 from "../../assets/images/plate1.png";
import MenuImg2 from "../../assets/images/plate2.png";
import MenuImg3 from "../../assets/images/plate3.png";

export default function Menu() {
  return (
    <section className="menu section">
      <div className="menu__container container grid gap-8">
        <div className="menu__data justify-self-center text-center">
          <p className="menu__subtitle section-subtitle">Special Menu</p>
          <h1 className="menu__title section-title">Menu of the week</h1>
        </div>

        <div className="menu__group grid grid-cols-2 justify-center gap-4 sm:grid-cols-[repeat(2,200px)] md:grid-cols-[repeat(3,230px)] md:gap-8">
          <div className="menu__content relative grid gap-8 overflow-hidden rounded-xl border-2 border-gray-200 p-4 transition-all duration-300 hover:border-white hover:bg-white hover:shadow-xl">
            <img
              src={MenuImg1}
              alt=""
              className="menu__content-img w-[100px] justify-self-center"
            />

            <div className="menu__content-data">
              <h3 className="menu__content-title pb-1 text-[14px] font-bold text-gray-900 sm:text-[18px]">
                Barbeque Salad
              </h3>
              <p className="menu__content-tag pb-3 text-[10px] text-gray-600 sm:text-[15px]">
                Delicious Dish
              </p>
              <p className="menu__content-price text-[18px] font-bold text-gray-900">
                $2.99
              </p>
              <Link
                to="/cart"
                className="menu__content-button absolute right-0 bottom-0 inline-flex rounded-tl-xl rounded-br-xl bg-green-600 p-2 text-[1.2rem] text-white"
              >
                <RiShoppingCartLine />
              </Link>
            </div>
          </div>

          <div className="menu__content relative grid gap-8 overflow-hidden rounded-xl border-2 border-gray-200 p-4 transition-all duration-300 hover:border-white hover:bg-white hover:shadow-xl">
            <img
              src={MenuImg2}
              alt=""
              className="menu__content-img w-[100px] justify-self-center"
            />

            <div className="menu__content-data">
              <h3 className="menu__content-title pb-1 text-[14px] font-bold text-gray-900 sm:text-[18px]">
                Salad with Fish
              </h3>
              <p className="menu__content-tag pb-3 text-[10px] text-gray-600 sm:text-[15px]">
                Delicious Dish
              </p>
              <p className="menu__content-price text-[18px] font-bold text-gray-900">
                $3.59
              </p>
              <Link
                to="/cart"
                className="menu__content-button absolute right-0 bottom-0 inline-flex rounded-tl-xl rounded-br-xl bg-green-600 p-2 text-[1.2rem] text-white"
              >
                <RiShoppingCartLine />
              </Link>
            </div>
          </div>

          <div className="menu__content relative grid gap-8 overflow-hidden rounded-xl border-2 border-gray-200 p-4 transition-all duration-300 hover:border-white hover:bg-white hover:shadow-xl">
            <img
              src={MenuImg3}
              alt=""
              className="menu__content-img w-[100px] justify-self-center"
            />

            <div className="menu__content-data">
              <h3 className="menu__content-title pb-1 text-[14px] font-bold text-gray-900 sm:text-[18px]">
                Spinach Salad
              </h3>
              <p className="menu__content-tag pb-3 text-[10px] text-gray-600 sm:text-[15px]">
                Delicious Dish
              </p>
              <p className="menu__content-price text-[18px] font-bold text-gray-900">
                $2.49
              </p>
              <Link
                to="/cart"
                className="menu__content-button absolute right-0 bottom-0 inline-flex rounded-tl-xl rounded-br-xl bg-green-600 p-2 text-[1.2rem] text-white"
              >
                <RiShoppingCartLine />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
