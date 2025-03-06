import { RiRobot2Line } from "react-icons/ri";
import { IBotmessage } from "../Chatbot";
import { format, isToday, isYesterday } from "date-fns";


export default function BotMessage({
  botMessages,
}: {
  botMessages: IBotmessage;
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
      <div className="flex justify-center p-1 w-6 h-6 border dark:border-gray-200 bg-white dark:bg-slate-800 rounded-full mr-2">
        <RiRobot2Line size={14} />
      </div>
      <div className="flex flex-col items-start gap-1 w-full max-w-[320px]">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            Obito
          </span>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            {formatChatMessageTime(botMessages.bot.createdAt)}
          </span>
        </div>
        <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-500 w-fit">
          <p className="text-sm font-normal whitespace-pre-line text-gray-900 dark:text-white">
            {botMessages.bot.message}
          </p>
        </div>
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          {botMessages.bot.status}
        </span>
      </div>

      {/* <div>
        <div>Bot</div>
        <p>Hello, how can i help you?</p>
      </div> */}
    </div>
  );
}
