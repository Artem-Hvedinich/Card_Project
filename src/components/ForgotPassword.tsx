import React from 'react';
import {AuthCardWrapper, TextWrapper, TitleWrapper} from "./StylesComponents/Wrapper";
import {colors} from "./StylesComponents/Colors";
import {Button, Input} from "./StylesComponents/Button";

export const ForgotPassword = () => {
    return (
        <AuthCardWrapper width={413} height={540}>
            <TitleWrapper fontSz={26}>It-incubator</TitleWrapper>
            <TitleWrapper fontSz={22}>Forgot your password?</TitleWrapper>

            <Input value={'Email'} color={colors.DarkBlue}/>
            <TextWrapper opacity={0.5} color={colors.DarkBlue} fontSz={16}>Enter your email address and we will send you
                further instructions</TextWrapper>

            <Button bgColor={colors.Blue} width={266} height={36} color={colors.Lavender}>Send Instructions</Button>
            <TextWrapper textAlign='center' opacity={0.5} color={colors.DarkBlue} fontSz={16}>Did you remember your
                password?</TextWrapper>
            <TitleWrapper fontSz={16} color={colors.Blue}>Try logging in</TitleWrapper>
        </AuthCardWrapper>
    )
}
