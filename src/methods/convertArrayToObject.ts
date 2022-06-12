import { IFormValues, array } from './Interfaces';

const convertArrayToObject = (formValues: IFormValues) => {
    if (!formValues || !formValues.type) {
        return [];
    }

    return formValues.type.map((type: array, index: number) => (
        {
            type: type,
            value: formValues.value[index]
        }
    ));
}

export default convertArrayToObject;