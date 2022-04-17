import PropTypes from 'prop-types';

export type TIngredient = {
    _id: string,
    name: string,
    type: string,
    proteins?: number,
    fat?: number,
    carbohydrates?: number,
    calories?: number,
    price: number,
    image: string,
    image_mobile?: string,
    image_large?: string,
    __v: number,
};


export type TOrder = {
    number: number,
    name: string,
};

export type TUser = {
    name: string,
    email: string,
    password: string,
};

export type TBurgerElement = TIngredient & {
    index?: string;
}


export type TKeyedStrings = { 
    [id: string]: string;
};

export type TKeyedValues = { 
    [id: string]: any;
};

/*

export const ingredientPropTypes = PropTypes.shape({
    "_id": PropTypes.string.isRequired,
    "name": PropTypes.string.isRequired,
    "type": PropTypes.string.isRequired,
    "proteins": PropTypes.number,
    "fat": PropTypes.number,
    "carbohydrates": PropTypes.number,
    "calories": PropTypes.number,
    "price": PropTypes.number.isRequired,
    "image": PropTypes.string.isRequired,
    "image_mobile": PropTypes.string,
    "image_large": PropTypes.string,
    "__v": PropTypes.number.isRequired,
});

export const orderPropTypes = PropTypes.shape({
    "number": PropTypes.number.isRequired,
    "name": PropTypes.string.isRequired,
});

*/
