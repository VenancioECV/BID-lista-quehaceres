
import { useState } from 'react'
import Nuevastareas from './Nuevastareas';


const Listadequehaceres = () => {
  
    const [tareas, setTareas] = useState([]);
    const [nuevatarea, setNuevatarea] = useState("");

    const handlenuevatarea= (e) =>{
        e.preventDefault();
        let auxi= [...tareas];
        auxi.push({ name: nuevatarea, status: false})
            setTareas([...auxi]);
            setNuevatarea("");  

    }

    const handleStatusChange= (value, idx)=>{
        let aux= [...tareas];
        aux[idx].status=value
        setTareas([...aux]);
    }

    const handleDeletetareas= (idx)=>{
        let aux = [...tareas];
        let filtered = aux.filter((value,index,array)=> index !==idx)
        setTareas([...filtered]);
    }




    return (
        <div>
    <form onSubmit={handlenuevatarea}>
        <input type="text" value={nuevatarea} onChange= {(e)=> setNuevatarea(e.target.value)}/>
        <button>Add</button>
    </form>

    <ul>
        {tareas.map((item,idx,list)=>{
            return(
                <Nuevastareas key={"tarea" + item + idx} {...item} handleStatus={handleStatusChange} index= {idx} handleDelete= {handleDeletetareas} />
            )
        })}
    </ul>


    </div>
  )
}

export default Listadequehaceres