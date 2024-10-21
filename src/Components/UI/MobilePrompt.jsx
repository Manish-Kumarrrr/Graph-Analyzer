import React from "react";
import { PiGraphDuotone } from "react-icons/pi";
const MobilePrompt = () => {
  return (
    <div className="h-screen flex items-center flex-col justify-center gap-y-5 ">
      <h1 className="text-4xl text-center">
        <a
          href="https://github.com/iamattri0001/graph-xplorer"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex text-wedgewood-50 items-center justify-center gap-x-2 cursor-pointer backdrop-blur-sm">
            {" "}
            <PiGraphDuotone className="hover:scale-125 transition-all text-wedgewood-100" />{" "}
            <span className="title-font">Graph Xplorer</span>{" "}
          </div>
        </a>
      </h1>
      <h3 className="text-wedgewood-100 text-lg text-center backdrop-blur-sm ">
        {" "}
        Please open on a Bigger Screen
      </h3>
    </div>
  );
};

export default MobilePrompt;
