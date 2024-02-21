import { useEffect, useState } from "react";
import { getAllTask, deleteTask } from "../services/tareasService"
import { Link } from "react-router-dom";


export function List(){
    const [listTask, setList] = useState([])

    useEffect(()=>{
        async function getAll(){
            const response = await getAllTask()
            setList(response.data)
        }
        getAll()
    }, [])

    const mapTask = listTask.map((task)=>{
        return <li key={task.id}><Completed  task={task}></Completed>
        <button className="btn btn-danger" value={task.id} onClick={()=> deleteOneTask(task.id)}>Borrar</button>
        <Link to={`/details/${task.id}`} className="btn btn-info">Detalles</Link>
        </li>
    })

    async function deleteOneTask(id){
        const response = await deleteTask(id) 
        
        const list = await getAllTask()
        setList(list.data)
        
    }

    return (
    <div key={1} style={{textAlign: "center"}}>
        <h1>Lista de tareas</h1>
        <ul>
            {mapTask}
        </ul>
    </div>)
}

function Completed({task}){
    if(task.completed){
        return <del><p>Nombre de la tarea: {task.title}</p></del>
    }else{
        return <p>Nombre de la tarea: {task.title}</p>
    }
}