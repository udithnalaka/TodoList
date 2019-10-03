import React from 'react';
import Radium from 'radium';

import './Todo.css';

const ToDo = (props) => {

    const style = {
        '@media screen and (min-width: 500px)':{
            width: '450px'
        }
    };

    return (
        <div className = "Todo" style={style}>
            <p>Todo task : {props.title}</p>
            <p>User: {props.user}</p>
            <p onClick={props.click}>When : {props.date}</p>
            <input type="text" onChange={props.changed}></input>
        </div>
    );
};

export default Radium(ToDo);