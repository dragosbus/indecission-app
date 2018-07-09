import React from 'react';
import { ElementTask } from './ElementTask';


export const Tasks = props => {
    return (
        <ul className="tasks">
            {props.tasks.map((task, i) => <ElementTask key={i} name={task.name} deleteTask={()=>props.deleteTask(i)}/>)}
        </ul>
    );
};