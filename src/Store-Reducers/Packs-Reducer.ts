import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FilterCardsType, OnePacksType, ResponsePacksType} from "../Types/PacksTypes";

export type PacksInitialStateType = {
    data: ResponsePacksType
    searchPack?: string
    filter: FilterCardsType
    isFetching: boolean
};

const initialPacksState: PacksInitialStateType = {
    data: {
        cardPacks: [] as OnePacksType[],
        cardPacksTotalCount: 0,
        maxCardsCount: 0,
        minCardsCount: 0,
        page: 1,
        pageCount: 0,
        token: '',
        tokenDeathTime: 0,
    },
    filter: "All" as FilterCardsType,
    isFetching: false,
};

const PacksSlice = createSlice({
    name: "PacksSlice",
    initialState: initialPacksState,
    reducers: {
        setPacksDataAC(state, action: PayloadAction<ResponsePacksType>) {
            state.data = action.payload
        },
        setChangeFilteredPageAC(state, action: PayloadAction<{ valueFilter: FilterCardsType }>) {
            state.filter = action.payload.valueFilter
        },
        setFetchingPacksTableAC(state, action: PayloadAction<{ isFetching: boolean }>) {
            state.isFetching = action.payload.isFetching
        },
        searchPacksTableAC(state, action: PayloadAction<{ searchPack: string }>) {
            state.searchPack = action.payload.searchPack
        },
    },
});


export const PacksReducer = PacksSlice.reducer;


export const {setFetchingPacksTableAC, setChangeFilteredPageAC, setPacksDataAC, searchPacksTableAC} = PacksSlice.actions;
