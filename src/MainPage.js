// App.js
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaArrowUp, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "./App.css";
import profileImg from "./assets/profile.jpg";
import ParticlesBackground from "./ParticlesBackground";
import ProjectCarousel from "./ProjectCarousel";


function App() {

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
      setShowTopBtn(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const titles = [
    "I'm Prasadraju",
    "I'm a Web Developer",
    "I'm a MERN Developer",
    "I'm a React Debugger",
  ];

  const [titleIndex, setTitleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let typingSpeed = isDeleting ? 40 : 100;

    const type = () => {
      setTypedText((prev) =>
        !isDeleting
          ? currentTitle.substring(0, charIndex + 1)
          : currentTitle.substring(0, charIndex - 1)
      );

      if (!isDeleting && charIndex < currentTitle.length) {
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex((prev) => prev - 1);
      } else {
        if (!isDeleting) {
          setTimeout(() => setIsDeleting(true), 1000);
        } else {
          setTitleIndex((prev) => (prev + 1) % titles.length);
          setIsDeleting(false);
          setCharIndex(0);
        }
      }
    };

    const timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex]);

  const skills = [
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "Tailwind CSS", level: 95 },
  ];


  return (
    <div className="relative bg-gradient-to-br from-green-100 via-green-200 to-green-300 min-h-screen text-gray-900 font-sans scroll-smooth">
      <ParticlesBackground />

      <div
        className="fixed top-0 left-0 h-1 bg-green-700 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

<nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex gap-4 sm:gap-6 px-6 sm:px-10 py-2 sm:py-3 rounded-full shadow-lg border border-white/30 backdrop-blur-md bg-white/20 hover:bg-white/30 transition duration-300">
  {sections.map((section) => (
    <Link
      key={section.id}
      to={section.id}
      smooth={true}
      duration={500}
      offset={-70}
      className="cursor-pointer text-sm sm:text-base font-medium text-gray-700 hover:text-green-800 transition"
      activeClass="text-green-800 font-semibold"
      spy={true}
    >
      {section.label}
    </Link>
  ))}
</nav>


      <main className="pt-32 space-y-36 px-6 md:px-20 text-center">
        {/* Home */}
        <motion.section
          id="home"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          className="min-h-screen flex flex-col justify-center items-center px-4 text-center"
        >
<div className="relative -top-20"> {/* Move image up */}
  <motion.div
    className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 
               rounded-full overflow-hidden shadow-2xl"
  >
    <div className="relative -top-4"> {/* Move image up */}
    <img
      src={profileImg}
      alt="Profile"
      className="w-full h-full object-cover rounded-full"
    />
    </div>
    <div className="absolute w-full h-full rounded-full animate-pulse bg-green-400 blur-2xl opacity-30 z-0" />
  </motion.div>
</div>


<div className="relative -top-20">
          <div className="flex flex-col items-center mt-6 md:mt-10">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2 text-green-800">
              <span className="min-w-[240px] sm:min-w-[260px] text-left inline-block">
                {typedText}
                <span className="border-r-2 border-green-800 animate-pulse ml-1" />
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl max-w-xl text-gray-700 mt-4 text-center">
              Crafting beautiful and interactive web experiences with React and the MERN stack.
            </p>
          </div>
          </div>
        </motion.section>

        {/* About */}
        <section id="about" className="max-w-4xl mx-auto text-center py-28">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-lg text-gray-700">
            I'm a frontend developer focused on building clean, modern, and responsive UIs. Passionate about React, Tailwind CSS, and crafting polished experiences.
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className="max-w-5xl mx-auto py-28 px-4">
          <h2 className="text-3xl font-semibold mb-10 text-center text-black">🚀 Projects</h2>
          <ProjectCarousel />
        </section>

{/* Skills */}
<section id="skills" className="max-w-5xl mx-auto text-left px-4 py-28">
  <h2 className="text-4xl font-bold text-center text-black-500 mb-12">💻 My Skills</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
    {skills.map((skill, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.03 }}
        className="relative backdrop-blur-md bg-green-300/10 border border-green-400/30 rounded-xl p-6 group shadow-lg overflow-hidden transition-all duration-300"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-black-200">{skill.name}</h3>
          <span className="text-sm bg-green-500 text-white px-2 py-0.5 rounded-full shadow">
            {skill.level}%
          </span>
        </div>

        <div className="w-full bg-green-800/20 h-3 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-green-400 to-green-600"
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1.2, delay: index * 0.1 }}
          />
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
      </motion.div>
    ))}
  </div>
</section>



        {/* Contact */}
        <section id="contact" className="text-center py-28">
          <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-4">Let's connect and collaborate on exciting projects!</p>
          <div className="flex justify-center gap-6 text-green-700 text-xl">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=vtu20327.soc.cse@email.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-900 transition"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/PrasadRajuPathapati"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-900 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-900 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </section>
      </main>

      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Pavan | Built with React & Tailwind CSS
      </footer>

      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-green-700 text-white p-3 rounded-full shadow-lg hover:bg-green-800 transition z-50"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}

export default App;
