import { TIngredient, TOrderInfo, TUserAccount } from '../utils/types';

export type TApiResponce = {
    status: number,
    statusText: string,
};

export type TDataResponce = TApiResponce & {
    success: boolean,
    data: [],
};

export type TResponceIngredients = TDataResponce & {
    data: TIngredient[],
};

export type TResponceOrder = TApiResponce & {
    name: string,
    order: TOrderInfo
};


export type TResponceAccount = TDataResponce & TUserAccount;