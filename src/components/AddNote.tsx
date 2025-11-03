import React from 'react'


interface ButtonProps {
  onClick?: () => void;
}
const AddNote: React.FC<ButtonProps> = ({
    onClick
}) =>{
  return (
      <button onClick={onClick} className='flex items-center gap-3 px-4 py-3 text-white transition-all bg-p750 rounded-xl font-jakarta hover:scale-105 active:scale-95'>
          <img src="/public/plus.svg" alt="plus sign" className='w-6 h-6' />
          <p>New Note</p>
    </button>
  )
}

export default AddNote