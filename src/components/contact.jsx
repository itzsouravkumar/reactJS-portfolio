// src/components/ContactSection.jsx
import React, { useState } from 'react';

// This backent like part is with help of ChatGPT
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // Reset the form
    setFormData({ name: '', email: '', message: '' });
  };
  
  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-900 text-white px-6 py-12 pt-24 w-full"
    >
      <h2 className="text-4xl font-semibold text-center mb-8">Contact Me</h2>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
        Feel free to reach out for collaboration, freelance projects, or just to connect!
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg space-y-6 w-full"  // Set max-width to larger value
      >
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-left text-sm font-medium text-gray-300"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-left text-sm font-medium text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-left text-sm font-medium text-gray-300"
          >
            Message
          </label>
          <textarea
            name="message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
