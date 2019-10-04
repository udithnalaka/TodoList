import React from 'react';

import classes from './Todo.css';

const ToDo = (props) => {

    return (
        <div className = {classes.Todo}>
            <p>Todo task : {props.title}</p>
            <p>User: {props.user}</p>
            <p onClick={props.click}>When : {props.date}</p>
            <input type="text" onChange={props.changed}></input>
        </div>
    );
};

export default ToDo;