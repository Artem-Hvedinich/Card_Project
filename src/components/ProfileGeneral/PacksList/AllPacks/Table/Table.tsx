import React, {useState} from 'react';
import s from "./Table.module.css";
import {OnePacksType} from "../../../../../Types/PacksTypes";
import {LoadingTable} from "../../../../Common/Loading/LoadingTable";
import {TableElemets} from "./TableElements/TableElemets";
import {PacksBlock} from '../../../../StylesComponents/CardsWrapper';
import {setFilteredColumnAC} from "../../../../../Store-Reducers/Packs-Reducer";
import {useTypedDispatch} from "../../../../../Store-Reducers/Store";
import {getAllPacksTC} from "../../../../../Thunk's/PacksThunk";
import styled from "styled-components";

type CardTableType = {
    itemPack: OnePacksType[]
    isFetching: boolean
};

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
                        <span className={s.name_column_one}>Name</span>
                        <span className={s.name_column_one}>Cards</span>
                        <Span up={up} className={s.name_column_one} onClick={onFilterColumnClick}>Last Updated</Span>
                        <span className={s.name_column_one}>Created by</span>
                        <span className={s.name_column_one}>Actions</span>
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