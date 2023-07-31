import taskList from "../../components/Data/DataList";
import Task from "../../components/Task/Task";
import styleHome from './PagesHome.module.css';

export default function PagesHome(){
    return(
        <section className={styleHome.contentSec}>
            <h1 className={styleHome.title}>Lista</h1>
            <article className={styleHome.contentTaskList}>
                {
                    taskList.map(data => {
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