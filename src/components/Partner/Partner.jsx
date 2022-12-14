import React from 'react'
import Fb from '../../assets/images/image 1.png'
import Google from '../../assets/images/image 2.png'
import CocaCola from '../../assets/images/image 3.png'
import LinkedIn from '../../assets/images/image 4.png'
import Samsung from '../../assets/images/Image 5.png'


const Partner = () => {
  return (
    <div className='w-full px-48 py-16 bg-white flex flex-row justify-between items-center'>
        <img src={Fb} className='' alt="" />
        <img src={Google} alt="" />
        <img src={CocaCola} alt="" />
        <img src={LinkedIn} alt="" />
        <img src={Samsung} alt="" />        
    </div>
  )
}

export default Partner