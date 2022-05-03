import {Dispatch} from 'redux';
import {setAppErrorMessageAC, setAppStatusAC} from "../Store-Reducers/App-Reducer";

export const handleServerNetworkError = (error: string, dispatch: Dispatch) => {
    console.log(error)
    dispatch(setAppErrorMessageAC({error: error}))
    dispatch(setAppStatusAC({status: 'failed'}))
}