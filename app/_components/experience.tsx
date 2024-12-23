"use client"
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

          <motion.div variants={itemVariants}>
            <JobExperience
              title="Summer Intern at Banaras Locomotive Works"
              date="May 2024 - Jul 2024"
              company="Banaras Locomotive Works"
              location="Varanasi"
              responsibilities={[
                "Internship: Completed a summer internship at Banaras Locomotive Works (BLW).",
                "Program: Part of the Practice School Program at BITS Pilani.",
                "Experience Gained: Developed valuable skills in management and teamwork.",
                "Professional Exposure: Gained hands-on experience in a real-world industrial environment.",
              ]}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
