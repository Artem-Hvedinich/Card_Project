import {Dispatch} from 'redux';
import {setAppErrorMessageAC, setAppStatusAC} from "../Store-Reducers/App-Reducer";


// generic function
export const handleServerAppError = (error: string | undefined, dispatch: Dispatch) => {
    if (error) {
        dispatch(setAppErrorMessageAC({error: error}));
    } else {
        dispatch(setAppErrorMessageAC({error: 'Some error occurred'}));
    }
}

export const handleServerNetworkError = (catchError: unknown, dispatch: Dispatch) => {
    const error = catchError as Error
    dispatch(setAppErrorMessageAC({error: error.message}))
    dispatch(setAppStatusAC({status: 'failed'}))
}