import styleTask from './Task.module.css'

export default function Task({title,descrip,text}){
    return(
        <section className={styleTask.contentTask}>
            <h3 className={styleTask.title}>{title}</h3>
            <p className={styleTask.descrip}>{descrip}</p>
        </section>
    )
}