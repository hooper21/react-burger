import { ACTION_TYPES } from "./types";


export const loginRequest = () => ({
    type: ACTION_TYPES.USER_REQUEST_SENT
});
export const loginSuccess = (user) => ({
    type: ACTION_TYPES.LOGIN_SUCCESS,
    user: user
});
export const loginFailed = (error) => ({
    type: ACTION_TYPES.USER_REQUEST_FAILED,
    error: error
});


export const logoutUserSuccess = () => ({
    type: ACTION_TYPES.LOGOUT_USER,
});


export const getUserInfoRequest = () => ({
    type: ACTION_TYPES.USER_REQUEST_SENT,
});
export const getUserInfoSuccess = (user) => ({
    type: ACTION_TYPES.GET_USER_INFO_SUCCESS,
    user: user
});
export const getUserInfoFailed = (error) => ({
    type: ACTION_TYPES.USER_REQUEST_FAILED,
    error: error
});


export const setUserInfoRequest = () => ({
    type: ACTION_TYPES.USER_REQUEST_SENT,
});
export const setUserInfoSuccess = (user) => ({
    type: ACTION_TYPES.SET_USER_INFO_SUCCESS,
    user: user
});
export const setUserInfoFailed = (error) => ({
    type: ACTION_TYPES.USER_REQUEST_FAILED,
    error: error
});


export const registerRequest = () => ({
    type: ACTION_TYPES.USER_REQUEST_SENT,
});
export const registerSuccess = (user) => ({
    type: ACTION_TYPES.REGISTER_SUCCESS,
    user: user
});
export const registerFailed = (error) => ({
    type: ACTION_TYPES.USER_REQUEST_FAILED,
    error: error
});


export const forgotPasswordRequest = () => ({
    type: ACTION_TYPES.USER_REQUEST_SENT,
});
export const forgotPasswordSuccess = () => ({
    type: ACTION_TYPES.FORGOT_PASSWORD_SUCCESS,
});
export const forgotPasswordFailed = (error) => ({
    type: ACTION_TYPES.USER_REQUEST_FAILED,
    error: error
});


export const resetPasswordRequest = () => ({
    type: ACTION_TYPES.USER_REQUEST_SENT,
});
export const resetPasswordSuccess = () => ({
    type: ACTION_TYPES.RESET_PASSWORD_SUCCESS,
});
export const resetPasswordFailed = (error) => ({
    type: ACTION_TYPES.USER_REQUEST_FAILED,
    error: error
});

