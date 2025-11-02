import React from 'react'
import Button from './Button'
import AddNote from './AddNote'

const NavBar = () => {
  return (
      <div className='w-full h-20 bg-white flex justify-around items-center '>
      <Button mainText='Personal note' subText='3 notes'></Button>
      <Button mainText='Shared note' subText='3 notes'></Button>
      <AddNote></AddNote>
      </div>
  )
}

export default NavBar