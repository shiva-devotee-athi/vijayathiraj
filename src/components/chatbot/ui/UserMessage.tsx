import { CiUser } from "react-icons/ci";
import { IBotmessage } from "../Chatbot";
import { format, isToday, isYesterday } from "date-fns";

export default function UserMessage({
  userMessage,
}: {
  userMessage: IBotmessage;
}) {
  function formatChatMessageTime(timestamp: string | number | Date) {
    const date = new Date(timestamp);

    if (isToday(date)) {
      return format(date, "HH:mm bbb"); // Show hours and minutes for today
    } else if (isYesterday(date)) {
      return "Yesterday";
    } else {
      return format(date, "dd MMM"); // Show day and month for older dates
    }
  }

  return (
    <div className="flex w-full my-2">
      <div className="flex flex-col items-end gap-1 w-full max-w-[320px]">
        <div className="flex items-center justify-end space-x-2 mr-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            Visitor
          </span>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            {formatChatMessageTime(userMessage.user.createdAt)}
          </span>
        </div>
        <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-amber-600 rounded-s-xl rounded-br-xl dark:bg-amber-100 w-fit">
          <p className="text-sm font-normal text-gray-100 dark:text-black">
            {userMessage.user.message}
          </p>
        </div>
        <span className="text-sm font-normal text-right text-gray-500 dark:text-gray-400">
          {userMessage.user.status}
        </span>
      </div>
      <div className="flex justify-center p-1 w-6 h-6 bg-slate-800 rounded-full mr-2">
        <CiUser size={14} className="text-white" />
      </div>
      {/* <div>
        <div>User</div>
        <p>I need help with my computer</p>
      </div> */}
    </div>
  );
}
