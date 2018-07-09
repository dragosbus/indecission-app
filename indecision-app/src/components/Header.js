import React from 'react';


export const Header = (props) => {
    return (
        <header className="main-header">
            <h1>{props.title}</h1>
            <button className="pick" onClick={props.pickOption}>Pick</button>
        </header>
    );
};

Header.defaultProps = {
    title: 'Indecission App'
};