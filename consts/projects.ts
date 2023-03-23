import { PortfolioProject } from "../Types/PortfolioProject";

export const projsAry: PortfolioProject[] = [
  {
    desc: `After reading a yougov article about how many Americans grossly misestimated the size of certain groups, I decided to build
    a web app that would let me (and others!) check their own estimates, and see how they stacked up to the average guesser.

    This was good practice for my skills with Next and Framer: getting some of the animations to work well can sometimes be tricky,
    especially for full screen transitions: for whatever reason, sources other than the official docs tend to be fairly out of date. Nevertheless,
    it wasn't too difficult, and I felt like the time spent creating the animations and the small additional bundle size was well worth it, given how much
    visual interest good animation can add to the page. I hope you'll agree!`,
    toolList: ["Tailwind", "Next.JS", "Framer"],
    imgLink: "/assets/images/ameriGuessCap.webp",
    preTitle: "Frontend React",
    projectTitle: "America Guessing Game",
    link: "https://percentguess.vercel.app/",
  },
  {
    desc: `When I was getting started with React, I was looking for a project that would let me practice both visualizations and
    basic programming. I'd seen a lot of sorting algorithms visualized, but they were mostly abstract looks that
    made actually understanding the underlying algorithm difficult. A particularly difficult one to grasp was
    quicksort: the procedure is very different from what a human would come up with (since it relies on so much recursion)
    and the name doesn't give any hints to how it operates.

    Therefore, I made a visualization that proceeded step by step through a quicksort algorithm to make it easier to understand.
    The program generates random output and then sorts that. It was good practice for working with animations and with
    using async awaits for more than just API calls. `,
    link: "https://framer-algo.vercel.app/",
    projectTitle: "Quicksort Visualizer",
    imgLink: "/assets/images/quicksortani.webp",
    preTitle: "Fullstack JS",
    toolList: ["React", "Next.JS", "Framer"],
  },
  {
    desc: `While practicing my coding skills by grinding leetcode, I wanted a site to get random problems. Picking from a prearranged list
    was fine, but it didn't let me review as well, since I knew the order of the questions. So for myself, and others with a similar
    problem, I built a site to generate a set of practice questions and a timer.

    It was built pretty simply with Next.js and React.`,
    link: "https://randomproblem.vercel.app/",
    projectTitle: "Coding Problem Test Maker",
    imgLink: "/assets/images/randCap.webp",
    preTitle: "Fullstack JS",
    toolList: ["React", "Next.JS", "Framer"],
  },

  {
    desc: `Shortly before the release of Chat-GPT, I wanted to try training an openAI model with custom data and practice my data cleaning.
    The goal was to take prompts and show summaries from an API endpoint, and use these to train an Davinci model. Then, I wanted to see
    if these fake summaries could look realistic, which led to a 'game' where you can try to guess if a summary is AI generated or real.
    The results were slightly disappointing, especially given the release of GPT-3 a few weeks later, but they had a bigger budget.
    `,
    link: "https://ani-ai-guess.vercel.app//",
    projectTitle: "Anime AI Quiz",
    imgLink: "/assets/images/aniCap.webp",
    preTitle: "Fullstack JS",
    toolList: ["React", "Next.JS", "Framer"],
  },
];
