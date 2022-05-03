import {Dispatch} from "redux";
import {AuthAPI} from "../API/API";
import {setAppStatusAC, setIsFetchingAC} from "../Store-Reducers/App-Reducer";
import {setAuthUserDataAC} from "../Store-Reducers/Auth-Reducer";
import {handleServerAppError, handleServerNetworkError} from "../UtilsFunction/Error-Utils";
import {LoginDataType} from "../Types/AuthTypes";
import {AppThunkType} from "../Store-Reducers/Store";


export const AuthMeTC = (): AppThunkType => async dispatch => {

    dispatch(setIsFetchingAC({isFetching: true}));

    try {
        const response = await AuthAPI.authMe()
        if (response.data) {
            dispatch(setAuthUserDataAC(response.data))
        } else {
            console.log('error')
            // dispatch(handleServerAppError(response.data.error))
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
    dispatch(setAppStatusAC({status: 'loading'}))
    dispatch(setIsFetchingAC({isFetching: true}));
    const response = await AuthAPI.authLogin(values.email, values.password, values.rememberMe)
    try {
        if (response) {
            dispatch(setAuthUserDataAC(response));
            dispatch(setAppStatusAC({status: 'succeeded'}))
        } else handleServerAppError(response, dispatch)//??????
    } catch (error) {
        if (error instanceof Error) {
            handleServerNetworkError(error, dispatch);
        }
    } finally {
        dispatch(setIsFetchingAC({isFetching: false}));
    }
};

export const LogOutTC = (): AppThunkType => async dispatch => {
    dispatch(setAppStatusAC({status: 'loading'}))
    const response = await AuthAPI.logOut()
    try {
        if (response.data.info) {
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
            dispatch(setAppStatusAC({status: 'succeeded'}))
        } else handleServerAppError(response.data.error, dispatch)
    } catch (error) {
        handleServerNetworkError(error, dispatch)
    } finally {
        dispatch(setAppStatusAC({status: 'succeeded'}))
    }
};

export const RegisterTC = (email: string, password: string): AppThunkType => async dispatch => {
    dispatch(setAppStatusAC({status: 'loading'}))
    const response = await AuthAPI.register(email, password)
    try {
        if (response.addedUser) {
            dispatch(setAppStatusAC({status: 'succeeded'}))
        } else handleServerAppError(response.error, dispatch)
    } catch (error) {
        handleServerNetworkError(error, dispatch)
    } finally {
        dispatch(setAppStatusAC({status: 'succeeded'}))
    }
};


