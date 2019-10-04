import React from 'react';

import classes from './Validation.css';

const inputValidation = (props) => {

    let validationMessage = "Input too short";

    if (props.textLength > 5) {
        validationMessage = "Input long enough";
    }

    return (
        <div className={classes.Validation}>
            <p>{validationMessage}</p>
        </div>
    );
}

export default inputValidation;