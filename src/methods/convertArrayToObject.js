const convertArrayToObject = formValues => {
    if (!formValues || formValues.length === 0) {
        return false;
    }

    return formValues.type.map((type, index) => (
        {
            type: type,
            value: formValues.value[index]
        }
    ));
}

export default convertArrayToObject;