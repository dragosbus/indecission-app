import React from 'react';


export const Header = (props) => {
    return (
        <header className="main-header">
            <h1>{props.title}</h1>
        </header>
    );
};

Header.defaultProps = {
    title: 'Indecission App'
};