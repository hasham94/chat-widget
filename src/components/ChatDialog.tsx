import { useState, useEffect } from "react";
import Logo from './ui/Logo'
import { ChatDialogProps, MessageI } from "../types/chatdialog"
import { getLLMResponse } from '../api/chat';

const STORAGE_KEY = "ai_chat_widget_messages";

const ChatDialog: React.FC<ChatDialogProps> = ({
    onClose,
    isUnderMaintenance,
    isOnline,
    isDrawer,
    apiKey
}) => {
    const [messages, setMessages] = useState<MessageI[]>([
        { sender: "bot", text: "Hello! How can I help you today?" },
    ]);
    const [input, setInput] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isError, setIsError] = useState<string>('')

    const sendMessage = async () => {
        try {
            setIsError('')
            setIsLoading(true)
            if (!input.trim() || isUnderMaintenance) return;

            const newMessage = { sender: "user", text: input };
            const reply = await getLLMResponse(input, apiKey);
            setMessages(() => [
                ...messages,
                newMessage,
                { sender: "bot", text: reply },
            ]);
            setInput("");
        } catch (err) {
            setIsError(err as string)
        } finally {
            setIsLoading(false)
        }
    };

    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            setMessages(() => JSON.parse(stored));
        }
    }, []);

    // Save messages to localStorage when new question is asked
    useEffect(() => {
        if (messages.length > 1) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
        }
    }, [messages]);

    return (
        <div className={`bg-white w-96 ${isDrawer ? 'h-screen' : 'h-142 rounded-t-2xl'}  shadow-xl flex flex-col border border-gray-200`}>
            <div className="flex items-center justify-between rounded-t-2xl border-b border-gray-200 px-3 py-4">
                <div className="flex items-center gap-2 relative">
                    <div className={`bg-[#6f33b7] rounded-full p-1`}>
                        <Logo />
                    </div>
                    <span className="text-sm font-semibold">Eloquent AI</span>
                    <span className="absolute bottom-0 left-6 flex size-3">
                        <span className={`absolute inline-flex h-full w-full rounded-full 
                            ${isOnline ? 'bg-green-500' : 'bg-red-600'} opacity-75 border border-gray-600 ${!isOnline ? 'animate-ping' : ''}`}></span>
                        <span className={`relative inline-flex size-3 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-600'}`}></span>
                    </span>
                </div>
                <button onClick={onClose} className="cursor-pointer">x</button>
            </div>

            <div className="flex flex-col py-7 px-2 gap-1 text-center items-center justify-center">
                <div className={`bg-[#6f33b7] w-13 flex items-center justify-center p-3 `}>
                    <Logo />
                </div>
                <span className="text-sm font-semibold">Eloquent AI responds instantly</span>
                <span className="text-sm font-extralight">Ask me anything</span>
            </div>

            {isUnderMaintenance ? (
                <div className="flex-1 text-yellow-800 px-4 py-8 text-sm text-center">
                    This service is undergoing scheduled maintenance.
                    <span className="text-sm font-extralight block">Messaging will be re-enabled shortly.</span>
                </div>
            ) :
                <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-2">
                    {messages.map((msg, idx) => (
                        <div
                            key={idx}
                            className={`p-2 rounded-lg text-sm w-fit max-w-70 break-words ${msg.sender === "bot"
                                ? `bg-[#6f33b7] text-white self-end text-right ml-auto`
                                : "bg-gray-200 self-start text-left"
                                }`}
                        >
                            {msg.text}
                        </div>
                    ))}
                </div>
            }

            {isError && <span className="bg-white px-3 text-xs text-red-400">!Please try again</span>}
            {isLoading && <span className="bg-white px-3 text-xs text-gray-400">Searching...</span>}
            <div className="relative flex p-2 gap-2">
                <textarea
                    className={`max-h-[3.5rem] flex-1 border border-gray-300 rounded-4xl pl-3 pr-24 py-3 text-sm focus:outline-none
                        resize-none overflow-hidden h-11 leading-tight placeholder-gray-300`}
                    placeholder="Type a message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), sendMessage())}
                    disabled={isUnderMaintenance || isLoading}
                    rows={2}
                />

                <button
                    className={`absolute right-4 bottom-[14px] px-4 py-1 rounded-4xl 
                        text-white disabled:bg-gray-400 disabled:cursor-not-allowed bg-[#6f33b7]`}
                    onClick={sendMessage}
                    disabled={isUnderMaintenance || isLoading}
                >
                    Send
                </button>
            </div>

            <div className="text-center bg-gray-50 text-xs p-2 mt-2 text-gray-400">
                Powered by Eloquent AI
            </div>
        </div>
    )
}

export default ChatDialog;