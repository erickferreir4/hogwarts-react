import React from 'react';
import './styles.css';

let lazySize = {
    width: '150px',
    height: '30px'
}

const Name = (props) => {
    return (
        <h2 className="name">
            {props.fetch ? <span style={lazySize} className="is--lazy"></span> : props.name}
        </h2>
    )
}

export default Name