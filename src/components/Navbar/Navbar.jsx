import React from 'react'
import Button from '../Button/Button'
import Logo from '../../assets/images/Logo (1).png'

const Navbar = () => {
  return (
    <nav className='w-full flex items-center justify-center fixed px-48 bg-white py-6'>
        <div className="w-1/3">
            <img src={Logo} alt="" />
        </div>
        <div className="w-2/3 flex justify-between items-center">
            <menu className=''>
                <ul className='space-x-10 font-normal text-lg'>
                    <li className='inline-block'>Features</li>
                    <li className='inline-block'>About Us</li>
                    <li className='inline-block'>Pricing</li>
                    <li className='inline-block'>Feedback</li>
                </ul>
            </menu>
            <Button content='Request a demo' className='shadow-md'/>
        </div>
        
    </nav>
  )
}

export default Navbar