import React from "react";
import {
  AiFillGithub,
  AiOutlineMail,
  AiOutlineLinkedin,
  AiFillLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
type Props = {};

export default function FooterLinks({}: Props) {
  return (
    <div
      id="links"
      className="
      mt-[10vh]
     w-full
    list-none
    "
    >
      <h5
        className="mx-auto
      font-bold
      text-4xl
      text-center
      "
      >
        My Contact Info:
      </h5>
      <ul
        className="list-none
flex  flex-col md:flex-row  pt-2
text-center
mt-4 md:mt-16

      "
      >
        <li className="flex-grow flex flex-col bg-green-800 text-white px-4 py-8 ">
          <h6 className="text-3xl font-semibold">Email</h6>
          <AiOutlineMail className="mx-auto my-8 text-7xl" />
          <p className="text-lg">dfelsenthal88@gmail.com</p>
        </li>
        <li className="flex-grow flex flex-col text-green-800 px-4 py-8 ">
          <h6 className="text-3xl font-semibold">LinkedIn</h6>
          <AiOutlineLinkedin className="mx-auto my-8 text-7xl" />
          <a
            className="text-lg hover:underline"
            rel="noopener noreferrer"
            target={"_blank"}
            href="https://www.linkedin.com/in/daniel-felsenthal-697797213/"
          >
            https://www.linkedin.com/in/daniel-felsenthal-697797213/
          </a>
        </li>
        <li className="flex-grow flex bg-green-800 text-white flex-col px-4 py-8 ">
          <h6 className="text-3xl font-semibold">Github</h6>
          <AiFillGithub className="mx-auto my-8 text-7xl" />
          <a
            className="text-lg hover:underline"
            rel="noopener noreferrer"
            target={"_blank"}
            href="https://github.com/dfelsie"
          >
            https://github.com/dfelsie
          </a>
        </li>
      </ul>
    </div>
  );
}
