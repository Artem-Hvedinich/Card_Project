import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FilterCardsType, ResponsePacksType} from "../Types/CardsTypes";

export type CardsInitialStateType = ResponsePacksType & {
    searchPack: string | null
    filter: FilterCardsType
};
const initialCardsState: CardsInitialStateType = {
    searchPack: null,
    filter: "All" as FilterCardsType,
    cardPack: [
        {_id: "51eb6cef840b7bf1cf0d8122d", user_id: "5eb543f6bea3ad21480f1ee7", name: "no Name", cardsCount: 25, created: "2020-05-09T15:40:40.339Z", updated: "2020-05-09T15:40:40.339Z"},
        {_id: "5eb46cef840b7bf1cf0d81222d", user_id: "5eb543f6bea3ad21480f1ee7", name: "no Name", cardsCount: 25, created: "2020-05-09T15:40:40.339Z", updated: "2020-05-09T15:40:40.339Z"},
        {_id: "5eb63cef840b7bf1cf0d8112322d", user_id: "5eb543f6bea3ad21480f1ee7", name: "no Name", cardsCount: 25, created: "2020-05-09T15:40:40.339Z", updated: "2020-05-09T15:40:40.339Z"},
        {_id: "5eb63cef840b7b5f1cf0d8122d", user_id: "5eb543f6bea3ad21480f1ee7", name: "no Name", cardsCount: 25, created: "2020-05-09T15:40:40.339Z", updated: "2020-05-09T15:40:40.339Z"},
    ],
    cardPacksTotalCount: 14,
    maxCardsCount: 4,
    minCardsCount: 0,
    page: 1 ,
    pageCount: 4,
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
        setPacksDataAC(state, action: PayloadAction<{ data: ResponsePacksType }>) {
            // state = [...action.payload.data, filter: "All", searchPack: null]
        },
    },
});


export const CardsReducer = CardsSlice.reducer;

export const {setSearchPackValue, setChangeFilteredPageAC, setPacksDataAC} = CardsSlice.actions;
