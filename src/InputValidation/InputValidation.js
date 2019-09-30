import React from 'react';

const inputValidation = (props) => {

    let validationMessage = "Input too short";

    if (props.textLength > 5) {
        validationMessage = "Input long enough";
    }

    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    );
}

export default inputValidation;