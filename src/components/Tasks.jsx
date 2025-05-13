import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({tasks,onTaskClick,deleteTask}){
    
    const navigate=useNavigate()
    function onSeeDetailsClick(task){
        const query=new URLSearchParams()
        query.set("title",task.title)
        query.set("description",task.title)
        navigate(`/detailsTask?${query.toString()}`)
    }
    return (
        <div>
            <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
           { tasks.map((task)=>(
                <li key={task.id} className="flex gap-2"> 
                <button 
                onClick={()=> onTaskClick(task.id)} 
                className={
                    `w-full bg-green-500 text-white cursor-pointer p-2 rounded-md ${task.isCompleted && "line-through"}`
                    }>
                    {task.title}
                 </button>
                <button 
                onClick={()=>onSeeDetailsClick(task)}
                 className=" bg-green-500 p-2 cursor-pointer rounded-md text-white">
                    <ChevronRightIcon/>
                </button>
                
                <button onClick={()=> deleteTask(task.id)} className="cursor-pointer bg-red-400 p-2 rounded-md text-white">
                    <TrashIcon/>
                </button>
                 </li>
            ))}
            </ul>
        </div>

    )
}

export default Tasks; 