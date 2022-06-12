import { FC } from 'react';

import './Button.css';

interface IButtonProps {
    children: JSX.Element | string;
    onClick: () => void;
    type?: "button" | "submit" | "reset" | undefined;
    disabled?: boolean;
};

const Button: FC<IButtonProps> = (props): JSX.Element => {
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