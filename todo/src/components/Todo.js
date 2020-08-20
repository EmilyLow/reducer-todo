import React from "react";



const ToDo = (props) => {
    console.log("Todo props", props);

    return (
        <div>
            <p>{props.item}</p>
        </div>
    )
}






export default ToDo;