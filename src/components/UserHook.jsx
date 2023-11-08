import { useState, useEffect, useRef } from "react";
import UserData from './UserData';


const UserHook = () => {
	const [usersList, setUsersList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const title = useRef(null);


useEffect(() => {
   (async () => {
      const URL = "https://reqres.in/api/users?page=2"
      const { data } = await fetch(URL).then(response => {
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        return response.json();
      })
      setUsersList(data);
      setIsLoading(false);
  
    })();

}, [])

 

const changeTitleHandler = () => {
   title.current.classList.add("testing-title");
}


   return(
     <>
        <h3 ref={title}>Lista de Usuarios</h3>

        <button onClick={changeTitleHandler}>Cambiar el Title</button>
        
        {isLoading && <h4>Cargando Usuarios ... </h4>}
           {!isLoading && ( 
             <ul>
              {usersList.map(user => <UserData key={user.id} oneUser={user} />)}
             </ul>
            )}
     </>
   	);

}



export default UserHook;


{/*
useRef
title.current.style.color = "red";
title.current.innerHTML = "<em>Esto viene en React</em>";
.current its important

*/}