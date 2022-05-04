import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../../UtilsFunction/const-enum-path";
import {HeaderWrapper, TitleWrapper} from "../StylesComponents/Wrapper";
import IconPacks from "../../Assets/Group 608.png";
import IconProfile from "../../Assets/Union (Stroke).png";
import styled from "styled-components";
import {colors} from "../StylesComponents/Colors";
import {TypeIdPage} from "../ProfileGeneral/ProfileGeneral";

type HeaderType = {
    page: TypeIdPage
    setPage: (id: TypeIdPage) => void
}

export const Header = ({setPage, page}: HeaderType) => {

    const itemList = [
        {logo: IconPacks, name: 'Packs list', id: 1 as TypeIdPage},
        {logo: IconProfile, name: 'Profile', id: 2 as TypeIdPage},
    ];

    const PageList = itemList.map( el =>
        <ItemBlockNavigate key={el.id} onClick={() => setPage(el.id)}>
            <ImgWrapper src={el.logo} alt={el.logo}/>
            {el.name}
        </ItemBlockNavigate>
    );

    return (
        <HeaderWrapper>
            <NavLink to={PATH.profile}><Text>It-incubator</Text></NavLink>
            <BlockNavigate>
                {PageList}
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

const ItemBlockNavigate = styled.div`
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
