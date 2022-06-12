import { useState } from 'react';

import FormItem from './FormItem';

interface IItem {
    id: string;
    type: string;
    value: string;
};

const genItemInfo = (): IItem => ({
    id: Math.random().toString(36).substring(2, 9),
    type: 'mail',
    value: ''
});

const FormItemList = (): JSX.Element => {
    const [itemList, setItemList] = useState<IItem[]>([genItemInfo()]);

    const addItemHandler = (index: number): void => {
        const newItem = genItemInfo();
        const newItemList = [...itemList];

        newItemList.splice(++index, 0, newItem);

        setItemList([...newItemList]);
    };

    const removeItemHandler = (index: number): void => {
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