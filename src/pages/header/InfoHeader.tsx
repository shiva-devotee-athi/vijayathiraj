import React, { useEffect, useRef, useState } from "react";
import "@/styles/css/nav_page.css";
import "@/styles/scss/theme_switch.scss";
import "@/styles/scss/mobile_nav_bar.scss";
import { useCycle } from "framer-motion";
import naruto_bgm from "@/assets/files/naruto_bgm.mp3";
import { useTheme } from "@/context/ThemeContext";
import InfoLangMenuDropdown from "@/components/navbar/InfoLangMenuDropdown";

const InfoHeader: React.FC = () => {
  // const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAwake, setIsAwake] = useState(false);
  const [playSong, setPlaySong] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const [isOpen] = useCycle(false, true);

  useEffect(() => {
    handleScrollWindow();

    window && window.addEventListener("scroll", handleScrollWindow);
    return () => {
      window.removeEventListener("scroll", handleScrollWindow);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

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
            aria-label="logo text"
            className="navbar-brand text-amber-700 dark:text-amber-500 text-xl font-bold"
            href="#hero"
          >
            VJSHRI
          </a>

          <div
            className={`flex justify-end relative items-center`}
          >
            <div className={`flex justify-end gap-2 lg:gap-4 items-center`}>
              <InfoLangMenuDropdown />
              <label htmlFor="theme-toggle" className="switch">
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
                  id="theme-toggle"
                  aria-label="Toggle Dark Mode"
                  type="checkbox"
                  className="input"
                  checked={theme === "dark"}
                  onChange={toggleTheme}
                />
                <span className="slider"></span>
              </label>
              <MusicVoulme playSong={playSong} togglePlay={togglePlay} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default InfoHeader;

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

  useEffect(() => {
    handlePlayPause();
  }, [playSong]);

  return (
    <label htmlFor="play-music" className="vj_pf_info_vol_container">
      <input
        id="play-music"
        aria-label={
          playSong ? "Mute background music" : "Play background music"
        }
        checked={playSong}
        type="checkbox"
        onChange={togglePlay}
      />
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
