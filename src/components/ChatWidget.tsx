import { useState } from "react";
import ChatDialog from "./ChatDialog";
import Button from "./ui/Button"
import { ChatWidgetProps } from "../types/chatwidget"


const ChatWidget: React.FC<ChatWidgetProps> = ({
    isUnderMaintenance = false,
    isOnline = true,
    variant = "bubble",
    icon = null,
    apiKey
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const isDrawer = variant === 'drawer'

    const positionClasses = isDrawer ? "top-0 right-0 h-full w-96" : "bottom-8 right-8";
    const transitionClasses = "transition-all duration-500 ease-in-out transform";
    const animationClasses = isDrawer
        ? isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        : isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0";
    const originClass = isDrawer ? "origin-right" : "origin-bottom-right";

    return (
        <div className={`fixed ${isDrawer ? 'right-0 top-0 bottom-0 flex items-center justify-center' : 'bottom-8 right-8'} z-50`}>
            <div
                className={`fixed z-50 ${positionClasses} ${transitionClasses} ${animationClasses} ${originClass}`}
            >
                {isOpen &&
                    <ChatDialog
                        onClose={() => setIsOpen(false)}
                        isUnderMaintenance={isUnderMaintenance}
                        isOnline={isOnline}
                        isDrawer={isDrawer}
                        apiKey={apiKey}
                    />
                }
            </div>

            <Button onClick={() => setIsOpen(true)} isDrawer={isDrawer} icon={icon} />
        </div>
    );
}

export default ChatWidget
