import { useRef } from 'react';

import FormItemList from './FormItems/FormItemList';
import Button from '../../UI/Button/Button'

import getFormValues from '../../methods/getFormValues';
import convertArrayToObject from '../../methods/convertArrayToObject';

import './styles.css'

const ContactForm = (): JSX.Element => {
    const formElement = useRef<HTMLFormElement>(null);

    const clickHandler = (): void => {
        if (formElement.current) {
            const formValues = getFormValues(formElement.current);
            const formValuesObject = convertArrayToObject(formValues);

            console.log('formValues: ', formValues);
            console.log('formValuesObject: ', formValuesObject);
        }
    };

    return (
        <form className='form' ref={formElement}>
            <FormItemList />
            <Button onClick={clickHandler}>Show form value in console</Button>
        </form>
    );
};

export default ContactForm;