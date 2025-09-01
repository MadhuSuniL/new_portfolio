import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { ReactTyped } from "react-typed";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% is visible
  });

  return (
    <div id="contact">
      <footer className="py-8">
        <div ref={ref} className="min-h-72">
          {/* Name Section */}
          <div className="flex justify-center items-center mb-6">
            {inView && (
              <h2 className="text-4xl font-semibold text-gray-400 text-center">
                <ReactTyped
                  strings={["Madhu"]}
                  typeSpeed={50}
                  showCursor={false}
                />
                <br />
                <span className="text-gray-300">Bagamma Gari</span>
              </h2>
            )}
          </div>

          {/* Sub-footer */}
          <div className="flex flex-col items-center space-y-6">
            {inView && (
              <p className="text-gray-400 text-sm">
                Designed by{" "}
                <a
                  href="/"
                  className="text-gray-300 hover:text-gray-200 underline"
                >
                  @Madhu
                </a>
              </p>
            )}

            {/* Social Icons */}
            <div className="flex space-x-6">
              <a
                href="https://github.com/MadhuSuniL"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={30} className="hover:text-gray-500 text-gray-200" />
              </a>
              <a
                href="https://www.linkedin.com/in/madhu-bagamma-gari-833a84239/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={30} className="hover:text-gray-500 text-gray-200" />
              </a>
              <a
                href="https://wa.me/9948377187"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={30} className="hover:text-gray-500 text-gray-200" />
              </a>
              <a
                href="mailto:bagammagarimadhu@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
              >
                <FaEnvelope size={30} className="hover:text-gray-500 text-gray-200" />
              </a>
              <a href="tel:9948377187" aria-label="Phone">
                <FaPhone size={30} className="hover:text-gray-500 text-gray-200" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
