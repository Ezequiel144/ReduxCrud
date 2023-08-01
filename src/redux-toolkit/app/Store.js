import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from "../features/tasks/TaskSlice";

const Store = configureStore({
    reducer:{
        tasks: TaskReducer,
    }
})

export default Store;