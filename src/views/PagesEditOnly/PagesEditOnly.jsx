import { useParams } from "react-router-dom";
import styleOnly from "./PagesEditOnly.module.css";
import { useEffect,useState } from "react";
import { useSelector } from "react-redux";


export default function PagesEditOnly(){

    const {idmod} = useParams()

    const [task,setTask] = useState(useSelector(state => state.tasks));

    useEffect(()=>{
        setTask(task.find(item=>item.id === parseInt(idmod)))
    },[idmod])

    console.log(task);

    return(
        <section className={styleOnly.contentEdit}>
            <h1>modificar solo individualmente</h1>
            <p>titulo: {task.title}</p>
            <p>decrip: {task.descrip}</p>
            <p>id: {task.id}</p>
            <p>texto largo: {task.textLarge}</p>
        </section>
    )
}