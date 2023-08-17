import { useParams } from "react-router-dom";
import styleOnly from "./PagesEditOnly.module.css";
import { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import OnlyEdit from "../../components/OnlyEdit/OnlyEdit";


export default function PagesEditOnly(){

    const {idmod} = useParams()

    const [task,setTask] = useState(useSelector(state => state.tasks));

    useEffect(()=>{
        setTask(task.find(item=>item.id === parseInt(idmod)))
    },[idmod])

    /* console.log(task); */

    return(
        <section className={styleOnly.contentEdit}>
            <OnlyEdit 
                title={task.title}
                descrip={task.descrip}
                textLarge={task.textLarge}
            />
        </section>
    )
}