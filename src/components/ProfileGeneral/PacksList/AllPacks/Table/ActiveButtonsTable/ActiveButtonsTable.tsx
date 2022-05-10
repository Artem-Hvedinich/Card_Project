import React from 'react';
import styled from "styled-components";
import {PacksType} from "../../../../../../Types/PacksTypes";

type ActiveButtonsTableType = {
    id: string
    onEditClick: (id: string) => void
    onDeleteClick: (id: string) => void
    onLearnClick: (id: string) => void
}

export const ActiveButtonsTable = ({onEditClick, onLearnClick, onDeleteClick, id}:ActiveButtonsTableType) => {

    return (
        <>
            <DeleteTableButton onClick={(e) => onDeleteClick(id)}>
                Delete
            </DeleteTableButton>
            <TableButton onClick={(e) => onEditClick(id)}>
                Edit
            </TableButton>
            <TableButton onClick={(e) => onLearnClick(id)}>
                Learn
            </TableButton>
        </>
    );
};



const TableButton = styled.div`
  cursor: pointer;
  background-color: #D7D8EF;
  padding: 5px 10px;
  color: #21268F;
  font-size: 13px;
  font-weight: 700;
  text-align: center;
`;
const DeleteTableButton = styled.div`
  border: none;
  cursor: pointer;
  background-color: #F1453D;
  padding: 5px 10px;
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  text-align: center;
`;