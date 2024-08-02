import React from 'react'
import { useState } from 'react'
import { addTask } from './tasksSlice'
import { useDispatch } from 'react-redux'
function Header() {
    const dispatch = useDispatch()
    const [user,setUser] = useState('')
    const [task,setTask] = useState('')
    const submitHandler = (e) =>{
        e.preventDefault();
        const id = Math.ceil(Math.random()*10000)+1
        dispatch(addTask({task,user,id}))
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
        <input placeholder='Enter task' value={task} onChange={e => setTask(e.target.value)}/>
        <input placeholder='Enter user' value={user} onChange={e => setUser(e.target.value)}/>
        <button>Add Task</button>
        </form>
    </div>
  )
}

export default Header