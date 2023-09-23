import React from "react";

import vid from "../assets/bgvid.mp4";
export default function VideoBg() {
  return (
    <>
      <div className="w-full h-screen relative">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src={vid} type="video/mp4" />
        </video>
        <div className="absolute bg-gray-900/50 w-full h-full top-0 left-0  "></div>
        <div className="absolute bg-gradient-to-t from-emerald-800/50 w-full h-full top-0 left-0"></div>
      </div>
    </>
  );
}
