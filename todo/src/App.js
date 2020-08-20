import React, {useState, useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from "./components/TodoList.js";
import Form from "./components/Form.js";
import {todoReducer, initialState} from "./reducers/todoReducer"

function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className="App">
      <p>Todo List</p>
      <ToDoList todos = {state}/>
      <Form/>
    </div>
  );
}

export default App;
