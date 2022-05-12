import {AppThunkType} from "../Store-Reducers/Store";
import axios from "axios";
import {handleServerNetworkError} from "../UtilsFunction/Error-Utils";
import {CardsAPI} from "../API/API";
import {setAppSuccessMessageAC} from "../Store-Reducers/App-Reducer";

// dispatch(setAppSuccessMessageAC({success: "Card is added"}));

export const getCardsTC = (packId :string): AppThunkType => async dispatch => {
    try {
        const response = await CardsAPI.getCards(packId);
        if (response) {

        }
    }
    catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            handleServerNetworkError(error.response.data.error, dispatch);

        }
    }
}

