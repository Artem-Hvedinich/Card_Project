import React, {useState} from 'react';
import styled from "styled-components";
import {DeletePackModal} from "../../../../../ModalWindow/DeletePackModal/DeletePackModal";
import {useNavigate} from "react-router-dom";
import {PATH} from "../../../../../../UtilsFunction/const-enum-path";

type ActiveButtonsTableType = {
    myId: string | null
    userId: string
    id: string
    onEditClick: (id: string) => void
}

export const ActiveButtonsTable = ({myId, onEditClick, id, userId}: ActiveButtonsTableType) => {

    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
    const navigate = useNavigate();

    const deletePackHandler = () => setShowDeleteModal(true);
    const onLearnClick = (id: string) => navigate(PATH.learnPack + `/:${id}`);

    return (
        <>
            {showDeleteModal
                ? <DeletePackModal id={id} setShow={setShowDeleteModal}/>
                : <></>
            }
            {myId === userId
                ? <>
                    <DeleteTableButton onClick={deletePackHandler}>
                        Delete
                    </DeleteTableButton>
                    <TableButton onClick={() => onEditClick(id)}>
                        Edit
                    </TableButton>
                    <TableButton onClick={() => onLearnClick(id)}>
                        Learn
                    </TableButton>
                </>
                : <TableButton onClick={() => onLearnClick(id)}>
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