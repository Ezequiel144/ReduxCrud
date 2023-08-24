/* import taskList from "../../components/Data/DataList"; */
import Task from "../../components/Task/Task";
import Empty from "../../components/Empty/Empty";
import styleHome from './PagesHome.module.css';
import { useSelector } from "react-redux";

export default function PagesHome(){
    const stateTask = useSelector(state => state.tasks);
    return(
        <section className={styleHome.contentSec}>
            <h1 className={styleHome.title}>Lista</h1>
            <TaskShow 
                stateTask = {stateTask}
            />

            
        </section>
    )
}

export function TaskShow({stateTask}){
    
    console.log(stateTask);

    return(
        <article className={styleHome.contentTaskList}>
                {   stateTask.length ?
                        (stateTask.map(data => {
                            return(
                                
                                <Task
                                    key={data.id} 
                                    title = {data.title}
                                    descrip = {data.descrip}
                                    id={data.id}
                                />
                            ) 
                        })): <Empty />
                }
        </article>
    )
}