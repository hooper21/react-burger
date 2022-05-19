
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

export type TIngredients = TIngredient[];

export type TOrder = {
    number: number,
    name: string,
};

export type TUser = {
    email: string,
    name: string,
    password: string | undefined,
};

export type TUserAccount = {
    accessToken: string,
    refreshToken: string,
    user: TUser
};

// export type TUser = {
//     name: string,
//     email: string,
//     password: string,
// };

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


export type TOrderInfo = {
    _id: string;
    ingredients: ReadonlyArray<string>;
    status: string;
    name: string;
    number: number;
    price: number;
    createdAt: string;
    updatedAt: string;
    image_mobile: string;
  };

export type TOrdersInfo = {
    success: boolean;
    orders: ReadonlyArray<TOrderInfo>;
    selected: TOrderInfo | null | undefined;
    total: number;
    totalToday: number;
};


export const getOrderStatusName = (status: string | null) => {
    switch(status) {
        case "done":
            return "Выполнен";
        case "pending":
            return "Готовится";
        case "created":
            return "Создан";
        default:
            return null;
    };
};

export const getDateToTitle = (date: string) => {
    const getDayToTitle = (days: number) => {
        if (days === 0)
            return 'Сегодня';
        if (days === 1)
            return 'Вчера';
        if (days > 4)
            return `${days} дней назад`;
        return `${days} дня назад`;
    };
    const getTwoDigitals = (value: number) => (value > 9) ? value : `0${value}`;
    const dataCreate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const timeDiff = Math.ceil((+today - +dataCreate) / (60 * 60 * 24 * 1000));
    const hours = getTwoDigitals(dataCreate.getHours());
    const min = getTwoDigitals(dataCreate.getMinutes());
    return `${getDayToTitle(timeDiff)}, ${hours}:${min} i-GMT+${(dataCreate.getTimezoneOffset() * -1) / 60}`;
};
