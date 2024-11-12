import React from 'react'

const NewsletterBox = () => {
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
      <p className='text-gray-400 mt-3'>Buy today or regret later! </p>
      <form>
        <input className= 'w-full sm:flex-1 outline-none mt-3 center' type ="email" placeholder='Enter your email' required/>
        <button type='submit' className='bg-black text-white text-xs px-10 py-4 mt-5'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsletterBox
