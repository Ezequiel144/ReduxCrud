import { createSlice } from "@reduxjs/toolkit";
import taskList from "../../../components/Data/DataList";

const TaskSlice = createSlice({
    name: "task",
    initialState: taskList,
    reducers:{
        addTask: (state,action) => {
            /* console.log(state,action.payload); */
            return [...state, action.payload]
        },
        deleteTask: (state,action) => {
            return state.filter(t => t.id !== action.payload);
        },
        editTask: (state,action) => {
            console.log(action.payload);
        }
    }
});

export const { addTask,deleteTask,editTask } = TaskSlice.actions;

export default TaskSlice.reducer;
