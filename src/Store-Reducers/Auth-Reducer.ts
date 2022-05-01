import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ResponseDataLoginOrAuthMe} from "../Types/AuthTypes";

export type initialStateAuthorizationType = ResponseDataLoginOrAuthMe & { isAuth: boolean };

let initialState: initialStateAuthorizationType = {
    _id: null,
    email: null,
    name: null,
    avatar: null,
    publicCardPacksCount: null,
    created: null,
    updated: null,
    isAdmin: null,
    verified: null,
    rememberMe: null,
    error: null,

    isAuth: false
};

const AuthSlice = createSlice({
    name: "AuthSlice",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(setAuthUserDataAC, (state, {payload}: PayloadAction<ResponseDataLoginOrAuthMe>) => {
            return {...payload, isAuth: true}
        });
    },
});

export const AuthorizationReducer = AuthSlice.reducer;

export const setAuthUserDataAC = createAction<ResponseDataLoginOrAuthMe>('AUTH_ME');