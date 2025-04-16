// src/components/HomeSection.jsx

import { useState, useEffect } from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";

const HomeSection = () => {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const roles = ["Developer", "Student", "Gamer"];
  const roleColors = ["#0339fc", "#0339fc", "#0339fc"]; // Same color for all roles
  const typingSpeed = 160; // Speed of typing in milliseconds
  const pauseDuration = 1500; // Time to wait before switching role (in ms)

  useEffect(() => {
    const typingEffect = () => {
      const role = roles[index];
      let currentIndex = 0;
      let currentRoleText = "";

      // Typing loop with a delay between characters
      const type = () => {
        if (currentIndex < role.length) {
          currentRoleText += role[currentIndex];
          setCurrentText(currentRoleText);
          currentIndex++;
          setTimeout(type, typingSpeed); // Delay between characters
        } else {
          setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % roles.length);
            setCurrentText("");
          }, pauseDuration);
        }
      };

      type();
    };

    typingEffect();
  }, [index]);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white px-4 text-center pt-24 w-full">
      {/* Profile Image */}
      <img
        src="/assets/3.jpg" 
        alt="Sourav Kumar"
        className="rounded-full shadow-lg mb-6"
        width={200}
        height={200}
      />

      {/* Name */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-3">
        Hi, I’m <span className="text-blue-500">Sourav Kumar</span>
      </h1>

      {/* Typing Animation Description */}
      <p className="text-2xl md:text-3xl text-gray-300  mb-6">
        I am a{" "}
        <span style={{ color: roleColors[index] }} className="font-extrabold">
          {currentText}
        </span>
      </p>

      {/* Social Icons */}
      <div className="flex space-x-6 text-2xl mt-2">
        <a
          href="https://instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://discordapp.com/users/yourdiscordid"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-400 transition"
        >
          <FaDiscord />
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};

export default HomeSection;
