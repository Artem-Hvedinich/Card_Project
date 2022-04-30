import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ResponseDataLoginOrAuthMe} from "../Types/AuthTypes";

export type initialStateAuthorizationType = ResponseDataLoginOrAuthMe;

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
    error: null
};

const AuthSlice = createSlice({
    name: "AuthSlice",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(setAuthUserDataAC, (state, {payload}: PayloadAction<ResponseDataLoginOrAuthMe>) => {
            return payload
        });
    },
});

export const AuthorizationReducer = AuthSlice.reducer;

export const setAuthUserDataAC = createAction<ResponseDataLoginOrAuthMe>('AUTH_ME');