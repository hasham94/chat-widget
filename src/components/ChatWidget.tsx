import { useState } from "react";
import ChatDialog from "./ChatDialog";

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-8 right-8 z-50">
            {isOpen ? (
                <ChatDialog onClose={() => setIsOpen(false)} />
            ) : <button
                className="bg-[#6f33b7] text-white rounded-full w-13 h-13 cursor-pointer flex items-center justify-center hover:opacity-80"
                onClick={() => setIsOpen(!isOpen)}
            >
                AI
            </button>}
        </div>
    );
}
