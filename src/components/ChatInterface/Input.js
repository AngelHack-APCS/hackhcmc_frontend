import React, { useState, useCallback, useRef, useEffect } from "react";
import { Send, Camera } from "lucide-react";
import { useChatInteract } from "@chainlit/react-client";
import { v4 as uuidv4 } from "uuid";
import { useRecoilState } from "recoil";
import { attachmentsState } from "../../state/chat.js";
import { toast } from "sonner";
import { useUpload } from "../../hooks/useUpload.js";
import RecordingBackdrop from "./RecorderBackdrop.js";
import MicButton from "./MicButton.js";
import { useApi } from "../../ApiContext.js";

const ChatInput = ({ handleSendMessage }) => {
  const [inputValue, setInputValue] = useState("");
  const [attachments, setAttachments] = useRecoilState(attachmentsState);
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const api = useApi();

  const handleSubmit = (e) => {
    e.preventDefault();
    const fileReferences = attachments
      ?.filter((a) => !!a.serverId)
      .map((a) => ({ id: a.serverId }));

    if (inputValue.trim()) {
      handleSendMessage(inputValue, fileReferences);
      setInputValue("");
      setAttachments([]);
    }
  };

  const fileSpec = {
    max_size_mb: 30,
    max_files: 20,
    accept: "image/*",
  };

  const { uploadFile } = useChatInteract();
  const uploadFileRef = useRef(uploadFile);

  useEffect(() => {
    uploadFileRef.current = uploadFile;
  }, [uploadFile]);

  const onFileUpload = useCallback(
    (payloads) => {
      const attachements = payloads.map((file) => {
        const id = uuidv4();

        const { xhr, promise } = uploadFileRef.current(file, (progress) => {
          console.log(progress);
          setAttachments((prev) =>
            prev.map((attachment) => {
              if (attachment.id === id) {
                return {
                  ...attachment,
                  uploadProgress: progress,
                };
              }
              return attachment;
            })
          );
        });

        promise
          .then((res) => {
            setAttachments((prev) =>
              prev.map((attachment) => {
                if (attachment.id === id) {
                  return {
                    ...attachment,
                    // Update with the server ID
                    serverId: res.id,
                    uploaded: true,
                    uploadProgress: 100,
                    cancel: undefined,
                  };
                }
                return attachment;
              })
            );
          })
          .catch((error) => {
            toast.error(error.message);
            setAttachments((prev) =>
              prev.filter((attachment) => attachment.id !== id)
            );
          });
        return {
          id,
          type: file.type,
          name: file.name,
          size: file.size,
          uploadProgress: 0,
          cancel: () => {
            toast.info(file.name);
            xhr.abort();
            setAttachments((prev) =>
              prev.filter((attachment) => attachment.id !== id)
            );
          },
          remove: () => {
            setAttachments((prev) =>
              prev.filter((attachment) => attachment.id !== id)
            );
          },
        };
      });
      setAttachments((prev) => prev.concat(attachements));
    },
    [uploadFile]
  );

  const onAudioUpload = async (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);

    try {
      const response = await fetch(`${api.aiApis}/transcribe/`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        const { transcript } = data;

        setInputValue(String(transcript));
        // handleSendMessage(String(transcript), []);
      } else {
        const errorData = await response.json();
        console.error("Transcription failed:", errorData);
        toast.error("Transcription failed. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      toast.error("Error uploading file. Please try again.");
    }
  };

  const onFileUploadError = useCallback(
    (error) => {
      console.log("ERROR WHEN ULOADING FILE");
      toast.error(error);
    },
    [toast]
  );

  const upload = useUpload({
    spec: fileSpec,
    onResolved: (payloads) => onFileUpload(payloads),
    onError: onFileUploadError,
    options: { noClick: false },
  });

  const startRecording = async () => {
    if (isRecording) {
      console.warn("Recording is already in progress.");
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);

      audioChunksRef.current = []; // Clear any previous audio chunks

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/wav",
        });
        const fileName = `recording-${Date.now()}.wav`;
        const file = new File([audioBlob], fileName, { type: "audio/wav" });
        onAudioUpload([file]);
      };

      mediaRecorderRef.current.onerror = (event) => {
        console.error("MediaRecorder error:", event.error);
        toast.error("An error occurred during recording. Please try again.");
        setIsRecording(false);
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
      toast.info("Recording started");
    } catch (err) {
      console.error("Error accessing microphone:", err);
      toast.error(
        "Failed to start recording. Please check your microphone permissions."
      );
      setIsRecording(false);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      audioChunksRef.current = [];
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center p-4 bg-colorPalette1 border-t border-gray-200"
      >
        <div className="flex items-center bg-gray-100 border rounded-full flex-grow p-2">
          <MicButton startRecording={startRecording} />
          <button
            type="button"
            className="p-2 text-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => document.getElementById("fileInput").click()}
          >
            <Camera className="w-6 h-6" />
          </button>
          <input id="fileInput" {...upload.getInputProps()} />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type a message..."
            className="flex-grow p-2 bg-gray-100 border-none focus:outline-none focus:ring-0 rounded-full"
          />
        </div>
        <button
          type="submit"
          className="ml-2 p-2 text-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <Send className="w-6 h-6" />
        </button>
      </form>
      <RecordingBackdrop isRecording={isRecording} onClose={stopRecording} />
    </>
  );
};

export default ChatInput;
