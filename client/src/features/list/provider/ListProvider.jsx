import React, { useState } from 'react';
import { ListContext } from '../context/listContext';

export function ListProvider({ children }) {
    const [listItems, setListItems] = useState([]);
    return (
        <ListContext.Provider value={{ listItems, setListItems}}>
            { children }
        </ListContext.Provider>
    )
}