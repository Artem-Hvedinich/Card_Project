import React from 'react';
import {CardWrapper, ErrorWrapper, FormWrapper, TextWrapper, TitleWrapper} from "../../StylesComponents/Wrapper";
import {colors} from "../../StylesComponents/Colors";
import {Button, Input} from "../../StylesComponents/Button";
import {useFormik} from "formik";
import {NavLink, useNavigate} from "react-router-dom";
import {PATH} from "../../../UtilsFunction/const-enum-path";
import {useTypedDispatch} from "../../../Store-Reducers/Store";
import {ForgetPasswordTC} from "../../../Thunk's/PasswordandEmailThunk";


export const ForgotPassword = () => {

    const navigate = useNavigate();
    const dispatch = useTypedDispatch();

    const ForgotPassword = useFormik({
        initialValues: {email: ""},
        validate: (values: { email: string }) => {
            const errors: { email?: string } = {};
            if (!values.email) {
                errors.email = "Field is required";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = "Invalid email address";
            }
            return errors;
        },
        onSubmit: (values) => {
            dispatch(ForgetPasswordTC(values.email, navigate))
            ForgotPassword.resetForm();
        },
    });
    return (
        <CardWrapper width={413} height={540}>
            <TitleWrapper fontSz={26}>It-incubator</TitleWrapper>
            <TitleWrapper fontSz={22}>Forgot your password?</TitleWrapper>
            {/*Formik*/}
            <FormWrapper height={200} onSubmit={ForgotPassword.handleSubmit}>

                <Input type="email"
                       id="email"
                       placeholder="email"
                       {...ForgotPassword.getFieldProps("email")}/>
                {/*Errors */}
                {ForgotPassword.touched.email && ForgotPassword.errors.email ? (
                    <ErrorWrapper>{ForgotPassword.errors.email}</ErrorWrapper>
                ) : null}

                <TextWrapper opacity={0.5} color={colors.DarkBlue} fontSz={16}>
                    Enter your email address and we will send you further instructions</TextWrapper>

                <Button type={'submit'}
                        disabled={!(ForgotPassword.isValid && ForgotPassword.dirty)}
                        bgColor={colors.Blue} width={266} height={36} color={colors.Lavender}>
                    Send Instructions</Button>

            </FormWrapper>
            {/*Formik*/}
            <TextWrapper textAlign='center' opacity={0.5} color={colors.DarkBlue} fontSz={16}>
                Did you remember your password?</TextWrapper>

            {/*redirect in login*/}
            <TitleWrapper fontSz={16} color={colors.Blue}>
                <NavLink to={PATH.login}>Try logging in</NavLink>
            </TitleWrapper>
        </CardWrapper>
    )
}
