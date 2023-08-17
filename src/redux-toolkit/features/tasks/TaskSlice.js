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
        }
    }
});

export const { addTask,deleteTask } = TaskSlice.actions;

export default TaskSlice.reducer;
