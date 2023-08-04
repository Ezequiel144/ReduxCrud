import { createSlice } from "@reduxjs/toolkit";
import taskList from "../../../components/Data/DataList";

const TaskSlice = createSlice({
    name: "task",
    initialState: taskList,
    reducers:{
        addTask: (state,action) => {
            /* console.log(state,action.payload); */
            return [...state, action.payload]
        }
    }
});

export const { addTask } = TaskSlice.actions;

export default TaskSlice.reducer;
