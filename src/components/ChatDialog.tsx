import { useState } from "react";
import Logo from './ui/Logo'
import { ChatDialogProps } from "../types/chatdialog"

const ChatDialog: React.FC<ChatDialogProps> = ({
    onClose,
    primaryColor,
    isUnderMaintenance,
    isOnline
}) => {
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hello! How can I help you today?" },
    ]);
    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (!input.trim() || isUnderMaintenance) return;
        const newMessage = { sender: "user", text: input };
        setMessages([
            ...messages,
            newMessage,
            { sender: "bot", text: "Thanks for your message!" },
        ]);
        setInput("");
    };

    return (
        <div className="bg-white w-96 h-142 rounded-t-2xl shadow-xl flex flex-col border border-gray-200">
            <div className="flex items-center justify-between rounded-t-2xl border-b border-gray-200 px-3 py-4">
                <div className="flex items-center gap-2 relative">
                    <div className={`bg-[${primaryColor}] rounded-full p-1`}>
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
                <div className={`bg-[${primaryColor}] w-13 flex items-center justify-center p-3 `}>
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
                                ? `bg-[${primaryColor}] text-white self-end text-right ml-auto`
                                : "bg-gray-200 self-start text-left"
                                }`}
                        >
                            {msg.text}
                        </div>
                    ))}
                </div>}



            <div className="relative flex p-2 gap-2">
                <textarea
                    className={`max-h-[3.5rem] flex-1 border border-gray-300 rounded-4xl pl-3 pr-24 py-3 text-sm focus:outline-none
                        resize-none overflow-hidden h-11 leading-tight placeholder-gray-300`}
                    placeholder="Type a message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), sendMessage())}
                    disabled={isUnderMaintenance}
                    rows={2}
                />

                <button
                    className={`absolute right-4 bottom-[14px] px-4 py-1 rounded-4xl text-white disabled:bg-gray-400 disabled:cursor-not-allowed bg-[${primaryColor}]`}
                    onClick={sendMessage}
                    disabled={isUnderMaintenance}
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