import axios from "axios";
import {ResponseDataLoginOrAuthMe} from "../Types/AuthTypes";

export const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
    withCredentials: true,
})


export const AuthAPI = {
    authMe() {
        return instance.post<ResponseDataLoginOrAuthMe>(`/auth/me`)
            .then(response => response.data);
    }
};