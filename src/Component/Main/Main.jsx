import React from 'react'
import {PlusCircleIcon} from '@heroicons/react/solid';
export const Main = () => {
  return (
    <section id='main'className='font-Nunito  grow'>

    <header className='my-4 flex items-center justify-between'>
      <div className='logo-text'>
   <h1 className=''><spand className="text-2xl font-bold tracking-wider font-Nunito">Tiigsi technology</spand>App </h1>
    
    <p className='text-sm text-gray-500 tracking-wider'>Save your task in Tiigsi Todo app </p>
   

    </div>
    <div className='bg-white text-xl  w-10 h-10 px-1 py-2   flex justify-center items-center rounded-full '>
     <button>
    <PlusCircleIcon className='w-10 h-10 text-blue-500 rounded-full'></PlusCircleIcon>
     </button>
   </div>
    </header>
    <main>

    </main>

  </section>
  )
}
export default Main;