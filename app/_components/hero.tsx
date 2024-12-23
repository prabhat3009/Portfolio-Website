"use client";
import Image from "next/image";
import { useTypewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import codeImg from "../../public/profile.jpg";

export default function Hero() {
  const [text] = useTypewriter({
    words: ["Developer", "Designer", "Tech Enthusiast"],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <section className="relative h-screen bg-black text-white flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={codeImg}
          alt="Profile Photo"
          layout="fill"
          objectFit="cover"
          objectPosition="right"
          className="opacity-50"
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-left max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Prabhat Tripathi
        </motion.h1>
        <motion.p
          className="text-2xl md:text-3xl mt-4"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          I&apos;m a {text}
          <span className="text-green-500">|</span>
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="flex space-x-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        >
          <a 
            href="https://www.linkedin.com/in/prabhat-pati-tripathi/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-4xl hover:text-gray-300">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a 
            href="https://github.com/prabhat3009" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-4xl hover:text-gray-300">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </motion.div>

        {/* Download Resume Button */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
        >
          <a
            href="/resume.pdf"
            download="Prabhat_Tripathi_Resume.pdf"
            className="inline-block bg-white text-black font-semibold py-2 px-4 rounded-md hover:text-green-400 transition duration-300"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
