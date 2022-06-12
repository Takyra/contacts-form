import { FC, FormEvent, useState } from 'react';

import './Select.css';

interface Option {
    value: string;
    name: string;
}

interface ISelectProps {
    name: string;
    valueDefault: string;
    options: Option[];
    onChange?: (e: FormEvent<EventTarget>) => void;
};

const FormItem: FC<ISelectProps> = (props): JSX.Element => {
    const { name, valueDefault, options } = props;
    const [value, setValue] = useState<string>(valueDefault);

    return (
        <select
            className='select'
            value={value}
            name={name}
            onChange={e => setValue(e.target.value)}
        >
            {
                options.map(option => <option key={option.value} value={option.value}>{option.name}</option>)
            }
        </select>
    );
};

export default FormItem;