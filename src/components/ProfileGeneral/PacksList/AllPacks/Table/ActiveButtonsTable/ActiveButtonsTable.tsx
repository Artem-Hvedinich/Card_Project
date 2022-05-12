import React, {useState} from 'react';
import styled from "styled-components";
import {DeletePackModal} from "../../../../../ModalWindow/DeletePackModal/DeletePackModal";
import {useAppSelector} from "../../../../../../Store-Reducers/Store";
import {initialStateAuthorizationType} from "../../../../../../Store-Reducers/Auth-Reducer";

type ActiveButtonsTableType = {
    userId: string
    id: string
    onEditClick: (id: string) => void
    onLearnClick: (id: string) => void
}

export const ActiveButtonsTable = ({onEditClick, onLearnClick, id, userId}: ActiveButtonsTableType) => {

    const {_id} = useAppSelector<initialStateAuthorizationType>(state => state.AuthorizationReducer);
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

    const deletePackHandler = (id: string) => setShowDeleteModal(true);

    return (
        <>
            {showDeleteModal
                ? <DeletePackModal id={id} setShow={setShowDeleteModal}/>
                : <></>
            }
            {_id === userId
                ? <>
                    <DeleteTableButton onClick={(e) => deletePackHandler(id)}>
                        Delete
                    </DeleteTableButton>
                    <TableButton onClick={(e) => onEditClick(id)}>
                        Edit
                    </TableButton>
                    <TableButton onClick={(e) => onLearnClick(id)}>
                        Learn
                    </TableButton>
                </>
                : <TableButton onClick={(e) => onLearnClick(id)}>
                    Learn
                </TableButton>
            }

        </>
    );
};


const TableButton = styled.div`
  cursor: pointer;
  background-color: #D7D8EF;
  padding: 5px 10px;
  margin-left: 13px;
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