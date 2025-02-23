import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const footerLinks = [
  { href: "#about-section", title: "About" },
  { href: "#skills-section", title: "Skills" },
  { href: "#resume-section", title: "Resume" },
  { href: "#projects-section", title: "Projects" },
  { href: "#contact-section", title: "Contact" },
];
const Footer:React.FC = () => {
  return (
    <footer className="bg-slate-950 dark:bg-transparent">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          {footerLinks.map((item) => (
            <div className="px-5 py-2" key={item.href}>
              <a
                href={item.href}
                className="text-base leading-6 dark:text-gray-500 dark:hover:text-gray-100"
              >
                {item.title}
              </a>
            </div>
          ))}
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          <a
            href="https://www.facebook.com/athi.vignesh.58/"
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Facebook</span>
            <FaFacebook className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/shiva_devotee_athi"
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Instagram</span>
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/shiva_devotee"
            className="text-gray-400 hover:text-gray-500"
          >
            <FaXTwitter className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/shiva-devotee-athi"
            className="text-gray-400 hover:text-gray-500"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/mwlite/in/vijayathiraj-s-519966210"
            className="text-gray-400 hover:text-gray-500"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          © 2025 Vijayathiraj, Just a simple work of imagination.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
