
import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center flex-wrap p-5 '>
      <div className="block_1 ">
        <h2 className='text-2xl font-semibold'>Gemini</h2>
      </div>

      <div className="block_2">
        <img src="https://clone-gemini.vercel.app/assets/user_icon-BYrw3k3X.png" className='profile_image' alt="User profile"  />
      </div>

    </div>
  )
}

export default Navbar