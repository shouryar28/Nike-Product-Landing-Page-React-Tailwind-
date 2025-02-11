import React from 'react'

const Header = () => {
  return (
    <div>
    <div>
      <nav className='flex justify-between py-5 px-10  text-lg'>
        <div>
          <img src="/images/brand_logo.png" alt="logo" />
        </div>

          <ul className="flex">
            <li href="#" className="px-4">Menu</li>
            <li href="#" className="px-4">Location</li>
            <li href="#" className="px-4">About</li>
            <li href="#" className="px-4">Contact</li>
          </ul>

          <button className='bg-red-600 py-1 px-5 text-white'>Log in</button>
      </nav>
    </div>
  </div>
  )
}

export default Header








