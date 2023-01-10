import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";

import Button from "./Button";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const setMenuHandler = () => {
    setMenuOpen((even) => !even);
  };

  return (
    <header className="header fixed top-0 left-0 z-20 w-full bg-gray-50">
      <div className="header__container container flex h-24 items-center justify-between">
        <Link
          to="/"
          className="header__link text-[18px] font-bold text-gray-900 hover:text-gray-600"
        >
          Tasty Food
        </Link>

        <div
          className={`header__menu fixed top-24 left-0 w-full origin-top bg-gray-50 py-8 px-16 text-center shadow-lg transition-all duration-300 ${
            menuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
          }`}
        >
          <ul className="header__list mb-6 flex flex-col gap-6">
            {[
              ["About", "/about"],
              ["Services", "/services"],
              ["Menu", "/menu"],
              ["Contact us", "/contact-us"],
              ["Blog", "/about"],
            ].map(([title, url]) => (
              <li>
                <Link
                  to={url}
                  className="header__link text-[15px] font-medium text-gray-900 hover:text-green-600"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          <Button url="/order" className="mt-6">
            Order Now
          </Button>
        </div>

        <div
          className="header__toggle inline-flex cursor-pointer text-[1.3rem] text-gray-900"
          onClick={setMenuHandler}
        >
          {!menuOpen ? <RiMenu2Line /> : <RiCloseLine />}
        </div>
      </div>
    </header>
  );
}
