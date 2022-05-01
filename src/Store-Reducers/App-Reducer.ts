import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export type AppInitialStateType = {
    error: null | string,
    isFetching: boolean,
};

const initialAppState: AppInitialStateType = {
    error: null,
    isFetching: false,
};

const AppSlice = createSlice({
    name: "AppSlice",
    initialState: initialAppState,
    reducers: {
        setAppErrorMessageAC(state, action: PayloadAction<{ error: null | string }>) {
            state.error = action.payload.error;
        },
        setIsFetchingAC(state, action: PayloadAction<{ isFetching: boolean }>) {
            state.isFetching = action.payload.isFetching;
        },
    },
});


export const AppReducer = AppSlice.reducer;

export const {setAppErrorMessageAC, setIsFetchingAC} = AppSlice.actions;