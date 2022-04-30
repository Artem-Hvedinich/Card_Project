import React from 'react';
import {Button, Input} from './StylesComponents/Button';
import {colors} from './StylesComponents/Colors';
import {AuthCardWrapper, TextWrapper, TitleWrapper} from "./StylesComponents/Wrapper";

export const Login = () => {
    return (
        <div>
            <AuthCardWrapper width={413} height={600}>
                <TitleWrapper fontSz={26}>It-incubator</TitleWrapper>
                <TitleWrapper fontSz={22}>Sign In</TitleWrapper>

                <TextWrapper fontSz={13} color={colors.DarkBlue} opacity={0.5}>Email</TextWrapper>
                <Input value={'email'}/>
                <TextWrapper fontSz={13} color={colors.DarkBlue} opacity={0.5}>Password</TextWrapper>
                <Input value={'password'}/>
                <TextWrapper textAlign='right' color={colors.DarkBlue} fontSz={14}>Forgot Password</TextWrapper>
                <Button height={36} width={266} bgColor={colors.Blue}
                        color={colors.Lavender}>Login</Button>
                <TextWrapper textAlign='center' color={colors.DarkBlue} fontSz={14} opacity={0.5}>Don’t have an
                    account?</TextWrapper>
                <TitleWrapper fontSz={16} color={colors.Blue}>Sign Up</TitleWrapper>
            </AuthCardWrapper>
        </div>
    )
}
