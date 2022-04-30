import {Dispatch} from "redux";
import {AuthAPI} from "../API/API";
import {setIsFetchingAC} from "../Store-Reducers/App-Reducer";
import {setAuthUserDataAC} from "../Store-Reducers/Auth-Reducer";
import {handleServerAppError, handleServerNetworkError} from "../UtilsFunction/Error-Utils";


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