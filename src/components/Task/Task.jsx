import { Link } from 'react-router-dom'
import styleTask from './Task.module.css'

export default function Task({title,descrip,id}){
    return(
        <Link to={`/${id}`} className={styleTask.contentTask}>
            <h3 className={styleTask.title}>{title}</h3>
            <p className={styleTask.descrip}>{descrip}</p>
        </Link>
    )
}