import React, {useState, useEffect} from 'react';

import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

import Select from '../../../UI/Select/Select';
import Input from '../../../UI/Input/Input';
import Button from '../../../UI/Button/Button';

const options = [{
    name: 'mail',
    value: 'mail'
}, {
    name: 'phone',
    value: 'phone'
}, {
    name: 'link',
    value: 'link'
}];

const FormItem = props => {
    const { typeDefault, valueDefault, number, addItem, removeItem } = props;
    const [inputValue, setInputValue] = useState();

    useEffect(() => {
        setInputValue(valueDefault);
    }, [valueDefault])

    const onChange = e => setInputValue(e.target.value);

    return (
        <div className='form__item'>
            <Select valueDefault={typeDefault} options={options} />
            <Input valueDefault={inputValue} onChange={onChange} />
            <div className="form__control">
                {inputValue && <Button onClick={addItem}>{<PlusOutlined />}</Button>}
                <Button onClick={removeItem} disabled={number === 1}>{<MinusOutlined />}</Button>
            </div>
        </div>
    );
}

export default FormItem;