import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import "@/styles/css/nav_page.css";
import "@/styles/scss/theme_switch.scss";
import "@/styles/scss/mobile_nav_bar.scss";
import { motion, useCycle } from "framer-motion";
import { Navigation } from "@/components/navbar/Navigation";
import { MenuToggle } from "@/components/navbar/MenuToggle";
import naruto_bgm from "@/assets/files/naruto_bgm.mp3";
import { useTheme } from "@/context/ThemeContext";

const headerLinks = [
  { href: "#hero", title: "Home" },
  { href: "#about-section", title: "About" },
  { href: "#skills-section", title: "Skills" },
  { href: "#resume-section", title: "Resume" },
  { href: "#projects-section", title: "Projects" },
  { href: "#contact-section", title: "Contact" },
];

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 35px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(22px at 260px 35px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Header: React.FC = () => {
  // const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAwake, setIsAwake] = useState(false);
  const [playSong, setPlaySong] = useState(false);
  const isDesktop = useMediaQuery("(max-width: 990px)");
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const [isOpen, toggleOpen] = useCycle(false, true);

  useEffect(() => {
    handleScrollWindow();

    window && window.addEventListener("scroll", handleScrollWindow);
    return () => {
      window.removeEventListener("scroll", handleScrollWindow);
    };
  }, []);


  useEffect(()=>{
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }else{
      document.body.style.overflow = "auto";
    }
  },[isOpen])

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
  

  const togglePlay = () => {
    setPlaySong(!playSong);
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

  // const handleBurgerMenuClick = () => {
  //   setIsNavOpen(!isNavOpen);
  // };
  return (
    <header className="bg-white dark:bg-transparent">
      <nav
        className={`navbar navbar-expand-lg navbar-dark vj-pf-navbar ftco-navbar-light site-navbar-target p-4 ${
          isScrolled ? "scrolled" : ""
        } ${isAwake ? "awake" : "sleep"}`}
        id="ftco-navbar"
      >
        <div className="container flex justify-between items-center">
          <a
            className="navbar-brand text-amber-700 dark:text-amber-500 text-xl font-bold"
            href="#hero"
          >
            VJSHRI
          </a>
          {isDesktop && (
            <>
              <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                className="vj_pf_mobile_nav_bar "
              >
                <motion.div
                  className="vj_pf_mobile_nav_bar_background relative bg-slate-100 dark:bg-[#121212]"
                  variants={sidebar}
                >
                  <div className="absolute bottom-0 px-6 pb-6">
                    <label className="switch">
                      <span className="sun">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <g fill="#ffd43b">
                            <circle r="5" cy="12" cx="12"></circle>
                            <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
                          </g>
                        </svg>
                      </span>
                      <span className="moon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                        >
                          <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
                        </svg>
                      </span>
                      <input
                        type="checkbox"
                        className="input"
                        checked={theme === "dark"}
                        onChange={toggleTheme}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>
                </motion.div>
                <Navigation />
                <MenuToggle toggle={() => toggleOpen()} />
                <MusicVoulme playSong={playSong} togglePlay={togglePlay} />
              </motion.nav>
            </>
          )}

          <div className={`navbar-collapse hidden lg:flex`}>
            <ul className="navbar-nav nav ml-auto !flex-nowrap flex space-x-3">
              {headerLinks.map((link, index) => (
                <li key={link.href} className="nav-item">
                  <a
                    href={link.href}
                    className={`nav-link ${
                      index == 0 ? "active focus:bg-amber-100" : ""
                    } text-black dark:text-white dark:hover:text-white/75 outline-none`}
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
                onChange={toggleTheme}
              />
              <span className="slider"></span>
            </label>
          </div>
          <MusicVoulme playSong={playSong} togglePlay={togglePlay} />
        </div>
      </nav>
    </header>
  );
};

export default Header;

const MusicVoulme = ({
  playSong,
  togglePlay,
}: {
  playSong: boolean;
  togglePlay: () => void;
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (playSong) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };

  // useEffect(() => {
  //   const handleUserInteraction = () => {
  //     if (audioRef.current) {
  //       audioRef.current.play().catch((error) => {
  //         console.warn("Playback error:", error);
  //       });
  //     }
  //     document.removeEventListener("click", handleUserInteraction);
  //     document.removeEventListener("keydown", handleUserInteraction);
  //   };

  //   document.addEventListener("click", handleUserInteraction);
  //   document.addEventListener("keydown", handleUserInteraction);

  //   return () => {
  //     document.removeEventListener("click", handleUserInteraction);
  //     document.removeEventListener("keydown", handleUserInteraction);
  //   };
  // }, []);

  useEffect(() => {
    handlePlayPause();
  }, [playSong]);

  return (
    <label className="vj_pf_vol_container !absolute top-[34px] right-[90px] lg:right-[75px]">
      <input checked={playSong} type="checkbox" onChange={togglePlay} />
      <svg
        viewBox="0 0 576 512"
        height="1em"
        xmlns="http://www.w3.org/2000/svg"
        className="mute"
      >
        <path d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"></path>
      </svg>
      <svg
        viewBox="0 0 448 512"
        height="1em"
        xmlns="http://www.w3.org/2000/svg"
        className="voice"
      >
        <path d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM412.6 181.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5z"></path>
      </svg>
      <audio ref={audioRef} src={naruto_bgm} />
    </label>
  );
};
