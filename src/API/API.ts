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
import {CreatePackType, PacksReqestType, ResponsePacksType} from "../Types/PacksTypes";
import {CardsResponseType, RequestCardsType} from "../Types/CardTypes";

export const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL || 'https://neko-back.herokuapp.com/2.0',
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
<a style="text-decoration:none; color: deepskyblue;" href='https://artem-hvedinich.github.io/Card_Project/#/set-new-password/$token$'>link</a></div>`
            })
    },
    newPassword(password: string, resetPasswordToken: string) {
        return instance.post<NewPasswordDataType, InfoErrorResponseType>(`auth/set-new-password`, {
            password,
            resetPasswordToken
        })
    },
    newName(name: string) {
        return instance.put<NewNameAndAvatarType, { data: ResponseUpdateDataType }>(`/auth/me`, {name})
    }
}

export const FileAPI = {
    postFile(formData: string) {
        debugger
        return axios.post('https://dry-forest-56016.herokuapp.com/file', formData)
    },
    getFile() {
        axios.get('https://dry-forest-56016.herokuapp.com/file', {responseType: 'blob'})
            .then(({data}) => {
                const blob = new Blob([data], {type: 'image/jpeg'})
                const downloadUrl = window.URL.createObjectURL(blob)
                const link = document.createElement('a');
                link.href = downloadUrl;
                // добавить атрибуты нашему тегу: загрузочный, имя файла
                link.setAttribute('download', __filename);
                // добавить тег в документ
                document.body.appendChild(link);
                // нажать на ссылку
                link.click();
                // удалить тег из документа
                link.remove();
            })
    }
}

export const PackAPI = {
    getPacks(pageCount?: number, page?: number, id?: string|null, min?: number, max?: number, sortPacks?: any, packName?: string) {
        return instance.get<PacksReqestType, { data: ResponsePacksType }>('/cards/pack', {
            params: {min, max, sortPacks, page, pageCount, user_id: id, packName}
        });
    },
    deletePack(id: string) {
        return instance.delete(`/cards/pack?id=${id}`);
    },
    updatePack(cardsPack: { _id: string, name: string }) {
        return instance.put(`/cards/pack`, {cardsPack})
    },
    createPack(cardsPack: { name?: string, deckCover?: string, private?: boolean }) {
        return instance.post<CreatePackType, any, any>(`/cards/pack`, {cardsPack})
    },
}


export const CardsAPI = {
    getCards(cardsPack_id: string, pageCount?: number, page?: number) {
        return instance.get<RequestCardsType, { data: CardsResponseType }>(`/cards/card`, {params: {cardsPack_id, pageCount, page}});
    },
}