import { createSlice} from "@reduxjs/toolkit";

export type CardsInitialStateType = {
    data: any
    isFetching: boolean
};

const initialCardsState: CardsInitialStateType = {
    data: {

    },
    isFetching: false,
};

const CardsSlice = createSlice({
    name: "CardsSlice",
    initialState: initialCardsState,
    reducers: {
        // setPacksDataAC(state, action: PayloadAction<ResponsePacksType>) {
        //     state.data = action.payload
        // },
        // setChangeFilteredPageAC(state, action: PayloadAction<{ valueFilter: FilterCardsType }>) {
        //     state.filter = action.payload.valueFilter
        // },
        // setFetchingPacksTableAC(state, action: PayloadAction<{ isFetching: boolean }>) {
        //     state.isFetching = action.payload.isFetching
        // },
    },
});


export const CardsReducer = CardsSlice.reducer;


export const {} = CardsSlice.actions;
