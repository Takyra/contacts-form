import { FormEvent, FC, useState } from 'react';

import './Input.css';

interface IInputProps {
    name: string;
    onChange: (e: FormEvent<EventTarget>) => void;
    valueDefault?: string;
};

const Input: FC<IInputProps> = (props): JSX.Element => {
    const {
        name,
        valueDefault,
        onChange = e => {
            const target = e.target as HTMLInputElement;

            setValue(target.value);
        }
    } = props;

    const [value, setValue] = useState<string | undefined>(valueDefault);

    return (
        <input
            className='input'
            type='text'
            name={name}
            value={value ?? value}
            onChange={onChange}
        />
    );
};

export default Input;