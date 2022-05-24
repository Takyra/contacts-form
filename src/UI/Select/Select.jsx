import React, { useState } from 'react';

import './Select.css';

const FormItem = props => {
    const { valueDefault, options } = props;
    const [type, setType] = useState(valueDefault);

    return (
        <select
            className='select'
            value={type}
            name='type'
            onChange={e => setType(e.target.value)}
        >
            {
                options.map(option => <option key={option.value} value={option.value}>{option.name}</option>)
            }
        </select>
    );
};

export default FormItem;