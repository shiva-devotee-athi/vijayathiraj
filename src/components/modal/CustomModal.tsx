"use client";
import Portal from "@/components/Portal/Portal";
import React, { useRef, useEffect } from "react";

interface CustomModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
  size?:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "full";
  position?: "top" | "center" | "bottom";
  maxHeight?: string;
  scrollable?: boolean;
}

const sizeClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
  full: "w-full h-full",
};

const positionClasses = {
  top: "justify-start mt-10",
  center: "justify-center",
  bottom: "justify-end mb-10",
};

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  closeModal,
  size = "md",
  position = "center",
  maxHeight = "100vh",
  scrollable = true,
  children,
}) => {
  const CustomModalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        CustomModalRef?.current &&
        !CustomModalRef?.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscKey); // Listen for ESC key
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscKey); // Clean up event listeners
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <Portal>
          <div
            className="fixed z-9999 m-0 flex w-full items-center justify-center overflow-y-auto inset-0 bg-black/50"
            tabIndex={-1}
          >
            <div
              ref={CustomModalRef}
              className={`relative p-4 w-full max-h-full ${sizeClasses[size]} ${positionClasses[position]}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className=" bg-white rounded-lg shadow dark:bg-gray-700 w-full">
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="relative cursor-pointer text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 m-2 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  className={`${scrollable ? "overflow-y-auto" : ""}`}
                  style={{
                    maxHeight: scrollable
                      ? `calc(${maxHeight} - 2rem)`
                      : "auto",
                  }}
                >
                  {children}
                </div>
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

export default CustomModal;
