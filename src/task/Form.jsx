import { useState } from "react";
import { addTask } from "../services/tareasService";

export function Form(){
    const [task, setTask] = useState({
        title: "",
        completed: false
    })

    function handelchange(e){
        setTask({
            ...task,
            [e.target.name] : e.target.value
        })
        console.log(task);
    }

    async function add(e){
        e.preventDefault();
        const response = await addTask(task)
        if(response.status==201){
            alert("Añadido correctamente")
            setTask({
                title: ''
            })
        }
    }

    return (
        
         <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong" style={{borderRadius: 1 +"rem"}}>
                        <div className="card-body p-5 text-center">
                    
                            <h3 className="mb-5">Añadir</h3>
                            <form>
                            
                            <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="typeEmailX-2">Titulo de la tarea</label>
                            <input type="text" id="description" className="form-control form-control-lg" name="title" value={task.title} onChange={handelchange}/>
                            
                            </div>
                            

                            <button className="btn btn-success btn-lg btn-block" type="submit" onClick={add}>Añadir</button>
                        
                            </form>

                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
    )
}