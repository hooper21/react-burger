import React from 'react';

export const IngredientsContext = React.createContext(null);

export const blankOrder = {
    "number": null,
    "name": null,
    "total": 0,
    "items": []
};

export const OrderContext = React.createContext(blankOrder);
