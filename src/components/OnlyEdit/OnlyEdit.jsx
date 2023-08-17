import { useState } from "react";
import styleOnly from "./OnlyEdit.module.css";
import { Link } from "react-router-dom";

export default function OnlyEdit({title,descrip,textLarge}){
    
    const [edit,setEdit] = useState(false);

    let contentInfo;
     
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
            <article className={styleOnly.contentOnly} style={{width:'400px',margin:'auto'}}>    
                <article className={styleOnly.contentEditor}>
                    <p className={styleOnly.textTitle}>titulo:</p>
                    <input className={styleOnly.inputData} maxLength={20} type="text" />
                </article>    
                <article className={styleOnly.contentEditor}>
                    <p className={styleOnly.textTitle}>decrip:</p>
                    <input className={styleOnly.inputData} maxLength={30} type="text" />
                </article>
                <article className={styleOnly.contentEditor}>
                    <p className={styleOnly.textTitle}>texto largo:</p>
                    <textarea className={styleOnly.inputData} type="text" />
                </article>
                <button className={styleOnly.boton} onClick={()=>{setEdit(true)}}>cancelar</button>
                <button className={styleOnly.botonSave} onClick={()=>{setEdit(true)/*modificar esto*/}}>guardar</button>
            </article>
        )
    }
    
    
    return(
        contentInfo
    )
}