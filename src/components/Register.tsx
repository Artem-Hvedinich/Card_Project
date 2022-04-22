import React from 'react';
import {AuthCardWrapper, TitleWrapper} from "./StylesComponents/Wrapper";
import {Button} from "./StylesComponents/Button";
import {colors} from "./StylesComponents/Colors";
import styled from "styled-components";
import {InputAndText} from "./StylesComponents/InputAndText";

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly`
export const Register = () => {
    return (
        <AuthCardWrapper width={413} height={540}>
            <TitleWrapper fontSz={26}>It-incubator</TitleWrapper>
            <TitleWrapper fontSz={22}>Sign Up</TitleWrapper>
            <InputAndText text={'Email'} value={'email'} fontSz={13} opacity={0.5}
                          color={colors.Blue}/>
            <InputAndText text={'Password'} value={'password'} type={'password'} fontSz={13} opacity={0.5}
                          color={colors.Blue}/>
            <InputAndText text={'Confirm password'} value={'Password'} type={'password'} fontSz={13} opacity={0.5}
                          color={colors.Blue}/>
            <ButtonWrapper>
                <Button height={36} width={124} bgColor={colors.Lavender} color={colors.DarkBlue}>Cancel</Button>
                <Button height={36} width={187} bgColor={colors.DarkBlue} color={colors.Lavender}>Register</Button>
            </ButtonWrapper>
        </AuthCardWrapper>
    )
}
