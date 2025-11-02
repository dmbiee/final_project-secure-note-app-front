import React from 'react'
import Button from './Button'

const NavBar = () => {
  return (
      <div className='w-full h-20 bg-white flex justify-around items-center'>NavBar
      <Button mainText='Personal note' subText='3 notes'></Button>
      </div>
  )
}

export default NavBar