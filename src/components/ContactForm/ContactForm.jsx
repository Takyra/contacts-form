import React, { useState, useRef } from 'react';
import { Input, Button } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

import getFormValues from '../../methods/getFormValues';
import convertArrayToObject from '../../methods/convertArrayToObject';

import './ContactForm.css'

const ContactForm = () => {
    const formElement = useRef(null);
    const [formFields, setFormFields] = useState([
        {
            type: 'mail',
            value: ''
        }
    ]);

    const genFormItem = (fields, index) => {
        const changeValueHandler = event => {
            const element = event.target;
            const newFields = [...formFields];

            newFields[index][element.name] = element.value;

            setFormFields(newFields);
        };

        const addHandler = () => {
            const newFields = [...formFields];

            newFields.push({
                type: 'mail',
                value: ''
            });

            setFormFields(newFields);
        };

        const removeHandler = () => {
            const newFields = [...formFields];

            newFields.splice(index, 1);

            setFormFields(newFields);
        };

        const showAddButton = formFields.length === 1 || fields.value !== ''; 
        const disabledAddButton = formFields[index + 1] || (formFields.length === 1 && fields.value === '');

        return (
            <div className='form__item' key={`item_${index}`}>
                <select
                    value={fields.type}
                    name='type'
                    className='form__select'
                    onChange={changeValueHandler}
                >
                    <option value="mail">mail</option>
                    <option value="phone">phone</option>
                    <option value="link">link</option>
                </select>
                <Input type="text" name='value' value={fields.value} onChange={changeValueHandler} />
                <div className='form__control'>
                    { showAddButton &&
                        <Button
                            type="primary"
                            icon={<PlusOutlined />}
                            onClick={addHandler}
                            disabled={disabledAddButton}
                        />
                    }
                    <Button
                        type="primary"
                        icon={<MinusOutlined />}
                        onClick={removeHandler}
                        disabled={formFields.length <= 1}
                    />
                </div>
            </div>
        );
    };

    const getValuesHandler = () => {
        const formValues = getFormValues(formElement);
        const objectFormValues = convertArrayToObject(formValues);

        console.log( 'result getFormValues function: ', formValues );
        console.log( 'result convertArrayToObject function: ', objectFormValues );
    };

    return (
        <form className='form' ref={formElement}>
            { formFields.map((fields, index) => genFormItem(fields, index)) }
            <Button onClick={getValuesHandler}>Check form values</Button>
        </form>
    );
};

export default ContactForm;