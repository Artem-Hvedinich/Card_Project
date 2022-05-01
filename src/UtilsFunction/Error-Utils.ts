import {Dispatch} from 'redux';
import {setAppErrorMessageAC} from "../Store-Reducers/App-Reducer";


// generic function
export const handleServerAppError = (error: string | undefined, dispatch: Dispatch) => {
    if (error) {
        dispatch(setAppErrorMessageAC({error: error}));
    } else {
        dispatch(setAppErrorMessageAC({error: 'Some error occurred'}));
    }
}

export const handleServerNetworkError = (error: { message: string }, dispatch: Dispatch) => {
    dispatch(setAppErrorMessageAC({error: error.message}));
}