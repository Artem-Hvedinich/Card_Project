import React from 'react';
import {OnePacksType} from "../../../../../Types/CardsTypes";
import styled from "styled-components";

const TableList = [
    {id: 1, name: 'Name'},
    {id: 2, name: 'Cards'},
    {id: 3, name: 'Last Updated'},
    {id: 4, name: 'Created by'},
    {id: 5, name: 'Actions'},
];

type CardTableType = {
    itemPack: OnePacksType[]
}

export const CardTable = ({itemPack}: CardTableType) => {
    return (
        <PacksBlock>
            <TitleBlock>
                {TableList.map(el => <Title key={el.id}>{el.name}</Title>)}
            </TitleBlock>
            {itemPack.map(el =>
                <PacksInfoBlock key={el._id}>
                    <PacksInfoText>{el.name}</PacksInfoText>
                    <PacksInfoText>{el.cardsCount}</PacksInfoText>
                    <PacksInfoText>{el.updated}</PacksInfoText>
                    <PacksInfoText>{el.created}</PacksInfoText>
                </PacksInfoBlock>)
            }
        </PacksBlock>
    );
};

const PacksBlock = styled.div`
  height: auto;
  overflow: hidden;
  min-height: 70%;
  max-height: 70%;
  width: 100%;
  margin-top: 2vw;
  box-shadow: -0.1vw -0.1vw 0.5vw #cbcbcb,
  0.1vw 0.1vw 0.5vw 0.1vw #cbcbcb;`
const TitleBlock = styled.div`
  width: 100%;
  background-color: #ECECF9;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 100px`
const Title = styled.span`
  font-size: 0.8vw;
  font-weight: 600;
  padding: 0.5vw 1vw;`
const PacksInfoBlock = styled.div`
  display: flex;
  align-items: center;
  background-color: #F8F7FD;
  width: 100%;
  height: 2.5vw;

  :nth-child(2n) {
    background-color: #FFFFFF;
  }`
const PacksInfoText = styled.span`
  font-size: 0.8vw;
  padding: 0.5vw 1vw;
  :nth-child(1) {
    width: 20%;
  }
  :nth-child(2) {
  width: 13%;
  }
  :nth-child(3) {
  width: 22%;
  }
  :nth-child(4) {
  width: 20%;
  }
`;