import React from 'react';
import {Space} from 'antd';
import styled from "styled-components";
import {PacksType} from "../../../../../../Types/PacksTypes";

type ActiveButtonsTableType = {
    record: PacksType
    onEditClick: (id: string) => void
    onDeleteClick: (id: string) => void
    onLearnClick: (id: string) => void
}

export const ActiveButtonsTable = ({onEditClick, onLearnClick, onDeleteClick, record}:ActiveButtonsTableType) => {

    return (
        <Space size="middle">
            <DeleteTableButton onClick={(e) => onDeleteClick(record.key)}>
                Delete
            </DeleteTableButton>
            <TableButton onClick={(e) => onEditClick(record.key)}>
                Edit
            </TableButton>
            <TableButton onClick={(e) => onLearnClick(record.key)}>
                Learn
            </TableButton>
        </Space>
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