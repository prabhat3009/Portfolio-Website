"use client"
import ProjectCard from "./projectCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2, // Slightly longer duration for a smoother effect
        ease: [0.42, 0, 0.58, 1], // Custom cubic-bezier for smooth easing
        when: "beforeChildren",
        staggerChildren: 0.25, // Adjusted stagger for a smoother flow
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  const projectData = [
    {
      name: "IMDb-Website-Clone",
      description: "This React.js project is a very basic clone of the original IMDb website. It receives data from an external API to display movie information.",
      techStack: ["React.js"],
      liveLink: " https://lovely-basbousa-ed5457.netlify.app/",
      githubLink: " https://github.com/prabhat3009/imdb-clone",
      imageUrl: "/imdb.jpg",
    },
    {
      name: "InstantNote-App",
      description: "This is a Full-Stack Project made using the MERN Stack Technology and Material UI framework. It lets users take notes, organize them into categories, and perform basic CRUD operations (create, read, update, delete).",
      techStack: ["React.js", "Node.js", "MongoDB", "Express"],
      liveLink: "https://instantnote-app.onrender.com/",
      githubLink: " https://github.com/prabhat3009/InstantNote-App",
      imageUrl: "/instantnote.jpg",
    },
    {
      name: "User-Authentication-App",
      description: "This Next.js project allows users to register and log in. User details are saved in MongoDB, and successful login gives access to the home page. The purpose is to learn how to handle user authentication and store data securely in a database.",
      techStack: ["Next.js", "MongoDB"],
      liveLink: "https://user-authentication-app-zeta.vercel.app/login",
      githubLink: " https://github.com/prabhat3009/user-authentication-app",
      imageUrl: "/userauthen.jpg",
    },
  ];

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="mx-auto py-12 bg-zinc-950"
    >
      <h2 className="text-4xl font-bold text-center text-gray-100 mb-8">
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-1 lg:gap-12">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="w-full max-w-5xl mx-auto"
            variants={cardVariants}
          >
            <ProjectCard
              projectName={project.name}
              description={project.description}
              techStack={project.techStack}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
              imageUrl={project.imageUrl}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
