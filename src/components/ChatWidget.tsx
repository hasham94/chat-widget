import { useState } from "react";
import ChatDialog from "./ChatDialog";
import Button from "./ui/Button"
import { ChatWidgetProps } from "../types/chatwidget"


const ChatWidget: React.FC<ChatWidgetProps> = ({
    primaryColor = '#6f33b7',
    isUnderMaintenance = false,
    isOnline = true,
    variant = "bubble"
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const isDrawer = variant === 'drawer'

    return (
        <div className={`fixed ${isDrawer ? 'right-0 top-0 bottom-0 flex items-center justify-center' : 'bottom-8 right-8'} z-50`}>
            <div
                className={`transition-all duration-500 ease-in-out transform ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    } origin-bottom-right`}
            >
                {isOpen &&
                    <ChatDialog
                        onClose={() => setIsOpen(false)}
                        isUnderMaintenance={isUnderMaintenance}
                        isOnline={isOnline}
                        primaryColor={primaryColor}
                    />
                }
            </div>

            {!isOpen && (
                <Button onClick={() => setIsOpen(true)} bgColor={primaryColor} isDrawer={isDrawer} />
            )}
        </div>
    );
}

export default ChatWidget
