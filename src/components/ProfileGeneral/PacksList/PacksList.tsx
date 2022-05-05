import React from 'react';
import {useAppSelector, useTypedDispatch} from "../../../Store-Reducers/Store";
import {CardsInitialStateType, setChangeFilteredPageAC} from "../../../Store-Reducers/Cards-Reducer";
import {AllPacks} from "./AllPacks/AllPacks";
import {FilterCardsType} from "../../../Types/CardsTypes";
import {
    GeneralProfileWrapper,
    TitleProfileWrapper,
    ToolsProfileBlock
} from '../../StylesComponents/ProfileAndPacksWrapper';
import styled from 'styled-components';
import {colors} from "../../StylesComponents/Colors";
import {NotAuthRedirect} from "../../../UtilsFunction/RedirectFunction";
import {Slider} from "antd";
import 'antd/dist/antd.css';


export const PacksList = NotAuthRedirect(() => {
    const dispatch = useTypedDispatch();
    const stateCards = useAppSelector<CardsInitialStateType>(state => state.CardsReducer);
    const onClickHandler = (value: FilterCardsType) => dispatch(setChangeFilteredPageAC({value}));

    const active = stateCards.filter === "All";

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
                </NumberCards>

                <RangeBlock>
                    <Slider range tooltipVisible max={150} defaultValue={[30, 150]}/>
                </RangeBlock>

            </ToolsProfileBlock>

            <AllPacks/>

        </GeneralProfileWrapper>
    )
});



const RangeBlock = styled.div`
  width: 80%;
  margin: 20px auto;
`;

const ShowPacks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 5vw;`

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
