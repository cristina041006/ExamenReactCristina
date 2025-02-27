import { Link, Outlet } from "react-router-dom";


export function Nabvar(){
    return <><nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand" to={"/"}>Tareas</Link>
    
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
            <Link to="/task">Lista de tareas</Link>
        </li>
        <br></br>
        <li className="nav-item">
            <Link to="/addTask">Añadir tarea</Link>
        </li>
      </ul> 
    </div>
  </nav>
    <div>
        <Outlet></Outlet>
    </div>  
    </>
}