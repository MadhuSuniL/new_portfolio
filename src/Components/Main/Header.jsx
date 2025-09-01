import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaPhone, FaWhatsapp } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import Navbar from "./Navbar";

const Header = () => {
  const [isTyping, setIsTyping] = useState(true);

  return (
    <div>
      <Navbar />
      <div className="grid md:grid-cols-2 gap-4 py-32 px-4 bg-transparent">
        {/* Left column could hold image/illustration later */}
        <div></div>

        {/* Right column */}
        <div className="text-white min-h-72">
          <ReactTyped
            strings={[
              "Hi, I am",
              "Madhu Bagamma Gari.",
              "End-to-End Python AI Engineer",
            ]}
            typeSpeed={50}
            backSpeed={20}
            loop={false}
            showCursor={false}
            onComplete={() => setIsTyping(false)}
          />

          {!isTyping && (
            <>
              <button
                onClick={() => (window.location.href = "#contact")}
                aria-label="Hire me button"
                className="mt-8 text-2xl animate-pulse px-10 py-3 font-thin bg-sky-500 rounded-xl hover:bg-sky-400 transition"
              >
                Hire me
              </button>

              <div className="flex items-center mt-6 space-x-4">
                {joinItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="transform hover:scale-110 transition"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

const joinItems = [
  {
    link: "https://github.com/MadhuSuniL",
    icon: <FaGithub className="text-gray-300" size={30} />,
    label: "GitHub",
  },
  {
    link: "https://www.linkedin.com/in/madhu-bagamma-gari-833a84239/",
    icon: <FaLinkedin className="text-gray-300" size={30} />,
    label: "LinkedIn",
  },
  {
    link: "mailto:bagammagarimadhu@gmail.com",
    icon: <FaGoogle className="text-gray-300" size={30} />,
    label: "Email",
  },
  {
    link: "tel:9948377187",
    icon: <FaPhone className="text-gray-300" size={27} />,
    label: "Phone",
  },
  {
    link: "https://wa.me/9948377187",
    icon: <FaWhatsapp className="text-gray-300" size={32} />,
    label: "WhatsApp",
  },
];
