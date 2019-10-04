import React from 'react';

import classes from './Char.css';

const char = (props) => {

    return(
        <div className={classes.Char}>
            {props.character}
        </div>
    );
}

export default char;