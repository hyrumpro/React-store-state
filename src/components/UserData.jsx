const UserData = ({ oneUser }) => {

	return (
           
                <li>
                 <h3>{`${oneUser.id} - ${oneUser.first_name} ${oneUser.last_name}`}</h3>
		 		 <a href={oneUser.email}>{`mailto: ${oneUser.email} `}</a>
		 		 <img src={oneUser.avatar} alt={`${oneUser.first_name} ${oneUser.last_name}`} />
		 		 
		   </li>
		);
}





export default UserData;
