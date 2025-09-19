import courseraImg from "../assets/photo/coursera.png";
import laravelImg from "../assets/photo/laravel.png";


export default function Certificate() {
  const Certificate = [
    {
      title: "IT Google Support",
      desc: "Coursera",
      date: "Dec, 31 2022",
      image: courseraImg,
      link: "https://drive.google.com/file/d/12wveBWSbtgmo24argA5s1dGoPyLnQ6hk/view?usp=sharing",
    },
    {
      title: "Laravel Fundamental Workshop",
      desc: "Laravel",
      date: "Oct, 03 2021",
      image: laravelImg,
      link: "https://drive.google.com/file/d/18Xm7DyMF25f8x2AIGoRLLDNia5B5wTH1/view?usp=sharing",
    },
  ];

  return (
    <section id="certificate" className="py-20 px-6 bg-gradient-to-bl from-[#000000] to-[#af1454]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">My Certificates</h2>

        {/* Wrapper Scroll */}
        <div className="grid md:grid-cols-2 gap-6">
          {Certificate.map((p, i) => (
            <div
              key={i}
              className="  bg-white/15 text-gray-300 p-6 rounded-lg shadow-pink hover:shadow-pink-lg transition snap-center"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold">{p.title}</h3>
              <h4 className="text-xs mb-2">{p.date}</h4>
              <p className="text-xs text-gray-400 mb-4 text-justify">
                {p.desc}
              </p>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff0055] hover:underline"
              >
                View Sertificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
