import React, { useState } from 'react';

import FormItem from './FormItem';

const genItemInfo = () => ({
    id: Math.random().toString(36).substring(2, 9),
    type: 'mail',
    value: ''
});

const FormItemList = () => {
    const [itemList, setItemList] = useState([genItemInfo()]);

    const addItemHandler = index => {
        const newItem = genItemInfo();
        const newItemList = [...itemList];

        newItemList.splice(++index, 0, newItem);

        setItemList([...newItemList]);
    };

    const removeItemHandler = index => {
        const newItemList = [...itemList];

        newItemList.splice(index, 1);

        setItemList([...newItemList]);
    }

    return (
        <>
            {
                itemList.map((itemInfo, index) => (
                    <FormItem
                        key={itemInfo.id}
                        typeDefault={itemInfo.type}
                        valueDefault={itemInfo.value}
                        number={itemList.length}
                        addItem={() => addItemHandler(index)}
                        removeItem={() => removeItemHandler(index)}
                    />
                ))
            }
        </>
    );
};

export default FormItemList;