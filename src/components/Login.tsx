import React from 'react';
import {Button} from './StylesComponents/Button';
import {colors} from './StylesComponents/Colors';
import {AuthCardWrapper, TextWrapper, TitleWrapper} from "./StylesComponents/Wrapper";
import {InputAndText} from "./StylesComponents/InputAndText";

export const Login = () => {
    return (
        <div>
            <AuthCardWrapper width={413} height={600}>
                <TitleWrapper fontSz={26}>It-incubator</TitleWrapper>
                <TitleWrapper fontSz={22}>Sign In</TitleWrapper>

                <InputAndText text={'Email'} value={'email'} fontSz={13} opacity={0.5} color={colors.DarkBlue}/>
                <InputAndText text={'Password'} value={'password'} type={'password'} fontSz={13} opacity={0.5}
                              color={colors.DarkBlue}/>

                <TextWrapper color={colors.DarkBlue} fontSz={14}>Forgot Password</TextWrapper>
                <Button height={36} width={266} bgColor={colors.DarkBlue}
                        color={colors.Lavender}>Login</Button>
                <TextWrapper color={colors.DarkBlue} fontSz={14} opacity={0.5}>Don’t have an account?</TextWrapper>
                <TitleWrapper fontSz={16} color={colors.Blue}>Sign Up</TitleWrapper>
            </AuthCardWrapper>
        </div>
    )
}
