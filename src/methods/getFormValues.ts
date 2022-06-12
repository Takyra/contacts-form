import { IFormValues } from './Interfaces';

const getFormValues = (formElement: HTMLFormElement): IFormValues => {
    let count = 1;

    const formData = new FormData(formElement);
    const typesArray = [];
    const valuesArray = [];

    const values = formData.values();

    for (const value of values) {
        if (count % 2 === 0) {
            valuesArray.push(value);
        } else {
            typesArray.push(value);
        }

        count++;
    }

    return {
        type: typesArray,
        value: valuesArray
    };
}

export default getFormValues;