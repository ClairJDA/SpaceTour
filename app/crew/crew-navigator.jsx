import React from "react";

function CrewNavigator({ index, setIndex }) {
  return (
    <div className="my-5">
      <div
        className={`w-3 h-3 rounded-full ${
          index === 0 ? "bg-white" : "bg-white/30"
        } inline-block mr-3`}
        onClick={() => setIndex(0)}
      ></div>
      <div
        className={`w-3 h-3 rounded-full ${
          index === 1 ? "bg-white" : "bg-white/30"
        } inline-block mr-3`}
        onClick={() => setIndex(1)}
      ></div>
      <div
        className={`w-3 h-3 rounded-full ${
          index === 2 ? "bg-white" : "bg-white/30"
        } inline-block mr-3`}
        onClick={() => setIndex(2)}
      ></div>
      <div
        className={`w-3 h-3 rounded-full ${
          index === 3 ? "bg-white" : "bg-white/30"
        } inline-block mr-3`}
        onClick={() => setIndex(3)}
      ></div>
    </div>
  );
}

export default CrewNavigator;
