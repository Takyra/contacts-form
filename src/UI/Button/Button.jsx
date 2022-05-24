import React from 'react';

import './Button.css';

const Button = props => {
    const {
        type = 'button',
        children,
        onClick = () => {},
        disabled = false
    } = props;

    return (
        <button
            className='button'
            type={type}
            onClick={onClick}
            disabled={disabled}
        >{children}</button>
    );
};

export default Button;