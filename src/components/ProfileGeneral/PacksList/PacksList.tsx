import React, {useEffect, useState} from 'react';
import {useAppSelector, useTypedDispatch} from "../../../Store-Reducers/Store";
import {PacksInitialStateType, setChangeFilteredPageAC} from "../../../Store-Reducers/Packs-Reducer";
import {AllPacks} from "./AllPacks/AllPacks";
import {FilterCardsType} from "../../../Types/PacksTypes";
import {
    GeneralProfileWrapper,
    TitleProfileWrapper,
    ToolsProfileBlock
} from '../../StylesComponents/ProfileAndPacksWrapper';
import styled from 'styled-components';
import {colors} from "../../StylesComponents/Colors";
import {NotAuthRedirect} from "../../../UtilsFunction/RedirectFunction";
import {DoubleRange} from "../../../UtilsFunction/DoubleRange";
import {CardsMinMaxFilterTC, getAllPacksTC} from "../../../Thunk's/PacksThunk";

export const PacksList = NotAuthRedirect(() => {

        const statePack = useAppSelector<PacksInitialStateType>(state => state.PacksReducer);
        const myId = useAppSelector<string | null>(state => state.AuthorizationReducer._id);
        const [valueMin, setValueMin] = useState(0);
        const [valueMax, setValueMax] = useState(50);

        useEffect(() => {
            valueMin < valueMax ? dispatch(CardsMinMaxFilterTC(valueMin, valueMax)) : dispatch(CardsMinMaxFilterTC(valueMax, valueMin))
        }, [valueMin, valueMax])

        const dispatch = useTypedDispatch();
        const onClickHandler = (valueFilter: FilterCardsType) => {
            if (valueFilter === 'My') {
                dispatch(setChangeFilteredPageAC({valueFilter}))
                myId && dispatch(getAllPacksTC(myId))
            } else {
                dispatch(setChangeFilteredPageAC({valueFilter}))
                dispatch(getAllPacksTC())
            }
        };

        const active = statePack.filter === "All";

        return (
            <GeneralProfileWrapper>
                <ToolsProfileBlock>
                    <ShowPacks>
                        <TitleProfileWrapper fontSz={0.8}>Show packs cards</TitleProfileWrapper>
                        <ButtonWrapper>
                            <Button active={!active}
                                    onClick={() => onClickHandler("My")}>My
                            </Button>

                            <Button active={active}
                                    onClick={() => onClickHandler("All")}>All
                            </Button>
                        </ButtonWrapper>
                    </ShowPacks>

                    <NumberCards>
                        <TitleProfileWrapper fontSz={0.8}>Number of cards</TitleProfileWrapper>
                        <DoubleRange onChangeRangeMin={setValueMin}
                                     onChangeRangeMax={setValueMax}
                                     valueMin={valueMin}
                                     valueMax={valueMax}/>
                    </NumberCards>
                </ToolsProfileBlock>

                <AllPacks packsArray={statePack.data.cardPacks} namePage={"Packs List"}/>

            </GeneralProfileWrapper>
        )
    })
;

const ShowPacks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 7vw;`

const NumberCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 5vw;`
const ButtonWrapper = styled.div`
  display: flex;`

const Button = styled.button<{ active: boolean }>`
  width: 4vw;
  height: 2vw;
  border: none;
  cursor: pointer;
  font-size: 0.7vw;
  background-color: ${({active}) => active ? colors.FilterButtonColor : colors.WhiteColor};
  color: ${({active}) => active ? colors.WhiteColor : colors.TextColor};
  transition: background-color 0.5s, color 0.5s;
  transition-delay: 0.1s;`
