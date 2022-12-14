import React from 'react'
import Card from '../components/Card/Card'
import Container from '../components/Container/Container'
import im from '../assets/images/ic_outline-phonelink.png'
import im2 from '../assets/images/ic_baseline-cloud-queue.png'
import im3 from '../assets/images/ic_outline-backpack.png'


const WorkProduct = () => {
  return (
    <Container>
        <div className="flex flex-col space-y-20">
            <div className="flex justify-center items-center space-x-5">
                <h1 className='text-8xl font-bold flex-1'>The Product we work with.</h1>
                <p className='text-2xl font-extralight text-gray-400 flex-1'>Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget ut.</p>
            </div>
            <div className="flex justify-center items-center space-x-10">
                <Card image={im} title='Cross platform' content='Elit esse cillum dolore eu fugiat nulla pariatur'/>
                <Card image={im2} title='Cloud server' content='Elit esse cillum dolore eu fugiat nulla pariatur'/>
                <Card image={im3} title='Pure Javascript' content='Elit esse cillum dolore eu fugiat nulla pariatur'/>
            </div>
        </div>
       
    </Container>
  )
}

export default WorkProduct