import {AppThunkType} from "../Store-Reducers/Store";
import {setPacksDataAC, setSearchPackValue, setFetchingPacksTableAC} from "../Store-Reducers/Packs-Reducer";
import {Dispatch} from "redux";
import axios from "axios";
import {handleServerNetworkError} from "../UtilsFunction/Error-Utils";
import {CardAPI} from "../API/API";


export const SearchPackTC = (value: string): AppThunkType => async dispatch => {
    dispatch(setSearchPackValue({searchPackText: value}));
}

export const getAllPacksTC = () => async (dispatch: Dispatch) => {
        dispatch(setFetchingPacksTableAC({isFetching: true}));
    try {
        const response = await CardAPI.getPacks();
        console.log(response.data)
        if (response.data) {
            dispatch(setPacksDataAC(response.data));
            dispatch(setFetchingPacksTableAC({isFetching: true}));
        }
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            handleServerNetworkError(error.response.data.error, dispatch);
            dispatch(setFetchingPacksTableAC({isFetching: true}));
        }
    }
};