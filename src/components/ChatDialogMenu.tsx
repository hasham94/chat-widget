import { useState } from "react"
import { MenuIcon } from "../assets/icons"

type ChatDialogMenuProps = {
    onNew: () => void;
    setEndChat: () => void;
}

const ChatDialogMenu: React.FC<ChatDialogMenuProps> = ({ onNew, setEndChat }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const onNewChat = () => {
        onNew()
        setIsMenuOpen(false)
    }

    const onClearChat = () => {
        setEndChat()
        setIsMenuOpen(false)
    }

    return (
        <>
            <button className="cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <MenuIcon />
            </button>
            {
                isMenuOpen ?
                    <ul className="absolute bg-white w-38 border border-gray-200 rounded-xl 
                            px-3 py-2 top-7 right-7 flex flex-col gap-2 [&>li]:cursor-pointer">
                        <li onClick={onNewChat} role="button">Start a new chat</li>
                        <hr className="text-gray-100" />
                        <li onClick={onClearChat}>End Chat</li>
                    </ul> : null
            }
        </>
    )
}

export default ChatDialogMenu;