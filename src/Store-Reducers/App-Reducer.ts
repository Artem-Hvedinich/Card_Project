import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export type AppInitialStateType = {
    status: RequestStatusType,
    error: null | string,
};

const initialAppState: AppInitialStateType = {
    status: 'idle' as RequestStatusType,
    error: null,
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
    },
});


export const AppReducer = AppSlice.reducer;

export const {setAppErrorMessageAC, setAppStatusAC} = AppSlice.actions;

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
