import { IoSend } from "react-icons/io5";
import { LuPaperclip } from "react-icons/lu";

export default function ChatInput() {
  return (
    <div className="flex space-x-2 items-center mt-auto px-0 pb-0">
      <form className="flex items-center justify-center w-full space-x-2 bg-gray-100 border-y border-y-gray-300 dark:bg-gray-800">
        <input
          type="text"
          autoComplete="off"
          spellCheck
          placeholder="Type your message here"
          className="flex h-12 w-full rounded-md dark:placeholder:text-gray-300/70 focus-within:outline-none px-3 text-sm text-black dark:text-gray-200"
        />
        <div className="flex gap-3 pe-2 text-gray-900 dark:text-gray-300">
          <LuPaperclip className="w-5 h-5" />
          <IoSend className="w-5 h-5" />
        </div>
      </form>
    </div>
  );
}
