
import {useState, useContext} from 'react'
import {TaskContext} from '../context/TaskContext';


export default function TaskForm() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const {createTask} = useContext(TaskContext)


    const handleSubmit = (e) =>{
        e.preventDefault();
     
        createTask({
            title,
            description
        });
        setTitle('');
        setDescription('');
    }
  return (
    
        <div className='max-w-md mx-auto'>
            <form className='bg-indigo-700 p-10 mb-4 rounded-md' onSubmit={handleSubmit}>
                <h1 className='text-2xl font-bold text-white mb-1'>Crea tu tarea</h1>
                <input placeholder="Escribe la tarea aquí" 
                    onChange={(e)=>setTitle(e.target.value)} value={title} autoFocus className='bg-indigo-200 p-3 w-full mb-2' required
                />
                <textarea placeholder='Escribe la descripción aquí'  onChange={(e)=>setDescription(e.target.value)} value={description} className='bg-indigo-200 p-3 w-full mb-2' required></textarea>
                <button className='bg-white px-2 py-1 rounded-md text-indigo-600 font-bold hover:text-lime-400'>
                    Guardar Tarea
                </button>
            </form>
        </div>
    
  )
}
