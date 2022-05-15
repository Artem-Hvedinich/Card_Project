import {AppRootStateType, AppThunkType} from "../Store-Reducers/Store";
import axios from "axios";
import {handleServerNetworkError} from "../UtilsFunction/Error-Utils";
import {CardsAPI} from "../API/API";
import {setCardsDataAC, setFetchingCardsTableAC} from "../Store-Reducers/Cards-Reducer";
import {RequestCardPostType} from "../Types/CardTypes";
import {setAppSuccessMessageAC} from "../Store-Reducers/App-Reducer";

export const getCardsTC = (packId :string): AppThunkType =>
    async (dispatch, getState: () => AppRootStateType) => {

    dispatch(setFetchingCardsTableAC({ isFetching: true }));

    try {
        let params = getState().CardsReducer.params;
        const {data} = await CardsAPI.getCards(params);
        if (data) {
            dispatch(setCardsDataAC(data));
            dispatch(setFetchingCardsTableAC({ isFetching: false }));
        }
    }
    catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            handleServerNetworkError(error.response.data.error, dispatch);

        }
    }
};

export const createCardTC = (card: RequestCardPostType): AppThunkType => async dispatch => {

    dispatch(setFetchingCardsTableAC({ isFetching: true }));

    try {
        const {data} = await CardsAPI.createCard(card);
        if (data) {
            dispatch(getCardsTC(card.cardsPack_id));
            dispatch(setFetchingCardsTableAC({ isFetching: false }));
             dispatch(setAppSuccessMessageAC({success: "Card is added"}));
        }
    }
    catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            handleServerNetworkError(error.response.data.error, dispatch);

        }
    }
};
