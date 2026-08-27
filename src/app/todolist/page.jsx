'use client';
import React, { useState } from 'react'

const TodoList = () => {

    const [taskList, setTaskList] = useState([
        {text : 'doodh lao', completed: false},
        {text : 'dhaniya lao', completed: false},
        {text : 'kapde dho', completed: false},
    ]);

    const addNewTask = (e) => {
        if(e.code === 'Enter'){
            console.log(e.target.value);

            e.target.value = '';
        }
    };


  return (
    <div className='bg-gray-200 h-screen        '>

        <div className='container mx-auto py-10' >

            <div className='bg-white rounded-xl'>

               <div className='p-3'>

                 <input onKeyDown={addNewTask} className='p-2 border block w-full' type='text' />

               </div>
               <div className='border-t p-3'>

                {
                    taskList.length === 0 ? (
                        <p className='font-bold text-gray-400 text-center'>No Task Here😊</p>
                    ): (

                        taskList.map((task) => {
                            return <div>
                                <p>{task.text}</p>
                            </div>
                        })
                    )
                }

                

               </div>



            </div>

        </div>
    </div>
  )
}

export default TodoList