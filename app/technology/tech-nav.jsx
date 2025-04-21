import React from "react";

function TechNav({ index, setIndex }) {
  return (
    <div className="mb-3 flex justify-center lg:flex-col">
      <div
        className={`w-[35px] h-[35px] lg:w-[50px] lg:h-[50px] rounded-full border-2 border-white/30 text-center font-bellefair text-2xl inline-block mr-3 lg:mb-3 lg:pt-2 ${
          index === 0 ? "bg-white" : "bg-transparent"
        } ${index === 0 ? "text-black" : "text-white"}`}
        onClick={() => setIndex(0)}
      >
        1
      </div>
      <div
        className={`w-[35px] h-[35px] lg:w-[50px] lg:h-[50px] rounded-full border-2 border-white/30 text-center font-bellefair text-2xl inline-block mr-3 lg:mb-3 lg:pt-2 ${
          index === 1 ? "bg-white" : "bg-transparent"
        } ${index === 1 ? "text-black" : "text-white"}`}
        onClick={() => setIndex(1)}
      >
        2
      </div>
      <div
        className={`w-[35px] h-[35px] lg:w-[50px] lg:h-[50px] rounded-full border-2 border-white/30 text-center font-bellefair text-2xl inline-block mr-3 lg:mb-3 lg:pt-2 ${
          index === 2 ? "bg-white" : "bg-transparent"
        } ${index === 2 ? "text-black" : "text-white"}`}
        onClick={() => setIndex(2)}
      >
        3
      </div>
    </div>
  );
}

export default TechNav;
