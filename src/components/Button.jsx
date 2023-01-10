import React from "react";
import { Link } from "react-router-dom";

export default function Button({ url, children, className }) {
  return (
    <Link
      to={url}
      className="flex h-[52px] items-center justify-center rounded-lg bg-green-600 py-4 px-8 text-[15px] font-semibold text-white hover:bg-green-700"
    >
      {children}
    </Link>
  );
}
