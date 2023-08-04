import TaskEdit from "../../components/TaskEdit/TaskEdit";
import styleEdit from "./PagesEdit.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";



export default function PagesModificar(){

    const stateTask = useSelector(state => state.tasks);

    return(
        <section className={styleEdit.contentEdit}>
            <h1 className={styleEdit.title}>Modificar</h1>
            <article className={styleEdit.contentTaskEdit}>
                {
                    stateTask.map(date => {
                        return(<TaskEdit
                            key={date.id} 
                            title={date.title}
                            descrip={date.descrip}
                            id={date.id}
                        />)
                    })
                }
            </article>
        </section>
    )
}