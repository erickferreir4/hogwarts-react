import React from 'react';
import './styles.css';

let lazySize = {
    width: '160px',
    height: '220px'
}

const Image = (props) => {

    return(
        <span className="image">
            {props.fetch ? <span style={lazySize} className="is--lazy"></span> : <img src={props.image} />}
        </span>
    )
}

export default Image