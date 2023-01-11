import React from "react";

import Button from "../../components/Button";

export default function ErrorMessage() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="pb-4 text-[32px] font-bold text-gray-900">
          404 NOT FOUND
        </h1>
        <p className="section-text">
          The page you're looking for <br /> could not be found.
        </p>
        <Button url="/" className="inline-flex">
          Back to home
        </Button>
      </div>
    </div>
  );
}
