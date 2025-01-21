import React from 'react'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='w-full bg-[#333] text-[#fff] py-1 fixed top-0 left-0 flex items-center justify-between z-10 con'>
        <img src={logo} alt="" className='w-[180px] logo' />
        <ul className='ul1'>
            <li className='pro'>Home</li>
            <li className='pro'>Program</li>
            <li className='pro'>About us</li>
            <li className='pro'>Campus</li>
            <li className='pro'>Testimonials</li>
            <li className='pro'><button className='btn'>Contact us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar
