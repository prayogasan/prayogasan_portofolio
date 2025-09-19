import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Certificate from "./components/Certificate";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-[#0D0D0D] to-[#1A1A1A]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-lg z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-6">
          {/* Logo / Nama */}
          <h1 className="text-3xl font-extrabold text-[#af1454] tracking-wide">
            <a href="#home">Portofolio</a>
          </h1>

          {/* Menu */}
          <ul className="flex space-x-10 text-lg font-medium">
            <li>
              <a
                href="#about"
                className="hover:text-[#af1454] transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#project"
                className="hover:text-[#af1454] transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#certificate"
                className="hover:text-[#af1454] transition-colors"
              >
                Certificates
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main content with padding-top to avoid overlap */}
      <main className="flex-1 pt-28">
        <section id="home">
          <Hero />
        </section>
        <About />
        <Experience/>
        <Skills />
        <Project />
        <Certificate />
      </main>

      <Footer />
    </div>
  );
}
