import * as React from "react";
import { useRef, useEffect } from "react";
import ChatInput from "./Input.js";
import ChatMessage from "./ChatMessage.js";
import { useChatInteract, useChatMessages } from "@chainlit/react-client";
import { X } from "lucide-react";

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
      <div className="flex flex-col flex-grow overflow-y-auto p-6 pb-20">
        <div className="space-y-4">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <ChatInput
        handleSendMessage={handleSendMessage}
        uploadFile={uploadFile}
      />
    </div>
  );
}
