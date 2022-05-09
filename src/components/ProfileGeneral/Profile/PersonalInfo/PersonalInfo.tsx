import React from 'react';
import {ButtonWrapper, ErrorWrapper,} from "../../../StylesComponents/AuthCardWrapper";
import styled from "styled-components";
import {colors} from "../../../StylesComponents/Colors";
import {useAppSelector, useTypedDispatch} from "../../../../Store-Reducers/Store";
import {useFormik} from "formik";
import {initialStateAuthorizationType} from "../../../../Store-Reducers/Auth-Reducer";
import {AddNewAva} from "./AddNewAva/AddNewAva";
import {Img} from '../Profile';
import {ButtonProfile, TextProfileWrapper, TitleProfileWrapper} from '../../../StylesComponents/ProfileAndPacksWrapper';
import {NewNameAndAvatarTC} from "../../../../Thunk's/UpdateProfile";

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
    const meAuth = useAppSelector<initialStateAuthorizationType>(s => s.AuthorizationReducer)

    const dispatch = useTypedDispatch();
    const handelClick = () => {
        setEditMode(false)
    }

    const PersonalInfo = useFormik({
        initialValues: {
            nickname: '',
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
            if (values.nickname)
            dispatch(NewNameAndAvatarTC(values.nickname))
            PersonalInfo.resetForm();
        },
    });
    return (
        <ModalWrapper active={active}>
            <CardInfoWrapper width={20} height={28}>
                <TitleProfileWrapper fontSz={1}>Personal Information</TitleProfileWrapper>
                <FormInfoWrapper height={20} onSubmit={PersonalInfo.handleSubmit}>
                    <div style={{height: '5vw', width: '5vw'}}>
                        <Img src={avatar} alt={'avatar'}/>
                        <AddNewAva id='avatar'/>
                    </div>
                    <InputBlockWrapper>
                        <TextProfileWrapper fontSz={.8} opacity={0.5}
                                            color={colors.DarkBlue}>Nickname</TextProfileWrapper>
                        <InputWrapper type="text"
                                      id="nickname"
                                      placeholder="nickname"
                                      {...PersonalInfo.getFieldProps("nickname")}/>
                        {/*Errors */}
                        {PersonalInfo.touched.nickname && PersonalInfo.errors.nickname ? (
                            <ErrorWrapper>{PersonalInfo.errors.nickname}</ErrorWrapper>) : null}
                        <TextProfileWrapper fontSz={.8} opacity={0.5} color={colors.DarkBlue}>
                            Registered Email
                        </TextProfileWrapper>
                        <InputWrapper type="email"
                                      id="email"
                                      placeholder="Registered email"
                                      {...PersonalInfo.getFieldProps("email")}/>
                        {/*Errors */}
                        {PersonalInfo.touched.email && PersonalInfo.errors.email ? (
                            <ErrorWrapper>{PersonalInfo.errors.email}</ErrorWrapper>) : null}
                    </InputBlockWrapper>
                    <ButtonWrapper>
                        <ButtonProfile width={7} height={2} bgColor={colors.AzureishWhite} color={colors.Blue}
                                       onClick={handelClick}>Cancel</ButtonProfile>
                        <ButtonProfile width={7} height={2} color={colors.Lavender} bgColor={colors.Blue}
                                       type={'submit'}>Save</ButtonProfile>
                    </ButtonWrapper>
                </FormInfoWrapper>
            </CardInfoWrapper>
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

export const CardInfoWrapper = styled.div<{ width: number, height: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2vw;
  justify-content: space-around;
  width: ${({width}) => width}vw;
  height: ${({height}) => height}vw;
  background: #F9F9FE;
  color: #2D2E46;
  border-radius: 0.5vw`;
const InputBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 10vw`
const InputWrapper = styled.input`
  width: 16vw;
  height: 1.5vw;
  background: none;
  font-size: 0.7vw;
  color: #2D2E46;
  border-width: 0;
  border-color: rgba(36, 37, 74, 0.5);
  border-style: solid;
  border-bottom-width: 0.1vw;
  outline: none;`
export const FormInfoWrapper = styled.form<{ height?: number }>`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: ${({height}) => height}vw`;