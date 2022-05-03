import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../../UtilsFunction/const-enum-path";
import {HeaderWrapper, TitleWrapper} from "../StylesComponents/Wrapper";
import IconPacks from "../../Assets/Group 608.png";
import IconProfile from "../../Assets/Union (Stroke).png";
import styled from "styled-components";
import {colors} from "../StylesComponents/Colors";


export const Header = () => {
    /*сделал ховер, но как активную кнопку так подкрасить в сталедкомп хоть убей не нашел , если знаешь доделай плиз*/
    return (
        <HeaderWrapper>
            {/*Не знаю нужен ли редирект по клике на лого , на всякий случай сделал*/}
            <NavLink to={PATH.profile}><Text>It-incubator</Text></NavLink>
            <BlockNavigate>
                <ItemBlockNavigate>
                    <ImgWrapper src={IconPacks} alt={"IconPacks"}/>
                    Packs list
                </ItemBlockNavigate>
                <ItemBlockNavigate>
                    <ImgWrapper src={IconProfile} alt={"IconProfile"}/>
                    Profile
                </ItemBlockNavigate>
            </BlockNavigate>
        </HeaderWrapper>
    )
};


const ImgWrapper = styled.img`
  margin-right: 15px;`

const Text = styled(TitleWrapper)`
  position: absolute;
  font-size: 26px;
  top: 10px;
  left: 136px;
  cursor: pointer;`;

const BlockNavigate = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
  height: 100%`;

const ItemBlockNavigate = styled.a`
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
