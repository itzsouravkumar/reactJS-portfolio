import React from 'react';
import { FaGithub } from 'react-icons/fa';

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-950 text-white px-4 py-16 text-center pt-24 w-full"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12">Projects</h2>

      <div className="mx-auto grid md:grid-cols-2 gap-8">
        {/* ShopSeva Project Card */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <img
            src="/assets/shopseva.png"
            alt="ShopSeva Project"
            width={800}
            height={400}
            className="w-full h-52 object-contain"
          />
          <div className="p-6 text-left">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
              ShopSeva
            </h3>
            <p className="text-gray-300 mb-4 text-sm md:text-base">
              A modern e-commerce solution for local vendors, enabling inventory
              management and seamless order placement. Built to support small
              businesses and digitize their presence.
            </p>
            <a
              href="https://github.com/itzsouravkumar/Shop-Seva"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-400 hover:text-blue-600 text-sm font-medium"
            >
              <FaGithub className="mr-2" />
              View on GitHub
            </a>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <img
            src="/assets/placeholder.png"
            alt="Placeholder Project"
            width={800}
            height={400}
            className="w-full h-52 object-cover"
          />
          <div className="p-6 text-left">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
              Placeholder Project
            </h3>
            <p className="text-gray-300 mb-4 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              placerat, velit in sodales laoreet, justo felis imperdiet arcu,
              vitae luctus lacus ex nec elit.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-blue-400 hover:text-blue-600 text-sm font-medium"
            >
              <FaGithub className="mr-2" />
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
