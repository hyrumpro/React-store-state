import React, { Component } from "react";

class Counter extends Component {
	 constructor(props) {
		super(props);
		this.state = {
			initialValue: 1,
			developer: this.props.developerName

		}

    }
 	 componentDidMount() {
           
	 }

	 componentDidUpdate(prevProps, prevState) { 
           
	 }

	 componentWillUnmount() {
	 	   
	 }

	 increment = () => {
          const actualValue = this.state.initialValue;
          if (actualValue === 15) {
          console.log("Llegamos a 15 dejamos de Sumar");
          return;
          }
          this.setState({ initialValue: actualValue + 1 });
     }

     decrement = () => {
          const actualValue = this.state.initialValue;
          if (actualValue === 0) {
          console.log("Llegamos a 0 dejamos de restar");
          return;
          }
         this.setState({ initialValue: actualValue - 1 });
     }

     changeDeveloperName  = () => {
         const possibleNames = ["James", "John", "Emily", "Hyrum", "Michael", "Linda"];
         const randomName = possibleNames[Math.floor(Math.random() * possibleNames.length)];
         this.setState({ developer: randomName });
    }
	render() {
		const { initialValue, developer } = this.state;
		const { subject } = this.props;
  
		return(
			<>
			   <hr />
               <h2 onMouseOver={() => console.log("Hiciste rollover")}>Contador</h2>
               <p>El valor del Contador es <strong>{initialValue}</strong> </p>
               <button onClick={this.increment}>Incrementar</button>
               <button onClick={this.decrement}>Decrementar</button>
               <button onClick={this.changeDeveloperName}>Cambiar el nombre del Developer</button>
               <em>El developer es: {developer} y le encanta programar en : {subject} </em>
               <hr />

           </>
			);
	   }

    }



export default Counter;







{/*Other alternate way to call without the const{this.state.initialValue} if you need props as a initial value
you will nedd to pass props in super() an Constructor()*/}