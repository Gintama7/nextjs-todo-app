import classes from './TodoList.module.css';

const TodoList = (props) => {

  const statusHandler=async(id)=>{
    const selected = props.todos.find((item)=> item.id ===id);
    
    const res = await fetch(`/api/edit-todo`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({id:id,task:selected.task,completed:true})
    });

    const result = await res.json();
    console.log(result);

  }

  const delHandler=async(id)=>{
    
    const res = await fetch(`/api/del-todo`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({id:id})
    });

    const result = await res.json();
    console.log(result);
  }
  return (
    <ul className={classes.main}>
        {props.todos.map((item)=>(
        !item.completed &&    <li key={item.id} className={classes.list_items} >{item.task}
         <span> <button onClick={(e)=>statusHandler(item.id)} className={classes.mark_btn}>Mark as done</button> 
        <button className={classes.del_btn} onClick={(e)=>delHandler(item.id)}>Delete</button></span></li>
        ))}
    </ul>
  )
}

export default TodoList
