"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import CrewNavigator from "./crew-navigator";

import data from "@/data.json";

function CrewPage() {
  const [index, setIndex] = useState(0);
  const crew = data.crew[index];
  useEffect(() => {}, [index]);
  return (
    <div className="w-full h-full min-h-dvh crew-bg flex flex-col justify-center 2xl:justify-end">
      <div className="h-full pt-15 px-10 flex flex-col items-center justify-center md:justify-around text-center">
        <div className="text-white">
          <h1 className="my-7 md:mt-30 font-barlow-condensed text-xl md:text-2xl md:text-left tracking-widest uppercase">
            <span className="text-white/30 font-bold">02</span>
            {"  "} Meet your crew
          </h1>
          <h2 className="font-bellefair text-xl md:text-2xl text-white/30 uppercase">
            {crew.role}
          </h2>
          <h3 className="font-bellefair text-2xl md:text-4xl uppercase">
            {crew.name}
          </h3>
          <p className="mt-5 md:px-30 text-blue-300 tracking-wide font-barlow-condensed">
            {crew.bio}
          </p>
          <CrewNavigator index={index} setIndex={setIndex} />
        </div>
        <div>
          <div className="relative">
            <Image
              src={crew.images.webp}
              alt="crew photo"
              width={300}
              height={300}
              className="mx-auto md:w-[400px] object-cover"
            />
            <div className="2xl:hidden h-[60px] w-full bottom-8 relative bg-black blur-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrewPage;
