import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
      {/* This is for line after the text line will appear at a gap of 2 after text */}

      <p className='text-gray-500'>{text1} <span className = 'text-gray-700 font-medium'> {text2} </span></p>
      
      <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
      {/* This is to set wdth and height of line for desktops and smaller screen both */}
    </div>
  )
}

export default Title
