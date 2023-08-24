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
            const {id,title,descrip,textLarge} = action.payload;
            const foundTask = state.find(t => t.id === id);
            if(foundTask){
                foundTask.title = title;
                foundTask.descrip = descrip;
                foundTask.textLarge = textLarge;
            }
        }
    }
});

export const { addTask,deleteTask,editTask } = TaskSlice.actions;

export default TaskSlice.reducer;
