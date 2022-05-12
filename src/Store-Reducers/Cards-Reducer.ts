import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CardsResponseType} from "../Types/CardTypes";

export type CardsInitialStateType = {
    data: CardsResponseType
    isFetching: boolean
};

const initialCardsState: CardsInitialStateType = {
    data: {
        cards: [],
        cardsTotalCount: 0,
        maxGrade: 0,
        minGrade: 0,
        page: 0,
        pageCount: 0,
        packUserId: '',
    },
    isFetching: false,
};

const CardsSlice = createSlice({
    name: "CardsSlice",
    initialState: initialCardsState,
    reducers: {
        setCardsDataAC(state, action: PayloadAction<CardsResponseType>) {
            state.data = action.payload
        },
        setFetchingCardsTableAC(state, action: PayloadAction<{ isFetching: boolean }>) {
            state.isFetching = action.payload.isFetching
        },
    },
});


export const CardsReducer = CardsSlice.reducer;


export const {setCardsDataAC, setFetchingCardsTableAC} = CardsSlice.actions;
