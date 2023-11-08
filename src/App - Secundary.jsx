import { useState } from "react";
import React from 'react';
import './App.css';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import UserClassComponent from './components/UsersList';
import UsersList from './components/tryOn';
import UserHook from './components/UserHook';
import Wrapper from './components/Container';
import { ToDoContextProvider } from './components/ToDoList/TodoContext';
import './app.css';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { StyledComponents } from './components/StyledComponent'
 {/* import USERS_DATA from './data/users.json';*Extension important .json*/}





function App() {
 const [variant, setVariant] = useState('primary');
 const variants = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'];

const changeVariant = () => {
    const randomIndex = Math.floor(Math.random() * variants.length);
    setVariant(variants[randomIndex]);
  };



  return (
    <div className="App">
      <Greeting text="Hello World" >
      <a href="#">About</a>
      <a href="#">Services</a>
      </Greeting>
      <Counter subject="Javascript" developerName="Hyrumpro" />
      <UserClassComponent />
      <UsersList />
      <ToDoContextProvider>
      <Wrapper />
      </ToDoContextProvider>
      <Container>
        <Row>
           <Col sm={12} md={6} lg={4}><UserHook /> </Col>
           <Col sm={12} md={6} lg={8}><Button variant="info">This a Button</Button></Col>
        </Row>
      </Container>
      <Button variant={variant} onClick={changeVariant}>This a Button</Button>
      <StyledComponents />




    </div>
  );
}

export default App;


