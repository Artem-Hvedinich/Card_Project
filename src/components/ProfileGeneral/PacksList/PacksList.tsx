import React from 'react';
import s from "./PacksList.module.css";
import {GeneralProfileWrapper} from "../../StylesComponents/Wrapper";
import {useAppSelector, useTypedDispatch} from "../../../Store-Reducers/Store";
import {CardsInitialStateType, setChangeFilteredPageAC} from "../../../Store-Reducers/Cards-Reducer";
import {AllPacks} from "./AllPacks/AllPacks";
import {FilterCardsType} from "../../../Types/CardsTypes";


export const PacksList = () => {

        const stateCards = useAppSelector<CardsInitialStateType>(state => state.CardsReducer);
        const dispatch = useTypedDispatch();

        const onClickHandler = (value: FilterCardsType) => dispatch(setChangeFilteredPageAC({value}));

        return (
            <GeneralProfileWrapper>
                <div className={s.tools_block}>
                    <div className={s.text_filters_button}>Show packs cards</div>
                    <div className={s.buttons_block}>
                        <button className={stateCards.filter === "All" ? s.buttons_filter : s.buttons_filter_active}
                                onClick={() => onClickHandler("My")}>
                            My
                        </button>
                        <div className={s.palka}/>
                        <button className={stateCards.filter === "My" ? s.buttons_filter : s.buttons_filter_active}
                                onClick={() => onClickHandler( "All")}>
                            All
                        </button>
                    </div>
                    <div className={s.text_filter}>Number of cards</div>
                </div>

                <AllPacks />

            </GeneralProfileWrapper>
        );
    }
;

