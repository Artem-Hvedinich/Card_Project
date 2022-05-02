import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export type AppInitialStateType = {
    status: RequestStatusType,
    error: null | string,
    isFetching: boolean,
};

const initialAppState: AppInitialStateType = {
    status: 'idle' as RequestStatusType,
    error: null,
    isFetching: false,
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
        setIsFetchingAC(state, action: PayloadAction<{ isFetching: boolean }>) {
            state.isFetching = action.payload.isFetching;
        },
    },
});


export const AppReducer = AppSlice.reducer;

export const {setAppErrorMessageAC, setIsFetchingAC, setAppStatusAC} = AppSlice.actions;

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
