import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaLaravel,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiFlutter,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="FaHtml5" />,
          <FaCss3 key="FaCss3" />,
          <FaJs key="FaJs" />,
          <FaReact key="FaReact" />,
          <SiNextdotjs key="SiNextdotjs" />,
          <SiFlutter key="SiFlutter" />,
          <FaLaravel key="FaLaravel" />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          <FaFigma key="FaFigma" />,
          <SiAdobexd key="SiAdobexd" />,
          <SiAdobephotoshop key="SiAdobephotoshop" />,
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
];

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <div className="z-0">
        <Circles />
      </div>

      {/* Avatar */}
      <div
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div
          className="flex-1 flex flex-col justify-center mb-10 mt-7 xl:mt-0"
        >
          <h2 className="h2 mb-2">Natus Vincere</h2>
          <p class="font-normal text-base max-w-xl lg:text-lg">
            Hello, My name is Muhammad Luthfi Fatiha, you can call me Upi or
            Ufi. My hobby is Coding and playing Badminton. I have a dream to be
            a programmer, hope i can make it happen.
          </p>
        </div>

        {/* about */}
        <div
          className="flex flex-col w-full xl:max-w-[48%] h-[200px] mb-10 xl:mb-0"
        >
          {/* title */}
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-current after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          {/* point */}
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div
                          key={itemIndex}
                          className="text-2xl hover:text-white transition-all duration-300 mb-3"
                        >
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
