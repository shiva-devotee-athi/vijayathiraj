import { toast, ToastContentProps } from "react-toastify";
import { motion } from "framer-motion";

interface CustomToastProps extends ToastContentProps {
  type: "success" | "error";
  title: string;
  description?: string;
}

export const CustomToast = ({
  type,
  title,
  description,
//   closeToast,
}: CustomToastProps) => {
  const isError = type === "error";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      className={`flex flex-col gap-2 w-60 sm:w-72 text-[10px] sm:text-xs z-50`}
    >
      <div
        className={`cursor-default flex items-center justify-between w-full min-h-14 sm:h-14 rounded-lg py-2 px-[10px] shadow-2xs ${isError ? "bg-red-100" : "bg-green-100"} dark:bg-[#232531]`}
      >
        <div className="flex gap-2">
          <div
            className={`${
              isError ? "text-[#d65563]" : "text-[#2b9875]"
            } bg-black/5 h-fit dark:bg-black/20 backdrop-blur-xl p-1 rounded-lg`}
          >
            {isError ? <ErrorIcon /> : <SuccessIcon />}
          </div>
          <div>
            <p className="text-black dark:text-white">{title}</p>
            {description && <p className="text-gray-600 dark:text-gray-400">{description}</p>}
          </div>
        </div>
        <button
          onClick={()=>toast.clearWaitingQueue()}
          className="text-gray-700 dark:text-gray-300 dark:hover:bg-black/20 hover:bg-black/5 p-1 rounded-md transition-colors ease-linear"
        >
          <CloseIcon />
        </button>
      </div>
    </motion.div>
  );
};

const ErrorIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
    />
  </svg>
);

const SuccessIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 12.75l6 6 9-13.5"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </svg>
);
