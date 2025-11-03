"use client";
// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import dynamic from "next/dynamic";

// Load react-fast-marquee only on client
const Marquee = dynamic(() => import("react-fast-marquee"), { ssr: false });

function Skills() {
  // Only include skills that resolve to an icon
  const iconSkills = skillsData
    .map((name) => ({ name, icon: skillsImage(name) }))
    .filter((s) => !!s.icon);
  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={70}
          pauseOnHover
          pauseOnClick
          play
          direction="left"
        >
          {iconSkills.map(({ name, icon }) => (
            <div
              key={name}
              className="min-w-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-4 rounded-lg group hover:scale-[1.12] cursor-pointer"
            >
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] group-hover:border-violet-500 transition-all duration-500 px-5 py-4 flex flex-col items-center gap-3">
                <div className="h-8 sm:h-10 flex items-center justify-center">
                  <Image
                    src={icon.src}
                    alt={name}
                    width={40}
                    height={40}
                    className="h-full w-auto rounded-lg"
                    loading="lazy"
                  />
                </div>
                <p className="text-white text-xs sm:text-sm text-center max-w-[110px]">
                  {name}
                </p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;