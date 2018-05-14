import React from 'react';


export const Form = props => {
    return (
        <form onSubmit={props.addTask}>
            <input type="text" />
            <input type="submit" value="Add"/>
        </form>
    );
};
