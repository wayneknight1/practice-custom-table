import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getTasks } from './tasksSlice'
function DisplayTasks() {
    const [tasks,setTasks] = useState([])
    const fetchedTasks = useSelector(getTasks)
    useEffect(() => {
        setTasks(fetchedTasks)
    },[fetchedTasks])
    const renderedTasks = fetchedTasks.map(task => <div key={task.task}>{task.task}</div>)
  return (
    <div >
        Display Tasks Component Here
    </div>
  )
}

export default DisplayTasks