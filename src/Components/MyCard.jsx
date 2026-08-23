import React from 'react'

const MyCard = ({ title, description, btnText }) => {
  return (
    <div className='p-5 rounded-2xl shadow-xl space-y-5'>
        <h2 className='text-3xl font-bold'>{title}</h2>
        <p>{description}</p>
        <button className='bg-blue-500 text-white rounded-lg p-3'>{btnText}</button>
    </div>
  )
}

export default MyCard