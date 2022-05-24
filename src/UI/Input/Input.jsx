import React, { useState } from 'react';

import './Input.css';

const Input = props => {
    const {
        valueDefault,
        onChange = e => setValue(e.target.value)
    } = props;
    const [value, setValue] = useState(valueDefault);

    return (
        <input
            className='input'
            type="text"
            name='value'
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;