'use client'
import React, { useState } from 'react'

const StateManagement = () => {

   const [count, setCount] = useState(1);
  return (
    <div>
        <div className='container mx-auto py-10'>
            <h1 className='text-3xl font-bold text-center'>State Management</h1>
            <button onClick={() => {
                setCount(count+1);
                console.log(count);
                 }} className='bg-blue-500 text-white'>Click</button>

                 <h1 text-3xl>{count}</h1>
        </div>
    </div>
  )
}

export default StateManagement