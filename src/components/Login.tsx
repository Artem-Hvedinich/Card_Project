import React from 'react';
import {Button, Input} from './StylesComponents/Button';
import {colors} from './StylesComponents/Colors';
import {AuthCardWrapper, TextWrapper, TitleWrapper} from "./StylesComponents/Wrapper";

export const Login = () => {
    console.log('App')
    return (
        <div>
            <AuthCardWrapper width={413} height={600}>
                <TitleWrapper fontSz={26}>It-incubator</TitleWrapper>
                <TitleWrapper fontSz={22}>Sign In</TitleWrapper>

                {/*formik*/}
                <TextWrapper fontSz={13} opacity={0.5} color={colors.DarkBlue}>Email</TextWrapper>
                <Input value={'email'}/>

                <TextWrapper fontSz={13} opacity={0.5} color={colors.DarkBlue}>Password</TextWrapper>
                <Input value={'password'}/>

                {/*redirect in  Password*/}
                <TextWrapper textAlign={'end'} color={colors.DarkBlue} fontSz={14}>Forgot Password</TextWrapper>

                <Button height={36} width={266} bgColor={colors.DarkBlue}
                        color={colors.Lavender}>Login</Button>
                {/*formik*/}

                {/*redirect in Forgot Password */}
                <TextWrapper color={colors.DarkBlue} fontSz={14} opacity={0.5}>Don’t have an account?</TextWrapper>

                {/*redirect in  Register*/}
                <TitleWrapper fontSz={16} color={colors.Blue}>Sign Up</TitleWrapper>
            </AuthCardWrapper>
        </div>
    )
}
