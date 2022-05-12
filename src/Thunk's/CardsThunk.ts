import {AppThunkType} from "../Store-Reducers/Store";
import axios from "axios";
import {handleServerNetworkError} from "../UtilsFunction/Error-Utils";
import {PackAPI} from "../API/API";
import {setAppSuccessMessageAC} from "../Store-Reducers/App-Reducer";



export const createCardTC = (name: string): AppThunkType => async dispatch => {
    try {
        const response = await PackAPI.createPack({name});
        if (response) {

            dispatch(setAppSuccessMessageAC({success: "Card is added"}));
        }
    }
    catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            handleServerNetworkError(error.response.data.error, dispatch);

        }
    }
}

