import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import styleDetails from "./PagestaskDetails.module.css"
import { useSelector,useDispatch } from "react-redux"; 
import { deleteTask } from "../../redux-toolkit/features/tasks/TaskSlice";

export default function PagesTaskDetails(){
    const {idtask} = useParams();

    const [task,setTask] = useState(useSelector(state => state.tasks));

    
    useEffect(()=>{
        setTask(task.find(t => t.id === parseInt(idtask)))
    },[idtask]);

    

    return(
        <section className={styleDetails.contentDetails}>
            <Details
                id={task.id}
                title={task.title}
                descrip={task.descrip}
                textLarge={task.textLarge}
                img={task.img}
            />
        </section>
    )
}

function Details({id,title,descrip,textLarge,img}){

    const dispatch = useDispatch();    

    const navegate = useNavigate();

    function handleDelete(id){
        dispatch(deleteTask(id));
        navegate('/');
    }

    return(
        <section className={styleDetails.contentDetails2}>
            <article className={styleDetails.contentTitleDescrip}>
                <h1 className={styleDetails.title}>{title}</h1>
                <p className={styleDetails.descrip}>{descrip}</p>
            </article>
            <article className={styleDetails.contentTextImg}>
                {/* <section className={styleDetails.sizeImg}>
                    <img className={styleDetails.imagen} src={img} alt={img} />
                </section> */}
                <p className={styleDetails.textLarge}>{textLarge}</p>
            </article>
            <button className={styleDetails.buttonDelete} onClick={() => handleDelete(id)}>Delete</button>
        </section>
    )
}