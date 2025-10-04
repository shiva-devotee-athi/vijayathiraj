import { useEffect, useState } from "react";
import BotMessage from "@/components/chatbot/ui/BotMessage";
import UserMessage from "@/components/chatbot/ui/UserMessage";
import { IoCloseSharp, IoSend } from "react-icons/io5";
import Lottie from "lottie-react";
import chatbotLottie from "@/assets/lottie/chatbot.json";
import welcomeLottie from "@/assets/lottie/hi.json";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { chatbotFormData, chatbotSchema } from "@/zod/chatbot_schema";
import { LuPaperclip } from "react-icons/lu";
import axios from "axios";
import { useTranslation } from "react-i18next";

export interface IBotmessage {
  bot: {
    message: string;
    createdAt: string;
    status: string;
  };
  user: {
    message: string;
    createdAt: string;
    status: string;
  };
}

export default function Chatbot() {
  const { t } = useTranslation();
  const [showChat, setShowChat] = useState(false);
  const [botMessages, setBotMessages] = useState<IBotmessage[]>(() => {
    const savedMessages = localStorage.getItem("chatMessages");
    return savedMessages ? JSON.parse(savedMessages) : [];
  });

  useEffect(() => {
    const savedMessages = localStorage.getItem("chatMessages");
    if (savedMessages) {
      setBotMessages(JSON.parse(savedMessages));
    }
  }, []);

  const handleCloseChatbot = () => {
    setShowChat(false);
    scrollHidePersonalContainer();
  };
  // const scrollPersonalContainer = () => {
  //   document.body.style.overflow = "hidden";
  // };

  const scrollHidePersonalContainer = () => {
    document.body.style.overflow = "auto";
  };

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<chatbotFormData>({
    resolver: zodResolver(chatbotSchema),
  });

  const handleAskQuestions: SubmitHandler<chatbotFormData> = async (data) => {
    try {
      const currentTime = new Date().toISOString();

      // First, add the user's message
      const userMessage: IBotmessage = {
        user: {
          message: data.message,
          createdAt: currentTime,
          status: "delivered",
        },
        bot: {
          message: "", // Placeholder until bot responds
          createdAt: "",
          status: "",
        },
      };

      setBotMessages((prev) => {
        const updatedMessages = [...prev, userMessage];
        localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
        return updatedMessages;
      });

      const response = await axios.post("http://localhost:8000/chat/", {
        message: data.message,
      });

      if (response.status === 200) {
        const botResponse: IBotmessage = {
          ...userMessage,
          bot: {
            message: response.data.data.bot.message, // Ensure response structure
            createdAt: new Date().toISOString(),
            status: "delivered",
          },
        };

        setTimeout(() => {
          setBotMessages((prev) => {
            const updatedMessages = [...prev.slice(0, -1), botResponse];
            localStorage.setItem(
              "chatMessages",
              JSON.stringify(updatedMessages)
            );
            return updatedMessages;
          });
        }, 1000); // Delay to simulate bot response

        reset();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCustomMessage = async (message: string) => {
    try {
      const currentTime = new Date().toISOString();

      // First, add the user's message
      const userMessage: IBotmessage = {
        user: {
          message,
          createdAt: currentTime,
          status: "delivered",
        },
        bot: {
          message:
            "He Visitor,\n Sorry for the inconvenience.\n I've developed a chatbot using a custom-trained TensorFlow model and NLP methods, which performs well in my local environment. However, I've faced difficulties deploying it on free cloud services. I intend to deploy it on a dedicated cloud server (AWS, Google Cloud) or a local 24/7 server once I have the resources. I apologize for any inconvenience this may cause and appreciate your understanding.",
          createdAt: currentTime,
          status: "delivered",
        },
      };

      setBotMessages((prev) => {
        const updatedMessages = [...prev, userMessage];
        localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
        return updatedMessages;
      });

      // const response = await axios.post("http://localhost:8000/chat/", {
      //   message,
      // });

      // if (response.status === 200) {
      //   const botResponse: IBotmessage = {
      //     ...userMessage,
      //     bot: {
      //       message: response.data.data.bot.message, // Ensure response structure
      //       createdAt: new Date().toISOString(),
      //       status: "delivered",
      //     },
      //   };

      //   setTimeout(() => {
      //     setBotMessages((prev) => {
      //       const updatedMessages = [...prev.slice(0, -1), botResponse];
      //       localStorage.setItem(
      //         "chatMessages",
      //         JSON.stringify(updatedMessages)
      //       );
      //       return updatedMessages;
      //     });
      //   }, 1000); // Delay to simulate bot response

      //   reset();
      // }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Lottie
        onClick={() => setShowChat(!showChat)}
        width="100%"
        className="fixed w-40 z-50 -right-10 rounded-full  text-gray-800 p-2.5 bottom-[calc(1rem)] hover:cursor-pointer"
        animationData={chatbotLottie}
        loop={true}
      />
      {/* <TbMessageChatbot
        size={55}
        onClick={() => setShowChat(!showChat)}
        className="fixed z-50 right-4 rounded-full bg-amber-600 dark:bg-amber-500 text-gray-800 p-2.5 bottom-[calc(1rem)] hover:cursor-pointer"
      /> */}

      {showChat && (
        <div
          style={{ width: "calc(100% - 32px)" }}
          className="fixed z-50 right-4 bottom-4 rounded-xl bg-gray-200 dark:bg-gray-700 hover:cursor-pointer h-[85vh] md:h-[80vh] max-w-sm"
        >
          <div className="flex flex-col h-full">
            {/* CHAT HEADER  */}
            <div
              style={{ boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px` }}
              className="w-full flex justify-between items-start rounded-t-xl bg-amber-700 dark:bg-gray-800 p-4"
            >
              <div>
                <h2 className="font-semibold text-lg text-white tracking-tight">
                  Chatbot
                </h2>
                <p className="text-white/80">
                  {t("Assist My Personal Details")}
                </p>
              </div>
              <div>
                <IoCloseSharp
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => handleCloseChatbot()}
                />
              </div>
            </div>

            {/* CHAT CONTAINER  */}
            <div className="px-4 overflow-y-auto slim-scroll">
              <div className="flex flex-col flex-1 items-center p-2 overflow-y-auto">
                {botMessages.length <= 0 ? (
                  <>
                    <Lottie
                      width="100%"
                      className="w-50 text-gray-800 p-2.5 bottom-[calc(1rem)] hover:cursor-pointer"
                      animationData={welcomeLottie}
                      loop={false}
                    />
                    <button
                      type="button"
                      onClick={() => handleCustomMessage("hello")}
                      className="text-white bg-amber-700 hover:bg-amber-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-amber-600 dark:hover:bg-amber-700"
                    >
                      {t("Say Hi")}..👋
                    </button>
                  </>
                ) : (
                  <>
                    {botMessages.map((item, index) => (
                      <div key={index} className="w-full">
                        <UserMessage userMessage={item} />
                        {item.bot.message && <BotMessage botMessages={item} />}
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>

            {/* MESSAGE INPUT  */}

            <div className="flex space-x-2 items-center mt-auto px-0 pb-0">
              <form
                onSubmit={handleSubmit(handleAskQuestions)}
                className="flex items-center justify-center w-full space-x-2 bg-gray-100 border-y border-y-gray-300 dark:bg-gray-800"
              >
                <input
                  type="text"
                  autoComplete="off"
                  spellCheck
                  {...register("message")}
                  placeholder="Type your message here"
                  className="flex h-12 w-full rounded-md dark:placeholder:text-gray-300/70 focus-within:outline-none px-3 text-sm text-black dark:text-gray-200"
                />
                <div className="flex gap-3 pe-2 text-gray-900 cursor-not-allowed disabled:text-gray-600 dark:text-gray-300">
                  <LuPaperclip className="w-5 h-5" />

                  <button type="submit" disabled style={{ all: "unset" }}>
                    <IoSend className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
            {errors && errors.message && (
              <span className="text-red-500 mx-2">
                {" "}
                {errors.message.message}
              </span>
            )}

            <p className="text-center text-xs py-1 dark:text-white/50">
              {t("Ask Freely to")} <strong>Obito Bot</strong>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
