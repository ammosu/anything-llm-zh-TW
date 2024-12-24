import { useState, useEffect, useContext } from "react";
import ChatHistory from "./ChatHistory";
import { CLEAR_ATTACHMENTS_EVENT, DndUploaderContext } from "./DnDWrapper";
import PromptInput, { PROMPT_INPUT_EVENT } from "./PromptInput";
import PersonalInfoWarning from "./PersonalInfoWarning";
import CheckingPersonalInfo from "./CheckingPersonalInfo";
import Workspace from "@/models/workspace";
import handleChat, { ABORT_STREAM_EVENT } from "@/utils/chat";
import { isMobile } from "react-device-detect";
import { SidebarMobileHeader } from "../../Sidebar";
import { useParams } from "react-router-dom";
import { v4 } from "uuid";
import { baseHeaders } from "@/utils/request";
import handleSocketResponse, {
  websocketURI,
  AGENT_SESSION_END,
  AGENT_SESSION_START,
} from "@/utils/chat/agent";
import DnDFileUploaderWrapper from "./DnDWrapper";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { ChatTooltips } from "./ChatTooltips";

export default function ChatContainer({ workspace, knownHistory = [] }) {
  const { threadSlug = null } = useParams();
  const [message, setMessage] = useState("");
  const [loadingResponse, setLoadingResponse] = useState(false);
  const [chatHistory, setChatHistory] = useState(knownHistory);
  const [socketId, setSocketId] = useState(null);
  const [websocket, setWebsocket] = useState(null);
  const { files, parseAttachments } = useContext(DndUploaderContext);
  const [personalInfoWarning, setPersonalInfoWarning] = useState({
    isOpen: false,
    details: null,
    pendingAction: null,
  });
  const [isCheckingPersonalInfo, setIsCheckingPersonalInfo] = useState(false);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const { listening, resetTranscript } = useSpeechRecognition({
    clearTranscriptOnListen: true,
  });

  function setMessageEmit(messageContent = "") {
    setMessage(messageContent);
    window.dispatchEvent(
      new CustomEvent(PROMPT_INPUT_EVENT, { detail: messageContent })
    );
  }

  const checkPersonalInfo = async (messageContent) => {
    try {
      setIsCheckingPersonalInfo(true);
      console.log("Checking personal info for message:", messageContent);
      console.log("Using workspace slug:", workspace.slug);
      
      const headers = baseHeaders();
      console.log("Request headers:", headers);

      const response = await fetch(
        `/api/workspace/${workspace.slug}/check-personal-info`,
        {
          method: "POST",
          headers: {
            ...headers,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: messageContent }),
        }
      );
      
      console.log("Personal info check response status:", response.status);
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Personal info check failed:", errorData);
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      console.log("Personal info check result:", result);
      return result;
    } catch (error) {
      console.error("Failed to check personal info:", error);
      return { containsPersonalInfo: false };
    } finally {
      setIsCheckingPersonalInfo(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!message || message === "") return false;

    console.log("Submitting message:", message);
    
    if (workspace.enablePersonalInfoCheck) {
      const personalInfoCheck = await checkPersonalInfo(message);
      console.log("Personal info check result:", personalInfoCheck);
      
      if (personalInfoCheck.containsPersonalInfo) {
        console.log("Personal information detected, showing warning");
        setPersonalInfoWarning({
          isOpen: true,
          details: personalInfoCheck,
          pendingAction: () => sendMessageToChat(),
        });
        return;
      }
    }

    await sendMessageToChat();
  };

  const sendMessageToChat = async () => {
    const prevChatHistory = [
      ...chatHistory,
      {
        content: message,
        role: "user",
        attachments: parseAttachments(),
      },
      {
        content: "",
        role: "assistant",
        pending: true,
        userMessage: message,
        animate: true,
      },
    ];

    if (listening) {
      endTTSSession();
    }
    setChatHistory(prevChatHistory);
    setMessageEmit("");
    setLoadingResponse(true);
  };

  const handleWarningClose = () => {
    console.log("Warning dialog closed");
    setPersonalInfoWarning({
      isOpen: false,
      details: null,
      pendingAction: null,
    });
  };

  const handleWarningConfirm = async () => {
    console.log("User confirmed to send message despite warning");
    const { pendingAction } = personalInfoWarning;
    handleWarningClose();
    if (pendingAction) {
      await pendingAction();
    }
  };

  function endTTSSession() {
    SpeechRecognition.stopListening();
    resetTranscript();
  }

  const regenerateAssistantMessage = async (chatId) => {
    const updatedHistory = chatHistory.slice(0, -1);
    const lastUserMessage = updatedHistory.slice(-1)[0];
    
    if (workspace.enablePersonalInfoCheck) {
      const personalInfoCheck = await checkPersonalInfo(lastUserMessage.content);
      if (personalInfoCheck.containsPersonalInfo) {
        setPersonalInfoWarning({
          isOpen: true,
          details: personalInfoCheck,
          pendingAction: () => {
            Workspace.deleteChats(workspace.slug, [chatId])
              .then(() =>
                sendCommand(
                  lastUserMessage.content,
                  true,
                  updatedHistory,
                  lastUserMessage?.attachments
                )
              )
              .catch((e) => console.error(e));
          },
        });
        return;
      }
    }

    Workspace.deleteChats(workspace.slug, [chatId])
      .then(() =>
        sendCommand(
          lastUserMessage.content,
          true,
          updatedHistory,
          lastUserMessage?.attachments
        )
      )
      .catch((e) => console.error(e));
  };

  const sendCommand = async (
    command,
    submit = false,
    history = [],
    attachments = []
  ) => {
    if (!command || command === "") return false;
    if (!submit) {
      setMessageEmit(command);
      return;
    }

    console.log("Sending command:", command);
    
    if (workspace.enablePersonalInfoCheck) {
      const personalInfoCheck = await checkPersonalInfo(command);
      console.log("Personal info check result for command:", personalInfoCheck);
      
      if (personalInfoCheck.containsPersonalInfo) {
        console.log("Personal information detected in command, showing warning");
        setPersonalInfoWarning({
          isOpen: true,
          details: personalInfoCheck,
          pendingAction: () => {
            let prevChatHistory;
            if (history.length > 0) {
              prevChatHistory = [
                ...history,
                {
                  content: "",
                  role: "assistant",
                  pending: true,
                  userMessage: command,
                  attachments,
                  animate: true,
                },
              ];
            } else {
              prevChatHistory = [
                ...chatHistory,
                {
                  content: command,
                  role: "user",
                  attachments,
                },
                {
                  content: "",
                  role: "assistant",
                  pending: true,
                  userMessage: command,
                  animate: true,
                },
              ];
            }
            setChatHistory(prevChatHistory);
            setMessageEmit("");
            setLoadingResponse(true);
          },
        });
        return;
      }
    }

    let prevChatHistory;
    if (history.length > 0) {
      prevChatHistory = [
        ...history,
        {
          content: "",
          role: "assistant",
          pending: true,
          userMessage: command,
          attachments,
          animate: true,
        },
      ];
    } else {
      prevChatHistory = [
        ...chatHistory,
        {
          content: command,
          role: "user",
          attachments,
        },
        {
          content: "",
          role: "assistant",
          pending: true,
          userMessage: command,
          animate: true,
        },
      ];
    }

    setChatHistory(prevChatHistory);
    setMessageEmit("");
    setLoadingResponse(true);
  };

  useEffect(() => {
    async function fetchReply() {
      const promptMessage =
        chatHistory.length > 0 ? chatHistory[chatHistory.length - 1] : null;
      const remHistory = chatHistory.length > 0 ? chatHistory.slice(0, -1) : [];
      var _chatHistory = [...remHistory];

      if (!!websocket) {
        if (!promptMessage || !promptMessage?.userMessage) return false;
        websocket.send(
          JSON.stringify({
            type: "awaitingFeedback",
            feedback: promptMessage?.userMessage,
          })
        );
        return;
      }

      if (!promptMessage || !promptMessage?.userMessage) return false;

      const attachments = promptMessage?.attachments ?? parseAttachments();
      window.dispatchEvent(new CustomEvent(CLEAR_ATTACHMENTS_EVENT));

      await Workspace.multiplexStream({
        workspaceSlug: workspace.slug,
        threadSlug,
        prompt: promptMessage.userMessage,
        chatHandler: (chatResult) =>
          handleChat(
            chatResult,
            setLoadingResponse,
            setChatHistory,
            remHistory,
            _chatHistory,
            setSocketId
          ),
        attachments,
      });
      return;
    }
    loadingResponse === true && fetchReply();
  }, [loadingResponse, chatHistory, workspace]);

  useEffect(() => {
    function handleWSS() {
      try {
        if (!socketId || !!websocket) return;
        const socket = new WebSocket(
          `${websocketURI()}/api/agent-invocation/${socketId}`
        );

        window.addEventListener(ABORT_STREAM_EVENT, () => {
          window.dispatchEvent(new CustomEvent(AGENT_SESSION_END));
          websocket.close();
        });

        socket.addEventListener("message", (event) => {
          setLoadingResponse(true);
          try {
            handleSocketResponse(event, setChatHistory);
          } catch (e) {
            console.error("Failed to parse data");
            window.dispatchEvent(new CustomEvent(AGENT_SESSION_END));
            socket.close();
          }
          setLoadingResponse(false);
        });

        socket.addEventListener("close", (_event) => {
          window.dispatchEvent(new CustomEvent(AGENT_SESSION_END));
          setChatHistory((prev) => [
            ...prev.filter((msg) => !!msg.content),
            {
              uuid: v4(),
              type: "statusResponse",
              content: "Agent session complete.",
              role: "assistant",
              sources: [],
              closed: true,
              error: null,
              animate: false,
              pending: false,
            },
          ]);
          setLoadingResponse(false);
          setWebsocket(null);
          setSocketId(null);
        });
        setWebsocket(socket);
        window.dispatchEvent(new CustomEvent(AGENT_SESSION_START));
        window.dispatchEvent(new CustomEvent(CLEAR_ATTACHMENTS_EVENT));
      } catch (e) {
        setChatHistory((prev) => [
          ...prev.filter((msg) => !!msg.content),
          {
            uuid: v4(),
            type: "abort",
            content: e.message,
            role: "assistant",
            sources: [],
            closed: true,
            error: e.message,
            animate: false,
            pending: false,
          },
        ]);
        setLoadingResponse(false);
        setWebsocket(null);
        setSocketId(null);
      }
    }
    handleWSS();
  }, [socketId]);

  return (
    <div
      style={{ height: isMobile ? "100%" : "calc(100% - 32px)" }}
      className="transition-all duration-500 relative md:ml-[2px] md:mr-[16px] md:my-[16px] md:rounded-[16px] bg-theme-bg-secondary w-full h-full overflow-y-scroll no-scroll"
    >
      {isMobile && <SidebarMobileHeader />}
      <DnDFileUploaderWrapper>
        <ChatHistory
          history={chatHistory}
          workspace={workspace}
          sendCommand={sendCommand}
          updateHistory={setChatHistory}
          regenerateAssistantMessage={regenerateAssistantMessage}
          hasAttachments={files.length > 0}
        />
        <PromptInput
          submit={handleSubmit}
          onChange={handleMessageChange}
          inputDisabled={loadingResponse || isCheckingPersonalInfo}
          buttonDisabled={loadingResponse || isCheckingPersonalInfo}
          sendCommand={sendCommand}
          attachments={files}
        />
      </DnDFileUploaderWrapper>
      <PersonalInfoWarning
        isOpen={personalInfoWarning.isOpen}
        onClose={handleWarningClose}
        onConfirm={handleWarningConfirm}
        details={personalInfoWarning.details}
      />
      <CheckingPersonalInfo isChecking={isCheckingPersonalInfo} />
      <ChatTooltips />
    </div>
  );
}
