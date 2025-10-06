import React from 'react'

const NewsLetterBox = () => {
const onSubmitHandler=(event) =>{
event.preventDefault();
}

  return (
    <div className='text-center'>
      <p className='text-2x1 font-medium text-gray-800'>Subscribe now & get 20% off</p>
    <p className='text-gray-400 mt-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consequuntur natus dolores, nesciunt, velit assumenda laudantium, praesentium porro sint consectetur ratione soluta quae debitis esse voluptates? Eos hic in obcaecati.

    </p>
    <form onSubmit={onSubmitHandler}className='w-full sm:W-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required/>
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSRIBE </button>
    </form>
    </div>
  )
}

export default NewsLetterBox
