import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='bg-black w-1/2 grid grid-cols-12'>
            <input type='text' className='p-4 m-4 col-span-9' placeholder='Wht would you like to watch today?'></input>
            <button className='py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg'>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar