import classes from './TodoList.module.css';

const TodoList = (props) => {

    const markHandler=(id)=>{
        // const doneItem = props.todos.find(item => item.id === id);
        // doneItem.completed = true;
        // console.log(doneItem.completed);
    }
  return (
    <ul className={classes.main}>
        {props.todos.map((item)=>(
        !item.completed &&    <li key={item.id} className={classes.list_items} >{item.task} <span> <button onClick={()=>markHandler(item.id)} className={classes.mark_btn}>Mark as done</button> <button className={classes.del_btn}>Delete</button></span></li>
        ))}
    </ul>
  )
}

export default TodoList
