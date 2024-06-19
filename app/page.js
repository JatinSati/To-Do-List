"use client"
import React, { useState } from 'react'

const page = () => {

  const[title, settitle]= useState("")
  const[desc, setdesc]= useState("")
  const[mainTask, setmainTask]= useState([])

  const submitHandler = (e)=>{
    e.preventDefault()
    setmainTask([...mainTask, {title,desc}])
    settitle("")
    setdesc("")
    console.log(mainTask)
  }

  const deleteHandler= (i) =>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)
  }

  let renderTask= <h2>No Task Available</h2>

  if(mainTask.length > 0){
    renderTask= mainTask.map((t,i)=>{
      return(
        <li className='flex items-center justify-between mb-8'>
          <div className='flex justify-between w-1/2'>
            <h5 className='text-2xl font-semibold'>{t.title}</h5>
            <h6 className='text-3xl font-semibold'>{t.desc}</h6>
          </div>
          <button 
          onClick={()=>{
            deleteHandler(i)
          }}
          className='bg-red-300 text-white px-4 py-2 rounded font-bold'>
            Delete
          </button>
        </li>
        
      );
    });
  }
  
  return (
    <>
    <h1 className='bg-cyan-500 text-white m-8 p-5 text-5xl font-bold text-center rounded-full'> Jatin's To-Do List</h1>
    <form onSubmit={submitHandler}>
      <input 
      type='text' 
      className='text-3xl border-cyan-500 border-4 rounded-full bg-black m-5 px-8 py-2'
      placeholder='Enter your task'
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}
      />
      <input 
      type='text' 
      className='text-3xl border-cyan-500 border-4 rounded-full bg-black m-5 px-8 py-2'
      placeholder='Enter description here'
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }}
      />
      <button className='bg-cyan-500 text-white text-3xl px-4 py-2 rounded-full'>Add Task</button>
    </form>

    <div className='bg-cyan-300 p-8 text-black m-5 rounded-3xl'>
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
  )
}

export default page
 