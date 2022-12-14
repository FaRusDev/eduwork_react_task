import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import Gbr from '../../assets/images/Illustration.png'
import Button from '../Button/Button'

const Header = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='flex flex-col flex-1 justify-between h-full space-y-10'>
            <h1 className='text-8xl font-bold mx-auto'>Track your Expenses to Save Money</h1>
            <p className='text-2xl font-extralight text-gray-400'>Helps you to organize your income and expenses</p>
            <div className="flex items-center space-x-4">
                <Button content='Try free demo' ic={<KeyboardArrowDownIcon/>} isPrimary={true}/>
                <p className='text-2xl font-extralight text-gray-400'>— Web, iOs and Android</p>
            </div>

        </div>
        <div className='flex-1 w-100'>
            <img className='mx-auto' src={Gbr} alt="" />
        </div>
        
    </div>
  )
}

export default Header