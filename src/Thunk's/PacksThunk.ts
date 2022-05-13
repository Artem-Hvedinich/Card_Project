import {AppRootStateType, AppThunkType} from "../Store-Reducers/Store";
import {setPacksDataAC, setFetchingPacksTableAC} from "../Store-Reducers/Packs-Reducer";
import axios from "axios";
import {handleServerNetworkError} from "../UtilsFunction/Error-Utils";
import {PackAPI} from "../API/API";
import {setAppSuccessMessageAC} from "../Store-Reducers/App-Reducer";
import {FilterAllMyFunction} from "../UtilsFunction/FilterAllMyFunction";


export const SearchPackTC = (namePack: string): AppThunkType => async dispatch => {

}

export const ChangePackTC = (packId: string, namePack: string): AppThunkType => async (dispatch, getState: () => AppRootStateType) => {
    dispatch(setFetchingPacksTableAC({isFetching: true}));

    try {
        let cardsPack = {_id: packId, name: namePack};
        const response = await PackAPI.updatePack(cardsPack);
        if (response) {
            FilterAllMyFunction(dispatch, getState)
            dispatch(setFetchingPacksTableAC({isFetching: false}));
            dispatch(setAppSuccessMessageAC({success: "Packs name is changed"}));
        }
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            handleServerNetworkError(error.response.data.error, dispatch);
            dispatch(setFetchingPacksTableAC({isFetching: false}));
        }
    }
}

export const detelePackTC = (id: string): AppThunkType => async (dispatch, getState: () => AppRootStateType) => {
    dispatch(setFetchingPacksTableAC({isFetching: true}));
    try {
        const response = await PackAPI.deletePack(id);
        if (response) {
            FilterAllMyFunction(dispatch, getState)
            dispatch(setFetchingPacksTableAC({isFetching: false}));
            dispatch(setAppSuccessMessageAC({success: "Pack is deleted"}));
        }
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            handleServerNetworkError(error.response.data.error, dispatch);
            dispatch(setFetchingPacksTableAC({isFetching: false}));
        }
    }
};

export const createPackTC = (name: string): AppThunkType => async (dispatch, getState: () => AppRootStateType) => {
    dispatch(setFetchingPacksTableAC({isFetching: true}));
    try {
        const response = await PackAPI.createPack({name});
        if (response) {
            FilterAllMyFunction(dispatch, getState)
            dispatch(setFetchingPacksTableAC({isFetching: false}));
            dispatch(setAppSuccessMessageAC({success: "Pack is added"}));
        }
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            handleServerNetworkError(error.response.data.error, dispatch);
            dispatch(setFetchingPacksTableAC({isFetching: false}));
        }
    }
}

export const CardsMinMaxFilterTC = (min: number, max: number): AppThunkType => async (dispatch, getState: () => AppRootStateType) => {
    dispatch(setFetchingPacksTableAC({isFetching: true}));
    try {
        const response = await PackAPI.getPacks(undefined, undefined, undefined, min, max);
        if (response) {
            FilterAllMyFunction(dispatch, getState)
            dispatch(setFetchingPacksTableAC({isFetching: false}));
        }
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            handleServerNetworkError(error.response.data.error, dispatch);
            dispatch(setFetchingPacksTableAC({isFetching: false}));
        }
    }
}

export const getAllPacksTC = (id?: string | null): AppThunkType => async dispatch => {
    dispatch(setFetchingPacksTableAC({isFetching: true}));

    try {
        let pageCount = 10;
        const response = await PackAPI.getPacks(pageCount, 1, id);
        if (response.data) {
            dispatch(setPacksDataAC(response.data));
            dispatch(setFetchingPacksTableAC({isFetching: false}));
        }
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            handleServerNetworkError(error.response.data.error, dispatch);
            dispatch(setFetchingPacksTableAC({isFetching: false}));
        }
    }
};


export const getOnePagePacksTC = (numberPage: number): AppThunkType => async dispatch => {

    dispatch(setFetchingPacksTableAC({isFetching: true}));
    try {
        let pageCount = 10;
        const response = await PackAPI.getPacks(pageCount, numberPage);
        if (response.data) {
            dispatch(setPacksDataAC(response.data));
            dispatch(setFetchingPacksTableAC({isFetching: false}));
        }
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            handleServerNetworkError(error.response.data.error, dispatch);
            dispatch(setFetchingPacksTableAC({isFetching: false}));
        }
    }
};