import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks, editTask } from './tasksSlice';
import './Table.css';
import { FaLongArrowAltUp} from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";


function Table() {
    const [renderTasks, setRenderTasks] = useState([]);
    const [edit,setEdit] = useState({
        startEdit: false,
        id: null,
        editElement: null
    })
    const dispatch = useDispatch()
    const [editInputText, setEditInputText] = useState('')

    const tasks = useSelector(getTasks);
    const reference = useRef()
    useEffect(() => {
        setRenderTasks([...tasks]);
    }, [tasks]);

    function submitTask(receivedTask, editElement){
        const newTask = {...receivedTask}
        newTask[editElement] = editInputText
        dispatch(editTask(newTask))
        setEditInputText(receivedTask.task)
    }

    useEffect(() => {
        function temp(e){
            if(reference.current && !reference.current.contains(e.target)){
                console.log('Inside the temp function')
                setEdit({
                    startEdit: false,
                    id: null
                })
            }   
        }
        document.addEventListener('click',temp)
        return () => document.removeEventListener('click',temp)
    },[])

    const editClickHandler = (receivedTask,editElement) =>{
        console.log('edit click handler activated')
        setEdit({
            startEdit: true,
            id: receivedTask.id,
            editElement
        })

    }
    const taskHeaderClickHandler = (sortBy,direction) => {
        setRenderTasks(currentTasks => {
            const temp = [...currentTasks];
            if(direction === 'ascending')
            temp.sort((a, b) => a[sortBy].toLowerCase().localeCompare(b[sortBy].toLowerCase()));
            else    
            temp.sort((a, b) => -a[sortBy].toLowerCase().localeCompare(b[sortBy].toLowerCase()));
            return temp;
        });
    };

    return (
        <div className="table-container" ref={reference}>
            <div className="table-row table-header">
                <div  className="table-cell header-cell">Task <FaLongArrowAltUp className='icon' onClick={() => taskHeaderClickHandler('task','ascending')}/> <FaLongArrowAltDown onClick={() => taskHeaderClickHandler('user','descending')} />

                </div>
                <div className="table-cell header-cell">User <FaLongArrowAltUp onClick={() => taskHeaderClickHandler('user','ascending')} /> <FaLongArrowAltDown onClick={() => taskHeaderClickHandler('user','descending')} /></div>
            </div>
            {renderTasks.map((task, index) => (
                <div key={index} className="table-row">
                    <div className="table-cell">{(edit.startEdit&&edit.editElement ==='task'&&edit.id === task.id)?(<input value={editInputText} onChange={e => setEditInputText(e.target.value)}/>):(task.task)} <FaEdit onClick={() => editClickHandler(task,'task')}/></div> 
                    {/* <div className="table-cell">{task.user} <FaEdit onClick={() => editClickHandler(task)}/></div> */}
                    <div className="table-cell">{(edit.startEdit&&edit.editElement ==='user'&& edit.id === task.id)?(<input value={editInputText} onChange={e => setEditInputText(e.target.value)}/>):(task.user)} <FaEdit onClick={() => editClickHandler(task,'user')}/></div> 

                </div>
            ))}
        </div>
    );
}

export default Table;
