export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "PHP",
    "Laravel",
    "TailwindCSS",
    "Figma",
    "MySql",
    "Postgresql",
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-tl from-[#a9a9a9] to-[#1A1A1A]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-white">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 ">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-black text-white font-medium rounded-lg shadow-pink hover:shadow-lg transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
