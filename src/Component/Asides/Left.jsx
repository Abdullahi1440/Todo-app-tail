import React from 'react'

 const Left = () => {
  return (
    <aside id='left' className=' w-20 flex-none lg:w-48 shadow-lg    rounded-tr-lg bg-white'> 
    
    left Side
    <div className="logo my-3 mx-5  ">
      <img src='/images/logo1.png'className='lg:w-14 lg:h-auto m-0 p-0 shadow-xl shadow-gray-500 rounded-full flex justify-center items-center ' alt='logo'/>
      </div>
    </aside>
  )
}
export  default Left;