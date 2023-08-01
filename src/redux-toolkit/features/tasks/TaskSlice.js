import { createSlice } from "@reduxjs/toolkit";
import taskList from "../../../components/Data/DataList";

const TaskSlice = createSlice({
    name: "task",
    initialState: taskList,
    reducers:{
        
    }
});

export default TaskSlice.reducer;
