import axios from "axios";
import {
    LoginDataType,
    InfoErrorResponseType,
    RegisterDataType,
    ResponseDataLoginOrAuthMe,
    ResponseRegisterType,
    ForgotPasswordDataType,
    NewPasswordDataType, NewNameAndAvatarType, ResponseUpdateDataType
} from "../Types/AuthTypes";
import {ResponsePacksType} from "../Types/PacksTypes";

export const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL || ' https://neko-back.herokuapp.com/2.0',
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
                email, from: 'ai73a@yandex.by',
                message: `
<div style="background-color: #2D2E46; padding: 15px; color: lavender">
Password recovery link: 
<a style="text-decoration:none; color: deepskyblue;" href='http://localhost:3001/#/set-new-password/$token$'>link</a></div>`
            })
    },
    newPassword(password: string, resetPasswordToken: string) {
        return instance.post<NewPasswordDataType, InfoErrorResponseType>(`auth/set-new-password`, {
            password,
            resetPasswordToken
        })
    },
    newNameAndAvatar(name: string, avatar: string) {
        return instance.put<NewNameAndAvatarType, { data: ResponseUpdateDataType }>(`/auth/me`, {name, avatar})
    },
};


export const CardAPI = {
    getPacks() {
        return instance.get<ResponsePacksType>('/cards/pack');
    },
}