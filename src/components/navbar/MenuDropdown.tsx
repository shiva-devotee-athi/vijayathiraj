import i18next from "i18next";
import React, { useEffect, useRef, useState } from "react";

const languages = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "Japanese", value: "ja" },
  // { label: "Tamil", value: "tn" },
];

const MenuDropdown: React.FC = () => {
  const isLangDropdownRef = useRef<HTMLDivElement | null>(null);
  const [isLangDropdown, setIsLangDropdown] = useState(false);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.addEventListener("mousedown", handleClickOutside);
    };
  }, [isLangDropdown]);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      isLangDropdownRef.current &&
      !isLangDropdownRef.current.contains(event.target as Node)
    ) {
      setIsLangDropdown(false);
    }
  };

  const handleChangeLanguage = (lang: string) => {
    i18next.changeLanguage(lang);
    localStorage.setItem("site-lang", lang);
  };

  return (
    <div
      ref={isLangDropdownRef}
      className="lg:relative inline-block text-left group absolute top-[14px] right-28 lg:right-0 lg:top-0"
    >
      <button
        type="button"
        onClick={() => setIsLangDropdown(!isLangDropdown)}
        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium outline-none bg-transparent fill-black dark:fill-white text-black dark:text-white dark:hover:text-white/75 border-gray-300 rounded-md focus:outline-none focus:ring-0"
      >
        <svg
          viewBox="0 0 25 25"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="size-7"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.4 5.4H4v1.2h9.219c-.058.185-.13.396-.216.622-.3.778-.763 1.69-1.427 2.354L10 11.15l-.576-.575a8.785 8.785 0 01-1.462-1.93 6.883 6.883 0 01-.376-.79 2.055 2.055 0 01-.015-.04L7.57 7.81 7 8l-.57.19.001.001.001.003.002.005.007.019.022.061c.02.052.048.125.087.215.078.181.196.434.363.735a9.987 9.987 0 001.663 2.195L9.15 12 4.58 16.572l-.003.003h-.001l.848.85.003-.003 4.61-4.61 2.579 2.149.768-.922-2.495-2.08 1.535-1.535c.836-.835 1.373-1.924 1.699-2.771.159-.414.272-.782.347-1.053H16V5.4h-5.4V4H9.4v1.4zm8.04 4.6l4.113 9.767h-1.302L19.128 17.1h-4.256l-1.123 2.667h-1.302L16.56 10h.88zm-2.063 5.9h3.246L17 12.046 15.377 15.9z"
            fill="currentColor"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 ml-2 -mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isLangDropdown && (
      <div
        className="absolute right-0 z-10 min-w-30 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 dark:bg-zinc-900 ring-black/5 focus:outline-hidden"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <div className="py-1 w-full" role="none">
          {/* Active: "bg-gray-100 text-gray-900 outline-hidden", Not Active: "text-gray-700" */}
          {languages.map((lang) => (
            <a
              onClick={() => handleChangeLanguage(lang.value)}
              className="block px-4 py-2 text-sm cursor-default whitespace-nowrap overflow-hidden text-ellipsis text-black dark:text-white dark:hover:text-white/75 dark:hover:bg-zinc-700"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-0"
            >
              {lang.label}
            </a>
          ))}
        </div>
      </div>
      )}
    </div>
  );
};

export default MenuDropdown;
