import { Link } from 'react-router-dom';
import styleTask from './TaskEdit.module.css';


export default function TaskEdit({title,descrip,id}){

    return(
        <Link to={`/modificar/${id}`} className={styleTask.contentTask}>
            <h3 className={styleTask.title}>{title}</h3>
            <p className={styleTask.descrip}>{descrip}</p>
        </Link>
    )
}