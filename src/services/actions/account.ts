import { ACTION_TYPES } from "../action-types";
import { TUser } from "../../utils/types";

export interface ILoginRequest {
    readonly type: typeof ACTION_TYPES.USER_REQUEST_SENT;
};
export const loginRequest = (): ILoginRequest => ({
    type: ACTION_TYPES.USER_REQUEST_SENT
});

export interface ILoginSuccess {
    readonly type: typeof ACTION_TYPES.LOGIN_SUCCESS;
    readonly user: TUser | null | undefined;
};
export const loginSuccess = (user: TUser | null | undefined): ILoginSuccess => ({
    type: ACTION_TYPES.LOGIN_SUCCESS,
    user: user
});

export interface ILoginFailed {
    readonly type: typeof ACTION_TYPES.LOGIN_FAILED;
    readonly error: string;
};
export const loginFailed = (error: string): ILoginFailed => ({
    type: ACTION_TYPES.LOGIN_FAILED,
    error: error
});

export interface ILogoutUserRequest {
    readonly type: typeof ACTION_TYPES.LOGOUT_USER;
};
export const logoutUserSuccess = (): ILogoutUserRequest => ({
    type: ACTION_TYPES.LOGOUT_USER,
});


export interface IGetUserInfoRequest {
    readonly type: typeof ACTION_TYPES.USER_REQUEST_SENT;
};
export const getUserInfoRequest = (): IGetUserInfoRequest => ({
    type: ACTION_TYPES.USER_REQUEST_SENT,
});

export interface IGetUserInfoSuccess {
    readonly type: typeof ACTION_TYPES.GET_USER_INFO_SUCCESS;
    readonly user: TUser | null | undefined;
};
export const getUserInfoSuccess = (user: TUser | null | undefined): IGetUserInfoSuccess => ({
    type: ACTION_TYPES.GET_USER_INFO_SUCCESS,
    user: user
});

export interface IGetUserInfoFailed {
    readonly type: typeof ACTION_TYPES.USER_REQUEST_FAILED;
    readonly error: string;
};
export const getUserInfoFailed = (error: string): IGetUserInfoFailed => ({
    type: ACTION_TYPES.USER_REQUEST_FAILED,
    error: error
});


export interface ISetUserInfoRequest {
    readonly type: typeof ACTION_TYPES.USER_REQUEST_SENT;
};
export const setUserInfoRequest = (): ISetUserInfoRequest => ({
    type: ACTION_TYPES.USER_REQUEST_SENT,
});

export interface ISetUserInfoSuccess {
    readonly type: typeof ACTION_TYPES.SET_USER_INFO_SUCCESS;
    readonly user: TUser | null | undefined;
};
export const setUserInfoSuccess = (user: TUser | null | undefined): ISetUserInfoSuccess => ({
    type: ACTION_TYPES.SET_USER_INFO_SUCCESS,
    user: user
});

export interface ISetUserInfoFailed {
    readonly type: typeof ACTION_TYPES.USER_REQUEST_FAILED;
    readonly error: string;
};
export const setUserInfoFailed = (error: string): ISetUserInfoFailed => ({
    type: ACTION_TYPES.USER_REQUEST_FAILED,
    error: error
});


export interface IRegisterRequest {
    readonly type: typeof ACTION_TYPES.USER_REQUEST_SENT;
};
export const registerRequest = (): IRegisterRequest => ({
    type: ACTION_TYPES.USER_REQUEST_SENT,
});

export interface IRegisterSuccess {
    readonly type: typeof ACTION_TYPES.REGISTER_SUCCESS;
    readonly user: TUser | null | undefined;
};
export const registerSuccess = (user: TUser | null): IRegisterSuccess => ({
    type: ACTION_TYPES.REGISTER_SUCCESS,
    user: user
});

export interface IRegisterFailed {
    readonly type: typeof ACTION_TYPES.USER_REQUEST_FAILED;
    readonly error: string;
};
export const registerFailed = (error: string): IRegisterFailed=> ({
    type: ACTION_TYPES.USER_REQUEST_FAILED,
    error: error
});


export interface IForgotPasswordRequest {
    readonly type: typeof ACTION_TYPES.USER_REQUEST_SENT;
};
export const forgotPasswordRequest = (): IForgotPasswordRequest => ({
    type: ACTION_TYPES.USER_REQUEST_SENT,
});

export interface IForgotPasswordSuccess {
    readonly type: typeof ACTION_TYPES.FORGOT_PASSWORD_SUCCESS;
};
export const forgotPasswordSuccess = (): IForgotPasswordSuccess => ({
    type: ACTION_TYPES.FORGOT_PASSWORD_SUCCESS,
});

export interface IForgotPasswordFailed {
    readonly type: typeof ACTION_TYPES.USER_REQUEST_FAILED;
    readonly error: string;
};
export const forgotPasswordFailed = (error: string): IForgotPasswordFailed => ({
    type: ACTION_TYPES.USER_REQUEST_FAILED,
    error: error
});


export interface IResetPasswordRequest {
    readonly type: typeof ACTION_TYPES.USER_REQUEST_SENT;
};
export const resetPasswordRequest = (): IResetPasswordRequest => ({
    type: ACTION_TYPES.USER_REQUEST_SENT,
});

export interface IResetPasswordSuccess {
    readonly type: typeof ACTION_TYPES.RESET_PASSWORD_SUCCESS;
};
export const resetPasswordSuccess = (): IResetPasswordSuccess => ({
    type: ACTION_TYPES.RESET_PASSWORD_SUCCESS,
});

export interface IResetPasswordFailed {
    readonly type: typeof ACTION_TYPES.USER_REQUEST_FAILED;
    readonly error: string;
};
export const resetPasswordFailed = (error: string): IResetPasswordFailed => ({
    type: ACTION_TYPES.USER_REQUEST_FAILED,
    error: error
});


export type TAccountActions =
    | ILoginRequest
    | ILoginSuccess
    | ILoginFailed
    | ILogoutUserRequest
    | IGetUserInfoRequest
    | IGetUserInfoSuccess
    | IGetUserInfoFailed
    | ISetUserInfoRequest
    | ISetUserInfoSuccess
    | ISetUserInfoFailed
    | IRegisterRequest
    | IRegisterSuccess
    | IRegisterFailed
    | IForgotPasswordRequest
    | IForgotPasswordSuccess
    | IForgotPasswordFailed
    | IResetPasswordRequest
    | IResetPasswordSuccess
    | IResetPasswordFailed;