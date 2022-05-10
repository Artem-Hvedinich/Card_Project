import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../../UtilsFunction/const-enum-path";
import {TitleAuthWrapper} from "../StylesComponents/AuthCardWrapper";
import IconPacks from "../../Assets/Group 608.png";
import IconProfile from "../../Assets/Union (Stroke).png";
import styled from "styled-components";
import {colors} from "../StylesComponents/Colors";
import {LogOutTC} from "../../Thunk's/Auth-Thunk";
import {useDispatch} from "react-redux";
import {TypedDispatch} from "../../Store-Reducers/Store";
import {ButtonProfile} from "../StylesComponents/ProfileAndPacksWrapper";


export const Header = () => {

    const dispatch = useDispatch<TypedDispatch>();

    const onClickHandler = () => dispatch(LogOutTC());
    return (
        <HeaderWrapper>
            <Title>It-incubator</Title>
            <BlockNavigate>
                <ItemBlockNavigate to={PATH.packsList}>
                    <ImgPacksWrapper src={IconPacks} alt={"IconPacks"}/>
                    Packs list
                </ItemBlockNavigate>
                <ItemBlockNavigate to={PATH.profile}>
                    <ImgProfileWrapper src={IconProfile} alt={"IconProfile"}/>
                    Profile
                </ItemBlockNavigate>
            </BlockNavigate>
            <ButtonWrapper>
                <ButtonProfile bgColor={colors.DarkBlue} width={4} height={1.5} color={colors.Lavender}
                               onClick={onClickHandler}>LogOut</ButtonProfile>
            </ButtonWrapper>
        </HeaderWrapper>
    )
};

export const HeaderWrapper = styled.div`
  display: flex;
  z-index: 100;
  justify-content: space-between;
  padding: 0 10vw;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 3vw;
  background-color: ${colors.LightPurpure};`;

const ImgPacksWrapper = styled.img`
  width: 1.5vw;
  margin-right: 1vw;`
const ImgProfileWrapper = styled.img`
  width: 1vw;
  margin-right: 1vw;`

const Title = styled(TitleAuthWrapper)`
  font-size: 1vw;
  width: 10vw;
  display: flex;
  justify-content: start;`;

const BlockNavigate = styled.div`
  display: flex;
  align-items: center;
  width: 20vw;
  height: 100%`;

const ItemBlockNavigate = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  font-family: SF UI Display, serif;
  font-size: 0.8vw;
  letter-spacing: 0.04vw;
  color: ${colors.TextColor};
  cursor: pointer;
  transition: 1s background-color, 1s border-bottom-color;
  border-bottom: 0.15vw solid ${colors.LightPurpure};

  &:hover {
    background-color: ${colors.ActiveNavlinkColor};
    border-bottom: 0.15vw solid ${colors.LightBlue};
  }

  &:active {
    background-color: ${colors.ActiveNavlinkColor};
    border-bottom: 0.15vw solid ${colors.LightBlue};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 10vw;`
