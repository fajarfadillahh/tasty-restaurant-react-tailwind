import React, { useState } from "react";
import { RiArrowUpLine } from "react-icons/ri";

export default function ScrollButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 400) {
      setVisible(true);
    } else if (scrolled <= 400) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: "0",
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      className="fixed right-6 bottom-16 inline-flex items-center justify-center rounded-lg bg-green-600 p-3 text-[1.3rem] text-white hover:bg-green-700"
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    >
      <RiArrowUpLine />
    </button>
  );
}
