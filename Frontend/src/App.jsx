import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/components'
import { Todos } from './components/todos'



function App() {
    
   const [todos,setTodo]= useState([]);
   useEffect(()=>{
   fetch("http://localhost:3000/todo").then(
    async (res)=>{
      const json = await res.json();
      setTodo(json.todoGet);
   
    })}
   )
     return (
       <div>
         <CreateTodo/>
         <Todos todos={todos} />
       </div>
     )
  }




export default App
