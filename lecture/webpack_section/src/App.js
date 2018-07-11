import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import {Header} from './components/Header';


class App extends Component {
    render() {
        return(
            <Header/>
        );
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById('app')
)