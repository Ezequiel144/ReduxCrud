import styleAdd from "./PagesAdd.module.css";

export default function PagesAgregar(){
    return(
        <section className={styleAdd.contentAdd}>
            <h1 className={styleAdd.title}>Agregar Task</h1>
            <article className={styleAdd.contentFromAll}>
                <form className={styleAdd.contentFrom}>
                    <label htmlFor="">
                        Titulo: <input type="text" maxLength={25}/>
                    </label>
                    <label htmlFor="">
                        Breve Descripcion: <input type="text" maxLength={45}/> 
                    </label>
                    <label htmlFor="">
                        Describir Tarea: <textarea type="text" />
                    </label>
                    {/* <label htmlFor="">
                        imagen: <input type="file" />
                    </label> */}
                    <input className={styleAdd.send} type="submit" value={"Enviar"}/>
                </form>
            </article>
        </section>
    )
}