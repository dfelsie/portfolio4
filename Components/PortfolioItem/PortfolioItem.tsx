import React from "react";
import { PortfolioProject } from "../../Types/PortfolioProject";

type Props = {
  project: PortfolioProject;
};

export default function PortfolioItem({ project }: Props) {
  const { preTitle, desc, imgLink, link, projectTitle, toolList } = project;
  return (
    <li className="mt-32">
      <h5
        className="
        before:absolute
        before:top-2
        before:right-auto
        before:bottom-auto
        before:left-[-16em]
        before:w-[250px]
        before:border-b-[1px]
        before:border-b-gray-400
        before:border-solid


        relative
        text-[1.1em]
        leading-5
        ml-10
        mr-3
        mt-0
        uppercase
        font-normal
        text-gray-500
        "
      >
        {preTitle}
      </h5>
      <div className="mt-12 mb-40">
        <h2
          className="
          text-3xl
                md:text-4xl
                lg:text-7xl
                leading-8
                md:leading-5
                mt-8
                font-black"
        >
          {projectTitle}
        </h2>
        <div
          className="
        relative
        mb-10
        max-w-3xl
        "
        >
          <ul
            className="
            flex
            flex-col
absolute
top-2
right-auto
bottom-auto
left-[-1.5rem]
w-52
h-48
text-right
transform translate-x-[-100%]
list-none
"
          >
            <h6
              className="
relative
text-[.9em]
leading-5
ml-2
mr-3
mt-0
uppercase
font-normal
text-gray-500"
            >
              Tools Used
            </h6>
            {toolList.map((val, i) => {
              return (
                <li key={`${projectTitle}${val}${i}`} className="text-right">
                  <div
                    className="

                    relative
text-[.9em]
leading-5
ml-2
mr-3
mt-0
uppercase
font-normal


                    bg-green-900
                    text-white
                    mb-2
                    py-2
                    px-4
                    inline-block
                    text-xs
                    rounded-sm
                  "
                  >
                    {val}
                  </div>
                </li>
              );
            })}
          </ul>
          <div
            className="
          mt-8
          text-xl
          "
          >
            <p
              className="
            "
            >
              {desc}
            </p>
          </div>
          <a
            href={link}
            rel="noopener noreferrer"
            target={"_blank"}
            className="
          inline-block
my-4 mx-0 text-white

py-4 px-6
bg-green-900
border-solid border-2
font-semibold
transition duration-200 ease-in-out
 hover:bg-black hover:cursor-pointer
"
          >
            View More
          </a>
        </div>
        <div
          className="
          flex
          flex-row
          flex-wrap
          justify-between
          mx-[-13em]"
        >
          <div
            className="
            flex-grow
            flex-shrink
            basis-[50%]
            h-auto
            h-[29vw]
            w-1/2
            overflow-hidden
"
          >
            <div
              style={{
                backgroundImage: `url(${imgLink})`,
                backgroundPosition: "right top",
              }}
              className="
              bg-cover bg-[50%] h-full w-full
            "
            ></div>
          </div>
        </div>
      </div>
    </li>
  );
}
