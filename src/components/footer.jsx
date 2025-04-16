// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400 text-center py-6">
      <p className="text-sm">
        &copy; {currentYear} Sourav Kumar. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
