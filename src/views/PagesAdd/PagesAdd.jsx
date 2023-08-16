import { useState } from "react";
import styleAdd from "./PagesAdd.module.css";
import { addTask } from "../../redux-toolkit/features/tasks/TaskSlice";
import { useDispatch,useSelector } from "react-redux";


export default function PagesAgregar(){
    return(
        <section className={styleAdd.contentAdd}>
            <h1 className={styleAdd.title}>Agregar Task</h1>
            <article className={styleAdd.contentFromAll}>
                <Formulary />
            </article>
        </section>
    )
}


function Formulary(){
    let stateLenght = useSelector(state => state.tasks);
    const [form,setForm] = useState({});

    function handleChange(e){
        setForm(
            {...form,
                id: stateLenght.length,
                [ e.target.name ] :  e.target.value
            },
        )
    }
    /* const initialForm = {
        id: null,title:"", descrip:'',textLarge:''
    }

    const { formState, handleChange } = useForm(initialForm);

    const { title,descrip,textLarge } = formState; */

    const dispatch = useDispatch();

    function handleSubmit(e){
        /* console.log(formState); */
        if(form === null){
            alert("vario");
        }
        dispatch(addTask(form));
        e.preventDefault();
    }

    return(
        <form className={styleAdd.contentFrom} onSubmit={handleSubmit}>
            <label>
                Titulo: <input name="title" type="text" maxLength={20} onChange={handleChange}/>
            </label>
            <label>
                Breve Descripcion: <input name="descrip" type="text" maxLength={30} onChange={handleChange}/> 
            </label>
            <label>
                Describir Tarea: <textarea name="textLarge" type="text" onChange={handleChange}/>
            </label>
                {/* <label htmlFor="">
                    imagen: <input type="file" />
                </label> */}
            <input className={styleAdd.send} type="submit" value={"Enviar"}/>
        </form>
    )
}