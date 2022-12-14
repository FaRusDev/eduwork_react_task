import React from 'react'
import Container from '../components/Container/Container'
import Button from '../components/Button/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const BannerLeft = ({image,tag,htext,ptext}) => {
  return (
    <Container>
      <div className='flex justify-center items-center'>
        <div className='flex flex-col text-left flex-1 justify-between h-full space-y-10'>
            <p className='text-2xl font-extralight text-gray-400 uppercase'>{tag}</p>
            <h1 className='text-8xl font-bold mx-auto'>{htext}</h1>
            <p className='text-2xl font-extralight text-gray-400'>{ptext}</p>
            <div className='w-1/2'>
              <Button content='Learn More' ic={<ArrowForwardIcon/>} isPrimary={false}/>
            </div>
        </div>
        <div className='flex-1 w-100'>
            <img className='mx-auto' src={image} alt="" />
        </div>
        
      </div>
    </Container>
  )
}

export default BannerLeft