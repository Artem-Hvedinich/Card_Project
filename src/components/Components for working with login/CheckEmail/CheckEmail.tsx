import React from 'react';
import {TextWrapper, TitleWrapper, CardWrapper} from "../../StylesComponents/Wrapper";
import {colors} from "../../StylesComponents/Colors";
import {CheckEmailIcon} from "./CheckEmailIcon";
import styled from "styled-components";
import {useAppSelector} from "../../../Store-Reducers/Store";
import {AppInitialStateType} from "../../../Store-Reducers/App-Reducer";

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 108px;
  height: 108px;
  border-radius: 50%;
  background: #D7D8EF`

export const CheckEmail = () => {

    const stateApp = useAppSelector<AppInitialStateType>(state => state.AppReducer);



    return (
        <CardWrapper width={413} height={468}>
            <TitleWrapper fontSz={26}>It-incubator</TitleWrapper>
            <IconWrapper>
                <CheckEmailIcon/>
            </IconWrapper>
            <TitleWrapper fontSz={22}> Check Email </TitleWrapper>
            <TextWrapper textAlign={'center'}
                         opacity={0.5}
                         color={colors.DarkBlue}
                         fontSz={16}>
                {`We’ve sent an Email with instructions to ${stateApp.email}`}
            </TextWrapper>
        </CardWrapper>

    )
}

