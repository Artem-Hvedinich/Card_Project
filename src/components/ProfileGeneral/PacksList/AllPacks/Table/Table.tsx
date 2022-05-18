import React, {useState} from 'react';
import s from "./Table.module.css";
import {OnePacksType} from "../../../../../Types/PacksTypes";
import {LoadingTable} from "../../../../Common/Loading/LoadingTable";
import {TableElemets} from "./TableElements/TableElemets";
import {PacksBlock} from '../../../../StylesComponents/CardsWrapper';
import styled from "styled-components";
import {setFilteredColumnAC} from "../../../../../Store-Reducers/Packs-Reducer";
import {useTypedDispatch} from "../../../../../Store-Reducers/Store";
import {getAllPacksTC} from "../../../../../Thunk's/PacksThunk";


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

    const [up, setUp] = useState<boolean>(false);
    const dispatch = useTypedDispatch();

    const onFilterColumnClick = () => {
        setUp(!up);
        dispatch(setFilteredColumnAC());
        dispatch(getAllPacksTC());
    }

    return (
        <PacksBlock>
            <div className={s.table}>
                <div className={s.item_columns}>
                    <div className={s.item_col_bg}>
                        {TableList.map(el => (
                            <span key={el.id} className={s.name_column_one}>
                                {el.name}
                                {el.name === 'Last Updated' && <Span up={up} onClick={onFilterColumnClick} />}
                            </span>
                            ))
                        }
                    </div>
                </div>
                {isFetching
                    ? <LoadingTable/>
                    : itemPack.map(el => <TableElemets key={el._id} el={el}/>)
                }
            </div>
        </PacksBlock>
    );
};


const Span = styled.span<{ up?: boolean }>`
  &:after {
    content: '';
    border: solid #242524;
    border-width: 0 0.2vw 0.2vw 0;
    display: inline-block;
    padding: 0.3vw;
    margin-left: 10px;
    transform: rotate(${({up}) => up ? 225 : 45}deg);
    cursor: pointer;
    transition: 1s all;
  }
`;

const SpanDisabled = styled.span<{ up?: boolean }>`
  &:after {
    content: '';
    opacity: 0.3;
    border: solid #242524;
    border-width: 0 0.2vw 0.2vw 0;
    display: inline-block;
    padding: 0.3vw;
    margin-left: 10px;
    transform: rotate(${({up}) => up ? 225 : 45}deg);
    cursor: no-drop;
    transition: 1s all;
  }
`;

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
