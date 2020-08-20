import React, {useState, useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from "./components/TodoList.js";

import {todoReducer, initialState, ADD_TODO} from "./reducers/todoReducer";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [state, dispatch] = useReducer(todoReducer, initialState);

    const handleChange = (e) => {
      setNewTodo(e.target.value);
    }
  return (
    <div className="App">
      <p>Todo List</p>
      <ToDoList todos = {state}/>
      <div
      >
        {/* Tried to do this with form first, but couldn't firgure out how to surpress default, so it refreshed every tiem */}
        <input 
          type="text"
          name = "todo"
          value = {newTodo}
          onChange = {handleChange}
        />
        <button
         onClick={() => {
          dispatch({type: ADD_TODO, payload: newTodo});
         }}
        >Submit</button>
      </div>
    </div>
  );
}

export default App;
