import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Card = ({image,title,content}) => {
  return (
    <div className='shadow-lg rounded-md flex flex-col justify-between items-center space-y-6 text-center p-16 cursor-pointer group'>
        <img src={image} alt="" />
        <p className='text-3xl font-semibold'>{title}</p>
        <p className='text-sm font-normal text-gray-400'>{content}</p>
        <div className="group-hover:block hidden">
            <ArrowForwardIcon/>
        </div>
    </div>
  )
}

export default Card