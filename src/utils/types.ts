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
};

export type TBurgerElements = {
    //[id: string]: TBurgerElement;
    [id: string]: string;
};


export type TKeyedStrings = { 
    [id: string]: string;
};

export type TKeyedValues = { 
    [id: string]: any;
};
