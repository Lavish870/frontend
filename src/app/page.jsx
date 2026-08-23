import MyButton from '@/Components/MyButton';
import MyCard from '@/Components/MyCard';
import React from 'react'

export const home = () => {
  return (
    <div>
      <h1 className='text-center text-4xl font-bold'>Welcome to homepage</h1>

      <p style={{ color: 'red', fontSize: 30, backgroundColor: 'yellow' }}>Using Inline CSS</p>

      <div className='grid grid-cols-3 gap-5'>
        <MyCard title={'Card Title 1'} description={'card Description 1'} btnText={'Submit'} />

        <MyCard title={'Card Title 2'} description={'Card Description 2'} btnText={'Explore'} />
      </div>

      <MyButton>Submit</MyButton>
    </div>
  )
};



export default home;