import { STORAGE_USER_KEY } from '../config';
import { TUserAccount } from "../utils/types";

class StorageService {

    get(key: string) {
        return localStorage.getItem(key);
    }

    set(key: string, value: string) {
        localStorage.setItem(key, value);
    }

    remove(key: string) {
        localStorage.removeItem(key);
    }

    getUser() {
        const data = this.get(STORAGE_USER_KEY);
        return (data) ? JSON.parse(data) : null;
    }

    setUser(user: TUserAccount) {
        this.set(STORAGE_USER_KEY, JSON.stringify(user));
    }

    removeUser() {
        this.remove(STORAGE_USER_KEY);
    }

    getLocalAccessToken() {
        return this.getUser()?.accessToken;
    }

    getLocalRefreshToken() {
        return this.getUser()?.refreshToken;
    }

    setLocalAccessToken(token: string) {
        let user = this.getUser();
        user.accessToken = token;
        this.setUser(user);
    }

}
  
export default new StorageService();