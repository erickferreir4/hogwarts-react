import React from 'react';
import './styles.css';

const Select = (props) => {
    return (
        <select onChange={props.onChangeSelect}>
            {props.hogwarts}
        </select>
    )
}

export default Select;