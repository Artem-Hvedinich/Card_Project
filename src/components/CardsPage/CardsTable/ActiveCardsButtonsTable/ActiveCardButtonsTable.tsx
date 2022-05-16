import React, {useState} from 'react';
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {DeleteCardModal} from "../../../ModalWindow/DeleteCardModal/DeleteCardModal";
import {OneCardType} from "../../../../Types/CardTypes";

type ActiveButtonsTableType = {
    el:  OneCardType
}

export const ActiveCardButtonsTable = ({el}: ActiveButtonsTableType) => {

    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
    const [showEditModal, setShowEditModal] = useState<boolean>(false);

    const deletePackHandler = () => setShowDeleteModal(true);
    const editPackHandler = () => setShowEditModal(true);

    return (
        <>
            {showDeleteModal
                ? <DeleteCardModal nameCard={el.question} id={el._id} setShow={setShowDeleteModal}/>
                : <></>
            }
            {/*{showEditModal*/}
            {/*    ? <EditCardModal el={el} setShow={setShowEditModal}/>*/}
            {/*    : <></>*/}
            {/*}*/}
            {/*{myId === el.user_id*/}
            {/*    ? <>*/}
                    <DeleteTableButton onClick={deletePackHandler}>
                        Delete
                    </DeleteTableButton>
                    <TableButton onClick={editPackHandler}>
                        Edit
                    </TableButton>
                    {/*{el.cardsCount === 0*/}
                    {/*    ? <>*/}
                    {/*        <TableButton disabled={true} onClick={() => onLearnClick(el._id)}>*/}
                    {/*            Learn*/}
                    {/*        </TableButton>*/}
                    {/*    </>*/}
                    {/*    : <TableButton onClick={() => onLearnClick(el._id)}>*/}
                    {/*        Learn*/}
                    {/*    </TableButton>*/}
                    {/*}*/}
                {/*</>*/}
                {/*: el.cardsCount === 0*/}
                {/*    ? <>*/}
                {/*        /!*<TableButton disabled={true} onClick={() => onLearnClick(el._id)}>*!/*/}
                {/*        <TableButton disabled={true} onClick={() => {}}>*/}
                {/*            Learn*/}
                {/*        </TableButton>*/}
                {/*    </>*/}
                {/*    // : <TableButton onClick={() => onLearnClick(el._id)}>*/}
                {/*    : <TableButton onClick={() => {}}>*/}
                {/*        Learn*/}
                {/*    </TableButton>*/}
            {/*}*/}
        </>
    );
};


const TableButton = styled.button`
  cursor: pointer;
  background-color: #D7D8EF;
  border: none;
  border-radius: 3px;
  padding: 7px 12px;
  margin-left: 13px;
  color: #21268F;
  font-size: 13px;
  font-weight: 700;
  text-align: center;

  &:disabled {
    opacity: .3;
    cursor: no-drop;
  }
`;
const DeleteTableButton = styled.button`
  border-radius: 3px;
  border: none;
  cursor: pointer;
  background-color: #F1453D;
  padding: 7px 12px;
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  text-align: center;
`;