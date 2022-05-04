import React from 'react';
import {Button, Input} from '../../StylesComponents/Button';
import {colors} from '../../StylesComponents/Colors';
import {
    CardWrapper, ErrorWrapper,
    FormWrapper,
    RememberMeWrapper,
    TextWrapper,
    TitleWrapper
} from "../../StylesComponents/Wrapper";
import {IsLoginRedirect} from "../../../UtilsFunction/RedirectFunction";
import {useFormik} from "formik";
import {useTypedDispatch} from "../../../Store-Reducers/Store";
import {LoginTC} from "../../../Thunk's/Auth-Thunk";
import {NavLink} from 'react-router-dom';
import {PATH} from "../../../UtilsFunction/const-enum-path";

type FormikErrorType = {
    email?: string;
    password?: string;
    rememberMe?: boolean
};

export const Login = IsLoginRedirect(() => {

    const dispatch = useTypedDispatch();

    const loginForm = useFormik({
        initialValues: {email: "", password: "", rememberMe: false, captcha: true},
        validate: (values: FormikErrorType) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = "Field is required";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = "Invalid email address";
            }
            if (!values.password) {
                errors.password = "Password is required";
            } else if (values.password.length < 4) {
                errors.password = "Invalid password";
            }
            return errors;
        },
        onSubmit: (values) => {
            dispatch(LoginTC(values))
            loginForm.resetForm();
        },
    });

    return (
        <CardWrapper width={413} height={600}>
            <TitleWrapper fontSz={26}>Sign In</TitleWrapper>
            <TitleWrapper fontSz={15}>It-incubator</TitleWrapper>

            {/*formik*/}
            <FormWrapper height={300} onSubmit={loginForm.handleSubmit}>
                <TextWrapper fontSz={13} opacity={0.5} color={colors.DarkBlue}>Email</TextWrapper>
                <Input type="email"
                       id="email"
                       placeholder="email"
                       {...loginForm.getFieldProps("email")}/>
                {/*Errors */}
                {loginForm.touched.email && loginForm.errors.email ? (
                    <ErrorWrapper>{loginForm.errors.email}</ErrorWrapper>
                ) : null}
                {/*End errors*/}
                <TextWrapper fontSz={13} opacity={0.5} color={colors.DarkBlue}>Password</TextWrapper>
                <Input type="password"
                       id="password"
                       placeholder="password"
                       {...loginForm.getFieldProps("password")}/>

                {loginForm.touched.password && loginForm.errors.password ? (
                    <ErrorWrapper>{loginForm.errors.password}</ErrorWrapper>
                ) : null}
                <RememberMeWrapper>
                    <input
                        type="checkbox"
                        id="remember"
                        {...loginForm.getFieldProps("rememberMe")}
                    />
                    <TextWrapper fontSz={13} opacity={1} color={colors.DarkBlue}> Remember me</TextWrapper>
                </RememberMeWrapper>


                {/*redirect in Forgot Password */}
                <TextWrapper textAlign={'end'} color={colors.DarkBlue} fontSz={14}>
                    <NavLink to={PATH.forgotPassword}>Forgot Password</NavLink>
                </TextWrapper>

                <Button type="submit"
                        disabled={!(loginForm.isValid && loginForm.dirty)}
                        height={36} width={266} bgColor={colors.DarkBlue}
                        color={colors.Lavender}>Login</Button>
                {/*formik*/}
            </FormWrapper>

            {/*redirect in Registration*/}
            <TextWrapper color={colors.DarkBlue} textAlign={'center'} fontSz={14} opacity={0.5}>
                <NavLink to={PATH.registration}>Don’t have an account?</NavLink>
            </TextWrapper>

        </CardWrapper>
    )
});
