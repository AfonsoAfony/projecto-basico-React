import { useEffect, useState } from "react"
import Tasks from "./components/Tasks.jsx"
import AddTask from "./components/AddTask.jsx"
import Title from "./components/Title.jsx";

function App() {
 
  const [tasks,setTasks]=useState(
     JSON.parse(localStorage.getItem("tasks")) || []
)

useEffect(()=>{
  localStorage.setItem('tasks',JSON.stringify(tasks))
},
[tasks]);

function onTaskClick(taskId){
 const newsTasks = tasks.map(task=>{
  if(task.id === taskId){
    //Actualizo essa tarefa
    return {...task, isCompleted: !task.isCompleted}
  }
  //Não Actualizo essa tarefa
  return task
 })
 setTasks(newsTasks)
}

//Deletar Task
function deleteTask(taskId){
  const newsTasks=tasks.filter(task=> task.id!==taskId)
  setTasks(newsTasks)

}

function onAddTaskSubmit(title,description){
 
  const newTask={
    id:(tasks.length+1),
    title,
    description,
    isCompleted:false
  }

  setTasks([ ...tasks,newTask])
}
  return (
      <div className='w-screen hscreen flex justify-center p-6'>
        <div className=" w-[500] space-y-4">
          <Title>Gerenciador de Tarefas</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} deleteTask={deleteTask}/>
        
        
        </div>
      </div>
      

  )
}

export default App
