import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import { PiGraphDuotone } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div className="text-wedgewood-200 items-center justify-center flex flex-col min-h-screen gap-y-10">
      <div className="flex-grow flex items-center justify-center">
        <div className="w-[85vw] md:w-[75vw] lg:w-[60vw] py-8 px-8 rounded gap-y-10 shadow-2xl backdrop-blur-md flex items-center justify-center flex-col">
          <div className="flex items-center justify-center flex-col gap-y-2">
            <h1 className="text-3xl md:text-4xl text-center text-white">
              <span className="title-font text-wedgewood-100 text-bold">Graph Analyzer</span>
            </h1>
          </div>
          <span className="text-lg">What's Graph Analyzer all about?</span>

          <ul className="flex items-start flex-col gap-y-4 lg:flex-row gap-x-4 justify-between">
            <li className="bg-black/30 px-3 py-2 rounded-lg hover:bg-black/50">
              <b>🌟 Interactive Playground:</b> Explore and experiment with graphs on a dynamic canvas—create, edit, and master graphs like never before.
            </li>

            <li className="bg-black/30 px-3 py-2 rounded-lg hover:bg-black/50">
              <b>🎥 Algorithm Showtime:</b> Curious about how algorithms like BFS, DFS, or Dijkstra's work? Watch them come to life with cool, easy-to-understand animations.
            </li>
            <li className="bg-black/30 px-3 py-2 rounded-lg hover:bg-black/50">
              <b>🎨 Personalize Your Experience: </b>Customize your graphs and tweak algorithm
              settings to match your style and learning pace.
            </li>
          </ul>
          <div className="flex items-center justify-center gap-x-5">
            <Link
              to="/analyze"
              className="btn px-4 py-2 flex items-center justify-center gap-x-2"
            >
              <PiGraphDuotone /> Analyze
            </Link>
            
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Landing;


