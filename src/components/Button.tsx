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
      className="flex items-center gap-3 px-2 py-1 transition-all border-2 border-solid bg-p250 rounded-xl font-jakarta border-p750 hover:bg-p500 hover:scale-105 active:scale-95"
    >
      <div className="z-10 flex items-center justify-center w-12 h-12 rounded-lg bg-p750">
        <img src="/public/note.svg" alt="icon" className="z-20 w-8 h-8" />
      </div>

      <div className="text-left">
        <p className="text-base font-semibold text-g333">{mainText}</p>
        {subText && <p className="text-gray-500 text-s">{subText}</p>}
      </div>
    </button>
  );
};

export default Button;