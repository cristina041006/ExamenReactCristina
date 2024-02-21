import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneTask } from "../services/tareasService";


export function Details(){
    const {id} = useParams()
    const [task, setTask] = useState({
        title:"",
        completed: false
    })

    if(id){
        useEffect(()=>{
            async function getOne(){
                const response = await getOneTask(id)
                setTask(response.data)
            }
            getOne()    
        }, [])
    }

    return (<div>
        <h1>Informacion de la tarea {task.title}</h1>
        <h2>Id de la tarea: {task.id}</h2>
        <h2>Nombre de la tarea: {task.title}</h2>
        <Completed task={task.completed}></Completed>
    </div>)
}

function Completed({completed}) {
    if(completed == true){
        return <h2>Tarea completada</h2>
    }else{
        return <h2>Tarea por completar</h2>
    }
}