"use client";
import JobExperience from "./jobExpComp";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ExperienceSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="experience" className="py-12 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          Experience
        </h2>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative border-l border-green-500 pl-8"
        >
          <motion.div variants={itemVariants}>
            <JobExperience
              title="Frontend Software Developer Intern"
              date="July 2025 - December 2025"
              company="GeoIQ - A Lenskart Company"
              location="Bangalore"
              responsibilities={[
                "Led frontend development of ScreenIQ, an internal dashboard used by Lenskart's Tech team to manage and review 1,000+ daily AR Try-On model testing videos.",
                "Built the entire dashboard UI including filters, date/time sorting, unique ID search, session viewer, event feed manager, video player integration, and comment-at-timestamp system.",
                "Developed a complete Session Logs module and implemented real-time Event Feed using Socket.IO and integrated Google Sign-In and coordinated closely with backend teams for API design and feature delivery.",
                "Developed new UI features for RetailIQ, Demand Maps, Active Stores, and Discovery pages, including hero sections, testimonials carousel, sidebar menus, empty-state UIs, and UI Kit component additions.",
                "Built and updated 10+ reusable UI components in GeoIQ’s Web UI Kit, improving consistency across products.",
                "Worked with React.js, Next.js, React Router v7 (Remix), TypeScript, Storybook, Strapi (CMS), and Postman for frontend development and API integration.",
              ]}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <JobExperience
              title="Core Developer in the Google Developer Student Club at BITS Goa"
              date="Aug 2023 - May 2024"
              company="GDSC"
              location="BITS Goa"
              responsibilities={[
                "Role: Core Developer at Google Developer Student Club (GDSC), BITS Goa.",
                "Technical Skills: Gained important technical expertise and improved proficiency with new technologies.",
                "Teamwork: Enhanced team collaboration and communication skills.",
                "Overall Growth: Developed a balance of technical proficiency and teamwork abilities through hands-on experience.",
              ]}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
