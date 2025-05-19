import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { ChatMessage, ChatState } from "@/lib/types";

const ChatWidget = () => {
  const [state, setState] = useState<ChatState>({
    messages: [],
    isOpen: false,
    isLoading: false,
  });

  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [state.messages]);

  // Focus input when chat is opened
  useEffect(() => {
    if (state.isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [state.isOpen]);

  // Toggle chat open/closed
  const toggleChat = () => {
    setState((prev) => ({ ...prev, isOpen: !prev.isOpen }));
  };

  const sendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();

    if (!input.trim() || state.isLoading) return;

    // Add user message
    const userMessage: ChatMessage = {
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isLoading: true,
    }));

    setInput("");

    try {
      // Format message history for the API
      const history = state.messages.map(({ role, content }) => ({ role, content }));

      // Call the chat API
      const response = await apiRequest<{ response: string }>("https://portfoliobackend-9tgn.onrender.com/api/chat?user=hamid", {
        method: "POST",
        body: JSON.stringify({
          message: userMessage.content,
          history,
        }),
      });

      // Add AI response
      if (response) {
        const aiMessage: ChatMessage = {
          role: "assistant",
          content: response.response,
          timestamp: new Date(),
        };

        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, aiMessage],
          isLoading: false,
        }));
      }
    } catch (error) {
      console.error("Error sending message:", error);

      // Add error message
      const errorMessage: ChatMessage = {
        role: "assistant",
        content: "Sorry, I couldn't process your request. Please try again later.",
        timestamp: new Date(),
      };

      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, errorMessage],
        isLoading: false,
      }));
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Chat toggle button */}
      <motion.button
        className="w-14 h-14 rounded-full bg-primary shadow-neon text-white flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleChat}
        aria-label={state.isOpen ? "Close chat" : "Open chat"}
      >
        {state.isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {state.isOpen && (
          <motion.div
            className="absolute bottom-16 right-0 w-80 md:w-96 h-96 bg-darkBg2 glass rounded-lg shadow-neon overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            {/* Chat header */}
            <div className="p-4 border-b border-primary/20 flex justify-between items-center">
              <h3 className="text-white font-bold">Chat Assistant</h3>
              <button
                className="text-white/70 hover:text-white transition-colors"
                onClick={toggleChat}
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {state.messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-white/50 p-4">
                  <MessageCircle className="w-12 h-12 mb-2 text-primary/50" />
                  <p>Hi there! I'm Muhammad Hamid Raza's AI assistant.</p>
                  <p className="text-xs mt-2">Ask me about Hamid's experience, skills, education, or projects. I can tell you all about his MERN stack expertise, work at Sid Techno, or his education background.</p>
                </div>
              ) : (
                state.messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"
                      }`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${message.role === "user"
                        ? "bg-primary text-white rounded-tr-none"
                        : "bg-gray-800 text-white rounded-tl-none"
                        }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <span className="text-xs opacity-70 mt-1 block text-right">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>
                ))
              )}

              {/* Loading indicator */}
              {state.isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] p-3 rounded-lg bg-gray-800 text-white rounded-tl-none">
                    <div className="flex items-center">
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      <p className="text-sm">Thinking...</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Auto-scroll anchor */}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat input */}
            <form
              onSubmit={sendMessage}
              className="p-4 border-t border-primary/20 flex items-center space-x-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 rounded-lg bg-gray-800 text-white border border-primary/20 focus:border-primary focus:outline-none"
                disabled={state.isLoading}
              />
              <button
                type="submit"
                className={`p-2 rounded-lg ${input.trim() && !state.isLoading
                  ? "bg-primary text-white"
                  : "bg-gray-700 text-white/50 cursor-not-allowed"
                  }`}
                disabled={!input.trim() || state.isLoading}
                aria-label="Send message"
              >
                {state.isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatWidget;