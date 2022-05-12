import React from 'react';
import s from "./Table.module.css";
import {OnePacksType} from "../../../../../Types/PacksTypes";
import styled from "styled-components";
import {ActiveButtonsTable} from "./ActiveButtonsTable/ActiveButtonsTable";
import {LoadingTable} from "../../../../Common/Loading/LoadingTable";
import {Input} from "../../../../Common/Input/Input";
import {TableElemets} from "./TableElements/TableElemets";

type CardTableType = {
    showEditModal: string
    setShowEditModal: (id: string) => void
    onEditClick: (id: string) => void
    onLearnClick: (id: string) => void
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

export const CardTable = ({itemPack, isFetching, onEditClick, onLearnClick, showEditModal, setShowEditModal}: CardTableType) => {

    return (
        <PacksBlock>
            {isFetching
                ? <LoadingTable/>
                : <div className={s.table}>
                    <div className={s.item_columns}>
                        <div className={s.item}>
                            {TableList.map(el => <span className={s.name_column_one} key={el.id}>{el.name}</span>)}
                        </div>
                    </div>
                    {itemPack.map(el => <TableElemets el={el}
                                                      setShowEditModal={setShowEditModal}
                                                      onLearnClick={onLearnClick}
                                                      onEditClick={onEditClick}
                                                      showEditModal={showEditModal}
                    />)}
                </div>
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
