import React from 'react';
import './styles.css';

const Lazyload = ({width, height, children, fetch}) => {
    if(fetch) {
        return (
            <>
                <div style={{display: 'none'}}>{children}</div>
                <div className='is--lazy' style={{ width: width, height: height }}></div>
            </>
        )
    }
    else {
        return (
            <>
                {children}
            </>
        )
    }
}

export default Lazyload;