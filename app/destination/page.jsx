"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import DestinationMenu from "./destination-menu";

import data from "@/data.json";

function Destination() {
  const [index, setIndex] = useState(0);
  const destination = data.destinations[index];

  useEffect(() => {}, [index]);
  return (
    <div className="w-full h-full min-h-dvh destination-bg  flex flex-col justify-center items-center">
      <div className="lg:w-[80%] h-full py-20 px-10 xl:pt-50 lg:mx-auto flex flex-col lg:flex-row lg:items-center justify-center text-center lg:text-left">
        <div className="text-white lg:w-[50%]">
          <h1 className="lg:mb-25 font-barlow-condensed text-xl xl:text-2xl md:text-left tracking-widest uppercase">
            <span className="text-white/30 font-bold">01</span>
            {"  "}Pick your destination
          </h1>
          <Image
            src={destination.images.png}
            alt="moon"
            width={300}
            height={300}
            className="w-[55%] md:w-[40%] lg:w-[80%] xl:w-[60%] mx-auto my-5 md:my-10"
          />
        </div>
        <div className="text-white md:px-30 lg:px-7 lg:w-[50%] xl:px-30">
          <DestinationMenu setIndex={setIndex} index={index} />
          <h2 className="font-bellefair text-5xl md:text-7xl lg:text-8xl uppercase">
            {destination.name}
          </h2>
          <p className="text-blue-300 xl:text-xl font-barlow-condensed">
            {destination.description}
          </p>
          <hr className="text-white/30 my-5" />
          <div className="flex flex-col gap-y-3 md:flex-row items-center md:justify-center lg:justify-start md:gap-x-10">
            <div>
              <h3 className="text-blue-300 font-barlow-condensed xl:text-xl">
                AVG. DISTANCE
              </h3>
              <p className="text-2xl xl:text-3xl font-bellefair uppercase">
                {destination.distance}
              </p>
            </div>
            <div>
              <h3 className="text-blue-300 font-barlow-condensed xl:text-xl">
                EST. TRAVEL TIME
              </h3>
              <p className="text-2xl xl:text-3xl font-bellefair uppercase">
                {destination.travel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
