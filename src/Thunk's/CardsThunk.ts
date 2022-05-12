import {AppThunkType} from "../Store-Reducers/Store";
import axios from "axios";
import {handleServerNetworkError} from "../UtilsFunction/Error-Utils";
import {CardsAPI} from "../API/API";
import {setCardsDataAC, setFetchingCardsTableAC} from "../Store-Reducers/Cards-Reducer";

// dispatch(setAppSuccessMessageAC({success: "Card is added"}));

export const getCardsTC = (packId :string): AppThunkType => async dispatch => {
    try {
        let pageCount = 10;
        const response = await CardsAPI.getCards(packId, pageCount);
        if (response.data) {
            dispatch(setCardsDataAC(response.data));
        }
    }
    catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            handleServerNetworkError(error.response.data.error, dispatch);

        }
    };
};

export const getOnePageCardsTC = (packId :string, page?: number): AppThunkType => async dispatch => {

    dispatch(setFetchingCardsTableAC({ isFetching: true }));

    try {
        let pageCount = 10;
        const response = await CardsAPI.getCards(packId, pageCount, page);
        if (response.data) {
            dispatch(setCardsDataAC(response.data));
            dispatch(setFetchingCardsTableAC({ isFetching: false }));
        }
    }
    catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            handleServerNetworkError(error.response.data.error, dispatch);
            dispatch(setFetchingCardsTableAC({ isFetching: false }));
        }
    };
};

