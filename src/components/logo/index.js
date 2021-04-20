import React from 'react';
import './styles.css'

let lazySize = {
    width: '300px',
    height: '300px'
}

const Logo = (props) => {
    return(
        <span className="img-logo">
            {props.fetch ? <span style={lazySize} className="is--lazy"></span> : <img src={props.image} />}
        </span>
    )
}

export default Logo;