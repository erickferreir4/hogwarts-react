import React from 'react';
import './styles.css'

const Logo = (props) => {
    return(
        <span className="img-logo">
            <img src={props.image} />
        </span>
    )
}

export default Logo;