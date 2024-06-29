import * as React from "react";
import { Mic } from "lucide-react";

const MicButton = ({ startRecording }) => {
  return (
    <button
      type="button"
      className="p-2 text-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={startRecording}
    >
      <Mic className="w-6 h-6" />
    </button>
  );
};

export default MicButton;
