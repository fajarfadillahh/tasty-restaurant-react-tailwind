import React from "react";
import { Link } from "react-router-dom";
import { RiInstagramFill, RiTwitterFill, RiYoutubeFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="footer bg-gray-50 pt-32 pb-8">
      <div className="footer__container container grid gap-24">
        <div className="footer__group grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] items-start gap-12">
          <div className="footer__content">
            <h3 className="footer__content-logo pb-2 text-[18px] font-bold text-gray-900 hover:text-green-600">
              Tasty Food
            </h3>
            <p className="footer__content-text pb-6 text-[15px] text-gray-600">
              Restaurant
            </p>
            <div className="footer__content-socials grid grid-cols-[repeat(3,max-content)] gap-6">
              <Link
                to="/"
                className="footer__content-icon inline-flex text-[1.5rem] text-gray-900 hover:text-green-600"
              >
                <RiInstagramFill />
              </Link>

              <Link
                to="/"
                className="footer__content-icon inline-flex text-[1.5rem] text-gray-900 hover:text-green-600"
              >
                <RiYoutubeFill />
              </Link>

              <Link
                to="/"
                className="footer__content-icon inline-flex text-[1.5rem] text-gray-900 hover:text-green-600"
              >
                <RiTwitterFill />
              </Link>
            </div>
          </div>

          <div className="footer__content">
            <h3 className="footer__content-title pb-6 text-[18px] font-bold text-gray-900">
              Services
            </h3>
            <ul className="footer__content-list flex flex-col gap-2">
              <li>
                <Link
                  to="/delivery"
                  className="footer__content-link text-[15px] text-gray-600 hover:text-green-600 hover:underline"
                >
                  Delivery
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="footer__content-link text-[15px] text-gray-600 hover:text-green-600 hover:underline"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/fast-food"
                  className="footer__content-link text-[15px] text-gray-600 hover:text-green-600 hover:underline"
                >
                  Fast Food
                </Link>
              </li>
              <li>
                <Link
                  to="/reserve"
                  className="footer__content-link text-[15px] text-gray-600 hover:text-green-600 hover:underline"
                >
                  Reserve
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__content-title pb-6 text-[18px] font-bold text-gray-900">
              Informations
            </h3>
            <ul className="footer__content-list flex flex-col gap-2">
              <li>
                <Link
                  to="/event"
                  className="footer__content-link text-[15px] text-gray-600 hover:text-green-600 hover:underline"
                >
                  Event
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="footer__content-link text-[15px] text-gray-600 hover:text-green-600 hover:underline"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="footer__content-link text-[15px] text-gray-600 hover:text-green-600 hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-cons"
                  className="footer__content-link text-[15px] text-gray-600 hover:text-green-600 hover:underline"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__content-title pb-6 text-[18px] font-bold text-gray-900">
              Informations
            </h3>
            <ul className="footer__content-list flex flex-col gap-2">
              <p className="footer__content-text text-[15px] text-gray-600">
                Jakarta Selatan
              </p>
              <p className="footer__content-text text-[15px] text-gray-600">
                +62 891 2345 6789
              </p>
              <p className="footer__content-text text-[15px] text-gray-600">
                info@tastyfood.com
              </p>
            </ul>
          </div>
        </div>

        <p className="footer__copy border-t border-gray-300 pt-8 text-center text-[14px] text-green-600">
          &copy; Copyrights 2023 - all rights reserved | Made with ❤️
        </p>
      </div>
    </footer>
  );
}
