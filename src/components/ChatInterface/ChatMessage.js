import * as React from "react";
import capyIcon from "../../assets/capybara.png";

const ChatMessage = ({ message }) => {
  const isUser = message.name === "user";

  const dateOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };
  const time = new Date(message.createdAt).toLocaleTimeString(
    undefined,
    dateOptions
  );

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4 z-10`}
    >
      {!isUser && (
        <img
          src={capyIcon}
          alt="Avatar"
          className="w-8 h-8 rounded-full mr-2 self-end"
        />
      )}
      <div className="flex flex-col max-w-[70%]">
        <div
          className={`inline-block p-3 rounded-2xl ${
            isUser ? "bg-mainColor text-white" : "bg-gray-200 text-black"
          }`}
        >
          <p className="break-words">{message.output}</p>
        </div>
        <span
          className={`text-xs text-gray-500 mt-1 ${
            isUser ? "text-right" : "text-left"
          }`}
        >
          {time}
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;
