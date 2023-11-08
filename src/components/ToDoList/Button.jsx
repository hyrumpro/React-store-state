import { useContext } from "react";
import { ToDoContext } from './TodoContext';


const Button = ({ text }) => {
   const { resetAllTaskHandler } = useContext(ToDoContext);

	return (
		<>
        <button onClick={resetAllTaskHandler}>{text}</button>
        </>


		);

}



export default Button;


