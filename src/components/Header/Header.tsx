import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../../UtilsFunction/const-enum-path";
import {HeaderWrapper} from "../StylesComponents/Wrapper";
import IconPacks from "../../Assets/Group 608.png";
import IconProfile from "../../Assets/Union (Stroke).png";
import styled from "styled-components";
import {colors} from "../StylesComponents/Colors";


export const Header = () => {
/*сделал ховер, но как активную кнопку так подкрасить в сталедкомп хоть убей не нашел , если знаешь доделай плиз*/
    return (
        <HeaderWrapper>
            {/*Не знаю нужен ли редирект по клике на лого , на всякий случай сделал*/}
            <NavLink to={PATH.error}><Text>It-incubator</Text></NavLink>
            <BlockNavigate>
                <ItemBlockNavigate>
                    <BlockIconPacks src={IconPacks} alt={"IconPacks"}/>
                    Packs list
                </ItemBlockNavigate>
                <ItemBlockNavigate>
                    <BlockIconProfile src={IconProfile} alt={"IconProfile"}/>
                    Profile
                </ItemBlockNavigate>
            </BlockNavigate>
        </HeaderWrapper>
    )
};



const BlockIconProfile = styled.img`
  margin-right: 19px;
  height: 16.500001907348633px;
  width: 15.5px;
  left: 227px;
  top: 21px;
  border-radius: 0px;

`;
const BlockIconPacks = styled.img`
  margin-right: 9px;
  height: 36px;
  width: 36px;
  left: 34px;
  top: 12px;
  border-radius: 0px;

`;
const Text = styled.a`
  position: absolute;
  top: 10px;
  left: 136px;
  width: 163px;
  height: 39px;
  margin: 0 0;
  font-family: Poppins;
  font-weight: 600;
  font-size: 26px;
  line-height: 39px;
  cursor: pointer;
`;
const BlockNavigate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 60px;
`;
const ItemBlockNavigate = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  font-family: SF UI Display;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.4px;
  text-align: center;
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
