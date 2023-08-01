/* import taskList from "../../components/Data/DataList"; */
import Task from "../../components/Task/Task";
import styleHome from './PagesHome.module.css';
import { useSelector } from "react-redux";

export default function PagesHome(){
    const stateTask = useSelector(state => state.tasks);
    console.log(stateTask);

    return(
        <section className={styleHome.contentSec}>
            <h1 className={styleHome.title}>Lista</h1>
            <article className={styleHome.contentTaskList}>
                {
                    stateTask.map(data => {
                        return(
                            <Task
                                key={data.id} 
                                title = {data.title}
                                descrip = {data.descrip}
                                id={data.id}
                            />
                        )
                    })
                }
            </article>
        </section>
    )
}