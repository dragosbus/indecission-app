import React from 'react';


export const ElementTask = props => {
    return (
        <li>
            <p className="task-name">{props.name}</p>
        </li>
    );  
};