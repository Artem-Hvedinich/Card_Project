import React from 'react';
import {NotAuthRedirect} from "../../UtilsFunction/RedirectFunction";
import {useDispatch} from "react-redux";
import {TypedDispatch} from "../../Store-Reducers/Store";
import {LogOutTC} from "../../Thunk's/Auth-Thunk";
import {ProfileWrapper} from "../StylesComponents/Wrapper";
import {Header} from "../Header/Header";
import styled from "styled-components";
import {colors} from "../StylesComponents/Colors";

type ProfileType = {}

export const Profile = NotAuthRedirect(({}: ProfileType) => {

    const dispatch = useDispatch<TypedDispatch>();

    const onClickHandler = () => dispatch(LogOutTC());

    return (
        <>
            <Header/>
            <ProfileWrapper>
                <ToolsBlock>
                    <PersonBlock>

                    </PersonBlock>
                </ToolsBlock>
                <button onClick={onClickHandler}>LogOut</button>
            </ProfileWrapper>
        </>
    )
});

const PersonBlock = styled.div`
  height: 35%;
  width: 100%;
  margin: 0;
  border-radius: 8px 0 8px 8px;
  z-index: 5;
  background-color: ${colors.LightPink};
`;

const ToolsBlock = styled.div`
  z-index: 2;
  margin: 0;
  height: 100%;
  width: 20%;
  border-radius: 8px 8px 0 8px;
  background-color: ${colors.ToolsBackground};
`;


