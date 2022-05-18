import React from 'react';
import s from "./Table.module.css";
import {OnePacksType} from "../../../../../Types/PacksTypes";
import {LoadingTable} from "../../../../Common/Loading/LoadingTable";
import {TableElemets} from "./TableElements/TableElemets";
import {PacksBlock} from '../../../../StylesComponents/CardsWrapper';
import styled from "styled-components";

type CardTableType = {
    itemPack: OnePacksType[]
    isFetching: boolean
};
const TableList = [
    {id: 1, name: "Name"},
    {id: 2, name: "Cards"},
    {id: 3, name: "Last Updated"},
    {id: 4, name: "Created by"},
    {id: 5, name: "Actions"},
];

export const CardTable = ({itemPack, isFetching}: CardTableType) => {
    return (
        <PacksBlock>
            {isFetching
                ? <LoadingTable/>
                : <Table>
                    <ItemColumn>
                        <ItemBg>
                            {TableList.map(el => <OneColumn key={el.id}
                                                            onClick={() => {
                                                            }}
                            >{el.name}</OneColumn>)}
                        </ItemBg>
                    </ItemColumn>
                    {itemPack.map(el => <TableElemets key={el._id} el={el}/>)}
                </Table>
            }
        </PacksBlock>
    );
};

const Table = styled.div`
  height: auto;`

const ItemColumn = styled.div`
  width: 100%;
  height: 2vw;
  background-color: #ECECF9;
  font-size: 1vw;
  font-weight: 600;
  display: flex;
  align-items: center;`

const ItemBg = styled.div`
  display: flex;
  align-items: center;
  width: 100%;`

const OneColumn = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 1.2vw;
  width: 100%;

  :nth-child(1) {
    min-width: 25%;
    justify-content: start;
  }

  :nth-child(2) {
    max-width: 13%;
  }

  :nth-child(3) {
    max-width: 16%;
  }

  :nth-child(4) {
    min-width: 20%;
  }

  :nth-child(5) {
    min-width: 20%;
  }`
