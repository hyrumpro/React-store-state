import { Component } from "react";
import UserData from './UserData';

class UserClassComponent extends Component {
     constructor() {
       super();
       this.state = {
       usersList: [],
       isLoading: true
      };
    }

    componentDidMount() {

     (async () => {
     	const URL = "https://reqres.in/api/users?page=2"
     	const { data } = await fetch(URL).then(response => {
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        return response.json();
      })
       this.setState({ 
       	usersList: data,
        isLoading: false
       	 });
    
  
    })();
   }
	render() {
		const  { isLoading, usersList } = this.state;
		return(

           <>
               <h3>Users List</h3>
		       {isLoading && <h4>Cargando Usuarios ....</h4>}
		       {!isLoading && ( 
		         <ul>
		          {usersList.map(user => <UserData key={user.id} oneUser={user} />)}
		         </ul>
		        )}

		  </>
			);
	}
}



export default UserClassComponent; 




