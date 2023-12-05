import { MongoClient } from 'mongodb';
import React from 'react'
import classes from './Completed.module.css';

const CompletedPage = (props) => {
  return (
    <div>
      <h2>Completed todos</h2>
      <ul className={classes.main}>
        {props.todos.map((item)=>(
          <li key={item.id} className={classes.list_items} >{item.task} <span> <button className={classes.del_btn}>Delete</button></span></li>
        ))}
    </ul>
    </div>
  )
}

export async function getStaticProps(){
  const client = await MongoClient.connect('mongodb+srv://elnino:cMUuwM513oIUOXLg@cluster0.ivvvgtb.mongodb.net/todos');
  const db = client.db();

  const todoCollection = db.collection('todos');
  const todos = await todoCollection.find({completed:true}).toArray();

  client.close();


  return {
    props:{
     todos: todos.map(todo =>({
      completed:todo.completed,
      task:todo.task,
      id:todo._id.toString()
     }))
    },
    revalidate: 1
  }
}

export default CompletedPage
