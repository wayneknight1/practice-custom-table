import { configureStore } from "@reduxjs/toolkit";
import tasksSliceReducer from "./tasksSlice";

const store = configureStore({
    reducer:{
        tasks: tasksSliceReducer
    }
})

export default store