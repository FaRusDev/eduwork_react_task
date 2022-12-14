import React from 'react'
import logo from '../../assets/images/Logo (1).png'
import Button from '../Button/Button'
import socmed1 from '../../assets/images/facebook-square.png'
import socmed2 from '../../assets/images/twitter-square.png'
import socmed3 from '../../assets/images/linkedin.png'


const Footer = () => {
  return (
    <div className='px-48'>
        <div className="flex space-x-10 justify-between my-5">
            <div>
                <img src={logo} alt="" />
            </div>
            
            <div className="space-y-5">
                <h2 className='text-2xl'>LINKS</h2>
                <ul className='space-y-5 text-lg'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Careers</li>
                    <li>Pricing</li>
                    <li>Features</li>
                    <li>Blog</li>
                </ul>
            </div>
            
            <div className="space-y-5">
                <h2 className='text-2xl'>LEGAL</h2>
                <ul className='space-y-5 text-lg'>
                    <li>Term of use</li>
                    <li>Term of conditions</li>
                    <li>Privacy policy</li>
                    <li>Cookie Policy</li>
                </ul>
            </div>

            <div className="space-y-5">
                <h2 className='text-2xl'>NEWSLETTER</h2>
                <p>Over 25000 people have subscribed</p>
                <div className="relative">
                    <input type="email" className='p-1.5' name="" id="" placeholder='Enter your email'/>
                    <div className='absolute right-1 -top-1'>
                        <Button content='Subscribe' isPrimary={true}/>
                    </div>1
                    
                </div>
                <p>We don’t sell your email and spam</p>
            </div>
            
        </div>
        <div className="flex justify-between items-center mt-10 mb-5">
            <div className='flex space-x-3'> 
                <p>Privacy & Terms</p>
                <p>Contact Us</p>
            </div>

            <p>Copyright &copy; 2022</p>

            <div className='flex  space-x-5'>
                <img src={socmed1} className="w-5 h-5" alt="" />
                <img src={socmed2} className="w-5 h-5" alt="" />
                <img src={socmed3} className="w-5 h-5" alt="" />

            </div>
            
        </div>
    </div>
  )
}

export default Footer