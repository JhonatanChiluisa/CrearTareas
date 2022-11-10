
import {useContext} from 'react';
import {TaskContext} from '../context/TaskContext';
function TaskCard({task}) {
  const {deleteTask} = useContext(TaskContext)
  return (
    <div className='bg-violet-200 p-3 rounded-md'>
        <h1 className='text-xl font-bold capitalize text-black'>{task.title}</h1>
        <p className='text-slate-500 text-sm'>{task.description}</p>
        <button className='bg-violet-500 px-2 py-1 rounded-md mt-4 hover:bg-violet-400 text-white font-bold' onClick={() => deleteTask(task.id)}> 
          Eliminar Tarea
        </button>
    </div>
  )
}

export default TaskCard