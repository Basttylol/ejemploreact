import React from "react";
export function TodoItem({todo,cambiarEstado,eliminarTarea}){
    const {id,task,complete}=todo

    const fnCambiarEstado=()=>{
        cambiarEstado(id);
    }
    return(
        <>
            <li className="list-group-item">
            <input className="frorm-check-input me-2" onChange={fnCambiarEstado} checked={complete} type="checkbox">
            </input>
            {task}
            </li>
        </>
    );
}