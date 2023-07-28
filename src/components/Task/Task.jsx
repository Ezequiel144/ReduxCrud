import styleTask from './Task.module.css'

export default function Task(){
    return(
        <section className={styleTask.contentTask}>
            <h3 className={styleTask.title}>Title</h3>
            <p className={styleTask.descrip}>Task is Descrip</p>
        </section>
    )
}