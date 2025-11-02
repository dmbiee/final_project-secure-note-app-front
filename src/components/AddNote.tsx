import React from 'react'


interface ButtonProps {
  onClick?: () => void;
}
const AddNote: React.FC<ButtonProps> = ({
    onClick
}) =>{
  return (
      <button onClick={onClick} className='flex items-center gap-3 px-4 py-3 bg-p750 rounded-xl font-jakarta text-white hover:scale-105 transition-all active:scale-95'>
          <img src="/public/plus.svg" alt="plus sign" className='w-6 h-6' />
          <p>New Note</p>
    </button>
  )
}

export default AddNote