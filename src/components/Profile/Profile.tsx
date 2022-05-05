import React, {useState} from 'react';
import {NotAuthRedirect} from "../../UtilsFunction/RedirectFunction";
import {useDispatch} from "react-redux";
import {TypedDispatch, useAppSelector} from "../../Store-Reducers/Store";
import {LogOutTC} from "../../Thunk's/Auth-Thunk";
import {ProfileWrapper, TextWrapper, TitleWrapper} from "../StylesComponents/Wrapper";
import styled from "styled-components";
import {colors} from "../StylesComponents/Colors";
import {Button} from '../StylesComponents/Button';
import {PersonalInfo} from "./PersonalInfo/PersonalInfo";
import {initialStateAuthorizationType} from "../../Store-Reducers/Auth-Reducer";

type ProfileType = {}

export const Profile = NotAuthRedirect(({}: ProfileType) => {
    const meAuth = useAppSelector<initialStateAuthorizationType>(s => s.AuthorizationReducer)
    const dispatch = useDispatch<TypedDispatch>();
    const [editMode, setEditMode] = useState<boolean>(false)

    const onClickHandler = () => dispatch(LogOutTC());
    const avatar = meAuth.avatar ? meAuth.avatar : 'https://static.thenounproject.com/png/801390-200.png'
    return (
        <>
            <ProfileWrapper>
                <ToolsBlock>
                    <PersonBlock>
                        <Img src={avatar} alt={'avatar'}/>
                        <TitleWrapper>{meAuth.name}</TitleWrapper>
                        <TextWrapper fontSz={14} opacity={0.5} color={colors.TextColor} textAlign={'center'}>Front-end
                            developer</TextWrapper>
                        <EditButton onClick={() => setEditMode(true)}>Edit Profile</EditButton>
                        {editMode && <PersonalInfo active={editMode} avatar={avatar} setEditMode={setEditMode}/>}
                    </PersonBlock>

                </ToolsBlock>
                <Button bgColor={colors.DarkBlue} width={60} height={20} color={colors.Lavender}
                        onClick={onClickHandler}>LogOut</Button>
            </ProfileWrapper>
        </>
    )
});

const PersonBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 200px;
  width: 100%;
  border-radius: 8px 0 8px 8px;
  z-index: 5;
  background-color: ${colors.LightPink};`
const ToolsBlock = styled.div`
  z-index: 2;
  height: 100%;
  width: 200px;
  border-radius: 8px 8px 0 8px;
  background-color: ${colors.ToolsBackground};`
export const Img = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background-color: ${colors.Lavender};`
const EditButton = styled.button`
  border: 1px solid ${colors.InputColor};
  color: ${colors.Blue};
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 2px;
  cursor: pointer`


