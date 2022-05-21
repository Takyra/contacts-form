const getFormValues = formElement => {
    if (!formElement.current) {
        return false;
    }

    let count = 1;

    const formData = new FormData(formElement.current);
    const result = {
        type: [],
        value: []
    };

    for (const value of formData.values()) {
        if (count % 2 === 0) {
            result.value.push(value);
        } else {
            result.type.push(value);
        }

        count++;
    }

    return result;
}

export default getFormValues;