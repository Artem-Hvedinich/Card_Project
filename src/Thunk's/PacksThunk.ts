import {AppThunkType} from "../Store-Reducers/Store";
import {setPacksDataAC, createPackAC, setFetchingPacksTableAC, detelePackAC} from "../Store-Reducers/Packs-Reducer";
import axios from "axios";
import {handleServerNetworkError} from "../UtilsFunction/Error-Utils";
import {CardAPI} from "../API/API";


export const SearchPackTC = (namePack: string): AppThunkType => async dispatch => {
    dispatch(createPackAC({createPack: {name: namePack}}));
}

export const detelePackTC = (id: string): AppThunkType => async dispatch => {
    dispatch(setFetchingPacksTableAC({isFetching: true}));
    try {
        const response = await CardAPI.deletePack(id);
        if (response) {
            dispatch(detelePackAC({pack: id}));
            dispatch(getAllPacksTC());
            dispatch(setFetchingPacksTableAC({isFetching: false}));
        }
    }
    catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            handleServerNetworkError(error.response.data.error, dispatch);
            dispatch(setFetchingPacksTableAC({isFetching: false}));
        }
    }
};

export const createPackTC = (namePack: string): AppThunkType => async dispatch => {
    dispatch(setFetchingPacksTableAC({isFetching: true}));
    try {
        const response = await CardAPI.createPack({namePack});
        if (response) {
            dispatch(createPackTC(namePack));
            dispatch(getAllPacksTC());
            dispatch(setFetchingPacksTableAC({isFetching: false}));
        }
    }
    catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            handleServerNetworkError(error.response.data.error, dispatch);
            dispatch(setFetchingPacksTableAC({isFetching: false}));
        }
    }
}


export const getAllPacksTC = (): AppThunkType => async dispatch => {

        dispatch(setFetchingPacksTableAC({isFetching: true}));
    try {
        let pageCount = 10;
        const response = await CardAPI.getPacks(pageCount);
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
        const response = await CardAPI.getPacks(pageCount, numberPage);
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