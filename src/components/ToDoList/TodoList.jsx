import { useContext } from "react";
import { ToDoContext } from './TodoContext';
import Button from './Button';
import TodoListStyles from './TodoList.module.css';


const TodoList = () => {
const { todoList } = useContext(ToDoContext);	
      return(
         <div className={TodoListStyles.outlineBox}>
           <h4>Lista de tareas</h4>
           <ol>
             {todoList.map((todo) => {
               return <li key={todo.date}>{`${todo.name} - ${todo.date}`}</li>
              })}
           </ol>
           <Button text="Borrar Tareas"/>
         </div>
      	);

}


export default TodoList;





