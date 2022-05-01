import React from 'react';
import {Button, Input} from '../../StylesComponents/Button';
import {colors} from '../../StylesComponents/Colors';
import {AuthCardWrapper, TextWrapper, TitleWrapper} from "../../StylesComponents/Wrapper";
import {IsLoginRedirect} from "../../../UtilsFunction/RedirectFunction";
import {useFormik} from "formik";
import {useTypedDispatch} from "../../../Store-Reducers/Store";
import {LoginTC} from "../../../Thunk's/Auth-Thunk";

type FormikErrorType = {
    email?: string;
    password?: string;
    rememberMe?: boolean
};

export const Login = IsLoginRedirect(() => {

    const dispatch = useTypedDispatch();

    const registrationForm = useFormik({
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
            dispatch(LoginTC(values));
            registrationForm.resetForm();
        },
    });

    return (
        <div>
            <AuthCardWrapper width={413} height={600}>
                <TitleWrapper fontSz={26}>Sign In</TitleWrapper>
                <TitleWrapper fontSz={15}>It-incubator</TitleWrapper>

                {/*formik*/}


                <form onSubmit={registrationForm.handleSubmit}>
                    <p>
                        <TextWrapper fontSz={13} opacity={0.5} color={colors.DarkBlue}>Email</TextWrapper>
                        <Input type="email"
                               id="email"
                               placeholder="email"
                               {...registrationForm.getFieldProps("email")}/>
                        {/*Errors */}
                        {registrationForm.touched.email && registrationForm.errors.email ? (
                            <div
                                style={{color: "red", fontSize: "1.2rem"}}>{registrationForm.errors.email}</div>
                        ) : null}
                        {/*End errors*/}
                    </p>
                    <p>
                        <TextWrapper fontSz={13} opacity={0.5} color={colors.DarkBlue}>Password</TextWrapper>
                        <Input type="password"
                               id="password"
                               placeholder="password"
                               {...registrationForm.getFieldProps("password")}/>

                            {registrationForm.touched.password && registrationForm.errors.password ? (
                                <div style={{color: "red", fontSize: "1.2rem"
                                }}>{registrationForm.errors.password}</div>
                            ) : null}
                    </p>
                    <p>
                        <input
                            type="checkbox"
                            id="remember"
                            {...registrationForm.getFieldProps("rememberMe")}
                        />
                        <label htmlFor="remember" >
                            Remember me
                        </label>

                        <button
                            type="submit"
                            name="submit"
                            value="Submit"
                            disabled={!(registrationForm.isValid && registrationForm.dirty)}
                        >
                            Submit
                        </button>
                    </p>
                </form>

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
});
