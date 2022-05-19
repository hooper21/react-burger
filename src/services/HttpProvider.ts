import axios, { AxiosInstance, AxiosResponse } from "axios";

import Storage from "./StorageService";
import { API_URL } from '../config';

const instance: AxiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Expose-Headers": "Content-Disposition",
    },
});

instance.interceptors.request.use(
    (config: any) => {
        const token = Storage.getLocalAccessToken();
        if (token) {
            config.headers["Authorization"] = token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    
    (response: AxiosResponse) => {
        const contentType = response?.headers["content-type"] ?? "";
        if (contentType.indexOf("application/json") !== -1) {
            return response?.data ?? response;
        };
        return response;
    },

    async (error: any) => {
        const originalConfig = error.config;
        if (originalConfig && (originalConfig.url !== "/auth/logout") && (originalConfig.url !== "/auth/token") && error.response) {
            // Access Token was expired
            if (error.response.status === 401) {
                originalConfig._retry = true;
                const refreshToken = Storage.getLocalRefreshToken();
                if (refreshToken) {
                    try {
                        const res: any = await instance.post("/auth/token", {
                            token: Storage.getLocalRefreshToken(),
                        });
                        const { accessToken } = res;
                        Storage.setLocalAccessToken(accessToken);
                        return instance(originalConfig);
                    } catch (_error) {
                        console.error("http error", _error);
                        return Promise.reject(_error);
                    }
                };
            };
        };
        if (error.response) {
            const message = error.response.message ?? error.response.data?.message;
            return Promise.reject(message); 
        };
        return Promise.reject(error);
    }
);

export default instance;