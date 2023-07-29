import Task from "../../components/Task/Task";
import styleHome from './PagesHome.module.css';

export default function PagesHome(){
    return(
        <section className={styleHome.contentSec}>
            <h1 className={styleHome.title}>Lista</h1>
            <article className={styleHome.contentTaskList}>
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
            </article>
        </section>
    )
}