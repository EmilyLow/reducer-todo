import React from "react";
import Todo from "./Todo";



const ToDoList = (props) => {

    // console.log("todos", props.todos);
   

    return (
        <div>
                  
            {props.todos.map(thisTodo => (
                // console.log("Thistodo id", thisTodo.id),
                <Todo key={thisTodo.id} id = {thisTodo.id} item={thisTodo.item} completed={thisTodo.completed} dispatch = {props.dispatch}/>
            ))}

        </div>
    )
}






export default ToDoList;