import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import taskList from "../../components/Data/DataList.js";

export default function PagesTaskDetails(){
    const {idtask} = useParams();

    const [task,setTask] = useState(taskList);

    useEffect(()=>{
        setTask(task.find(t => t.id === idtask))
        console.log("ID Tarea: ", idtask)
    },[idtask]);

    console.log(task);

    return(
        <>
            <p>destalles del id {idtask}</p>
        </>
    )
}