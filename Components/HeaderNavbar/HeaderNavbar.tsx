import React from "react";

type Props = {};

export default function HeaderNavbar({}: Props) {
  return (
    <div
      className="
    flex
    items-center
    fixed
    top-0
    left-0
    right-0
    z-50
    p-4"
    >
      <div
        className="ml-2

        text-xl
        md:text-2xl
        transition duration-700 ease-in-out
 hover:text-green-500
        "
      >
        Welcome!
      </div>
      <a
        href="#links"
        className="
        ml-auto
        mr-2

        text-xl
        md:text-2xl

        transition duration-700 linear
        hover:text-green-500 hover:underline
        "
      >
        Links
      </a>
    </div>
  );
}
