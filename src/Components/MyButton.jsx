import React from 'react'

const MyButton = ({ children, disabled = false }) => {
  return (
    <button disabled={disabled} className='bg-black disabled:bg-gray-700 text-white p-3 rounded-lg'>{children}</button>
  )
}

export default MyButton;