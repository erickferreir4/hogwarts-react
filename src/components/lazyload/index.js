import React from 'react';
import './styles.css';

const Lazyload = ({width, height, children, fetch}) => {

    return (
        <>
            {fetch ? 
                <div className='is--lazy' style={{ width: width, height: height }}></div>
                : children}
        </>
    )
}

export default Lazyload;