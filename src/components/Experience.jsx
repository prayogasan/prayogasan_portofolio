export default function Experience() {
  const Experience = [
    {
      title: "Fullstack Developer Internship",
      company: "PT. Indo Trans Teknologi ",
      year: "Agustus 2023 – Juli 2024 | Bandung, Jawa Barat",
      desc: [
        "Designed and implemented web interfaces for client and branch feature pages in Figma.",
        "Designed, developed, and optimized website performance to meet company standards and requirements.",
        "Managed, designed, and optimized databases to ensure efficiency, security, and data integrity, while supporting overall system performance.",
      ],
    },
    {
      title: "Practicum Assistant",
      company: "Faculty of Applied Science, Telkom University ",
      year: "2022 - 2024 | Bandung, Jawa Barat",
      desc: "Simple todo app with local storageSupervised and assisted students in completing their laboratory practicums, providing guidance to ensure they understood the material and could apply it effectively. Additionally, supported the lecturer by managing and inputting student grades, as well as preparing and submitting academic performance reports in a timely and accurate manner.",
    },
  ];

  return (
    <section id="Experience" className="py-20 px-6 bg-gradient-to-bl from-[#a9a9a9] to-[#1A1A1A]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Profesional Experience
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          {Experience.map((p, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow-pink hover:shadow-pink-lg transition"
            >
              <h3 className="text-2xl font-bold">{p.title}</h3>
              <h4 className="text-l font-semibold mb-1">{p.company}</h4>
              <h5 className="text-sm mb-3">{p.year}</h5>
              <ul className="list-disc pl-7 text-justify">
                {Array.isArray(p.desc) ? (
                  p.desc.map((item, idx) => <li key={idx}>{item}</li>)
                ) : (
                  <li>{p.desc}</li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
