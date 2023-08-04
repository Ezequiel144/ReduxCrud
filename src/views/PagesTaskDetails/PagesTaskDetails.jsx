import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styleDetails from "./PagestaskDetails.module.css"
import { useSelector } from "react-redux"; 

export default function PagesTaskDetails(){
    const {idtask} = useParams();

    const [task,setTask] = useState(useSelector(state => state.tasks));

    
    useEffect(()=>{
        setTask(task.find(t => t.id === parseInt(idtask)))
        console.log("ID Tarea: ", idtask)
    },[idtask]);

    

    return(
        <section className={styleDetails.contentDetails}>
            <Details 
                title={task.title}
                descrip={task.descrip}
                textLarge={task.textLarge}
                img={task.img}
            />
        </section>
    )
}

function Details({title,descrip,textLarge,img}){
    return(
        <section>
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

        </section>
    )
}