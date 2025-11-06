import React from 'react'


interface ButtonProps {
  onClick?: () => void;
}
const AddFriend: React.FC<ButtonProps> = ({
    onClick
}) =>{
  return (
      <button onClick={onClick} className='flex items-center gap-3 px-4 py-3 text-white transition-all bg-p750 rounded-xl font-jakarta hover:scale-105 active:scale-95'>
          <img src="/public/plus.svg" alt="plus sign" className='w-6 h-6' />
          <img src="/public/user.svg" alt="user sign" className='w-6 h-6' />
    </button>
  )
}

export default AddFriend