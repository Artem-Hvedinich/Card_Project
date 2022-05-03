import {AppThunkType} from "../Store-Reducers/Store";
import {setAppStatusAC} from "../Store-Reducers/App-Reducer";
import {AuthAPI} from "../API/API";
import {handleServerNetworkError} from "../UtilsFunction/Error-Utils";
import axios from "axios";

export const RegisterTC = (email: string, password: string): AppThunkType => async dispatch => {

    dispatch(setAppStatusAC({status: 'loading'}));

    try {
        const response = await AuthAPI.register(email, password);
        if (response.addedUser) {
            dispatch(setAppStatusAC({status: 'succeeded'}));
        }
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            handleServerNetworkError(error.response.data.error, dispatch);
        }
    }
};

export const ForgetPasswordTC = (email: string): AppThunkType => async dispatch => {

    dispatch(setAppStatusAC({status: 'loading'}));

    try {
        const response = await AuthAPI.forgotPassword(email);
        if (response) {
            dispatch(setAppStatusAC({status: 'succeeded'}));
        }
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            handleServerNetworkError(error.response.data.error, dispatch);
        }
    }
};
export const NewPasswordTC = (password: string, passwordToken: string): AppThunkType => async dispatch => {

    dispatch(setAppStatusAC({status: 'loading'}));

    try {
        const response = await AuthAPI.newPassword(password, passwordToken);
        if (response.info) {
            dispatch(setAppStatusAC({status: 'succeeded'}));
        }
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            handleServerNetworkError(error.response.data.error, dispatch);
        }
    }
};