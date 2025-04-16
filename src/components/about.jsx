// src/components/AboutSection.jsx
import React from 'react';
import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaBriefcase,
  FaHeart
} from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-900 text-white px-6 py-12 text-center pt-24 w-full">
      <h2 className="text-2xl md:text-5xl font-semibold text-gray-100 mb-6">
        About Me
      </h2>

      {/* Short Description */}
      <div className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto mb-10">
        <p>
          I’m <span className="text-yellow-400">Sourav Kumar</span>, a web developer passionate about creating modern and user-friendly web applications. Currently, I am a B.Tech student in Computer Science and Engineering at SRMIST. I’m always excited to learn new things and improve my skill set.
        </p>
      </div>

      {/* Key Information */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-gray-300 space-y-3">
          <FaGraduationCap className="text-3xl text-gray-500" />
          <h3 className="text-lg font-medium text-gray-100">Education</h3>
          <p className="text-sm">B.Tech in CSE (Currently)</p>
        </div>

        <div className="flex flex-col items-center text-gray-300 space-y-3">
          <FaMapMarkerAlt className="text-3xl text-gray-500" />
          <h3 className="text-lg font-medium text-gray-100">Location</h3>
          <p className="text-sm">Godda, Jharkhand, India</p>
        </div>

        <div className="flex flex-col items-center text-gray-300 space-y-3">
          <FaLaptopCode className="text-3xl text-gray-500" />
          <h3 className="text-lg font-medium text-gray-100">Skills</h3>
          <p className="text-sm">React, Node.js, TailwindCSS, JavaScript</p>
        </div>

        <div className="flex flex-col items-center text-gray-300 space-y-3">
          <FaBriefcase className="text-3xl text-gray-500" />
          <h3 className="text-lg font-medium text-gray-100">Experience</h3>
          <p className="text-sm">Freelance Web Developer</p>
        </div>
      </div>

      {/* Hobbies / Interests */}
      <div className="flex flex-col items-center text-gray-300 space-y-3 mt-12">
        <FaHeart className="text-3xl text-gray-500" />
        <h3 className="text-lg font-medium text-gray-100">Hobbies / Interests</h3>
        <p className="text-sm">Gaming, Photography, Traveling, Reading</p>
      </div>
    </section>
  );
};

export default AboutSection;
