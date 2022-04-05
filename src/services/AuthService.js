
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

export const currentUser = () => Storage.getUser();

export const restoreUser = () => {
    return (dispatch) => {
        const user = currentUser();
        dispatch(loginSuccess(user));
    };
};

export const loginUser = (email, password, history) => {
    return (dispatch) => {
        dispatch(loginRequest());
        http
            .post("/auth/login", { email, password })
            .then(
                (response) => {
                    if (response?.success) {
                        delete(response.success);
                        const userData = { ...response };
                        Storage.setUser(userData);
                        dispatch(loginSuccess(userData));
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

export const logoutUser = (history) => {
    return (dispatch) => {
        Storage.removeUser();
        dispatch(loginSuccess(null));
        history.replace({ pathname: '/' });
    }
};

export const refreshTocken = () => {
    (async () => {
        try {
            const res = await http.post("/auth/token", {
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

export const registerUser = (name, email, password, history) => {
    return (dispatch) => {
        dispatch(registerRequest());
        http
            .post("/auth/register", { name, email, password })
            .then(
                (response) => {
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

export const forgotPassword = (email, history) => {
    return (dispatch) => {
        dispatch(forgotPasswordRequest());
        http
            .post("/password-reset", { email })
            .then(
                (response) => {
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

export const resetPassword = (token, password, history) => {
    return (dispatch) => {
        dispatch(resetPasswordRequest());
        http
            .post("/password-reset/reset", { token, password })
            .then(
                (response) => {
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
    return (dispatch) => {
        dispatch(getUserInfoRequest());
        http
            .get("/auth/user")
            .then(
                (response) => {
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

export const setUserInfo = (name, email, password) => {
    return (dispatch) => {
        dispatch(setUserInfoRequest());
        http
            .patch("/auth/user", { name, email, password })
            .then(
                (response) => {
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
