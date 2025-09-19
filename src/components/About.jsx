export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-tl from-[#0D0D0D] to-[#1A1A1A]"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center text-white">
          About Me
        </h2>
        <div className="grid md:grid-cols-1">
          <p className="bg-white/10 text-gray-300 p-6 rounded-lg shadow-pink hover:shadow-pink-lg transition text-justify">
            Starting from my interest in programming, I began my journey as an
            Informatics student, where I learned the fundamentals of software
            development and problem-solving. During my one-year internship as a
            Fullstack Developer, I had the opportunity to apply my knowledge in
            building and managing web applications end-to-end. I was involved in
            both front-end and back-end development, ensuring that the systems
            were efficient, scalable, and maintainable. Beyond writing clean and
            efficient code, I also focused on enhancing user experience by
            designing intuitive and visually appealing interfaces, collaborating
            closely with teams to deliver solutions that met real business
            needs.
          </p>
        </div>
      </div>
    </section>
  );
}
