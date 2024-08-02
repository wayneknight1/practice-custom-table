import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [{task :'Buy Mobile', user: 'Pranav Appaji',id:1},{task: 'Pay Bills', user: 'Appaji',id:2}]
    },
    reducers:{
        addTask: (state,action) =>{
            state.tasks.push(action.payload)
        },
        editTask: (state,action) =>{
            const searchId = action.payload.id;
            const filteredResults = state.tasks.filter(task => task.id!==searchId)
            state.tasks = [...filteredResults, action.payload]
        }
    }
})

export default tasksSlice.reducer
export const {addTask, editTask} = tasksSlice.actions
export const getTasks = state => state.tasks.tasks