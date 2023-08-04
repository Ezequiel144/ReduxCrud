import { useState } from "react";
import styleOnly from "./OnlyEdit.module.css";

export default function OnlyEdit({title,descrip,textLarge}){
    
    const [edit,setEdit] = useState(false);

    let contentInfo;
     
    if(edit){
        <p>hola</p>
        contentInfo = (
            <article className={styleOnly.contentOnly}>
                <article className={styleOnly.contentEditor}>
                    <p>titulo: {title}</p>
                </article>    
                <article className={styleOnly.contentEditor}>
                    <p>decrip: {descrip}</p>
                </article>
                <article className={styleOnly.contentEditor}>
                    <p>texto largo: {textLarge}</p>
                </article>
                
                <button className={styleOnly.boton} onClick={()=>{setEdit(false)}}>editar</button>
            
            </article>
        )
    }else{
        contentInfo = (
            <article className={styleOnly.contentOnly}>    
                <article className={styleOnly.contentEditor}>
                    <p>titulo:</p>
                    <input className={styleOnly.inputData} type="text" />
                </article>    
                <article className={styleOnly.contentEditor}>
                    <p>decrip:</p>
                    <input className={styleOnly.inputData} type="text" />
                </article>
                <article className={styleOnly.contentEditor}>
                    <p>texto largo:</p>
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