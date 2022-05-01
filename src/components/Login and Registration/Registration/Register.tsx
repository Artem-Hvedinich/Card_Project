import React from 'react';
import {AuthCardWrapper, TextWrapper, TitleWrapper} from "../../StylesComponents/Wrapper";
import {Button, Input} from "../../StylesComponents/Button";
import {colors} from "../../StylesComponents/Colors";
import styled from "styled-components";

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly
`;

export const Register = () => {
    return (
        <AuthCardWrapper width={413} height={540}>
            <TitleWrapper fontSz={26}>It-incubator</TitleWrapper>
            <TitleWrapper fontSz={22}>Sign Up</TitleWrapper>
            {/*formik*/}
            <TextWrapper fontSz={13} opacity={0.5} color={colors.DarkBlue}>Email</TextWrapper>
            <Input value={'email'}/>

            <TextWrapper fontSz={13} opacity={0.5} color={colors.DarkBlue}>Password</TextWrapper>
            <Input value={'password'}/>

            <TextWrapper fontSz={13} opacity={0.5} color={colors.DarkBlue}>Password</TextWrapper>
            <Input value={'Config password'}/>

            <ButtonWrapper>
                {/*button redirect in login*/}
                <Button height={36} width={124} bgColor={colors.Lavender} color={colors.DarkBlue}>Cancel</Button>
                <Button height={36} width={187} bgColor={colors.Blue} color={colors.Lavender}>Register</Button>
            </ButtonWrapper>
            {/*formik*/}
        </AuthCardWrapper>
    )
}
