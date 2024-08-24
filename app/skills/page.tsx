import React from 'react'

const page = () => {
  return (
    <main className='relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip'>
    <div className='flex relative w-full h-screen justify-center items-center'>
        <div className='bg-black-300 border border-white-200 rounded-xl w-96 h-96'>
            <h1>Hello world</h1>
        </div>
        <div className='bg-blue-300 border border-white-200 rounded-xl w-96 h-96'>
            <h1>second</h1>
        </div>
    </div>
    <div className='w-full h-screen'>
        <h1>Third section</h1>
    </div>
    </main>
  )
}

export default page