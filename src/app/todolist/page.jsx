'use client';
import { Trash2 } from 'lucide-react';
import React, { useState } from 'react'

const TodoList = () => {

    const [taskList, setTaskList] = useState([]);

    const addNewTask = (e) => {
            
        if(e.code === 'Enter'){
            if(!e.target.value) {
                alert('Task cannot be empty');
                return;
            }
        
            // console.log(e.target.value);

            const newTask = { text : e.target.value, completed: false};

            setTaskList([newTask, ...taskList]);

            e.target.value = '';
        }
        
    };

    const deleteTask = (index) => {

        const temp = taskList;
        temp.splice(index, 1);
        setTaskList([...temp]);
    }


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

                        taskList.map((task, index) => {
                            return <div key={index} className='mb-4 p-4 shadow-lg flex justify-between items-center'>
                                <div className='flex gap-3'>
                                    <input onChange={(e) => {
                                        const temp = taskList;
                                        taskList[index].completed = e.target.checked;
                                        setTaskList([...temp]);
                                    }} type="checkbox" />
                                    <p>{task.text}</p>
                                </div>

                                {
                                    task.completed ? (
                                        <p className='bg-green-200 rounded-full px-3 text-green-700'>Completed</p>
                                    ) : (
                                        <p className='bg-yellow-200 rounded-full px-3 text-yellow-700'>Pending</p>
                                    )
                                }
                                <button onClick={() => {deleteTask(index)}} className='bg-red-500 p-2 text-white rounded'>
                                <Trash2 /></button>
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