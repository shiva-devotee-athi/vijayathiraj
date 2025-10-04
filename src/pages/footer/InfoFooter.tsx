import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";


const InfoFooter: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-slate-950 dark:bg-transparent">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <Link
              to="/"
              className="text-base leading-6 text-gray-300 hover:text-gray-400 dark:text-gray-300 dark:hover:text-white"
            >
              {t("Return to Home")}
            </Link>
          </div>
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          <a
            aria-label="Twitter Profile"
            href="https://www.facebook.com/athi.vignesh.58/"
            className="text-gray-400 hover:text-gray-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">Facebook</span>
            <FaFacebook className="w-6 h-6" />
          </a>
          <a
            aria-label="Instagram Profile"
            href="https://www.instagram.com/shiva_devotee_athi"
            className="text-gray-400 hover:text-gray-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">Instagram</span>
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            aria-label="Twitter Profile"
            href="https://twitter.com/shiva_devotee"
            className="text-gray-400 hover:text-gray-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="w-6 h-6" />
          </a>
          <a
            aria-label="Github Profile"
            href="https://github.com/shiva-devotee-athi"
            className="text-gray-400 hover:text-gray-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            aria-label="Linkedin Profile"
            href="https://www.linkedin.com/mwlite/in/vijayathiraj-s-519966210"
            className="text-gray-400 hover:text-gray-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          © 2025 Vijayathiraj, {t("Just a simple work of imagination.")}
        </p>
      </div>
    </footer>
  );
};

export default InfoFooter;
