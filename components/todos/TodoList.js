import React from 'react'

const TodoList = (props) => {

    const markHandler=(id)=>{
        const doneItem = props.todos.find(item => item.id === id);
        doneItem.completed = true;
        console.log(doneItem.completed);
    }
  return (
    <ul>
        {props.todos.map((item)=>(
        !item.completed &&    <li key={item.id}>{item.task} <button onClick={()=>markHandler(item.id)}>Mark as done</button> <button>Delete</button></li>
        ))}
    </ul>
  )
}

export default TodoList
