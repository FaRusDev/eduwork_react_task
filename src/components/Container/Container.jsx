import React from 'react'

const Container = ({children}) => {
  return (
    <div className='px-48 w-full h-screen items-center justify-center flex overflow-hidden'>
        {children}
    </div>
  )
}

export default Container