import React from 'react';


export const ElementTask = props => {
    return (
        <li>
            <p onClick={props.deleteTask} className="task-name">{props.name}</p>
        </li>
    );  
};