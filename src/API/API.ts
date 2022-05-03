import axios from "axios";
import {
    LoginDataType,
    InfoErrorResponseType,
    RegisterDataType,
    ResponseDataLoginOrAuthMe,
    ResponseRegisterType,
    ForgotPasswordDataType
} from "../Types/AuthTypes";

export const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
    withCredentials: true,
});

export const AuthAPI = {
    authMe() {
        return instance.post<ResponseDataLoginOrAuthMe>(`/auth/me`)
    },
    authLogin(email: string, password: string, rememberMe: boolean,) {
        return instance.post<LoginDataType, { data: ResponseDataLoginOrAuthMe }, any>(`/auth/login`,
            {email, password, rememberMe})
    },
    logOut() {
        return instance.delete<InfoErrorResponseType>(`auth/me`)
    },
    register(email: string, password: string) {
        return instance.post<RegisterDataType, ResponseRegisterType>(`auth/register`, {email, password})
    },
    forgotPassword(email: string) {
        return instance.post<ForgotPasswordDataType, InfoErrorResponseType>(`auth/forgot`,
            {
                email, from: 'ai73a@yandex.by>',
                message: `<div style="background-color: lime; padding: 15px">password recovery link: 
<a href='http://localhost:3000/#/set-new-password/$token$'>link</a></div>`
            })
    }
};