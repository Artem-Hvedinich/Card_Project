import {AppRootStateType, AppThunkType} from "../Store-Reducers/Store";
import {setPacksDataAC, setFetchingPacksTableAC} from "../Store-Reducers/Packs-Reducer";
import axios from "axios";
import {handleServerNetworkError} from "../UtilsFunction/Error-Utils";
import {PackAPI} from "../API/API";
import {setAppSuccessMessageAC} from "../Store-Reducers/App-Reducer";
import {FilterAllMyFunction} from "../UtilsFunction/FilterAllMyFunction";


export const getAllPacksTC = (): AppThunkType =>
    async (dispatch, getState: () => AppRootStateType) => {

        dispatch(setFetchingPacksTableAC({isFetching: true}));

        try {
            let {params} = getState().PacksReducer;
            const {data} = await PackAPI.getPacks(params);
            if (data) {
                dispatch(setPacksDataAC(data));
                dispatch(setFetchingPacksTableAC({isFetching: false}));
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                handleServerNetworkError(error.response.data.error, dispatch);
                dispatch(setFetchingPacksTableAC({isFetching: false}));
            }
        }
    };

export const updatePackTC = (packId: string, namePack: string): AppThunkType =>
    async (dispatch, getState: () => AppRootStateType) => {

        dispatch(setFetchingPacksTableAC({isFetching: true}));

        try {
            const {data} = await PackAPI.updatePack({_id: packId, name: namePack});
            if (data) {
                FilterAllMyFunction(dispatch, getState);
                dispatch(setFetchingPacksTableAC({isFetching: false}));
                dispatch(setAppSuccessMessageAC({success: "Packs name is changed"}));
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                handleServerNetworkError(error.response.data.error, dispatch);
                dispatch(setFetchingPacksTableAC({isFetching: false}));
            }
        }
    };

export const detelePackTC = (id: string): AppThunkType =>
    async (dispatch, getState: () => AppRootStateType) => {

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

export const createPackTC = (name: string): AppThunkType =>
    async (dispatch, getState: () => AppRootStateType) => {

        dispatch(setFetchingPacksTableAC({isFetching: true}));

        try {
            const response = await PackAPI.createPack({name});
            if (response) {
                FilterAllMyFunction(dispatch, getState);
                dispatch(setFetchingPacksTableAC({isFetching: false}));
                dispatch(setAppSuccessMessageAC({success: "Pack is added"}));
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                handleServerNetworkError(error.response.data.error, dispatch);
                dispatch(setFetchingPacksTableAC({isFetching: false}));
            }
        }
    };

