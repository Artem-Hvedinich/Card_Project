import React from 'react';
import {
    ButtonWrapper,
    CardWrapper,
    ErrorWrapper,
    FormWrapper,
    TextAuthWrapper,
    TitleAuthWrapper
} from "../../../StylesComponents/AuthCardWrapper";
import styled from "styled-components";
import {Button, Input} from "../../../StylesComponents/Button";
import {colors} from "../../../StylesComponents/Colors";
import {useAppSelector, useTypedDispatch} from "../../../../Store-Reducers/Store";
import {useFormik} from "formik";
import {initialStateAuthorizationType} from "../../../../Store-Reducers/Auth-Reducer";
import {AddNewAva} from "./AddNewAva/AddNewAva";
import {NewNameAndAvatarTC} from '../../../../Thunk\'s/UpdateProfile';
import {Img} from '../Profile';

type PersonalInfoType = {
    setEditMode: (editMode: boolean) => void,
    avatar: string
    active: boolean
}
type PersonalInfoFormikType = {
    avatar?: string
    nickname?: string
    email?: string
}
export const PersonalInfo = ({setEditMode, avatar, active}: PersonalInfoType) => {

    const MaxLengthInput = 50;

    const meAuth = useAppSelector<initialStateAuthorizationType>(s => s.AuthorizationReducer);
    const dispatch = useTypedDispatch();

    const handelClick = () => {
        setEditMode(false)
    }

    const PersonalInfo = useFormik({
        initialValues: {
            avatar: avatar,
            nickname: meAuth.name ? meAuth.name : '',
            email: meAuth.email ? meAuth.email : ''
        },
        validate: (values: PersonalInfoFormikType) => {
            const errors: PersonalInfoFormikType = {};
            if (!values.email) {
                errors.email = "Field is required";
            } else if (values.email !== meAuth.email) {
                errors.email = "Enter the email that was during the registration ";
            }
            return errors;
        },
        onSubmit: (values) => {
            console.log(values.nickname)
            dispatch(NewNameAndAvatarTC(values.nickname))
            PersonalInfo.resetForm();
        },
    });
    return (
        <ModalWrapper active={active}>
            <CardWrapper width={413} height={540}>
                <TitleAuthWrapper fontSz={22}>Personal Information</TitleAuthWrapper>
                <FormWrapper height={400} onSubmit={PersonalInfo.handleSubmit}>
                    <Img src={avatar} alt={'avatar'}/>

                    <AddNewAva id='avatar'/>


                    <InputWrapper>
                        <div>
                            <TextAuthWrapper fontSz={13} opacity={0.5}
                                             color={colors.DarkBlue}>Nickname</TextAuthWrapper>
                            <Input type="text"
                                   id="nickname"
                                   placeholder="nickname"
                                   maxLength={MaxLengthInput}
                                   {...PersonalInfo.getFieldProps("nickname")}/>
                            {/*Errors */}
                            {PersonalInfo.touched.nickname && PersonalInfo.errors.nickname ? (
                                <ErrorWrapper>{PersonalInfo.errors.nickname}</ErrorWrapper>) : null}
                        </div>
                        <div>
                            <TextAuthWrapper fontSz={13} opacity={0.5} color={colors.DarkBlue}>
                                Registered Email
                            </TextAuthWrapper>
                            <Input type="email"
                                   id="email"
                                   placeholder="Registered email"
                                   maxLength={MaxLengthInput}
                                   {...PersonalInfo.getFieldProps("email")}/>
                        </div>
                        {/*Errors */}
                        {PersonalInfo.touched.email && PersonalInfo.errors.email ? (
                            <ErrorWrapper>{PersonalInfo.errors.email}</ErrorWrapper>) : null}
                    </InputWrapper>
                    <ButtonWrapper>
                        <Button width={124} height={36} bgColor={colors.AzureishWhite} color={colors.Blue}
                                onClick={handelClick}>Cancel</Button>
                        <Button width={127} height={36} color={colors.Lavender} bgColor={colors.Blue}
                                type={'submit'}>Save</Button>
                    </ButtonWrapper>
                </FormWrapper>
            </CardWrapper>
        </ModalWrapper>
    )
}

const ModalWrapper = styled.div<{ active: boolean }>`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(#E6D4DE, #5c6193);`
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 200px`

