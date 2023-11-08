import { useState, useContext } from "react";
import { ToDoContext } from './TodoContext';
import FormStyles from './Form.module.css';

const Form = () => {
    const { addTaskHandler } = useContext(ToDoContext);
    const [inputText, setInputText] = useState("");
	const submitHandler = (e) => {
          e.preventDefault();
          addTaskHandler(inputText)
	}

	return(

		<form className={FormStyles.outlineBox} action="submit" onSubmit={e => submitHandler(e)} >
			<input 
			type="text" 
			onChange={e => setInputText(e.currentTarget.value)}
			className={`${FormStyles.baseInput} ${inputText === "" ? FormStyles.emptyBox : FormStyles.fillBox}`}
			/>
			<button type="submit">Agregar Tarea</button>
		</form>
		);
}



export default Form;

