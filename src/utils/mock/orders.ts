
import { TOrderInfo, TOrdersInfo } from "../../utils/types";

export const orders: ReadonlyArray<TOrderInfo> = [

    {
        "_id": "6224ccfc25b9a4001b6e2f5e",
        "name": "Бессмертный флюоресцентный бургер N1",
        "number": 11175,
        "price": 100,
        "status": "done",
        "image_mobile": "https://code.s3.yandex.net/react/code/sauce-01.png",
        "ingredients": [
            "60666c42cc7b410027a1a9b1",
            "60666c42cc7b410027a1a9b5",
        ],
        "createdAt": "2021-01-01T11:11:11.481Z",
        "updatedAt": "2021-01-01T11:11:11.481Z",
    },

    {
        "_id": "6224ccfc25b9a4001b6e2f5f",
        "name": "Бессмертный флюоресцентный бургер N2",
        "number": 11186,
        "price": 200,
        "status": "done",
        "image_mobile": "https://code.s3.yandex.net/react/code/sauce-01.png",
        "ingredients": [
            "60666c42cc7b410027a1a9b1",
            "60666c42cc7b410027a1a9b6",
            "60666c42cc7b410027a1a9b9",
        ],
        "createdAt": "2021-01-02T11:11:11.481Z",
        "updatedAt": "2021-01-02T11:11:11.481Z",
    }

];


export const responce: TOrdersInfo = {
    total: 1000,
    totalToday: 500,
    orders: orders,
    success: true,
    selected: undefined
};