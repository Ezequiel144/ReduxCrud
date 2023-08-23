import { useParams } from "react-router-dom";
import styleOnly from "./PagesEditOnly.module.css";
import { useEffect,useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import OnlyEdit from "../../components/OnlyEdit/OnlyEdit";
import { editTask } from "../../redux-toolkit/features/tasks/TaskSlice";

export default function PagesEditOnly(){

    const {idmod} = useParams();
    const dispatch = useDispatch();
    const [task,setTask] = useState(useSelector(state => state.tasks));

    useEffect(()=>{
        setTask(task.find(item => item.id === parseInt(idmod)))
    },[idmod])

    /* console.log(dispatch(editTask(task))); */

    return(
        <section className={styleOnly.contentEdit}>
            <OnlyEdit
                task = {task}
                setTask = {setTask}
            />
        </section>
    )
}