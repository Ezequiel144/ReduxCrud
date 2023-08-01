import { useState } from "react";
import styleAdd from "./PagesAdd.module.css";

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
    const [form,setForm] = useState({});

    function handleChange(e){
        /* console.log(e.target.name,e.target.value); */
        setForm(
            {...form,[ e.target.name ] :  e.target.value },
        )
    }

    function handleChangeSend(e){
        e.preventDefault();
    }

    console.log(form);

    return(
        <form className={styleAdd.contentFrom} onChange={handleChangeSend}>
            <label>
                Titulo: <input name="titulo" type="text" maxLength={25} onChange={handleChange}/>
            </label>
            <label>
                Breve Descripcion: <input name="descripcion" type="text" maxLength={45} onChange={handleChange}/> 
            </label>
            <label>
                    Describir Tarea: <textarea name="texto largo" type="text" onChange={handleChange}/>
            </label>
                {/* <label htmlFor="">
                    imagen: <input type="file" />
                </label> */}
            <input className={styleAdd.send} type="submit" value={"Enviar"}/>
        </form>
    )
}