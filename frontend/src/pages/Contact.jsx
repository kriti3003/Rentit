import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className= 'w-full md:max-w-[480px]' src = {assets.contact_icon}/>
        <div className='flex flex-col justify-center gap-4 text-gray-500'>
          <p className='text-black'>We’re happy to help! If you have any questions, reach out to us and we will respond to your queries ASAP.  </p>
          <p >Call us: 987654321</p>
          <p >Sent your query through mail and make sure to enter your order id number : rentit@gmail.com </p>
          <p> or visit us at our headquarters : </p>
          <p >abc street, India </p>
          <button className='border border-black text-black px-8 py-4 text:sm hover:bg-pink-300 duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default contact
