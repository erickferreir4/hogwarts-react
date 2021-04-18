import React from 'react';
import './styles.css';

const Image = (props) => {

    return(
        <span className="image">
            <img src={props.image} />
        </span>
    )
}

export default Image