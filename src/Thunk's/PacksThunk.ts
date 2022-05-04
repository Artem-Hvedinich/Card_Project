import {AppThunkType} from "../Store-Reducers/Store";
import {setPacksDataAC, setSearchPackValue} from "../Store-Reducers/Cards-Reducer";
import {Dispatch} from "redux";
import axios from "axios";
import {handleServerNetworkError} from "../UtilsFunction/Error-Utils";
import {CardAPI} from "../API/API";


export const SearchPackTC = (value: string): AppThunkType => async dispatch => {
    dispatch(setSearchPackValue({searchPackText: value}));
}

export const getAllPacksTC = () => async (dispatch: Dispatch) => {

    try {
        const {data} = await CardAPI.getPacks();
        if (data) {
            dispatch(setPacksDataAC({data}));
        }
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            handleServerNetworkError(error.response.data.error, dispatch);
        }
    }
};