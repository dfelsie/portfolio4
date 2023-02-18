import React from "react";
import { projsAry } from "../../consts/projects";
import PortfolioItem from "../PortfolioItem/PortfolioItem";

type Props = {};

export default function Content({}: Props) {
  return (
    <div>
      <div id="portfolio" className="pt-4 px-4 md:px-48">
        <h2
          className="
        text-7xl
        leading-5
        mt-8
        font-black
        "
        >
          Projects
        </h2>
        <ul className="list-none">
          {projsAry.map((val, i) => (
            <PortfolioItem project={val} key={`portfolioVal${i}`} />
          ))}
        </ul>
      </div>
    </div>
  );
}
