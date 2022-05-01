import axios from "axios";
import {
    LoginDataType,
    LogOutResponseType,
    RegisterDataType,
    ResponseDataLoginOrAuthMe,
    ResponseRegisterType
} from "../Types/AuthTypes";

export const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
    withCredentials: true,
})


export const AuthAPI = {
    authMe() {
        return instance.post<ResponseDataLoginOrAuthMe>(`/auth/me`)
            .then(response => response.data);
    },

    authLogin(email: string, password: string, rememberMe: boolean,) {
        return instance.post<LoginDataType, ResponseDataLoginOrAuthMe>(`/auth/login`, {email, password, rememberMe})
            .then(response => response)
    },

    logOut() {
        return instance.delete<LogOutResponseType>(`auth/me`)
            .then(response => response.data);
    },

    register(email: string, password: string) {
        return instance.post<RegisterDataType, ResponseRegisterType>(`auth/register`, {email, password})
    },
};