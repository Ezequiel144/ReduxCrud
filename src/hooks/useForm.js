import { useState } from "react"
import { useSelector } from "react-redux";


export function useForm(initialForm = {}){
    let stateLenght = useSelector(state => state.task);
    const [formState,setUseFormState] = useState(initialForm);

    function handleChange(e){
        /* console.log(e.target.name,e.target.value); */
        const { name,value } = e;
        setUseFormState(
            {...formState,
                id: stateLenght.length,
                [ name ] : value
            },
        )
    }

    return{
        formState,
        handleChange
    }
}