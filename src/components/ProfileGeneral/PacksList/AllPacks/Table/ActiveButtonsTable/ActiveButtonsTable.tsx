import React, {useState} from 'react';
import styled from "styled-components";
import {DeletePackModal} from "../../../../../ModalWindow/DeletePackModal/DeletePackModal";
import {useNavigate} from "react-router-dom";
import {PATH} from "../../../../../../UtilsFunction/const-enum-path";
import { EditPackModal } from '../../../../../ModalWindow/EditPackModal/EditPackModal';
import {OnePacksType} from "../../../../../../Types/PacksTypes";

type ActiveButtonsTableType = {
    el: OnePacksType
    myId: string | null
}

export const ActiveButtonsTable = ({myId, el}: ActiveButtonsTableType) => {

    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
    const [showEditModal, setShowEditModal] = useState<boolean>(false);
    const navigate = useNavigate();

    const deletePackHandler = () => setShowDeleteModal(true);
    const editPackHandler = () => setShowEditModal(true);
    const onLearnClick = (id: string) => navigate(PATH.learnPack + `/:${id}`);

    return (
        <>
            {showDeleteModal
                ? <DeletePackModal id={el._id} setShow={setShowDeleteModal}/>
                : <></>
            }
            {showEditModal
                ? <EditPackModal el={el} setShow={setShowEditModal}/>
                : <></>
            }
            {myId === el.user_id
                ? <>
                    <DeleteTableButton onClick={deletePackHandler}>
                        Delete
                    </DeleteTableButton>
                    <TableButton onClick={editPackHandler}>
                        Edit
                    </TableButton>
                    <TableButton onClick={() => onLearnClick(el._id)}>
                        Learn
                    </TableButton>
                </>
                : <TableButton onClick={() => onLearnClick(el._id)}>
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