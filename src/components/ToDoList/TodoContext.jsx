import { createContext } from 'react';

import useTodoReducer from './TodoReducer';

export const ToDoContext = createContext();


export const ToDoContextProvider = ({ children }) => {
	const [todoList, dispatch] = useTodoReducer();


	const addTaskHandler = (text) => {
    dispatch({
      type: "add",
      payload: {
         name: text,
         date: (new Date()).toLocaleString(),
      }
    })
   }

   const resetAllTaskHandler = () => {
   	dispatch({ type: "reset" })
   }



	return (
       <ToDoContext.Provider value={{
        todoList, addTaskHandler, resetAllTaskHandler 
        }}>
        {children}
        </ToDoContext.Provider> 
		);
}
