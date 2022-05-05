import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FilterCardsType, ResponsePacksType} from "../Types/PacksTypes";
import {ResponseDataLoginOrAuthMe} from "../Types/AuthTypes";
import {initialStateAuthorizationType, setAuthUserDataAC} from "./Auth-Reducer";

export type CardsInitialStateType = ResponsePacksType & {
    searchPack: string | null
    filter: FilterCardsType
    isFetching: boolean
};
const initialCardsState: CardsInitialStateType = {
    searchPack: null,
    filter: "All" as FilterCardsType,
    cardPack: [],
    cardPacksTotalCount: null,
    maxCardsCount: null,
    minCardsCount: null,
    page: null ,
    pageCount: null,
    token: null,
    tokenDeathTime: null,

    isFetching: false
};

const CardsSlice = createSlice({
    name: "CardsSlice",
    initialState: initialCardsState,
    reducers: {
        setSearchPackValue(state, action: PayloadAction<{ searchPackText: string | null }>) {
            state.searchPack = action.payload.searchPackText
        },
        setChangeFilteredPageAC(state, action: PayloadAction<{ value: FilterCardsType }>) {
            state.filter = action.payload.value
        },
        // setPacksDataAC(state, action: PayloadAction<{ data: ResponsePacksType }>) {
        //     return {...action.payload.data, cardPack: [...action.payload.data.cardPack], filter: "All", searchPack: null, isFetching: false }
        // },
        setFetchingPacksTableAC(state, action: PayloadAction<{ isFetching: boolean }>) {
            state.isFetching = action.payload.isFetching
        },
    },
    extraReducers: (builder) => {
        builder.addCase(setPacksDataAC, (state: typeof initialCardsState, action: PayloadAction<ResponsePacksType>) => {
            return {...action.payload, cardPack: [...action.payload.cardPack], filter: "All", searchPack: null, isFetching: false }
        })
    },
});


export const PacksReducer = CardsSlice.reducer;

export const setPacksDataAC = createAction<ResponsePacksType>("SET_PACKS");

export const {setFetchingPacksTableAC, setSearchPackValue, setChangeFilteredPageAC} = CardsSlice.actions;
