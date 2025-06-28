import Logo from '../ui/Logo'

type ButtonProps = {
    onClick: () => void;
    isDrawer: boolean;
    icon?: string | null;
};

const Button: React.FC<ButtonProps> = ({ onClick, isDrawer, icon }) => {
    let buttonStyle = `px-5 py-3 rounded-br-none rounded-2xl`

    if (isDrawer) {
        buttonStyle = 'px-1 py-2 rounded-l-lg flex-col text-center w-20'
    }

    return (
        <button
            className={`bg-[#6f33b7] text-white cursor-pointer  ${buttonStyle} 
                flex items-center justify-center hover:opacity-90 shadow-md transition-all duration-300`}
            onClick={onClick}
        >
            {icon ? <img src={icon} className={`${!isDrawer ? 'w-6 mr-2' : ''}`} /> :
                <Logo width={isDrawer ? '42' : '32'} height={isDrawer ? '42' : '32'} />}
            {isDrawer ?
                <span className='block leading-4 mt-3'>Smart Advisor</span>
                : <span className='pl-1'>Chat</span>}
        </button>
    )
}

export default Button;