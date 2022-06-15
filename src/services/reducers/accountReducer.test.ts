import { accountReducer } from './accountReducer';
import { ACTION_TYPES } from "../action-types";
import { initialState } from "../actions/account";
import { TUser, TUserAccount } from '../../utils/types';

const testError = "Some account error";

const testUser: TUser = {
    email: "test@yandex.ru",
    name: "Test account",
    password: "test",
};

const testAccount: TUserAccount = {
    accessToken: "some-access-token",
    refreshToken: "some-refresh-token",
    user: testUser
};

describe("Account reducer", () => {

    it("Should set state USER_REQUEST_SENT", () => {
        expect(accountReducer(initialState, {
            type: ACTION_TYPES.USER_REQUEST_SENT,
        }))
        .toEqual({
            ...initialState,
            loading: true,
            error: undefined,
        });
    });

    it("Should set state USER_REQUEST_FAILED", () => {
        expect(accountReducer(initialState, {
            type: ACTION_TYPES.USER_REQUEST_FAILED,
            error: testError
        }))
        .toEqual({
            ...initialState,
            loading: false,
            error: testError,
        });
    });

    it("Should set state LOGIN_SUCCESS", () => {
        expect(accountReducer(initialState, {
            type: ACTION_TYPES.LOGIN_SUCCESS,
            user: testAccount,
        }))
        .toEqual({
            ...initialState,
            user: testUser,
            loading: false,
            error: undefined,
        });
    });

    it("Should set state LOGOUT_USER", () => {
        expect(accountReducer(initialState, {
            type: ACTION_TYPES.LOGOUT_USER,
        }))
        .toEqual({
            ...initialState,
            user: null,
            loading: false,
            error: undefined,
        });
    });

    it("Should set state REGISTER_SUCCESS", () => {
        expect(accountReducer(initialState, {
            type: ACTION_TYPES.REGISTER_SUCCESS,
            user: testUser,
        }))
        .toEqual({
            ...initialState,
            user: testUser,
            loading: false,
            error: undefined,
        });
    });

    it("Should set state RESET_PASSWORD_SUCCESS", () => {
        expect(accountReducer(initialState, {
            type: ACTION_TYPES.RESET_PASSWORD_SUCCESS,
        }))
        .toEqual({
            ...initialState,
            loading: false,
            error: undefined,
        });
    });

    it("Should set state GET_USER_INFO_SUCCESS", () => {
        expect(accountReducer(initialState, {
            type: ACTION_TYPES.GET_USER_INFO_SUCCESS,
            user: testUser,
        }))
        .toEqual({
            ...initialState,
            user: testUser,
            loading: false,
            error: undefined,
        });
    });

});