import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export type AppInitialStateType = {
    status: RequestStatusType,
    error: null | string,
    email: null | string,
};

const initialAppState: AppInitialStateType = {
    status: 'idle' as RequestStatusType,
    error: null,
    email: null,
};

const AppSlice = createSlice({
    name: "AppSlice",
    initialState: initialAppState,
    reducers: {
        setAppStatusAC(state, action: PayloadAction<{ status: RequestStatusType }>) {
            state.status = action.payload.status
        },
        setAppErrorMessageAC(state, action: PayloadAction<{ error: null | string }>) {
            state.error = action.payload.error;
        },
        setEmailAddresUserAC(state, action: PayloadAction<{ email: string }> ) {
            state.email = action.payload.email;
        },
    },
});


export const AppReducer = AppSlice.reducer;

export const {setAppErrorMessageAC, setAppStatusAC, setEmailAddresUserAC} = AppSlice.actions;

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
