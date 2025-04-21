"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import TechNav from "./tech-nav";

import data from "@/data.json";

function TechnologyPage() {
  const [index, setIndex] = useState(0);
  const technology = data.technology[index];
  useEffect(() => {}, [index]);

  return (
    <div className="w-full min-h-dvh technology-bg flex flex-col justify-center">
      <h1 className="px-10 mt-20 lg:mt-35 lg:ml-25 xl:ml-50 font-barlow-condensed text-xl text-white tracking-widest uppercase">
        {" "}
        <span className="text-white/30 font-bold">03</span>
        {"  "} Space launch 101
      </h1>
      <div className="h-full lg:max-w-[1440px] lg:mx-auto lg:pl-35 flex flex-col items-center justify-center text-center text-white lg:flex-row-reverse lg:justify-end lg:text-left">
        <div className="w-full my-10 lg:w-[50%]">
          <Image
            src={technology.images.landscape}
            alt="launch vehicle"
            width={300}
            height={300}
            className="w-full h-[200px] md:h-[350px] object-cover lg:hidden"
          />
          <Image
            src={technology.images.portrait}
            alt="launch vehicle"
            width={300}
            height={300}
            className="hidden lg:block w-full lg:h-[450px] object-cover"
          />
        </div>
        <div className="px-10 md:px-30 lg:px-0 lg:w-[50%] flex flex-col items-center lg:flex-row ">
          <TechNav index={index} setIndex={setIndex} />
          <div className="lg:pl-2 lg:pr-7">
            <h2 className="font-bellefair text-lg text-white/30 uppercase">
              The terminology...
            </h2>
            <h3 className="font-bellefair text-2xl uppercase">
              {technology.name}
            </h3>
            <p className="mt-5 mb-10 xl:text-xl font-barlow-condensed text-blue-300">
              {technology.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnologyPage;
