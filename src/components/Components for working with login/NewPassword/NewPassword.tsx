import React from 'react';
import {AuthCardWrapper, TextWrapper, TitleWrapper} from '../../StylesComponents/Wrapper';
import {Button, Input} from "../../StylesComponents/Button";
import {colors} from "../../StylesComponents/Colors";

export const NewPassword = () => {
    return (
        <AuthCardWrapper width={413} height={480}>
            <TitleWrapper fontSz={26}>It-incubator</TitleWrapper>
            <TitleWrapper fontSz={22}>Create new password</TitleWrapper>
            {/*formik*/}
            <Input value={'Password'} color={colors.DarkBlue}/>
            <TextWrapper opacity={0.5} color={colors.DarkBlue} fontSz={16}>Create new password and we will send you
                further instructions to email</TextWrapper>
            <Button bgColor={colors.Blue} width={266} height={36} color={colors.Lavender}>Create new password</Button>
            {/*formik*/}
        </AuthCardWrapper>

    )
}
