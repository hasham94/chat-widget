import Logo from '../ui/Logo'

type ButtonProps = {
    onClick: () => void;
    bgColor: string;
    isDrawer: boolean;
};

const Button: React.FC<ButtonProps> = ({ onClick, bgColor, isDrawer }) => {
    let buttonStyle = ` px-6 py-4 rounded-br-none rounded-2xl`

    if (isDrawer) {
        buttonStyle = 'px-1 py-2 rounded-l-lg flex-col text-center w-20'
    }

    return (
        <button
            className={`bg-[${bgColor}] text-white cursor-pointer  ${buttonStyle} 
                flex items-center justify-center hover:opacity-90 shadow-md transition-all duration-300`}
            onClick={onClick}
        >   { }
            {isDrawer ?
                <>
                    <Logo width='42' height='42' />
                    <span className='block leading-4 mt-3'>Smart Advisor</span>
                </> : '💬 Chat'}
        </button>
    )
}

export default Button;