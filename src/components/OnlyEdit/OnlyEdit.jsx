import { useState } from "react";
import styleOnly from "./OnlyEdit.module.css";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { editTask } from "../../redux-toolkit/features/tasks/TaskSlice";

export default function OnlyEdit({task,setTask}){
    
    const {title,descrip,textLarge} = task;
    const [edit,setEdit] = useState(false);
    /* const [form,setForm] = useState({}); */

    let contentInfo;

    /* const [task,setTask] = useState(useSelector(state => state.tasks)); */

    const dispatch = useDispatch();

    function handleChange(e){
        const {value,name} = e.target;
        setTask(
            {
                ...task,
                [name] : value
            }
        )
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(dispatch(editTask(task)))
    }
    
    
     
    if(edit){
        contentInfo = (
            <article className={styleOnly.contentOnly}>
                <article className={styleOnly.contentEditor}>
                    <span className={styleOnly.textTitle}>titulo:</span>
                    <p className={styleOnly.text}>{title}</p>
                </article>    
                <article className={styleOnly.contentEditor}>
                    <span className={styleOnly.textTitle}>decrip:</span>
                    <p className={styleOnly.text}>{descrip}</p>
                </article>
                <article className={styleOnly.contentEditor}>
                    <span className={styleOnly.textTitle}>texto largo:</span>
                    <p className={styleOnly.text}>{textLarge}</p>
                </article>
                
                <button className={styleOnly.boton} onClick={()=>{setEdit(false)}}>editar</button>
                <Link className={styleOnly.botonBack} to={'/modificar'}>volver</Link>
            </article>
        )
    }else{
        contentInfo = (
            <form onSubmit={handleSubmit} className={styleOnly.contentOnly} style={{width:'400px',margin:'auto'}}>    
                <article className={styleOnly.contentEditor}>
                    <p className={styleOnly.textTitle}>titulo:</p>
                    <input name="title" className={styleOnly.inputData} maxLength={20} type="text" value={title} onChange={handleChange}/>
                </article>    
                <article className={styleOnly.contentEditor}>
                    <p className={styleOnly.textTitle}>decrip:</p>
                    <input name="descrip" className={styleOnly.inputData} maxLength={30} type="text" value={descrip} onChange={handleChange}/>
                </article>
                <article className={styleOnly.contentEditor}>
                    <p className={styleOnly.textTitle}>texto largo:</p>
                    <textarea name="textLarge" className={styleOnly.inputData} type="text" value={textLarge} onChange={handleChange}/>
                </article>
                <button className={styleOnly.boton} onClick={()=>{setEdit(true)}}>cancelar</button>
                <input type="submit" className={styleOnly.botonSave} onClick={() => setEdit(true)} value={'guardar'}/>
            </form>
        )
    }
    
    
    return(
        contentInfo
    )
}