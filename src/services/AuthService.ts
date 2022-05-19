
import http from "./HttpProvider";
import Storage from "./StorageService";

import { 
    loginRequest, loginSuccess, loginFailed, 
    registerRequest, registerSuccess, registerFailed,
    getUserInfoRequest, getUserInfoSuccess, getUserInfoFailed,
    setUserInfoRequest, setUserInfoSuccess, setUserInfoFailed,
    forgotPasswordRequest, forgotPasswordSuccess, forgotPasswordFailed,
    resetPasswordRequest, resetPasswordSuccess, resetPasswordFailed,
} from "./actions/account";

import { AppDispatch } from './types';
import { TUserAccount } from '../utils/types';
import { TResponceAccount } from '../utils/responses';

import { wsConnectionPrivateInit, wsConnectionClose } from './actions/websocket';

export const currentUser = () => Storage.getUser();

export const restoreUser = () => {
    return (dispatch: AppDispatch) => {
        const user = currentUser();
        dispatch(loginSuccess(user));
        if (user) {
            dispatch(wsConnectionPrivateInit());
        };
    };
};

export const loginUser = (email: string, password: string, history: any) => {
    return (dispatch: AppDispatch) => {
        dispatch(loginRequest());
        http
            .post<any, TResponceAccount>("/auth/login", { email, password })
            .then(
                (response: TResponceAccount) => {
                    if (response.success) {
                        //delete(response.success);
                        const userData: TUserAccount = { ...response };
                        Storage.setUser(userData);
                        dispatch(loginSuccess(userData));
                        dispatch(wsConnectionPrivateInit());
                    }
                    else 
                    {
                        const error = `Ошибка. (${response.status}) ${response.statusText}`;
                        dispatch(loginFailed(error));
                    }
                }
            )
            .catch(
                (error) =>dispatch(resetPasswordFailed(error))
            );
      };
};

export const logoutUser = (history: any) => {
    return (dispatch: AppDispatch) => {
        Storage.removeUser();
        dispatch(loginSuccess(null));
        dispatch(wsConnectionClose());
        history.replace({ pathname: '/' });
    }
};

export const refreshTocken = () => {
    (async () => {
        try {
            const res: any = await http.post("/auth/token", {
                token: Storage.getLocalRefreshToken(),
            });
            const { accessToken } = res;
            Storage.setLocalAccessToken(accessToken);
            return res;
        } catch (_error) {
            const error = await _error;
            return Promise.reject(error);
        }
    })();
};

export const registerUser = (name: string, email: string, password: string, history: any) => {
    return (dispatch: AppDispatch) => {
        dispatch(registerRequest());
        http
            .post("/auth/register", { name, email, password })
            .then(
                (response: any) => {
                    if (response?.success) {
                        delete(response.success);
                        const userData = { ...response };
                        Storage.setUser(userData);
                        dispatch(registerSuccess(userData.user));
                        history.replace({ pathname: "/" });
                    }
                    else
                    if (response?.message) {
                        dispatch(registerFailed(response.message));
                    }
                    else
                    {
                        const error = `Ошибка. (${response.status}) ${response.statusText}`;
                        dispatch(registerFailed(error));
                    }
                }
            )
            .catch(
                (error) =>dispatch(resetPasswordFailed(error))
            );
      };
};

export const forgotPassword = (email: string, history: any) => {
    return (dispatch: AppDispatch) => {
        dispatch(forgotPasswordRequest());
        http
            .post("/password-reset", { email })
            .then(
                (response: any) => {
                    if (response?.success) {
                        dispatch(forgotPasswordSuccess());
                        history.replace({ pathname: "/reset-password" });
                    }
                    else 
                    {
                        const error = `Ошибка. (${response.status}) ${response.statusText}`;
                        dispatch(forgotPasswordFailed(error));
                    }
                }
            )
            .catch(
                (error) =>dispatch(resetPasswordFailed(error))
            );
      };
};

export const resetPassword = (token: string, password: string, history: any) => {
    return (dispatch: AppDispatch) => {
        dispatch(resetPasswordRequest());
        http
            .post("/password-reset/reset", { token, password })
            .then(
                (response: any) => {
                    if (response?.success) {
                        dispatch(resetPasswordSuccess());
                        history.replace({ pathname: "/login" });
                    }
                    else 
                    {
                        const error = `Ошибка. (${response.status}) ${response.statusText}`;
                        dispatch(resetPasswordFailed(error));
                    }
                }
            )
            .catch(
                (error) =>dispatch(resetPasswordFailed(error))
            );
      };
};

export const updateUserInfo = () => {
    return (dispatch: AppDispatch) => {
        dispatch(getUserInfoRequest());
        http
            .get("/auth/user")
            .then(
                (response: any) => {
                    if (response?.success) {
                        delete(response.success);
                        const user = Storage.getUser();
                        const userData = { ...user, ...response };
                        Storage.setUser(userData);
                        dispatch(getUserInfoSuccess(userData));
                    }
                    else 
                    {
                        const error = `Ошибка. (${response.status}) ${response.statusText}`;
                        dispatch(getUserInfoFailed(error));
                    }
                }
            )
            .catch(
                (error) =>dispatch(resetPasswordFailed(error))
            );
      };
};

export const setUserInfo = (name: string, email: string, password: string) => {
    return (dispatch: AppDispatch) => {
        dispatch(setUserInfoRequest());
        http
            .patch("/auth/user", { name, email, password })
            .then(
                (response: any) => {
                    if (response?.success) {
                        delete(response.success);
                        const user = Storage.getUser();
                        const userData = { ...user, ...response };
                        Storage.setUser(userData);
                        dispatch(setUserInfoSuccess(userData));
                    }
                    else 
                    {
                        const error = `Ошибка. (${response.status}) ${response.statusText}`;
                        dispatch(setUserInfoFailed(error));
                    }
                }
            )
            .catch(
                (error) =>dispatch(resetPasswordFailed(error))
            );
      };
};
