import { FC, FormEvent, useState, useEffect } from 'react';

import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

import Select from '../../../UI/Select/Select';
import Input from '../../../UI/Input/Input';
import Button from '../../../UI/Button/Button';

interface IOption {
    name: string;
    value: string;
};

interface IFormItemProps {
    typeDefault: string;
    valueDefault: string;
    number: number;
    addItem: () => void;
    removeItem: () => void;
};

const options: IOption[] = [{
    name: 'mail',
    value: 'mail'
}, {
    name: 'phone',
    value: 'phone'
}, {
    name: 'link',
    value: 'link'
}];

const FormItem: FC<IFormItemProps> = (props): JSX.Element => {
    const { typeDefault, valueDefault, number, addItem, removeItem } = props;
    const [inputValue, setInputValue] = useState<string>();

    useEffect(() => {
        setInputValue(valueDefault);
    }, [valueDefault])

    const onChange = (e: FormEvent<EventTarget>): void => {
        const target = e.target as HTMLInputElement;

        setInputValue(target.value);
    }

    return (
        <div className='form__item'>
            <Select name='type' valueDefault={typeDefault} options={options} />
            <Input name='value' valueDefault={inputValue} onChange={onChange} />

            <div className="form__control">
                {inputValue && <Button onClick={addItem}>{<PlusOutlined />}</Button>}
                <Button onClick={removeItem} disabled={number === 1}>{<MinusOutlined />}</Button>
            </div>
        </div>
    );
}

export default FormItem;