import {Dispatch} from "redux";
import {AuthAPI} from "../API/API";
import {setIsFetchingAC} from "../Store-Reducers/App-Reducer";
import {setAuthUserDataAC} from "../Store-Reducers/Auth-Reducer";
import {handleServerAppError, handleServerNetworkError} from "../UtilsFunction/Error-Utils";
import {LoginDataType} from "../Types/AuthTypes";


export const AuthMeTC = () => async (dispatch: Dispatch) => {

    dispatch(setIsFetchingAC({isFetching: true}));

    try {
        const response = await AuthAPI.authMe()
        if (response) {
            dispatch(setAuthUserDataAC(response))
        } else {
            // dispatch(handleServerAppError(response.error))
        }
    } catch (error) {
        if (error instanceof Error) {
            handleServerNetworkError(error, dispatch);
        }
    } finally {
        dispatch(setIsFetchingAC({isFetching: false}));
    }
};

export const LoginTC = (values: LoginDataType) => async (dispatch: Dispatch) => {

    dispatch(setIsFetchingAC({isFetching: true}));

    try {
        const response = await AuthAPI.authLogin(values.email, values.password, values.rememberMe)
        if (response) {
            dispatch(setAuthUserDataAC(response));
        } else {
            // dispatch(handleServerAppError(response.error))
        }
    } catch (error) {
        if (error instanceof Error) {
            handleServerNetworkError(error, dispatch);
        }
    } finally {
        dispatch(setIsFetchingAC({isFetching: false}));
    }
};


export const LogOutTC = () => async (dispatch: Dispatch) => {
    const response = await AuthAPI.LogOut()
    if (response.info) {
        let resetUser = {
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
        dispatch(setAuthUserDataAC(resetUser))
    } else {
        handleServerAppError(response.error, dispatch)
    }
};