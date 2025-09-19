import profilePic from "../assets/photo/Profile.jpg";

const profileData = {
  name: "Prayoga San Arisakti",
  title: "Frontend Developer and UI/UX Designer",
  shortBio: "Currently enrolled in a Bachelor's degree program in Computer Science at Telkom University, with one year of internship experience as a Fullstack Developer while pursuing an Associate's degree. Proficient in using design tools such as Figma, as well as programming languages including PHP, PostgreSQL, and MySQL. Possesses strong creativity and a high level of enthusiasm for learning new things, particularly in the field of technology development.",
  heroImage: profilePic,
  heroImageAlt: "Profile.jpg",
  social: [
    { name: "GitHub", href: "https://github.com/username" },
    { name: "LinkedIn", href: "https://linkedin.com/in/username" },
    { name: "Email", href: "mailto:email@domain.com" },
  ],
  skills: ["React", "Tailwind CSS", "Vite", "REST API"],
  projects: [
    {
      id: 1,
      title: "Project Satu",
      description: "Aplikasi web untuk ...",
      tech: ["React", "Tailwind"],
      demo: "Figma",
      repo: "#",
      imageAlt: "Screenshot project satu",
    },
    {
      id: 2,
      title: "Project Dua",
      description: "Dashboard untuk ...",
      tech: ["Vite", "Chart.js"],
      demo: "#",
      repo: "#",
      imageAlt: "Screenshot project dua",
    },
  ],
};

export default profileData;
