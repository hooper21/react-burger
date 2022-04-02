import { STORAGE_USER_KEY } from '../config';

class StorageService {

    get(key) {
        return localStorage.getItem(key);
    }

    set(key, value) {
        localStorage.setItem(key, value);
    }

    remove(key) {
        localStorage.removeItem(key);
    }

    getUser() {
        return JSON.parse(this.get(STORAGE_USER_KEY));
    }

    setUser(user) {
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

    setLocalAccessToken(token) {
        let user = this.getUser();
        user.accessToken = token;
        this.setUser(user);
    }

}
  
export default new StorageService();