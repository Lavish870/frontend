'use client';
import React from 'react'

const EventHandling = () => {
  return (
    <div>

        <div className='container mx-auto py-10'>
            <h1 className='text-center font-bold text-3xl'> Event Handling</h1>
            <hr className='my-3'/>

            <button onClick={() => { alert('button was clicked') } } className='bg-blue-500 text-white p-3 rounded-lg'> Click Me</button>

            <input type="text" 
            className='border p-3 block mt-4'
            onChange={(e) => {document.body.style.backgroundColor=e.target.value;}} 
            />

            <input type="file" onChange={(e) => {console.log(e.target.files)}} />

            <input type="text"  className='block mt-4 border'
            onKeyDown={(e) => {console.log(e.code)}}
            />

        </div>
    </div>
  )
}

export default EventHandling