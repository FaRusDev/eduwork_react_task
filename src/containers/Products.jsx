import Pd from '../assets/images/Image.png'
import Bg from '../assets/images/Blob.png'




const Products = () => {
  return (
    <div className={`bg-[#FF7235] relative h-screen -z-10`}>
        <img src={Bg} alt="" className='w-full absolute' />
        <div className='absolute w-3/5 top-1/5 right-0 left-0 bottom-0 mx-auto'>
            <img src={Pd} alt="" />
        </div>
        
    </div>
  )
}

export default Products