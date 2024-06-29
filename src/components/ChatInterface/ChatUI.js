import * as React from "react";
import { useRef, useEffect } from "react";
import ChatInput from "./Input.js";
import ChatMessage from "./ChatMessage.js";
import { useChatInteract, useChatMessages } from "@chainlit/react-client";
import { X } from "lucide-react";
import mrCapy from "../../assets/MrCapy-1.png";

export function ChatUI({ onHeaderClicked, isShowChat }) {
  const { sendMessage, uploadFile } = useChatInteract();
  const { messages } = useChatMessages();

  const handleSendMessage = (content, fileReferences) => {
    const message = {
      name: "user",
      type: "user_message",
      output: content,
    };
    sendMessage(message, fileReferences);
  };

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isShowChat) {
      scrollToBottom();
    }
  }, [messages, isShowChat]);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center justify-between p-4 border-b">
        <X
          className="w-6 h-6 text-gray-500 cursor-pointer"
          onClick={onHeaderClicked}
        />
        <h1 className="text-2xl font-semibold">Mr.Capy</h1>
        <div className="w-6" />
      </div>
      <div className="flex flex-col flex-grow overflow-y-auto p-6 pb-20 relative">
        <div className="space-y-4 z-10 relative">
          {messages.length > 0 && (
            <ChatMessage
              key={
                messages
                  .slice()
                  .reverse()
                  .find((message) => message.name !== "user").id
              }
              message={messages
                .slice()
                .reverse()
                .find((message) => message.name !== "user")}
            />
          )}
        </div>
        <img
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-0"
          src={mrCapy}
          alt="Capybara"
        />
      </div>
      <ChatInput
        handleSendMessage={handleSendMessage}
        uploadFile={uploadFile}
      />
    </div>
  );
}
