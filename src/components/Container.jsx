import Form from './ToDoList/Form';
import TodoList from './ToDoList/TodoList';


const Container = ({ addTaskHandler, todoList }) => {
	return(

      <div>
      	<Form />
        <TodoList />
      </div>

		);
}


export default Container;