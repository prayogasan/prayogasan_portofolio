import React from "react";
import profileData from "../data/profileData";

export default function Nav({ links }) {
  return (
    <nav className="bg-gradient-to-r from-black to-pink-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Nama */}
        <div className="font-semibold text-xl tracking-wide">
          {profileData.name}
        </div>

        {/* Link Navigasi */}
        <div className="space-x-6 hidden md:block">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm hover:text-pink-300 transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
