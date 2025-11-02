import React from 'react'


interface CustomButtonProps {
  mainText: string;
  subText?: string;
  onClick?: () => void;
}

const Button: React.FC<CustomButtonProps> = ({
  mainText,
  subText,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 px-2 py-1 bg-p250 rounded-xl font-jakarta border-solid border-2 border-p750 hover:bg-p500 hover:scale-105 transition-all active:scale-95"
    >
      <div className="w-12 h-12 bg-p750  rounded-lg flex items-center justify-center z-10">
        <img src="/public/note.svg" alt="icon" className="w-8 h-8  z-20" />
      </div>

      <div className="text-left">
        <p className="text-g333 font-semibold text-base">{mainText}</p>
        {subText && <p className="text-gray-500 text-s">{subText}</p>}
      </div>
    </button>
  );
};

export default Button;