import React, { useState } from 'react'

const HomePage = () => {
 const [enteredTodo,setEnteredTodo] = useState('');
  const [todo,setTodo] = useState([]);

  const todoHandler=(e)=>{
e.preventDefault();
setTodo(prev=>[...prev,enteredTodo])
  }
  return (
    <div>
      <h2>Add todo</h2>
      
     <form action="" onSubmit={todoHandler}>
      <label htmlFor="">Enter task</label>
      <input type="text" name='inputTodo' value={enteredTodo} onChange={(e)=>setEnteredTodo(e.target.value)} />
      <button>Add</button>
     </form>

     <ul>
      {todo.map((item)=>(
        <li key={item}>{item}</li>
      ))}
     </ul>
    </div>
  )
}

export default HomePage
