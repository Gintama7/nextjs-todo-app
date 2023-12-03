import TodoList from '@/components/todos/TodoList';
import { MongoClient } from 'mongodb';

import React, { useState } from 'react'

const HomePage = (props) => {
 const [enteredTodo,setEnteredTodo] = useState('');
  const [todo,setTodo] = useState([]);

  const todoHandler = async(e) => {
    e.preventDefault();
 
    const obj= {completed:false, task:enteredTodo}
    
    const res = await fetch('/api/new-todo',{
      method:'POST',
      body:JSON.stringify(obj),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const data = (await res).json();

    console.log(data);

  };


  return (
    <div>
      <h2>Add todo</h2>
      
     <form action="" onSubmit={todoHandler}>
      <label htmlFor="">Enter task </label>
      <input type="text" name='inputTodo' value={enteredTodo} onChange={(e)=>setEnteredTodo(e.target.value)} />
      <button>Add</button>
     </form>
     <TodoList todos={props.todos}/>
    </div>
  )
}

export async function getStaticProps(){
  const client = await MongoClient.connect('mongodb+srv://elnino:cMUuwM513oIUOXLg@cluster0.ivvvgtb.mongodb.net/todos');
  const db = client.db();

  const todoCollection = db.collection('todos');
  const todos = await todoCollection.find().toArray();

  client.close();


  return {
    props:{
     todos: todos.map(todo =>({
      completed:todo.completed,
      task:todo.task,
      id:todo._id.toString()
     }))
    },
    revalidate: 1,
  }
}

export default HomePage
