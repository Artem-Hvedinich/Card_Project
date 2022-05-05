import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../../UtilsFunction/const-enum-path";
import {HeaderWrapper, TitleWrapper} from "../StylesComponents/Wrapper";
import IconPacks from "../../Assets/Group 608.png";
import IconProfile from "../../Assets/Union (Stroke).png";
import styled from "styled-components";
import {colors} from "../StylesComponents/Colors";
import {LogOutTC} from "../../Thunk's/Auth-Thunk";
import {Button} from "../StylesComponents/Button";
import {useDispatch} from "react-redux";
import {TypedDispatch} from "../../Store-Reducers/Store";


export const Header = () => {
    /*сделал ховер, но как активную кнопку так подкрасить в сталедкомп хоть убей не нашел , если знаешь доделай плиз*/
    const dispatch = useDispatch<TypedDispatch>();

    const onClickHandler = () => dispatch(LogOutTC());
    return (
        <HeaderWrapper>
            {/*Не знаю нужен ли редирект по клике на лого, на всякий случай сделал*/}
            <Title>It-incubator</Title>
            <BlockNavigate>
                <ItemBlockNavigate to={PATH.packsList}>
                    <ImgWrapper src={IconPacks} alt={"IconPacks"}/>
                    Packs list
                </ItemBlockNavigate>
                <ItemBlockNavigate to={PATH.profile}>
                    <ImgWrapper src={IconProfile} alt={"IconProfile"}/>
                    Profile
                </ItemBlockNavigate>
            </BlockNavigate>
            <ButtonWrapper>
                <Button bgColor={colors.DarkBlue} width={80} height={30} color={colors.Lavender}
                        onClick={onClickHandler}>LogOut</Button>
            </ButtonWrapper>
        </HeaderWrapper>
    )
};


const ImgWrapper = styled.img`
  margin-right: 15px;`

const Title = styled(TitleWrapper)`
  font-size: 26px;
  width: 10vw;
  display: flex;
  justify-content: start;`;

const BlockNavigate = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  height: 100%`;

const ItemBlockNavigate = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  font-family: SF UI Display;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: ${colors.TextColor};
  cursor: pointer;
  transition: 1s all;
  border-bottom: 3px solid ${colors.LightPurpure};

  &:hover {
    background-color: ${colors.ActiveNavlinkColor};
    border-bottom: 3px solid ${colors.LightBlue};
  }

  &:active {
      background-color: ${colors.ActiveNavlinkColor};
      border-bottom: 3px solid ${colors.LightBlue};
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 10vw;`
