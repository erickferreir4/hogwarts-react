import React from 'react';
import './styles.css';

const Name = (props) => {
    return (
        <h2 className="name">
            {props.name}
        </h2>
    )
}

export default Name