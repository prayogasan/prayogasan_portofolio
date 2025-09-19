import belajarLinkedinImg from "../assets/photo/belajarlinkedin.png";
import praRegistImg from "../assets/photo/Praregist.png";
import chattanImg from "../assets/photo/chattan.png";
import comingSoonImg from "../assets/photo/comingsoon.png";

export default function Project() {
  const project = [
    {
      title: "BelajarLinkedin",
      desc: "BelajarLinkedIn is a UI/UX design project focused on creating a website interface that helps users build their personal branding and join learning programs. The design includes an engaging landing page, a well-structured learning section, and a simple yet effective registration form. Created in Figma, this project emphasizes intuitive user experience, consistent visual design, and responsive layouts for seamless access across devices.",
      type: "UI/UX Design | Complete",
      image: belajarLinkedinImg,
      link: "https://www.figma.com/design/4HYpu0ewGwtPnxYOTX7g6t/BelajarLinkedIn?t=Pm2IiQZSePYHqSBr-1",
    },
    {
      title: "PraRegist",
      desc: "PraRegisT is a web-based application project developed to improve the efficiency of tracker and sensor installations while supporting the sales team in assisting clients with installation scheduling reports. This application is exclusively accessible to clients registered on the RegisT platform, ensuring a secure and streamlined workflow for scheduling and tracking installation activities.",
      type: "Fullstack Developer Intern | Complete",
      image: praRegistImg,
      link: "https://pra-regist.transtrack.id/",
    },
    {
      title: "Chattan",
      desc: "ChatTan is a mobile application that combines chat and social media features, designed with a focus on modern and interactive UI/UX. The app offers core functionalities such as a clean and intuitive login page, conversation list, and interactive chat rooms, along with visual content integration that allows users to communicate while sharing their daily activities. This project was created with an emphasis on smooth user flow, consistent design components, and an engaging interface that enhances user experience on mobile devices.",
      type: "UI/UX Design | On Progress",
      image: chattanImg,
      link: "https://www.figma.com/design/NnHy7Z4ilvXLYPShWBtOtG/ChatTan?node-id=0-1&t=Pm2IiQZSePYHqSBr-1",
    },
    {
      title: "Future Projects Awaiting",
      desc: "Great things are on the horizon. Get ready to explore my latest creations!",
      type: "That's Coming",
      image: comingSoonImg,
      link: "",
    },
  ];

  return (
    <section
      id="project"
      className="py-20 px-6 bg-gradient-to-tl from-[#000000] to-[#af1454]"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          My Projects
        </h2>

        {/* Wrapper Scroll */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden">
          {project.map((p, i) => (
            <div
              key={i}
              className="min-w-[300px] max-w-xs flex-shrink-0 bg-white/10 text-gray-300 p-6 rounded-lg shadow-pink hover:shadow-lg transition snap-center"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold">{p.title}</h3>
              <h4 className="text-xs mb-2">{p.type}</h4>
              <p className="text-xs text-white mb-4 text-justify">
                {p.desc}
              </p>

              {/* Hanya tampilkan link kalau ada */}
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff0055] hover:underline"
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
