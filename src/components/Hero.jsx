import React from "react";
import profileData from "../data/profileData";

export default function Hero() {
  return (
    <header className="bg-gradient-to-bl from-[#0D0D0D] to-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-6 py-14 md:py-24 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-4xl text-white md:text-5xl font-extrabold mb-4">
            {profileData.name}
          </h1>
          <p className="text-xl text-white mb-6">{profileData.title}</p>
          <p className="text-justify text-white max-w-xl">
            {profileData.shortBio}
          </p>
        </div>
        <div className="text-white">
          <div className="text-slate-400">
            <img
              src={profileData.heroImage}
              alt={profileData.heroImageAlt}
              className="w-80 h-90 rounded-2xl object-cover shadow-lg mt-8 md:mt-0"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
