import React from "react";
import { MARK_COMPLETE} from "../reducers/todoReducer";

const ToDo = (props) => {
    // console.log("Todo props", props);

  const toggleComplete = () => {
    console.log("complete toggled");
    props.dispatch({type: MARK_COMPLETE, payload: props.id});
  }
    return (
        <div
            onClick = {toggleComplete}
            className = {props.completed ? "completed" : ""}
        >
            <p>{props.item}</p>
        </div>
    )
}






export default ToDo;