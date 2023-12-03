import TodoList from '@/components/todos/TodoList';
import React, { useState } from 'react'

const HomePage = () => {
 const [enteredTodo,setEnteredTodo] = useState('');
  const [todo,setTodo] = useState([]);

  const todoHandler=(e)=>{
e.preventDefault();
const obj = {id:enteredTodo,task:enteredTodo,completed:false};
setTodo(prev=>[...prev,obj])
  }
  return (
    <div>
      <h2>Add todo</h2>
      
     <form action="" onSubmit={todoHandler}>
      <label htmlFor="">Enter task </label>
      <input type="text" name='inputTodo' value={enteredTodo} onChange={(e)=>setEnteredTodo(e.target.value)} />
      <button>Add</button>
     </form>

     {/* <ul>
      {todo.map((item)=>(
        <li key={item}>{item}</li>
      ))}
     </ul> */}
     <TodoList todos={todo}/>
    </div>
  )
}

export default HomePage
