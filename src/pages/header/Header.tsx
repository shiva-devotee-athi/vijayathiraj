import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import useDarkMode from "@/hooks/useDarkMode";
import { IoMenuSharp } from "react-icons/io5";
import { Link } from "react-router";
import "@/styles/css/nav_page.css";
import "@/styles/scss/theme_switch.scss";


const headerLinks = [
  { href: "#home-section", title: "Home" },
  { href: "#about-section", title: "About" },
  { href: "#skills-section", title: "Skills" },
  { href: "#resume-section", title: "Resume" },
  { href: "#projects-section", title: "Projects" },
  { href: "#contact-section", title: "Contact" },
];

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAwake, setIsAwake] = useState(false);
  const isDesktop = useMediaQuery("(max-width: 990px)");
  const [theme, setTheme] = useDarkMode();

  useEffect(() => {
    handleScrollWindow();

    window && window.addEventListener("scroll", handleScrollWindow);
    return () => {
      window.removeEventListener("scroll", handleScrollWindow);
    };
  }, []);

  const handleScrollWindow = () => {
    const { scrollY } = window;
    if (scrollY > 150) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    if (scrollY > 350) {
      setIsAwake(true);
    } else {
      setIsAwake(false);
    }
  };

  //   var scrollWindow = function() {
  //     $(window).scroll(function(){
  //         var $w = $(this),
  //                 st = $w.scrollTop(),
  //                 navbar = $('.ftco_navbar'),
  //                 sd = $('.js-scroll-wrap');

  //         if (st > 150) {
  //             if ( !navbar.hasClass('scrolled') ) {
  //                 navbar.addClass('scrolled');
  //             }
  //         }
  //         if (st < 150) {
  //             if ( navbar.hasClass('scrolled') ) {
  //                 navbar.removeClass('scrolled sleep');
  //             }
  //         }
  //         if ( st > 350 ) {
  //             if ( !navbar.hasClass('awake') ) {
  //                 navbar.addClass('awake');
  //             }

  //             if(sd.length > 0) {
  //                 sd.addClass('sleep');
  //             }
  //         }
  //         if ( st < 350 ) {
  //             if ( navbar.hasClass('awake') ) {
  //                 navbar.removeClass('awake');
  //                 navbar.addClass('sleep');
  //             }
  //             if(sd.length > 0) {
  //                 sd.removeClass('sleep');
  //             }
  //         }
  //     });
  // };

  const handleBurgerMenuClick = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <header className="bg-white dark:bg-transparent">
      <nav
        className={`navbar navbar-expand-lg navbar-dark vj-pf-navbar ftco-navbar-light site-navbar-target p-4 ${
          isScrolled ? "scrolled" : ""
        } ${isAwake ? "awake" : "sleep"}`}
        id="ftco-navbar"
      >
        <div className="container flex justify-between items-center">
          <Link
            className="navbar-brand text-amber-700 dark:text-amber-500 text-xl font-bold"
            to="/"
          >
            VJSHRI
          </Link>
          {isDesktop && (
            <button
              className="navbar-toggler active text-white dark:text-white focus:outline-none"
              type="button"
              onClick={handleBurgerMenuClick}
            >
              <span>
                <IoMenuSharp className="w-6 h-6 text-black dark:text-white" />
              </span>
              {/* <span className="oi oi-menu"></span> Menu */}
            </button>
          )}

          {/* <div
              className={`navbar-collapse ${
                isNavOpen ? "block" : "hidden"
              } lg:flex`}
            > */}
          <div className={`navbar-collapse hidden lg:flex`}>
            <ul className="navbar-nav nav ml-auto flex space-x-3">
              {headerLinks.map((link, index) => (
                <li key={link.href} className="nav-item">
                  <a
                    href={link.href}
                    className={`nav-link ${
                      index == 0 ? "active" : ""
                    } text-black dark:text-white dark:hover:text-white/75`}
                  >
                    <span>{link.title}</span>
                  </a>
                </li>
              ))}
            </ul>
            <label className="switch">
              <span className="sun">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g fill="#ffd43b">
                    <circle r="5" cy="12" cx="12"></circle>
                    <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
                  </g>
                </svg>
              </span>
              <span className="moon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
                </svg>
              </span>
              <input
                type="checkbox"
                className="input"
                checked={theme === "dark"}
                onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
